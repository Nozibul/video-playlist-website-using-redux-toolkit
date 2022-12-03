import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ""
};


// async Thunk and return actions
export const fetchTags = createAsyncThunk("tags/fetchTags", async ()=>{
    const tags = await getTags() ;
    return tags ;
});


// create slice
const tagsSlice = createSlice({
    name:"tags",
    initialState,
    extraReducers: (builder)=>{
        builder
            .addCase(fetchTags.pending, (state)=>{
                state.isError = false
                state.isLoading = true
            })
            .addCase(fetchTags.fulfilled, (state, action)=>{
                state.isLoading = false
                state.tags = action.payload
            })
            .addCase(fetchTags.rejected, (state, action)=>{
                state.tags = [];
                state.isLoading = false
                state.isError = true ;
                state.error = action.error?.message ;
            });
    },
});

export default tagsSlice.reducer ;