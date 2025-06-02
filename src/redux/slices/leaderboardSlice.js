// redux/slices/auctionLeaderboardSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
  bidders: [],
  loading: false,
  error: null,
};

export const fetchAuctionLeaderboard = createAsyncThunk(
  "auctionLeaderboard/fetchAuctionLeaderboard",
  async (auctionId, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/leaderboard/${auctionId}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const auctionLeaderboardSlice = createSlice({
  name: "auctionLeaderboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuctionLeaderboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAuctionLeaderboard.fulfilled, (state, action) => {
        state.loading = false;
        state.bidders = action.payload;
      })
      .addCase(fetchAuctionLeaderboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default auctionLeaderboardSlice.reducer;
