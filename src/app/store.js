import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../redux/watchSlice";

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
    },
});

export default store;
