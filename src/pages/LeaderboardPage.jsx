import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctionLeaderboard } from "../redux/slices/leaderboardSlice";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { 
  Crown, 
  User, 
  Trophy, 
  Medal, 
  Award, 
  Target, 
  Users, 
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  Star,
  Zap,
  Activity,
  TrendingUp,
  Eye,
  Search,
  Filter
} from "lucide-react";

function AuctionLeaderboardPage() {
  const dispatch = useDispatch();
  const { auctionId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { bidders, loading, error } = useSelector(
    (state) => state.auctionLeaderboard
  );

  useEffect(() => {
    if (auctionId) dispatch(fetchAuctionLeaderboard(auctionId));
  }, [dispatch, auctionId]);

  // Filter bidders based on search and status
  const filteredBidders = bidders
    .filter(bidder => 
      bidder.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || bidder.status === statusFilter)
    );

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-300" />;
      case 3: return <Award className="w-6 h-6 text-amber-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-gray-400 font-bold">#{rank}</span>;
    }
  };

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1: return "bg-gradient-to-r from-yellow-500 to-orange-500 text-black";
      case 2: return "bg-gradient-to-r from-gray-400 to-gray-600 text-white";
      case 3: return "bg-gradient-to-r from-amber-600 to-orange-600 text-white";
      default: return "bg-gradient-to-r from-slate-600 to-gray-600 text-white";
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'winner': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'disqualified': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'active': return <Activity className="w-5 h-5 text-blue-400" />;
      case 'pending': return <Clock className="w-5 h-5 text-orange-400" />;
      default: return <Target className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'winner': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'disqualified': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'active': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'pending': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  // Calculate stats
  const totalBidders = bidders.length;
  const winners = bidders.filter(b => b.status === 'winner').length;
  const totalBidAmount = bidders.reduce((sum, b) => sum + b.bidAmount, 0);
  const averageBid = totalBidders > 0 ? (totalBidAmount / totalBidders).toFixed(0) : 0;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              <Zap size={18} className="animate-pulse" />
              Live Leaderboard
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Auction{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Leaderboard
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Track the competition and see where you stand among fellow bidders
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Total Bidders",
                value: totalBidders,
                icon: Users,
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/10 border-blue-500/30"
              },
              {
                title: "Winners",
                value: winners,
                icon: Trophy,
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-500/10 border-yellow-500/30"
              },
              {
                title: "Average Bid",
                value: `₹${averageBid}`,
                icon: TrendingUp,
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500/10 border-green-500/30"
              },
              {
                title: "Total Volume",
                value: `₹${totalBidAmount.toLocaleString()}`,
                icon: DollarSign,
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/10 border-purple-500/30"
              }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border ${stat.bgColor} hover:border-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${stat.color} bg-opacity-20 rounded-xl`}>
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <Star size={20} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bidders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <Filter size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 appearance-none cursor-pointer min-w-[150px]"
                >
                  <option value="all">All Status</option>
                  <option value="winner">Winners</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="disqualified">Disqualified</option>
                </select>
              </div>
            </div>
          </div>

          {/* Content Area */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-yellow-400/30 rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-yellow-400 mt-4 text-lg">Loading leaderboard...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <XCircle size={64} className="mx-auto text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Error Loading Leaderboard</h3>
              <p className="text-gray-400">{error}</p>
            </div>
          ) : filteredBidders.length === 0 ? (
            <div className="text-center py-20">
              <Users size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Bidders Found</h3>
              <p className="text-gray-400">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria"
                  : "No one has placed a bid yet in this auction"
                }
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table */}
              <div className="hidden lg:block bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-slate-700/50 to-gray-700/50">
                      <tr className="text-left">
                        <th className="px-6 py-4 text-gray-300 font-semibold">Rank</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Bidder</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Email</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Bid Amount</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredBidders.map((bidder, index) => {
                        const rank = index + 1;
                        return (
                          <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${getRankBadge(rank)}`}>
                                {rank <= 3 ? getRankIcon(rank) : <span className="font-bold">{rank}</span>}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                                  <User size={20} className="text-blue-400" />
                                </div>
                                <div>
                                  <h3 className="text-white font-medium">{bidder.name}</h3>
                                  {rank <= 3 && (
                                    <p className="text-yellow-400 text-xs font-medium">Top Performer</p>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-gray-300">{bidder.email}</span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <DollarSign size={18} className="text-green-400" />
                                <span className="text-green-400 font-semibold text-lg">₹{bidder.bidAmount.toLocaleString()}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(bidder.status)}`}>
                                {getStatusIcon(bidder.status)}
                                {bidder.status.charAt(0).toUpperCase() + bidder.status.slice(1)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {filteredBidders.map((bidder, index) => {
                  const rank = index + 1;
                  return (
                    <div key={index} className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getRankBadge(rank)}`}>
                            {rank <= 3 ? getRankIcon(rank) : <span className="font-bold">{rank}</span>}
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">{bidder.name}</h3>
                            <p className="text-gray-400 text-sm">{bidder.email}</p>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(bidder.status)}`}>
                          {getStatusIcon(bidder.status)}
                          {bidder.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Bid Amount</p>
                          <div className="flex items-center gap-2">
                            <DollarSign size={18} className="text-green-400" />
                            <span className="text-green-400 font-semibold text-lg">₹{bidder.bidAmount.toLocaleString()}</span>
                          </div>
                        </div>
                        {rank <= 3 && (
                          <div className="text-right">
                            <p className="text-yellow-400 text-sm font-medium">Top Performer</p>
                            <div className="flex items-center gap-1 justify-end">
                              <Star size={16} className="text-yellow-400" />
                              <span className="text-yellow-400 text-xs">#{rank}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Results Count */}
          {filteredBidders.length > 0 && (
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Showing {filteredBidders.length} of {totalBidders} bidders
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AuctionLeaderboardPage;