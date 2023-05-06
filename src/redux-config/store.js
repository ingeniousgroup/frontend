import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PropertySlice from "./PropertySlice";
import nearByHouseSlice from "./nearByHouseSlice";
import locationSlice from "./locationSlice";
import propertyOfOwnerSlice from "./propertyOfOwnerSlice";
import subscriptionSlice from "./subscriptionSlice";
import wishListSlice from "./wishListSlice";
import tenantRequestSlice from "./tenantRequestSlice";
import categoryCountSlice from "./categoryCountSlice";
console.log("store in...");
const store = configureStore({
    reducer:{
        user: UserSlice,
        property:PropertySlice,
        nearByHouse : nearByHouseSlice,
        location : locationSlice,
        ownerProperty:propertyOfOwnerSlice,
        subscription:subscriptionSlice,
        wishList:wishListSlice,
        ownerSubscription:subscriptionSlice,
        requestTenants:tenantRequestSlice,
        categoryCount:categoryCountSlice
    }
});

export default store;