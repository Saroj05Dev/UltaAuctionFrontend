import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import { toast } from "react-toastify";

const initialState = {
  bids: [],
  loading: false,
  error: null,
};


export const placeBid = createAsyncThunk(
  "bid/placeBid",
  async ({ auctionId, userId, bidAmount }, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/bids', {
        auctionId,
        userId,
        bidAmount
      });
      console.log("response from placeBid", response);

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
    console.log("response from fetchBids", response);
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
      });
  },
});

export default biddingSlice.reducer;
