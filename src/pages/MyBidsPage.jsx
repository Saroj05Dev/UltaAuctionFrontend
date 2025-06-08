import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBids } from "../redux/slices/BiddingSlice";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

function MyBidsPage() {
  const dispatch = useDispatch();
  const { myBids, loading, error } = useSelector((state) => state.bidding);

  useEffect(() => {
    dispatch(fetchMyBids());
  }, [dispatch]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">📜 My Bids</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : myBids.length === 0 ? (
          <p className="text-center text-gray-600">No bids placed yet.</p>
        ) : (
          <table className="w-full border text-sm md:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-left">Auction</th>
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Payment</th>
              </tr>
            </thead>
            <tbody>
              {myBids.map((bid, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">
                    <Link
                      to={`/auctions/${bid.auctionId}`}
                      className="text-blue-600 hover:underline"
                    >
                      {bid.auctionTitle}
                    </Link>
                  </td>
                  <td className="p-2">₹{bid.bidAmount}</td>
                  <td className="p-2 capitalize">{bid.status}</td>
                  <td className="p-2 capitalize">{bid.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
}

export default MyBidsPage;
