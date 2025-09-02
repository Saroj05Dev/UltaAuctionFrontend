import { 
  ArrowRight, 
  Target, 
  DollarSign, 
  Users, 
  Clock, 
  TrendingUp, 
  Zap,
  AlertTriangle,
  Trophy,
  Eye,
  Lock
} from "lucide-react";
import Layout from "../../../layout/Layout";
import { Link } from "react-router-dom";

const BiddingPagePresentation = ({
  auction,
  bidAmount,
  setBidAmount,
  handlePayment,
  isAuctionFull,
  hasReachedMaxBids,
}) => {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'from-green-500 to-emerald-500';
      case 'completed': return 'from-gray-500 to-slate-500';
      case 'upcoming': return 'from-blue-500 to-cyan-500';
      default: return 'from-yellow-500 to-orange-500';
    }
  };

  const isDisabled = hasReachedMaxBids || isAuctionFull;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Auction Card */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
                  {/* Header */}
                  <div className="relative p-6 bg-gradient-to-r from-slate-800/50 to-gray-800/50 border-b border-gray-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${getStatusColor(auction?.status)} text-white text-sm font-bold rounded-full shadow-lg`}>
                        <Zap size={16} className="animate-pulse" />
                        {auction?.status?.toUpperCase() || 'LIVE'}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock size={16} />
                        <span>Live Auction</span>
                      </div>
                    </div>
                    
                    <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                      <Target className="text-yellow-400" size={32} />
                      {auction?.title}
                    </h1>
                    <p className="text-gray-300 leading-relaxed">{auction?.description}</p>
                  </div>

                  {/* Auction Image */}
                  <div className="p-6">
                    <div className="relative rounded-2xl overflow-hidden group">
                      <img
                        src={auction?.auctionImage}
                        alt={auction?.title}
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="bg-black/70 backdrop-blur px-3 py-2 rounded-lg text-white text-sm">
                            <div className="flex items-center gap-2">
                              <DollarSign size={16} className="text-green-400" />
                              <span>₹{auction?.startingBid} - ₹{auction?.endingBid}</span>
                            </div>
                          </div>
                          <div className="bg-black/70 backdrop-blur px-3 py-2 rounded-lg text-white text-sm">
                            <div className="flex items-center gap-2">
                              <Users size={16} className="text-blue-400" />
                              <span>{auction?.bids?.length || 0} bids</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bidding Section */}
                  <div className="p-6 border-t border-gray-700/50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
                          <TrendingUp size={24} className="text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Place Your Strategic Bid</h3>
                          <p className="text-gray-400 text-sm">Remember: Lowest unique bid wins!</p>
                        </div>
                      </div>

                      {/* Bid Range */}
                      <div className="bg-slate-900/50 rounded-xl p-4 border border-gray-700/30">
                        <div className="flex items-center justify-between text-sm">
                          <div className="text-green-400 font-semibold">
                            Min: ₹{auction?.startingBid}
                          </div>
                          <div className="text-red-400 font-semibold">
                            Max: ₹{auction?.endingBid}
                          </div>
                        </div>
                        <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-red-400 rounded-full"></div>
                        </div>
                      </div>

                      {/* Bid Input */}
                      <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-300">
                          Your Lucky Number 🎯
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="1"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            disabled={isDisabled}
                            className={`w-full bg-slate-900/80 backdrop-blur border-2 rounded-xl px-6 py-4 text-lg font-bold text-white placeholder-gray-500 transition-all duration-300 ${
                              isDisabled
                                ? "border-gray-600 cursor-not-allowed text-gray-500"
                                : "border-gray-600 hover:border-yellow-500/50 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
                            }`}
                            placeholder={
                              isAuctionFull
                                ? "Auction is full"
                                : hasReachedMaxBids
                                ? "Bid limit reached (5 max)"
                                : "Enter your strategic bid..."
                            }
                          />
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            <DollarSign size={20} className={isDisabled ? "text-gray-500" : "text-yellow-400"} />
                          </div>
                        </div>
                        
                        {isDisabled && (
                          <div className="flex items-center gap-2 text-orange-400 text-sm bg-orange-500/10 px-4 py-2 rounded-lg">
                            <AlertTriangle size={16} />
                            <span>
                              {isAuctionFull ? "This auction has reached maximum capacity" : "You've reached your bid limit for this auction"}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handlePayment}
                        disabled={isDisabled}
                        className={`group relative w-full py-4 px-6 font-bold text-lg rounded-xl shadow-2xl transition-all duration-300 transform ${
                          isDisabled
                            ? "bg-gray-600 cursor-not-allowed text-gray-300 shadow-none"
                            : "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-white hover:scale-105 hover:shadow-yellow-500/25"
                        }`}
                      >
                        <div className="flex items-center justify-center gap-3">
                          {isAuctionFull ? (
                            <>
                              <Lock size={24} />
                              Auction Full
                            </>
                          ) : hasReachedMaxBids ? (
                            <>
                              <AlertTriangle size={24} />
                              Bid Limit Reached
                            </>
                          ) : (
                            <>
                              <TrendingUp size={24} className="group-hover:rotate-12 transition-transform" />
                              Pay & Place Bid
                              <DollarSign size={20} className="animate-bounce" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Stats & Info */}
              <div className="space-y-6">
                {/* Auction Stats */}
                <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Trophy className="text-yellow-400" size={24} />
                    Auction Stats
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500/20 rounded-lg">
                          <Users size={20} className="text-blue-400" />
                        </div>
                        <span className="text-gray-300">Total Bids</span>
                      </div>
                      <span className="text-xl font-bold text-white">{auction?.bids?.length || 0}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-500/20 rounded-lg">
                          <DollarSign size={20} className="text-green-400" />
                        </div>
                        <span className="text-gray-300">Bid Range</span>
                      </div>
                      <span className="text-sm font-bold text-white">₹{auction?.startingBid}-{auction?.endingBid}</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <Target size={20} className="text-purple-400" />
                        </div>
                        <span className="text-gray-300">Your Bids</span>
                      </div>
                      <span className="text-xl font-bold text-white">
                        {hasReachedMaxBids ? "5/5" : "0/5"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Leaderboard */}
                <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Eye className="text-green-400" size={24} />
                    Live Tracking
                  </h3>
                  
                  <div className="text-center space-y-4">
                    {auction?.bids?.length > 0 ? (
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-400 mb-1">
                          {auction.bids.length}
                        </div>
                        <div className="text-sm text-gray-300">Bids Placed</div>
                      </div>
                    ) : (
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-400 mb-1">0</div>
                        <div className="text-sm text-gray-300">Be the first to bid!</div>
                      </div>
                    )}

                    {auction?._id && (
                      <Link
                        to={`/auction/${auction._id}/leaderboard`}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600/80 to-orange-600/80 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <Trophy size={18} />
                        View Leaderboard
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Tips */}
                <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-bold text-white mb-4">💡 Pro Tips</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Choose unique numbers that others might overlook</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Monitor the leaderboard for strategic insights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Remember: Lowest unique bid wins!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BiddingPagePresentation;