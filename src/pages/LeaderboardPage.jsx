import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctionLeaderboard } from "../redux/slices/leaderboardSlice";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";

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
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          🏁 Auction Leaderboard
        </h2>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 shadow rounded">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left text-sm sm:text-base">Rank</th>
                  <th className="p-3 text-left text-sm sm:text-base">Name</th>
                  <th className="p-3 text-left text-sm sm:text-base">Email</th>
                  <th className="p-3 text-left text-sm sm:text-base">
                    Bid Amount
                  </th>
                  <th className="p-3 text-left text-sm sm:text-base">Status</th>
                </tr>
              </thead>
              <tbody>
                {bidders.map((user, index) => (
                  <tr key={index} className="border-t text-sm sm:text-base">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">₹{user.bidAmount}</td>
                    <td
                      className={`p-3 capitalize ${
                        user.status === "winner"
                          ? "text-green-600 font-semibold"
                          : user.status === "disqualified"
                          ? "text-red-500"
                          : ""
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
    </Layout>
  );
}

export default AuctionLeaderboardPage;
