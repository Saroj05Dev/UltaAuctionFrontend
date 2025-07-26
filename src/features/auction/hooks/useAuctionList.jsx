import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctions } from "../../../redux/slices/AuctionSlice";

export default function useAuctionList() {
  const dispatch = useDispatch();
  const { auctions } = useSelector((state) => state.auction);
  const [filteredAuctions, setFilteredAuctions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await dispatch(fetchAuctions());
      setLoading(false);
    };
    load();
  }, [dispatch]);

  useEffect(() => {
    setFilteredAuctions(auctions);
  }, [auctions]);

  const applyFilters = ({ status, minBid, maxBid, search }) => {
    let result = auctions;

    if (status) result = result.filter(a => a.status === status);
    if (minBid) result = result.filter(a => a.startingBid >= +minBid);
    if (maxBid) result = result.filter(a => a.startingBid <= +maxBid);
    if (search) result = result.filter(a =>
      a.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredAuctions(result);
  };

  return { filteredAuctions, applyFilters, loading };
}
