import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";
import AuctionSliceReducer from "./slices/AuctionSlice";
import BiddingSliceReducer from "./slices/BiddingSlice";
import AdminSliceReducer from "./slices/adminSlice";
import AdminUserSliceReducer from "./slices/adminUserSlice";
import adminReportSliceReducer from "./slices/adminReportSlice";

export const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        auction: AuctionSliceReducer,
        bidding: BiddingSliceReducer,
        admin: AdminSliceReducer,
        adminUser: AdminUserSliceReducer,
        adminReport: adminReportSliceReducer
    },
    devTools: true,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck:  false
        }),
});