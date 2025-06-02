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
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
          Browse Auctions
        </h1>

        <AuctionFilters onFilter={applyFilters} />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
