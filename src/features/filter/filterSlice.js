import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tags: [],
  search: "",
//   author: null
};


// create slice
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        tagsSelected: (state, action)=>{
            state.tags.push(action.payload);
        },
        tagsRemoved: (state, action)=>{
            const indexRemoved = state.tags.indexOf(action.payload);

            if(indexRemoved !== -1){
                state.tags.splice(indexRemoved, 1)
            }
        },
        // selectAuthor: (state, action)=>{
        //     state.author = action.payload
        // },
        searched: (state, action)=>{
            state.search = action.payload
        }
    }
});

export default filterSlice.reducer ;
export const {tagsSelected, tagsRemoved, searched, selectAuthor} = filterSlice.actions