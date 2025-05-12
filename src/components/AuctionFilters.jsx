import React, { useState } from 'react'

function AuctionFilters({ onFilter }) {
    const [status, setStatus] = useState("");
    const [minBid, setMinBid] = useState("");
    const [maxBid, setMaxBid] = useState("");
    const [search, setSearch] = useState("");

    function handleFilter() {
        onFilter({status, minBid, maxBid, search});
    }
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <select onChange={(e) => setStatus(e.target.value)} value={status}>
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="upcoming">Upcoming</option>
        <option value="cancelled">Cancelled</option>
      </select>
      <input type="number" placeholder="Min Bid" onChange={(e) => setMinBid(e.target.value)} />
      <input type="number" placeholder="Max Bid" onChange={(e) => setMaxBid(e.target.value)} />
      <input type="text" placeholder="Search Title" onChange={(e) => setSearch(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleFilter}>
        Apply
      </button>
    </div>
  );
}

export default AuctionFilters
