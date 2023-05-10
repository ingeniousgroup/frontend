import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import PropertySlice from "./PropertySlice";
import nearByHouseSlice from "./nearByHouseSlice";
import locationSlice from "./locationSlice";
import propertyOfOwnerSlice from "./propertyOfOwnerSlice";
import subscriptionSlice from "./subscriptionSlice";
import wishListSlice from "./wishListSlice";
import tenantRequestSlice from "./tenantRequestSlice";
<<<<<<< HEAD
=======
import categoryCountSlice from "./categoryCountSlice";
console.log("store in...");
>>>>>>> 7b5c306a4a792b64703d0c2f48fcce37e15bb2ea
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