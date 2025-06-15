import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeBid, fetchBids } from "../redux/slices/BiddingSlice";
import { toast } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchAuctionById } from "../redux/slices/AuctionSlice";
import Layout from "../layout/Layout";

const BiddingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth?.data);
  const userId = authData?._id;
  const [bidAmount, setBidAmount] = useState("");
  const auctionRaw = useSelector((state) => state.auction.auctions?.data);
  const auction = Array.isArray(auctionRaw) ? auctionRaw[0] : auctionRaw;
  console.log("Auction data:", auction);

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

  const handlePlaceBid = async () => {
    if (!bidAmount) {
      toast.error("Please enter a bid amount");
      return;
    }

    if (!id || !userId) {
      console.error("Missing auctionId or userId", { id, userId });
      toast.error("User or auction not identified");
      return;
    }

    try {
      const res = await dispatch(
        placeBid({ auctionId: id, userId, bidAmount })
      ).unwrap();

      setBidAmount(""); // Clear input on success
      dispatch(fetchBids(id)); // Refresh bid list
    } catch (err) {
      toast.error(err || "Something went wrong");
    }
  };

  const handlePayment = async () => {
    if (!bidAmount || bidAmount <= 0) {
      toast.error("Please enter a valid bid amount");
      return;
    }

    try {
      // Step 1: Create Razorpay Order from backend
      const res = await fetch("http://localhost:3500/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: bidAmount, // in rupees
          currency: "INR",
          receipt: `b_${id.slice(-3)}${userId.slice(-3)}`,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        toast.error("Order creation failed");
        return;
      }

      const { id: order_id, amount, currency } = data.order;

      // Step 2: Open Razorpay popup
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount,
        currency: currency,
        name: "UltaAuction",
        description: "Auction Bid Payment",
        order_id,
        handler: async function (response) {
          // Step 3: Verify payment
          const verifyRes = await fetch(
            "http://localhost:3500/payment/verify-payment",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            toast.success("✅ Payment verified!");

            // Place the bid after successful payment
            const bidRes = await dispatch(
              placeBid({ auctionId: id, userId, bidAmount })
            ).unwrap();

            setBidAmount("");
            dispatch(fetchBids(id));
          } else {
            toast.error("❌ Payment verification failed.");
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
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Payment initiation failed");
    }
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto border rounded-lg p-4 md:p-6 shadow-md bg-white mt-6 mb-10 w-[90%]">
        {/* Auction Image */}
        <div className="mb-4">
          <img
            src={auction?.auctionImage}
            alt={auction?.title}
            className="w-full h-48 md:h-64 object-cover rounded-md"
          />
        </div>

        {/* Auction Title and Info */}
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            {auction?.title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            {auction?.description}
          </p>
        </div>

        {/* Bidding Section */}
        <div className="mb-4">
          <label
            htmlFor="bidAmount"
            className="block text-gray-700 mb-2 text-sm md:text-base"
          >
            Enter your bid
          </label>
          <input
            type="number"
            id="bidAmount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your bid amount"
          />
          <button
            onClick={handlePayment}
            className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
          >
            Pay & Place Bid
          </button>
        </div>

        {/* Bid Info */}
        <div className="mt-6 text-sm text-gray-500 text-center">
          {auction?.bids?.length > 0
            ? `Total Bids: ${auction.bids.length}`
            : "No bids yet"}
        </div>

        {/* Leaderboard Link */}
        {auction?._id && (
          <Link
            to={`/auction/${auction._id}/leaderboard`}
            className="text-blue-600 underline text-center mt-6 block text-sm md:text-base"
          >
            View Leaderboard
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default BiddingPage;
