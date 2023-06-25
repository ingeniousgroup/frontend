import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./WebApi/api";
import axios from "../interceptor";
import { data } from "jquery";

export const viewProperty = createAsyncThunk("owner/houseRequestFromTenant", async (currentUser) => {
    let response = await axios.post(api.VIEW_PROPPERTY_OF_OWNER, {userId:currentUser._id});
    console.log("mohit")
    console.log(response.data.property);
    console.log("mohit")
    if(response.data.status)
        return response.data.property;
    else
       console.log("kuch ho gaya re bhai..........");
});

const slice = createSlice({
    name: 'ownerkiProperty',
    initialState: {
        properties: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(viewProperty.pending, (state, action) => {
            state.isLoading = true;
        }).addCase(viewProperty.fulfilled, (state, action) => {
            console.log("*")
            console.log(action.payload);
            let data = action.payload;
            console.log("*");
            state.properties = data;
            state.isLoading = false;
        }).addCase(viewProperty.rejected, (state, action) => {
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        })
    }
});

export default slice.reducer;