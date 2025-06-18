import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuctions, declareWinner } from "../../redux/slices/AuctionSlice";
import DeclareWinnerPresentation from "./DeclareWinnerPresentation";

const AdminDeclareWinner = () => {
  const dispatch = useDispatch();
  const { auctions, loading } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(fetchAuctions());
  }, [dispatch]);

  const handleDeclareWinner = async (id) => {
    await dispatch(declareWinner({ id }));
    dispatch(fetchAuctions());
  };

  return (
    <DeclareWinnerPresentation
      auctions={auctions}
      loading={loading}
      handleDeclareWinner={handleDeclareWinner}
    />
  );
};

export default AdminDeclareWinner;
