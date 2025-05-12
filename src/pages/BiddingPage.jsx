
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeBid, fetchBids } from "../redux/slices/BiddingSlice";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const BiddingPage = () => {
  const { auctionId } = useParams();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth?.data);
const userId = authData?._id;
  const [bidAmount, setAmount] = useState("");
  const { bids, loading } = useSelector((state) => state.bidding);

  const handlePlaceBid = async () => {
    if (!bidAmount || isNaN(bidAmount)) {
      toast.error("Please enter a valid bid amount");
      return;
    }

    if (!auctionId || !userId) {
      console.error("Missing auctionId or userId", { auctionId, userId });
      toast.error("User or auction not identified");
      return;
    }

    try {
      const res = await dispatch(placeBid({ auctionId, userId, bidAmount })).unwrap();
      // toast.success("Bid placed successfully!");

      setAmount(""); // clear input
      dispatch(fetchBids(auctionId)); // optional: refresh bids
    } catch (err) {
      toast.error(err || "Something went wrong");
    }
  };

  return (
    <div className="p-4">
      {/* Existing auction UI */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Place Your Bid</h3>
        <div className="flex gap-2 mt-2">
          <input
            type="number"
            value={bidAmount}
            onChange={(e) => setAmount(e.target.value)}
            className="border px-3 py-2 rounded"
            placeholder="Enter bid amount"
          />
          <button
            onClick={handlePlaceBid}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Placing..." : "Place Bid"}
          </button>
        </div>
      </div>

      {/* Show latest bids */}
      <div className="mt-6">
        <h4 className="font-bold mb-2">Bid History:</h4>
        {bids?.length > 0 ? (
          <ul className="list-disc list-inside">
            {bids.map((bid) => (
              <li key={bid._id}>
                ₹{bid.bidAmount} on {new Date(bid.createdAt).toLocaleString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No bids yet</p>
        )}
      </div>
    </div>
  );
};

export default BiddingPage;
