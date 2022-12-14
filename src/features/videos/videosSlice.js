import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videoApi";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ""
};


// async thunk
export const fetchVideos = createAsyncThunk("videos/fetchVideos", 
async({tags, search, author, limit, currentPage})=> {
   const videos = await getVideos({tags, search, author, limit, currentPage})
   return videos ;
});

 
// create slice
const videosSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(fetchVideos.pending, (state)=>{
                state.isError = false
                state.isLoading = true
            })
            .addCase(fetchVideos.fulfilled, (state, action)=>{
                state.isLoading = false
                state.videos = action.payload ;
            })
            .addCase(fetchVideos.rejected, (state, action)=>{
                state.videos = [];
                state.isLoading = false
                state.isError = true ;
                state.error = action.error?.message ;
            });
    },
});

export default videosSlice.reducer ;