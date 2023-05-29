import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./WebApi/api";
import axios from "axios";

export const wishList = createAsyncThunk("tenant/wishList", async (currentUser) => {
    let response = await axios.post(api.VIEW_WISHLIST,{userId:currentUser._id});
    console.log("view wishList");
    console.log(response.data[0].wishListItems);
    if(response)
        return response.data[0].wishListItems;
});

const slice = createSlice({
    name: 'wishList',
    initialState: {
        propertyList: [],
        isLoading: false,
        error: null
    },
    reducers:{
        setWishList:(state,action)=>{
          state.propertyList = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(wishList.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(wishList.fulfilled, (state, action) => {
            state.propertyList.push(action.payload);
            state.isLoading = false;
        }).addCase(wishList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});
export const {setWishList} = slice.actions;
export default slice.reducer;