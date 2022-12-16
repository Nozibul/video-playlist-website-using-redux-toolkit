import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo, updateReaction } from "./videoAPI";


const initialState = {
    video : {},
    isLoading: false,
    isError: false,
    error: ""
};


// create async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async(id)=>{
    const video = await getVideo(id) ;
    return video ;
});

//  create async thunk for like and unLiked
export const fetchVideoReaction = createAsyncThunk("/video/fetchVideoReaction", 
  async({id, reaction}) =>{
    const updatedReactionVideo = await updateReaction({id, reaction}) ;
    return updatedReactionVideo ;
  }
);


// create slice
const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers:(builder)=>{
        builder
            .addCase(fetchVideo.pending, (state)=>{
                state.isError = false
                state.isLoading = true
            })
            .addCase(fetchVideo.fulfilled, (state, action)=>{
                state.isLoading = false
                state.video = action.payload
            })
            .addCase(fetchVideo.rejected, (state, action)=>{
                state.video = {};
                state.isLoading = false
                state.isError = true ;
                state.error = action.error?.message ;
            });
          
        builder
            .addCase(fetchVideoReaction.pending, (state, action)=>{
                return state ;
            })    
            .addCase(fetchVideoReaction.fulfilled, (state, action)=>{
                 state.video.likes = action.payload.likes ;
                 state.video.unlikes = action.payload.unlikes ;
            })    
            .addCase(fetchVideoReaction.rejected, (state, action)=>{
                return state ;
            })    
    },  
});

export default videoSlice.reducer ;