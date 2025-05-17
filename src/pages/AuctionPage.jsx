import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuctionFilters from "../components/AuctionFilters";
import AuctionCard from "../components/AuctionCard";
import { fetchAuctions } from "../redux/slices/AuctionSlice";
import Layout from "../layout/Layout";

function AuctionsPage() {
  const { auctions } = useSelector((state) => state.auction);
  const dispatch = useDispatch();
  const [filteredAuctions, setFilteredAuctions] = useState([]);

  useEffect(() => {
    // This is where you can dispatch any actions needed on component mount
    dispatch(fetchAuctions());
  }, []);

  useEffect(() => {
    setFilteredAuctions(auctions);
  }, [auctions]);

  function applyFilters({ status, minBid, maxBid, search }) {
    let filtered = auctions;

    if (status) {
      filtered = filtered.filter((auction) => auction.status === status);
    }
    if (minBid) {
      filtered = filtered.filter((auction) => auction.startingBid >= parseFloat(minBid));
    }
    if (maxBid) {
      filtered = filtered.filter((auction) => auction.startingBid <= parseFloat(maxBid));
    }
    if (search) {
      filtered = filtered.filter((auction) =>
        auction.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredAuctions(filtered);
  }

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Browse Auctions</h1>
        <AuctionFilters onFilter={applyFilters} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(filteredAuctions) && filteredAuctions.length > 0 ? (
            filteredAuctions.map((auction) => (
              <AuctionCard key={auction._id} auction={auction} />
            ))
          ) : Array.isArray(auctions) ? (
            auctions.map((auction) => (
              <AuctionCard key={auction._id} auction={auction} />
            ))
          ) : (
            <p>No auctions available</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AuctionsPage;
