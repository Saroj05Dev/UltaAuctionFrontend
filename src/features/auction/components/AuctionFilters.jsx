import React, { useState } from "react";
import { 
  Filter, 
  DollarSign, 
  Search, 
  CheckCircle, 
  RotateCcw,
  Zap,
  Calendar,
  Trophy,
  X
} from "lucide-react";

function AuctionFilters({ onFilter }) {
  const [status, setStatus] = useState("");
  const [minBid, setMinBid] = useState("");
  const [maxBid, setMaxBid] = useState("");
  const [search, setSearch] = useState("");

  function handleFilter() {
    onFilter({ status, minBid, maxBid, search });
  }

  function clearFilters() {
    setStatus("");
    setMinBid("");
    setMaxBid("");
    setSearch("");
    onFilter({ status: "", minBid: "", maxBid: "", search: "" });
  }

  const statusOptions = [
    { value: "", label: "All Statuses", icon: Filter },
    { value: "active", label: "Active", icon: Zap },
    { value: "completed", label: "Completed", icon: Trophy },
    { value: "upcoming", label: "Upcoming", icon: Calendar },
    { value: "cancelled", label: "Cancelled", icon: X }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.3),transparent),radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.3),transparent)]"></div>
      </div>
      
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
            <Filter size={24} className="text-yellow-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Filter Auctions</h3>
          <div className="flex-1"></div>
          <div className="text-sm text-gray-400">Find your perfect auction</div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Status Dropdown */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <Zap size={16} className="text-yellow-400" />
              Status
            </label>
            <div className="relative">
              <select
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="w-full bg-slate-900/80 backdrop-blur border border-gray-600 hover:border-yellow-500/50 text-white px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 appearance-none cursor-pointer"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Filter size={16} className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Min Bid */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <DollarSign size={16} className="text-green-400" />
              Min Bid
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="₹0"
                value={minBid}
                onChange={(e) => setMinBid(e.target.value)}
                className="w-full bg-slate-900/80 backdrop-blur border border-gray-600 hover:border-green-500/50 text-white px-4 py-3 pl-8 rounded-xl outline-none transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 placeholder-gray-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400 font-medium">₹</span>
            </div>
          </div>

          {/* Max Bid */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <DollarSign size={16} className="text-red-400" />
              Max Bid
            </label>
            <div className="relative">
              <input
                type="number"
                placeholder="₹∞"
                value={maxBid}
                onChange={(e) => setMaxBid(e.target.value)}
                className="w-full bg-slate-900/80 backdrop-blur border border-gray-600 hover:border-red-500/50 text-white px-4 py-3 pl-8 rounded-xl outline-none transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 placeholder-gray-500"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 font-medium">₹</span>
            </div>
          </div>

          {/* Search Input */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-300">
              <Search size={16} className="text-blue-400" />
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search auctions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-slate-900/80 backdrop-blur border border-gray-600 hover:border-blue-500/50 text-white px-4 py-3 pl-10 rounded-xl outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder-gray-500"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-300 opacity-0">Actions</label>
            <div className="flex flex-col gap-2">
              <button
                className="group relative px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                onClick={handleFilter}
              >
                <CheckCircle size={18} className="group-hover:rotate-12 transition-transform" />
                Apply Filters
              </button>
              
              <button
                className="group relative px-4 py-3 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-500 hover:to-slate-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-gray-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                onClick={clearFilters}
              >
                <RotateCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                Clear All
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats/Info */}
        <div className="mt-6 pt-6 border-t border-gray-700/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live auctions updating</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Real-time filtering</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Tip: Use multiple filters to narrow down your search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionFilters;