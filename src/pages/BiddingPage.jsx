import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAuctionById } from "../redux/slices/AuctionSlice";
import { fetchBids, placeBid } from "../redux/slices/BiddingSlice";
import BiddingPagePresentation from "./BiddingPagePresentation";
import { toast } from "react-toastify";

const BiddingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth?.data);
  const userId = authData?._id;
  const auction = useSelector((state) => state.auction.auctions);

  const [bidAmount, setBidAmount] = useState("");

  const isAuctionFull = auction?.slotsFilled >= auction?.maxSlots;
  const hasAlreadyBid = auction?.bids?.some(
    (bid) => bid.userId === userId || bid.userId?._id === userId
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(fetchAuctionById(id));
      dispatch(fetchBids(id));
    }
  }, [dispatch, id]);

  const handlePayment = async () => {
    if (!bidAmount || bidAmount <= 0) {
      return toast.error("Please enter a valid bid amount");
    }
    if (hasAlreadyBid) {
      return toast.error("You have already placed a bid in this auction.");
    }

    try {
      const res = await fetch("https://ultaauctionbackend.onrender.com/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: bidAmount,
          currency: "INR",
          receipt: `b_${id.slice(-3)}${userId.slice(-3)}`,
        }),
      });

      const data = await res.json();
      if (!data.success) return toast.error("Order creation failed");

      const { id: order_id, amount, currency } = data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount,
        currency,
        name: "UltaAuction",
        description: "Auction Bid Payment",
        order_id,
        handler: async function (response) {
          const verifyRes = await fetch("https://ultaauctionbackend.onrender.com/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            toast.success("✅ Payment verified!");

            const paymentToken = verifyData.token;
            try {
              await dispatch(
                placeBid({ auctionId: id, userId, bidAmount, paymentToken })
              ).unwrap();
              toast.success("Bid placed successfully!");
              setBidAmount("");
              await dispatch(fetchAuctionById(id));
              navigate(0);
            } catch (err) {
              toast.error(err || "Payment succeeded but bid failed");
            }
          } else {
            toast.error("Payment verification failed.");
          }
        },
        prefill: {
          name: authData?.name || "Bidder",
          email: authData?.email || "bidder@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error("Payment initiation failed");
    }
  };

  return (
    <BiddingPagePresentation
      auction={auction}
      bidAmount={bidAmount}
      setBidAmount={setBidAmount}
      handlePayment={handlePayment}
      isAuctionFull={isAuctionFull}
      hasAlreadyBid={hasAlreadyBid}
    />
  );
};

export default BiddingPage;
