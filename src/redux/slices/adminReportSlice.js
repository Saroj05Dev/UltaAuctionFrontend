import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
import { toast } from "react-toastify";

const initialState = {
    reports: [],
    loading: false,
    eroror: null
}

export const fetchAllReports = createAsyncThunk('adminReport/fetchAllReports', async () => {
    try {
        const response = await axiosInstance.get('/reports');
        console.log("response from reports", response);
        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error(response.data.message);
        }
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

export const adminReportSlice = createSlice({
    name: 'adminReport',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllReports.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllReports.fulfilled, (state, action) => {
                state.loading = false;
                console.log("response from reports 2", action.payload);
                state.reports = action.payload.data;
            })
            .addCase(fetchAllReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default adminReportSlice.reducer;