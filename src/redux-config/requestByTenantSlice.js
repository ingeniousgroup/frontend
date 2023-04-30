import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./WebApi/api";
import axios from "axios";

export const fetchRequestByTenant = createAsyncThunk("owner/houseRequestFromTenant", async (currentUser) => {
    let response = await axios.post(api.REQUEST_BY_TENANTS, {userId:currentUser._id});
    console.log("=====================================================")
    console.log(response);
    if(response)
        return response.data;
});

const slice = createSlice({
    name: 'tenantRequest',
    initialState: {
        tenantRequest: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRequestByTenant.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(fetchRequestByTenant.fulfilled, (state, action) => {
            state.tenantRequest.push(action.payload);
            state.isLoading = false;
        }).addCase(fetchRequestByTenant.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});

export default slice.reducer;