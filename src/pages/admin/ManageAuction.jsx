import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuctions, deleteAuction } from '../../redux/slices/AuctionSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ManageAuctionsPresentation from '../admin/ManageAuctionPresentation';

function ManageAuctions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auctions, loading } = useSelector((state) => state.auction);

  useEffect(() => {
    dispatch(fetchAuctions());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteAuction(id)).unwrap();
      // toast.success("Auction deleted successfully");
    } catch (err) {
      toast.error("Failed to delete auction");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/update-auction/${id}`);
  };

  const handleCreate = () => {
    navigate('/admin/create-auction');
  };

  return (
    <ManageAuctionsPresentation
      auctions={auctions}
      loading={loading}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      handleCreate={handleCreate}
    />
  );
}

export default ManageAuctions;
