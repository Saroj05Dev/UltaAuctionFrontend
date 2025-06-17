import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

const BiddingPagePresentation = ({
  auction,
  bidAmount,
  setBidAmount,
  handlePayment,
  isAuctionFull,
  hasAlreadyBid,
}) => {
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
            min="1"
            id="bidAmount"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            disabled={hasAlreadyBid || isAuctionFull}
            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
              hasAlreadyBid || isAuctionFull
                ? "bg-gray-100 cursor-not-allowed"
                : "focus:ring-blue-500"
            }`}
            placeholder={
              isAuctionFull
                ? "Auction is full"
                : hasAlreadyBid
                ? "You already placed a bid"
                : "Enter your bid amount"
            }
          />
          <button
            onClick={handlePayment}
            disabled={hasAlreadyBid || isAuctionFull}
            className={`mt-4 w-full text-white py-2 px-4 rounded-md ${
              hasAlreadyBid || isAuctionFull
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isAuctionFull
              ? "Auction Full"
              : hasAlreadyBid
              ? "Bid Already Placed"
              : "Pay & Place Bid"}
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

export default BiddingPagePresentation;