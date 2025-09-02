import React from "react";
import useAuctionList from "../hooks/useAuctionList";
import AuctionFilters from "../components/AuctionFilters";
import AuctionCard from "../components/AuctionCard";
import Layout from "../../../layout/Layout";
import { 
  Gavel, 
  TrendingUp, 
  Users, 
  Clock,
  Sparkles,
  Search
} from "lucide-react";

function AuctionsPage() {
  const { filteredAuctions, applyFilters, loading } = useAuctionList();

  // Mock stats - replace with real data if available
  const stats = [
    { 
      icon: Gavel, 
      label: "Active Auctions", 
      value: filteredAuctions?.filter(a => a.status === 'active').length || 0,
      color: "text-green-400"
    },
    { 
      icon: Users, 
      label: "Total Bidders", 
      value: "1.2k+",
      color: "text-blue-400"
    },
    { 
      icon: TrendingUp, 
      label: "Won Today", 
      value: "47",
      color: "text-purple-400"
    },
    { 
      icon: Clock, 
      label: "Avg. Win Time", 
      value: "2.3h",
      color: "text-orange-400"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-800 py-20">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            {/* Main Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
                <Sparkles size={18} className="animate-pulse" />
                Live Auction Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Browse Live{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Auctions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover incredible deals and win premium products at unbeatable prices. 
                Every auction is a new opportunity to score big!
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300">
                  <div className={`inline-flex p-3 bg-slate-700/50 rounded-xl mb-4`}>
                    <stat.icon size={32} className={stat.color} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-yellow-400/30 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-400 mt-6 text-lg">Loading amazing auctions...</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                <Clock size={16} />
                <span>Please wait a moment</span>
              </div>
            </div>
          ) : (
            <>
              {/* Filters Section */}
              <div className="mb-12">
                <AuctionFilters onFilter={applyFilters} />
              </div>

              {/* Results Section */}
              <div className="space-y-8">
                {/* Results Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-white">
                      Available Auctions
                    </h2>
                    <div className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">
                      {filteredAuctions?.length || 0} found
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live updates</span>
                  </div>
                </div>

                {/* Auctions Grid */}
                {filteredAuctions?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredAuctions.map((auction) => (
                      <AuctionCard key={auction._id} auction={auction} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-24">
                    <div className="inline-flex p-6 bg-slate-800/50 rounded-full mb-6">
                      <Search size={48} className="text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">No Auctions Found</h3>
                    <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                      We couldn&apos;t find any auctions matching your criteria. 
                      Try adjusting your filters or check back later for new listings.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>New auctions added daily</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp size={16} />
                          <span>Best deals guaranteed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Bottom CTA Section */}
        {!loading && filteredAuctions?.length > 0 && (
          <div className="bg-gradient-to-r from-slate-800 to-gray-800 py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Winning?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of smart bidders who have already won amazing prizes at incredible prices.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>No registration fees</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Fair play guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AuctionsPage;