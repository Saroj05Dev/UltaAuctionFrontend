import { ArrowRight, Target } from "lucide-react";
import Layout from "../../../layout/Layout";
import { Link } from "react-router-dom";
import { MdLeaderboard } from "react-icons/md";

const BiddingPagePresentation = ({
  auction,
  bidAmount,
  setBidAmount,
  handlePayment,
  isAuctionFull,
  hasReachedMaxBids,
}) => {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#111] to-black py-10">
        <div className="max-w-xl mx-auto mt-10 mb-14 w-[92%] bg-gradient-to-br from-black via-[#111] to-black text-white rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] p-6 border border-yellow-500 relative overflow-hidden">
          {/* Floating Glow Effect */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl z-0 animate-pulse" />

          {/* Auction Image */}
          <div className="mb-5 relative z-10">
            <img
              src={auction?.auctionImage}
              alt={auction?.title}
              className="w-full h-56 object-cover rounded-xl border-2 border-yellow-400 shadow-lg"
            />
          </div>

          {/* Auction Title and Info */}
          <div className="mb-6 z-10 relative">
            <h2 className="text-2xl font-bold text-yellow-300 tracking-wide">
             <Target className="inline"/> {auction?.title}
            </h2>
            <p className="text-sm text-gray-300 mt-1">{auction?.description}</p>
          </div>

          {/* Bidding Section */}
          <div className="mb-5 relative z-10">
            <p className="text-xs text-gray-400 mt-2">
              Min: ₹{auction?.startingBid} | Max: ₹{auction?.endingBid}
            </p>
            <label
              htmlFor="bidAmount"
              className="block text-sm text-yellow-200 mb-2"
            >
              Place Your Lucky Bid 🎲
            </label>
            <input
              type="number"
              min="1"
              id="bidAmount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              disabled={hasReachedMaxBids || isAuctionFull}
              className={`w-full bg-black border-2 rounded-md px-4 py-2 font-semibold text-white shadow-inner transition-all duration-200 ${
                hasReachedMaxBids || isAuctionFull
                  ? "border-gray-500 cursor-not-allowed text-gray-400"
                  : "border-yellow-400 focus:border-yellow-300 focus:ring-2 focus:ring-yellow-400"
              }`}
              placeholder={
                isAuctionFull
                  ? "⛔ Auction is full"
                  : hasReachedMaxBids
                  ? "⚠️ You reached 5 bids"
                  : "Enter your bid (e.g., ₹50)"
              }
            />

            <button
              onClick={handlePayment}
              disabled={hasReachedMaxBids || isAuctionFull}
              className={`mt-4 w-full py-2 px-4 font-bold rounded-md shadow-lg transition-transform transform ${
                hasReachedMaxBids || isAuctionFull
                  ? "bg-gray-600 cursor-not-allowed text-gray-300"
                  : "bg-gradient-to-r from-yellow-400 to-yellow-300 text-black hover:scale-105"
              }`}
            >
              {isAuctionFull
                ? "🎟️ Auction Full"
                : hasReachedMaxBids
                ? "🛑 Bid Limit Reached"
                : "💰 Pay & Place Bid"}
            </button>
          </div>

          {/* Bid Info */}
          <div className="mt-6 text-sm text-gray-400 text-center relative z-10">
            {auction?.bids?.length > 0
              ? `🎉 Total Bids Placed: ${auction.bids.length}`
              : "🎯 No bids yet – be the first!"}
          </div>

          {/* Leaderboard Link */}
          {auction?._id && (
            <Link
              to={`/auction/${auction._id}/leaderboard`}
              className="text-yellow-400 hover:underline hover:text-yellow-800 text-center mt-6 block text-sm font-medium relative z-10 transition"
            >
              <MdLeaderboard className="inline" size={25}/> View Live Leaderboard <ArrowRight className="inline transition "/>
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BiddingPagePresentation;
