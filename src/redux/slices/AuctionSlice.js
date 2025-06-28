import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import { toast } from "react-toastify";

const intialState = {
  auctions: [],
  singleAuction: null,
  loading: false,
  error: null,
};

export const fetchAuctions = createAsyncThunk(
  "auction/fetchAuctions",
  async () => {
    try {
      const response = await axiosInstance.get("/auctions");
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
  }
);

export const fetchAuctionById = createAsyncThunk(
  "auction/fetchAuctionById",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/auctions/${id}`);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createAuction = createAsyncThunk(
  "auction/createAuction",
  async (data) => {
    try {
      const response = await axiosInstance.post("/auctions", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
  }
);

export const deleteAuction = createAsyncThunk(
  "auction/deleteAuction",
  async (id) => {
    try {
      const response = await axiosInstance.delete(`/auctions/${id}`);
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
  }
);

export const updateAuction = createAsyncThunk(
  "auction/updateAuction",
  async ({ id, formData }) => {
    try {
      const response = await axiosInstance.patch(`/auctions/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
  }
);

export const declareWinner = createAsyncThunk(
  "auction/declareWinner",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/auctions/${id}/declare-winner`
      );
      console.log("response from declare winner", response);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      const apiResponse = await response;
      return apiResponse.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to declare winner");
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const auctionSlice = createSlice({
  name: "auction",
  initialState: intialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuctions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuctions.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.auctions = action?.payload?.data?.data;
      })
      .addCase(fetchAuctions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteAuction.fulfilled, (state, action) => {
        const deletedId = action.meta.arg; // The `id` passed to the thunk
        state.auctions = state.auctions.filter(
          (auction) => auction._id !== deletedId
        );
      })
      .addCase(updateAuction.fulfilled, (state, action) => {
        const updated = action.payload.data.data;
        const index = state.auctions.findIndex((a) => a._id === updated._id);
        if (index !== -1) {
          state.auctions[index] = updated;
        }
      })
      .addCase(createAuction.fulfilled, (state, action) => {
        const newAuction = action.payload.data;
        state.auctions.push(newAuction);
      })
      .addCase(fetchAuctionById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleAuction = action.payload.data;
      })
      .addCase(declareWinner.fulfilled, (state, action) => {
        const updatedAuction = action.payload.data;
        const index = state.auctions.findIndex(
          (a) => a._id === updatedAuction._id
        );
        if (index !== -1) {
          state.auctions[index] = updatedAuction;
        }
      })
  },
});

export default auctionSlice.reducer;
