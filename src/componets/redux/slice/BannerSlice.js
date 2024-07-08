import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInstance } from "../../../api/axiosApi";

const initialState = {
    banner: [],
    bannerTotal:0,
    isLoading: false,
    isSkeleton: false,
}

export const bannerGet = createAsyncThunk("banner/showBanner",async (payload) => {
    return apiInstance.get(`banner/showBanner?page=${payload.page}&limit=${payload.limit}&search=${payload.search}`,payload)
})






const BannerSlice = createSlice({
    name:"BannerSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(bannerGet.pending, (state, action) => {
            state.isSkeleton = action.meta.arg.command;
        })
        builder.addCase(bannerGet.fulfilled, (state, action) => {
            state.banner = action.payload.banner;
            state.bannerTotal = action.payload.bannerTotal;
            state.isSkeleton = false
        })
        builder.addCase(bannerGet.rejected, (state, action) => {
            state.isSkeleton = false;
        })
    }
    
})

export default BannerSlice.reducer;