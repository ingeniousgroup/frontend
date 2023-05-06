import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "./WebApi/api";
import axios from "axios";
import { useSelector } from "react-redux";

export const createSubscription = createAsyncThunk("owner/subscription", async (currentObject) => {
    let response = await axios.post(api.TAKE_SUBSCRIPTION, {userId:(currentObject.currentUser._id),subscriptionPrice:(currentObject.price)});
    if(response)
        return response.data;
});

export const showSubscription = createAsyncThunk("owner/showSubscrition",async(currentObject) => {
    console.log("nandu")
    console.log(currentObject);
    console.log("nandu")
    let response = await axios.post(api.SHOW_SUBSCRIPTION, {userId:currentObject._id});
    console.log(response);
    if(response.data.status)
      return response.data;
})

const Slice = createSlice({
    name : 'subscription',
    initialState:{
        subscription:null,
        isSubscription:false
    },
    reducers:{
        expireSubscription:(state,action)=>{
            state.subscription = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createSubscription.pending, (state, action) => {
            state.isSubscription = false;
        }).addCase(createSubscription.fulfilled, (state, action) => {
            state.subscription = action.payload;
            state.isSubscription = true;
        }).addCase(createSubscription.rejected, (state, action) => {
            state.isSubscription = false;
        }).addCase(showSubscription.pending, (state, action) => {
            state.isSubscription = false;
        }).addCase(showSubscription.fulfilled, (state, action) => {
            state.subscription = action.payload;
            state.isSubscription = true;
        }).addCase(showSubscription.rejected, (state, action) => {
            state.isSubscription = false;
        })

    }
});

export const {takeSubscription,expireSubscription} = Slice.actions;
export default Slice.reducer;