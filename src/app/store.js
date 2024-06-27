import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../redux/watchSlice";

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
        // Add other reducers if you have them
    },
});

export default store;
