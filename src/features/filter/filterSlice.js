import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tags: [],
  search: "",
  author: null,
  pagination:{
    currentPage: 1,
    limit: 5,
  }
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
        selectAuthor: (state, action)=>{
            state.author = action.payload
        },
        searched: (state, action)=>{
            state.search = action.payload
        },
        clearFilters: (state) =>{
            state.tags = [];
            state.search = "";
            state.author = null
        },
        setLimit: (state, action) => {
            state.pagination.limit = parseInt(action.payload) || 5;
        },
        setPage: (state, action) => {
            state.pagination.currentPage = parseInt(action.payload) || 1;
        },
      
    }
});

export default filterSlice.reducer ;
export const { 
    setLimit,
    setPage, 
    clearFilters, 
    tagsSelected, 
    tagsRemoved, 
    searched, 
    selectAuthor } = filterSlice.actions