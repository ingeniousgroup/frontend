import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PropertySlice from "./PropertySlice";
import nearByHouseSlice from "./nearByHouseSlice";
import locationSlice from "./locationSlice";
import requestByTenantSlice from "./requestByTenantSlice";
import propertyOfOwnerSlice from "./propertyOfOwnerSlice";
import subscriptionSlice from "./subscriptionSlice";
console.log("store in...");
const store = configureStore({
    reducer:{
        user: UserSlice,
        property:PropertySlice,
        nearByHouse : nearByHouseSlice,
        location : locationSlice,
        tenantRequest:requestByTenantSlice,
        ownerProperty:propertyOfOwnerSlice,
        subscription:subscriptionSlice
    }
});

export default store;