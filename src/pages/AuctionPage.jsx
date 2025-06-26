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
      filtered = filtered.filter(
        (auction) => auction.startingBid >= parseFloat(minBid)
      );
    }
    if (maxBid) {
      filtered = filtered.filter(
        (auction) => auction.startingBid <= parseFloat(maxBid)
      );
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
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-900 py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-yellow-300 tracking-widest uppercase">
            💰 Browse Live Auctions 💰
          </h1>

          <AuctionFilters onFilter={applyFilters} />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.isArray(filteredAuctions) && filteredAuctions.length > 0 ? (
              filteredAuctions.map((auction) => (
                <AuctionCard key={auction._id} auction={auction} />
              ))
            ) : (
              <p className="text-white text-center col-span-full">
                No auctions available
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AuctionsPage;
