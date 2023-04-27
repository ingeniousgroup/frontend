import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiEndPoint from "./WebApi/api";
export const fetchPropertyList =createAsyncThunk ("propertyList/fetchPropertyList",async()=>{
    let response = await axios.get(apiEndPoint.PROPERTY_LIST);
    return response.data;
});
const Slice = createSlice({
   name : 'property',
   initialState : {
    propertyList : [],
    isLoding : false,
    error: null
   },
   extraReducers:(builder)=>{
        builder.addCase(fetchPropertyList.pending,(state,action)=>{
           state.isLoding = true;    
       }).addCase(fetchPropertyList.fulfilled,(state,action)=>{
           state.propertyList = action.payload.property
       }).addCase(fetchPropertyList.rejected,(state,action)=>{
           state.isLoding = false;
           state.error = "Oops somthing went Wrong";
       })
   }
}); 

export default Slice.reducer;