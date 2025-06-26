import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBids } from "../redux/slices/BiddingSlice";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { FaGavel } from "react-icons/fa";

function MyBidsPage() {
  const dispatch = useDispatch();
  const { myBids, loading, error } = useSelector((state) => state.bidding);

  useEffect(() => {
    dispatch(fetchMyBids());
  }, [dispatch]);

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto px-4 py-10 text-gray-200 font-mono">
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 flex items-center justify-center gap-3 mb-8">
          <FaGavel className="text-yellow-300 text-3xl" />
          My Bids
        </h2>

        {loading ? (
          <p className="text-center text-yellow-300">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : myBids.length === 0 ? (
          <p className="text-center text-gray-400">No bids placed yet.</p>
        ) : (
          <div className="overflow-x-auto bg-zinc-900 rounded-lg shadow-lg border border-yellow-700">
            <table className="w-full table-auto text-sm md:text-base">
              <thead className="bg-black bg-opacity-50 text-yellow-300">
                <tr>
                  <th className="p-3 text-left">🎯 Auction</th>
                  <th className="p-3 text-left">💰 Amount</th>
                  <th className="p-3 text-left">🏁 Status</th>
                  <th className="p-3 text-left">🧾 Payment</th>
                </tr>
              </thead>
              <tbody>
                {myBids.map((bid, i) => (
                  <tr
                    key={i}
                    className="border-t border-yellow-800 hover:bg-zinc-800 transition"
                  >
                    <td className="p-3">
                      <Link
                        to={`/auctions/${bid.auctionId}`}
                        className="text-blue-400 hover:underline font-semibold"
                      >
                        {bid.auctionTitle}
                      </Link>
                    </td>
                    <td className="p-3 text-green-400 font-medium">
                      ₹{bid.bidAmount}
                    </td>
                    <td className="p-3 capitalize text-yellow-300">
                      {bid.status}
                    </td>
                    <td
                      className={`p-3 capitalize ${
                        bid.paymentStatus === "paid"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {bid.paymentStatus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      </div>
    </Layout>
  );
}

export default MyBidsPage;
