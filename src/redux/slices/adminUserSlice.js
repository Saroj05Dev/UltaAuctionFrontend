import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axiosInstance from "../../helpers/axiosInstance";

const initialState = {
    users: [],
    loading: false,
    error: null
}

export const fetchAllUsers = createAsyncThunk('adminUser/fetchAllUsers', async () => {
    try {
        const response = await axiosInstance.get('/users');
        console.log("response from users", response);
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

export const adminUserSlice = createSlice({
    name: 'adminUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                console.log("response from users 2", action.payload);
                state.users = action.payload.data;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default adminUserSlice.reducer;