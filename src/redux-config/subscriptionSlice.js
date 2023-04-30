import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "./WebApi/api";
import axios from "axios";

export const createSubscription = createAsyncThunk("owner/subscription", async (currentUser) => {
    let response = await axios.post(api.TAKE_SUBSCRIPTION, {userId:currentUser._id,subscriptionPrice:"8999"});
    console.log("=====================================================")
    console.log(response);
    if(response)
        return response.data;
}); 

const Slice = createSlice({
    name : 'subscription',
    initialState:{
        subscription:null,
        isSubscription:false
    },
    reducers:{
        takeSubscription: (state,action)=>{
            state.subscription.push(action.payload);
        },
        expireSubscription:(state,action)=>{
            state.subscription = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createSubscription.pending, (state, action) => {
            
        }).addCase(createSubscription.fulfilled, (state, action) => {
            state.subscription = action.payload
        }).addCase(createSubscription.rejected, (state, action) => {
            state.isSubscription = false;
        })
    }
});

export const {takeSubscription,expireSubscription} = Slice.actions;
export default Slice.reducer;