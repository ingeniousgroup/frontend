import { createSlice } from "@reduxjs/toolkit"

const Slice = createSlice({
    name : 'user',
    initialState:{
        currentUser:null,
        isLoading:true
    },
    reducers:{
        setUser: (state,action)=>{
            let data = action.payload;
            state.currentUser = data;
            state.isLoading = false;
        },
        removeUser:(state,action)=>{
            state.currentUser = null;
            state.isLoading = true;
        }
    }
});

export const {setUser,removeUser} = Slice.actions;
export default Slice.reducer;
