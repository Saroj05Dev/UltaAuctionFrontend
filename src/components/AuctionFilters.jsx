import React, { useState } from "react";
import { GiCardPick, GiMoneyStack } from "react-icons/gi";

function AuctionFilters({ onFilter }) {
  const [status, setStatus] = useState("");
  const [minBid, setMinBid] = useState("");
  const [maxBid, setMaxBid] = useState("");
  const [search, setSearch] = useState("");

  function handleFilter() {
    onFilter({ status, minBid, maxBid, search });
  }

  return (
    <div className="bg-gradient-to-br from-zinc-800 to-gray-900 border border-yellow-400 p-4 rounded-xl shadow-lg text-white flex flex-col md:flex-row gap-4 md:items-center justify-between font-mono">
      {/* Status Dropdown */}
      <div className="flex flex-col gap-1">
        <label className="text-yellow-300 text-sm font-semibold flex items-center gap-1">
          <GiCardPick /> Status
        </label>
        <select
          onChange={(e) => setStatus(e.target.value)}
          value={status}
          className="bg-black border border-yellow-500 text-white px-3 py-2 rounded-lg outline-none"
        >
          <option value="">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Min Bid */}
      <div className="flex flex-col gap-1">
        <label className="text-yellow-300 text-sm font-semibold flex items-center gap-1">
          <GiMoneyStack /> Min Bid
        </label>
        <input
          type="number"
          placeholder="₹Min"
          onChange={(e) => setMinBid(e.target.value)}
          className="bg-black border border-yellow-500 text-white px-3 py-2 rounded-lg outline-none"
        />
      </div>

      {/* Max Bid */}
      <div className="flex flex-col gap-1">
        <label className="text-yellow-300 text-sm font-semibold flex items-center gap-1">
          <GiMoneyStack /> Max Bid
        </label>
        <input
          type="number"
          placeholder="₹Max"
          onChange={(e) => setMaxBid(e.target.value)}
          className="bg-black border border-yellow-500 text-white px-3 py-2 rounded-lg outline-none"
        />
      </div>

      {/* Search Input */}
      <div className="flex flex-col gap-1">
        <label className="text-yellow-300 text-sm font-semibold">🔍 Search</label>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black border border-yellow-500 text-white px-3 py-2 rounded-lg outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 mt-2 md:mt-0">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow font-bold"
          onClick={handleFilter}
        >
          🎯 Apply Filters
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow font-bold"
          onClick={() =>
            onFilter({ status: "", minBid: "", maxBid: "", search: "" })
          }
        >
          ♻️ Clear All
        </button>
      </div>
    </div>
  );
}

export default AuctionFilters;
