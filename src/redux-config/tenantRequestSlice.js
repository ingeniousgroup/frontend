import axios from "axios";
import api from "./WebApi/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const tenantRequest = createAsyncThunk("owner/tenantRequest", async (currentUser) => {
    let response = await axios.post(api.REQUEST_BY_TENANTS, {ownerId:currentUser._id});
    
    if(response.data.status)
        return response.data.result;
    else
       console.log("something went wrong inside tenant slice");
});

const slice = createSlice({
    name: 'tenantRe',
    initialState: {
        requestTenant: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(tenantRequest.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(tenantRequest.fulfilled, (state, action) => {
            let data = action.payload;
            state.requestTenant = data;
            state.isLoading = false;
        }).addCase(tenantRequest.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});

export default slice.reducer;