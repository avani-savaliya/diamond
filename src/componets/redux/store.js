import { configureStore } from "@reduxjs/toolkit";
import BannerSlice from "./slice/BannerSlice";

const store = configureStore({
    reducer:{
        banner:BannerSlice,
    }
})

export default store;