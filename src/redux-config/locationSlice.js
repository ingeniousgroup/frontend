import {  createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
   name : 'location',
   initialState : {
    latitude : 0,
    longitude :0
   },
   reducers : {
    setLocation: (state,action)=>{
     const {latitude,longitude} = action.payload;
     console.log(latitude+"   "+longitude);
    }
   }
   
}); 

export default Slice.reducer;
export const {setLocation} = Slice.actions;