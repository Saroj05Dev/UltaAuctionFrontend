import { Link } from "react-router-dom";
import { 
  Clock, 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Trophy,
  Zap,
  Target
} from "lucide-react";

function AuctionCard({ auction }) {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'from-green-500 to-emerald-500';
      case 'completed': return 'from-gray-500 to-slate-500';
      case 'upcoming': return 'from-blue-500 to-cyan-500';
      case 'cancelled': return 'from-red-500 to-rose-500';
      default: return 'from-yellow-500 to-orange-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return <Zap size={16} className="animate-pulse" />;
      case 'completed': return <Trophy size={16} />;
      case 'upcoming': return <Calendar size={16} />;
      case 'cancelled': return <Target size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <Link to={`/auctions/${auction._id}`} className="no-underline w-full group">
      <div className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-1 border border-gray-700/50 hover:border-yellow-500/50">
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${getStatusColor(auction.status)} text-white text-xs font-bold rounded-full shadow-lg`}>
            {getStatusIcon(auction.status)}
            {auction.status?.toUpperCase()}
          </div>
        </div>

        {/* Image Section */}
        {auction.auctionImage && (
          <div className="relative overflow-hidden">
            <img
              src={auction.auctionImage}
              alt={auction.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:from-yellow-300 group-hover:to-orange-400 transition-all duration-300">
              {auction.title}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed text-center line-clamp-2">
            {auction.description}
          </p>

          {/* Auction Details Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
            {/* Bid Range */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-green-400" />
                <span className="text-xs text-gray-400 font-medium">Starting</span>
              </div>
              <p className="text-green-400 font-bold">₹{auction.startingBid}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingDown size={16} className="text-red-400" />
                <span className="text-xs text-gray-400 font-medium">Ending</span>
              </div>
              <p className="text-red-400 font-bold">₹{auction.endingBid}</p>
            </div>
          </div>

          {/* Time and Slots */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-blue-400" />
              <span className="text-gray-300">
                Ends: {new Date(auction.endTime).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Users size={16} className="text-purple-400" />
                <span className="text-gray-300">
                  {auction.slotsFilled} / {auction.maxSlots} slots
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="flex-1 ml-3">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min((auction.slotsFilled / auction.maxSlots) * 100, 100)}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Indicator */}
          <div className="pt-4 text-center">
            <div className="inline-flex items-center gap-2 text-yellow-400 text-sm font-medium group-hover:text-yellow-300 transition-colors">
              <span>View Details</span>
              <div className="w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/0 via-orange-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:via-orange-500/5 group-hover:to-yellow-500/5 transition-all duration-500 pointer-events-none"></div>
      </div>
    </Link>
  );
}

export default AuctionCard;