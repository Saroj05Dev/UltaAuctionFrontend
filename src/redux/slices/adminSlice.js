// Redux slice for admin dashboard data management
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axiosInstance';
import { toast } from 'react-toastify';
const initialState = {
    dashboardData: null,
    loading: false,
    error: null
}

export const fetchDashboardData = createAsyncThunk('admin/fetchDashboardData', async () => {
    try {
        const response = await axiosInstance.get('/dashboard');
        console.log("response from dashboard", response);
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

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDashboardData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDashboardData.fulfilled, (state, action) => {
                state.loading = false;
                console.log("response from dashboard 2", action.payload);
                state.dashboardData = action.payload;
            })
            .addCase(fetchDashboardData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default adminSlice.reducer;