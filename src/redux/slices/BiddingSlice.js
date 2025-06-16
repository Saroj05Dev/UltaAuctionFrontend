import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import { toast } from "react-toastify";

const initialState = {
  bids: [],
  myBids: [],
  loading: false,
  error: null,
};


export const placeBid = createAsyncThunk(
  "bid/placeBid",
  async ({ auctionId, userId, bidAmount, paymentToken }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/bids', {
        auctionId,
        userId,
        bidAmount
      },
      {
        headers: {
          "authorization" : paymentToken // Add the payment token to the headers
        }
      } 
    );
      
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

      return response.data; // just return the data
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error?.response?.data?.message || "Bid failed");
    }
  }
);


export const fetchBids = createAsyncThunk("bid/fetchBid", async (auctionId) => {
  try {
    const response = await axiosInstance.get(`/bids/${auctionId}`);
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    const apiResponse = await response;
    return apiResponse;
  } catch (error) {
    console.log(error);
  }
});

// ✅ New: Get All Bids by Logged-in User
export const fetchMyBids = createAsyncThunk("bid/fetchMyBids", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/bids/my-bids/all");
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});

const biddingSlice = createSlice({
  name: "bidding",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeBid.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeBid.fulfilled, (state, action) => {
        state.loading = false;
        state.bids.push(action.payload.data); // Add the new bid
      })
      .addCase(placeBid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchBids.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.loading = false;
        state.bids = action.payload.data; // assuming payload = { success, data }
      })
      .addCase(fetchBids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ✅ Extra: fetchMyBids handling
      .addCase(fetchMyBids.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyBids.fulfilled, (state, action) => {
        state.loading = false;
        state.myBids = action.payload;
      })
      .addCase(fetchMyBids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default biddingSlice.reducer;
