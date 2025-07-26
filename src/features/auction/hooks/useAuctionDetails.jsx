import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuctionDetails(id) {
  const [auction, setAuction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`http://localhost:3500/auctions/auction/${id}`);
        setAuction(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load auction.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return { auction, loading, error };
}
