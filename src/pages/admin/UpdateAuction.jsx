import React, { useState } from 'react'
import { updateAuction } from '../../redux/slices/AuctionSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UpdateAuctionPresentation from './UpdateAuctionPresentation';

function UpdateAuction() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auctionId } = useParams();

    const [auctionState, setAuctionState] = useState({
        title: '',
        description: '',
        startingBid: '',
        bidIncrement: '',
        endTime: '',
        maxSlots: '',
        auctionImage: null
        });

    const [submitting, setSubmitting] = useState(false);
        
    const handleUserInput = (e) => {
  if (e.target.type === "file") {
    setAuctionState((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  } else {
    setAuctionState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
};

    async function handleFormSubmit(e) {
        e.preventDefault(); // 🔒 Prevent full-page reload
        setSubmitting(true);

        const data = new FormData();
            data.append("title", auctionState.title);
            data.append("description", auctionState.description);
            data.append("startingBid", auctionState.startingBid);
            data.append("bidIncrement", auctionState.bidIncrement);
            data.append("endTime", auctionState.endTime);
            data.append("maxSlots", auctionState.maxSlots);
            data.append("auctionImage", auctionState.auctionImage);
            // data.append("sellerId", sellerId); // ✅ Crucial fix
            console.log("data from formData", data);

        // Add validations for the form input
        if(!auctionState.title || !auctionState.description || !auctionState.startingBid || !auctionState.bidIncrement || !auctionState.endTime || !auctionState.maxSlots || !auctionState.auctionImage) {
            toast.error("Missing values from the form");
            return;
        }

        if(auctionState.title.length < 3 || auctionState.title.length > 15) {
            toast.error("Title should be atleast 3 characters long and maximum 20 characters long")
            return;
        }
        console.log("Selected file name:", auctionState.auctionImage?.name);

        const apiResponse = await dispatch(updateAuction({id: auctionId, formData: data}));
        setSubmitting(false);
        if(apiResponse.payload.data.success) {
        navigate('/admin/auctions');
        }
    }

  return (
    <UpdateAuctionPresentation 
    handleUserInput={handleUserInput} 
    handleFormSubmit={handleFormSubmit} 
    submitting={submitting}
    />
  )
}

export default UpdateAuction
