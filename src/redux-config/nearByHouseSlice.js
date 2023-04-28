import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "./WebApi/api";
export const nearByHouse =createAsyncThunk ("nearByHouse/fetchNearByHouse",async()=>{
    let response = await axios.post(apiEndPoint.NEAR_BY_HOUSE_LIST,{});
    return response.data;
});
const Slice = createSlice({
   name : 'nearByHouse',
   initialState : {
    nearByHouseList : [],
    isLoding : false,
    error: null
   },
   extraReducers:(builder)=>{
        builder.addCase(nearByHouse.pending,(state,action)=>{
           state.isLoding = true;    
       }).addCase(nearByHouse.fulfilled,(state,action)=>{
           state.nearByHouseList = action.payload.property
       }).addCase(nearByHouse.rejected,(state,action)=>{
           state.isLoding = false;
           state.error = "Oops somthing went Wrong";
       })
   }
}); 

export default Slice.reducer;