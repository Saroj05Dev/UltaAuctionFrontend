import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeBid, fetchBids } from "../redux/slices/BiddingSlice";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAuctionById } from "../redux/slices/AuctionSlice";
import Layout from "../layout/Layout";

const BiddingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth?.data);
  const userId = authData?._id;
  const [bidAmount, setBidAmount] = useState("");
  const auction = useSelector((state) => state.auction.auctions?.data);

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
    } else {
      navigate("/auctions");
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

  return (
    <Layout>
    <div className="max-w-xl mx-auto border rounded-lg p-6 shadow-md bg-white mt-10 mb-10">
      {/* Auction Image */}
      <div className="mb-4">
        <img
          src={auction?.auctionImage}
          alt={auction?.title}
          className="w-full h-64 object-cover rounded-md"
        />
      </div>

      {/* Auction Title and Info */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {auction?.title}
        </h2>
        <p className="text-sm text-gray-600 mt-1">{auction?.description}</p>
      </div>

      {/* Bidding Section */}
      <div className="mb-4">
        <label htmlFor="bidAmount" className="block text-gray-700 mb-2">
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
          onClick={handlePlaceBid}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
        >
          Place Bid
        </button>
      </div>

      {/* Bid Info */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          {auction?.bids?.length > 0
            ? `Total Bids: ${auction.bids.length}`
            : "No bids yet"}
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default BiddingPage;
