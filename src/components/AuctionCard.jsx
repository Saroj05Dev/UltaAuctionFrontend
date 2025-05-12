import { Link } from "react-router-dom";

function AuctionCard({ auction }) {
  return (
    <Link to={`/auctions/${auction._id}`} className="no-underline">
    <div className="bg-white shadow-md rounded-lg p-4">
      {auction.auctionImage && (
        <img
          src={auction.auctionImage}
          alt={auction.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-lg font-bold">{auction.title}</h2>
      <p className="text-gray-700 text-sm mb-2">{auction.description}</p>
      <div className="text-sm text-gray-600">
        <p><strong>Status:</strong> {auction.status}</p>
        <p><strong>Starting Bid:</strong> ₹{auction.startingBid}</p>
        <p><strong>Bid Increment:</strong> ₹{auction.bidIncrement}</p>
        <p><strong>End Time:</strong> {new Date(auction.endTime).toLocaleString()}</p>
        <p><strong>Max Slots:</strong> {auction.maxSlots}</p>
        <p><strong>Slots Filled:</strong> {auction.slotsFilled}</p>
      </div>
    </div>
    </Link>
  );
}

export default AuctionCard
