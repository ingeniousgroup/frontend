// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import apiEndPoint from "./WebApi/api";
// import { useLocation } from "react-router-dom";

// window.alert("Near By house Slice...");

// const Slice = createSlice({
//    name : 'nearByHouse',
//    initialState : {
//     nearByHouseList : [],
//     isLoding : false,
//     error: null
//    },
//    extraReducers:(builder)=>{
//         builder.addCase(nearByHouse.pending,(state,action)=>{
//            state.isLoding = true;    
//        }).addCase(nearByHouse.fulfilled,(state,action)=>{
//            state.nearByHouseList = action.payload.property
//        }).addCase(nearByHouse.rejected,(state,action)=>{
//            state.isLoding = false;
//            state.error = "Oops somthing went Wrong";
//        })
//    }
// }); 

// export default Slice.reducer;