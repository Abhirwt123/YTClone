import { createSlice } from "@reduxjs/toolkit";

const searchSlice =createSlice({
    name:"search",
    initialState:[],
    reducers:{
         addCache:(state,action)=>{
           Object.assign(state,action.payload)
         }
    }
})

export const {addCache}=searchSlice.actions;

export default searchSlice.reducer;