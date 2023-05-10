import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "./WebApi/api";
export const fetchCategoryCount =createAsyncThunk ("propertyList/fetchPropertyList",async()=>{
    let response = await axios.get(apiEndPoint.CATEGORY_COUNT);
    return response.data;
});
const Slice = createSlice({
   name : 'categoryCount',
   initialState : {
    categoryCount : {},
    isLoding : false,
    error: null
   },
   extraReducers:(builder)=>{
        builder.addCase(fetchCategoryCount.pending,(state,action)=>{
           state.isLoding = true;    
       }).addCase(fetchCategoryCount.fulfilled,(state,action)=>{
           state.categoryCount = action.payload
       }).addCase(fetchCategoryCount.rejected,(state,action)=>{
           state.isLoding = false;
           state.error = "Oops somthing went Wrong";
       })
   }
}); 

export default Slice.reducer;