import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AuctionPresentation() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const res = await axios.get(`http://localhost:3500/auctions/auction/${id}`);
        console.log("Auction fetched:", res.data);
        setAuction(res.data);
      } catch (err) {
        console.error("Failed to fetch auction:", err);
        setError("Failed to load auction.");
      } finally {
        setLoading(false);
      }
    };

    fetchAuction();
  }, [id]);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p className='text-center text-red-500'>{error}</p>;

  if (!auction) {
    return <p className="text-center text-red-500">Auction not found</p>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Assuming `auction` is a single object, not array */}
        <div className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{auction.title}</h2>
          <p>{auction.description}</p>
          <p className="text-gray-600">Starting Bid: ₹{auction.startingBid}</p>
          {/* Add more fields from your schema here */}
        </div>
      </div>
    </div>
  );
}

export default AuctionPresentation;
