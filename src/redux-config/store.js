import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PropertySlice from "./PropertySlice";
import nearByHouseSlice from "./nearByHouseSlice";
import locationSlice from "./locationSlice";
console.log("store in...");
const store = configureStore({
    reducer:{
        user: UserSlice,
        property:PropertySlice,
        nearByHouse : nearByHouseSlice,
        location : locationSlice
    }
});

export default store;