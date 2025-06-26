import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctionLeaderboard } from "../redux/slices/leaderboardSlice";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import { FaCrown, FaUser } from "react-icons/fa";

function AuctionLeaderboardPage() {
  const dispatch = useDispatch();
  const { auctionId } = useParams();

  const { bidders, loading, error } = useSelector(
    (state) => state.auctionLeaderboard
  );

  useEffect(() => {
    if (auctionId) dispatch(fetchAuctionLeaderboard(auctionId));
  }, [dispatch, auctionId]);

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto px-4 py-10 font-mono text-gray-200">
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 flex items-center justify-center gap-3 mb-8">
          <FaCrown className="text-yellow-300" />
          Auction Leaderboard
        </h2>

        {loading ? (
          <p className="text-center text-yellow-300">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : (
          <div className="overflow-x-auto bg-zinc-900 rounded-xl shadow-xl border border-yellow-700">
            <table className="w-full table-auto text-sm md:text-base">
              <thead className="bg-black bg-opacity-40 text-yellow-300">
                <tr>
                  <th className="p-3 text-left">🏅 Rank</th>
                  <th className="p-3 text-left">👤 Name</th>
                  <th className="p-3 text-left">📧 Email</th>
                  <th className="p-3 text-left">💰 Bid</th>
                  <th className="p-3 text-left">📌 Status</th>
                </tr>
              </thead>
              <tbody>
                {bidders.map((user, index) => (
                  <tr
                    key={index}
                    className="border-t border-yellow-700 hover:bg-zinc-800 transition"
                  >
                    <td className="p-3 font-semibold text-yellow-300">
                      #{index + 1}
                    </td>
                    <td className="p-3 flex items-center gap-2">
                      <FaUser className="text-blue-400" />
                      {user.name}
                    </td>
                    <td className="p-3 text-blue-300">{user.email}</td>
                    <td className="p-3 text-green-400 font-semibold">
                      ₹{user.bidAmount}
                    </td>
                    <td
                      className={`p-3 capitalize font-semibold ${
                        user.status === "winner"
                          ? "text-green-400"
                          : user.status === "disqualified"
                          ? "text-red-400"
                          : "text-gray-300"
                      }`}
                    >
                      {user.status}
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

export default AuctionLeaderboardPage;
