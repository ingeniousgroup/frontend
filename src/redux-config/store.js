import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PostPropertySlice from "./PostPropertySlice";
const store = configureStore({
    reducer:{
        user: UserSlice,
        property:PostPropertySlice
    }
});

export default store;