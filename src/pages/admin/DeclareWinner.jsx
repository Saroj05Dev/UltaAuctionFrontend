import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctions, declareWinner } from "../../redux/slices/AuctionSlice";
import { Card, CardContent } from "../../components/ui/Card";
import { Loader2 } from "lucide-react";

const AdminDeclareWinner = () => {
  const dispatch = useDispatch();
  const { auctions, loading } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(fetchAuctions());
  }, [dispatch]);

  const handleDeclareWinner = async (id) => {
    await dispatch(declareWinner({ id }));
    dispatch(fetchAuctions()); // Refresh after declaring winner
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Declare Winner</h1>

      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <Loader2 className="h-10 w-10 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auctions?.length > 0 ? (
            auctions.map((auction) => (
              <Card key={auction._id} className="shadow-lg">
                <CardContent className="p-4 space-y-3">
                  <h2 className="text-lg font-bold">{auction.title}</h2>
                  <p className="text-sm text-gray-600">
                    Base Price: ₹{auction.startingBid}
                  </p>
                  <p className="text-sm text-gray-600">
                    Status: {auction.status}
                  </p>
                  <p className="text-sm">
                    Winner:{" "}
                    {auction.winnerId ? (
                      <span className="text-green-600 font-semibold">
                        {`${auction.winnerId.firstName} ${auction.winnerId.lastName}`}
                      </span>
                    ) : (
                      <span className="text-red-500">Not Declared</span>
                    )}
                  </p>
                  <button
                    className={`w-full px-4 py-2 rounded text-white ${
                      auction.winnerId || auction.status !== "completed"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    disabled={!!auction.winner || !(auction.status === "completed" || auction.slotsFilled >= auction.maxSlots)}
                    onClick={() => handleDeclareWinner(auction._id)}
                  >
                    {auction.winnerId ? "Winner Declared" : "Declare Winner"}
                  </button>
                </CardContent>
              </Card>
            ))
          ) : (
            <p>No auctions available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDeclareWinner;
