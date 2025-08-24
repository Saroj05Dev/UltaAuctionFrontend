import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAuctionById } from "../../../redux/slices/AuctionSlice";
import { fetchBids, placeBid } from "../../../redux/slices/BiddingSlice";
import { toast } from "react-toastify";

export function useBiddingLogic() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth?.data);
  const auction = useSelector((state) => state.auction.singleAuction);
  const userId = authData?._id;

  const [bidAmount, setBidAmount] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const isAuctionFull = auction?.slotsFilled >= auction?.maxSlots;
  const userBidCount =
    auction?.bids?.filter(
      (bid) => bid.userId === userId || bid.userId?._id === userId
    )?.length || 0;

  const hasReachedMaxBids = userBidCount >= 5;

  const refetchAuctionData = async () => {
    await dispatch(fetchAuctionById(id));
    await dispatch(fetchBids(id));
    setRefreshKey((prev) => prev + 1);
  };

  useEffect(() => {
    if (id) refetchAuctionData();
  }, [id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!bidAmount || bidAmount <= 0) {
      return toast.error("Please enter a valid bid amount");
    }

    const bid = Number(bidAmount);
    const min = auction?.startingBid;
    const max = auction?.endingBid;

    if (bid < min) return toast.error(`Bid must be at least ₹${min}`);
    if (bid > max) return toast.error(`Bid must not exceed ₹${max}`);
    if (hasReachedMaxBids) return toast.error("You reached the 5-bid limit");

    try {
      const res = await fetch("http://localhost:3500/payment/create-order", {
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
          const verifyRes = await fetch("http://localhost:3500/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            toast.success("Payment verified!");
            try {
              const paymentToken = verifyData.token;
              await dispatch(
                placeBid({ auctionId: id, userId, bidAmount, paymentToken })
              ).unwrap();
              toast.success("Bid placed successfully!");
              setBidAmount("");
              setTimeout(refetchAuctionData, 500);
            } catch (err) {
              toast.error(err || "Bid placement failed after payment.");
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
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      toast.error("Payment initiation failed");
    }
  };

  return {
    auction,
    bidAmount,
    setBidAmount,
    handlePayment,
    isAuctionFull,
    hasReachedMaxBids,
    refreshKey,
  };
}
