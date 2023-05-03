import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./WebApi/api";
import axios from "axios";
import { data } from "jquery";

export const viewProperty = createAsyncThunk("owner/houseRequestFromTenant", async (currentUser) => {
    let response = await axios.post(api.VIEW_PROPPERTY_OF_OWNER, {userId:currentUser._id});
    if(response)
        return response.data.property;
});

const slice = createSlice({
    name: 'ownerProperty',
    initialState: {
        ownerProperty: [],
        isLoading: false,
        error: null
    },
    reducer:{
        setProperty:(state,action)=>{
        let data=action.payload;
        state.ownerProperty=data;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(viewProperty.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(viewProperty.fulfilled, (state, action) => {
            state.ownerProperty.push(action.payload);
            state.isLoading = false;
        }).addCase(viewProperty.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});

export default slice.reducer;