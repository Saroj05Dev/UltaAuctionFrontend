import React from "react";
import useAuctionList from "../hooks/useAuctionList";
import AuctionFilters from "../components/AuctionFilters";
import AuctionCard from "../components/AuctionCard";
import Layout from "../../../layout/Layout";

function AuctionsPage() {
  const { filteredAuctions, applyFilters, loading } = useAuctionList();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-900 py-10 px-4">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-yellow-300 tracking-widest uppercase">
            💰 Browse Live Auctions 💰
          </h1>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-yellow-300 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <AuctionFilters onFilter={applyFilters} />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredAuctions?.length > 0 ? (
                  filteredAuctions.map((auction) => (
                    <AuctionCard key={auction._id} auction={auction} />
                  ))
                ) : (
                  <p className="text-white text-center col-span-full">
                    No auctions available
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AuctionsPage;
