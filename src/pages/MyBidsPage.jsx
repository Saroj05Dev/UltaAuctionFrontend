import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBids } from "../redux/slices/BiddingSlice";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { 
  Gavel, 
  Trophy, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Filter,
  Search,
  Calendar,
  TrendingUp,
  Target,
  Activity,
  Eye,
  ArrowUpRight,
  Zap,
  Star
} from "lucide-react";

function MyBidsPage() {
  const dispatch = useDispatch();
  const { myBids, loading, error } = useSelector((state) => state.bidding);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    dispatch(fetchMyBids());
  }, [dispatch]);

  // Filter and sort bids
  const filteredBids = myBids
    .filter(bid => 
      bid.auctionTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "all" || bid.status === statusFilter)
    )
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "amount") return b.bidAmount - a.bidAmount;
      return 0;
    });

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'won': return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'lost': return <XCircle className="w-5 h-5 text-red-400" />;
      case 'active': return <Activity className="w-5 h-5 text-green-400" />;
      case 'pending': return <Clock className="w-5 h-5 text-orange-400" />;
      default: return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'won': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'lost': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'pending': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getPaymentStatusColor = (status) => {
    return status === 'paid' 
      ? 'text-green-400 bg-green-400/10 border-green-400/30'
      : 'text-red-400 bg-red-400/10 border-red-400/30';
  };

  // Calculate stats
  const totalBids = myBids.length;
  const wonBids = myBids.filter(bid => bid.status === 'won').length;
  const totalSpent = myBids.reduce((sum, bid) => sum + bid.bidAmount, 0);
  const winRate = totalBids > 0 ? ((wonBids / totalBids) * 100).toFixed(1) : 0;

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
              Bidding Dashboard
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Bids
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Track your auction participation, monitor bid status, and manage your winning strategies
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Total Bids",
                value: totalBids,
                icon: Target,
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/10 border-blue-500/30"
              },
              {
                title: "Bids Won",
                value: wonBids,
                icon: Trophy,
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-500/10 border-yellow-500/30"
              },
              {
                title: "Win Rate",
                value: `${winRate}%`,
                icon: TrendingUp,
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-500/10 border-green-500/30"
              },
              {
                title: "Total Spent",
                value: `₹${totalSpent.toLocaleString()}`,
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
                    <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
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
                  placeholder="Search auctions..."
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
                  className="pl-12 pr-8 py-3 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 appearance-none cursor-pointer"
                >
                  <option value="all">All Status</option>
                  <option value="won">Won</option>
                  <option value="lost">Lost</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              {/* Sort */}
              <div className="relative">
                <Calendar size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-slate-700/50 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 appearance-none cursor-pointer"
                >
                  <option value="recent">Recent First</option>
                  <option value="amount">Highest Amount</option>
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
              <p className="text-yellow-400 mt-4 text-lg">Loading your bids...</p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <XCircle size={64} className="mx-auto text-red-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Error Loading Bids</h3>
              <p className="text-gray-400">{error}</p>
            </div>
          ) : filteredBids.length === 0 ? (
            <div className="text-center py-20">
              <Gavel size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Bids Found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria"
                  : "Start bidding on auctions to see them here"
                }
              </p>
              <Link
                to="/auctions"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                <Star size={20} />
                Browse Auctions
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Desktop Table */}
              <div className="hidden lg:block bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-slate-700/50 to-gray-700/50">
                      <tr className="text-left">
                        <th className="px-6 py-4 text-gray-300 font-semibold">Auction</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Bid Amount</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Status</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Payment</th>
                        <th className="px-6 py-4 text-gray-300 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredBids.map((bid, index) => (
                        <tr key={index} className="hover:bg-slate-700/30 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                                <Gavel size={20} className="text-yellow-400" />
                              </div>
                              <div>
                                <h3 className="text-white font-medium">{bid.auctionTitle}</h3>
                                <p className="text-gray-400 text-sm">ID: {bid.auctionId}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <DollarSign size={18} className="text-green-400" />
                              <span className="text-green-400 font-semibold text-lg">₹{bid.bidAmount.toLocaleString()}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(bid.status)}`}>
                              {getStatusIcon(bid.status)}
                              {bid.status.charAt(0).toUpperCase() + bid.status.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getPaymentStatusColor(bid.paymentStatus)}`}>
                              {bid.paymentStatus === 'paid' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                              {bid.paymentStatus.charAt(0).toUpperCase() + bid.paymentStatus.slice(1)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <Link
                              to={`/auctions/${bid.auctionId}`}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                              <Eye size={16} />
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {filteredBids.map((bid, index) => (
                  <div key={index} className="bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                          <Gavel size={20} className="text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{bid.auctionTitle}</h3>
                          <p className="text-gray-400 text-sm">ID: {bid.auctionId}</p>
                        </div>
                      </div>
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(bid.status)}`}>
                        {getStatusIcon(bid.status)}
                        {bid.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Bid Amount</p>
                        <p className="text-green-400 font-semibold text-lg">₹{bid.bidAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Payment Status</p>
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getPaymentStatusColor(bid.paymentStatus)}`}>
                          {bid.paymentStatus === 'paid' ? <CheckCircle size={16} /> : <XCircle size={16} />}
                          {bid.paymentStatus}
                        </span>
                      </div>
                    </div>

                    <Link
                      to={`/auctions/${bid.auctionId}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Eye size={18} />
                      View Auction Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Count */}
          {filteredBids.length > 0 && (
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Showing {filteredBids.length} of {totalBids} bids
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default MyBidsPage;