import React, { useState } from 'react'
import CreateAuctionPresentation from './CreateAuctionPresentation';
import { createAuction } from '../../redux/slices/AuctionSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CreateAuction() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        const currentUser = JSON.parse(localStorage.getItem('user'));
        console.log("currentUser", currentUser);

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
            toast.error("Title should be atleast 3 characters long and maximum 15 characters long")
            return;
        }
        console.log("Selected file name:", auctionState.auctionImage?.name);

        const apiResponse = await dispatch(createAuction(data));
        setSubmitting(false);
        if(apiResponse.payload.data.success) {
        navigate('/admin/auctions');
        }
    }

  return (
    <CreateAuctionPresentation 
    handleUserInput={handleUserInput} 
    handleFormSubmit={handleFormSubmit} 
    submitting={submitting}
    />
  )
}

export default CreateAuction
