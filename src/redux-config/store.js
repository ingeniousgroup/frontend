import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PropertySlice from "./PropertySlice";
console.log("store in...");
const store = configureStore({
    reducer:{
        user: UserSlice,
        property:PropertySlice
    }    
});

export default store;