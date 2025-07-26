import { Link } from "react-router-dom";
import { GiPokerHand, GiMoneyStack, GiDiceSixFacesFive } from "react-icons/gi";

function AuctionCard({ auction }) {
  return (
    <Link to={`/auctions/${auction._id}`} className="no-underline w-full">
      <div className="bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white rounded-2xl p-4 shadow-xl hover:scale-[1.02] hover:shadow-yellow-400/30 transition duration-300 ease-in-out">
        {auction.auctionImage && (
          <img
            src={auction.auctionImage}
            alt={auction.title}
            className="w-full h-48 object-cover rounded-xl border-4 border-yellow-500 mb-4"
          />
        )}
        <h2 className="text-lg md:text-xl font-extrabold mb-2 text-yellow-300 tracking-wide uppercase text-center">
          🎰 {auction.title}
        </h2>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2 text-center italic">
          {auction.description}
        </p>
        <div className="text-sm text-gray-200 space-y-1 font-mono">
          <p>
            <GiDiceSixFacesFive className="inline mr-1 text-green-400" />
            <strong>Status:</strong> {auction.status.toUpperCase()}
          </p>
          <p>
            <GiMoneyStack className="inline mr-1 text-green-400" />
            <strong>Starting:</strong> ₹{auction.startingBid} | <strong>Ending:</strong> ₹{auction.endingBid}
          </p>
          <p>
            <strong>🎯 Ends:</strong> {new Date(auction.endTime).toLocaleString()}
          </p>
          <p>
            <strong>🧑‍🤝‍🧑 Slots:</strong> {auction.slotsFilled} / {auction.maxSlots}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default AuctionCard;
