import { createSlice } from "@reduxjs/toolkit"

const Slice = createSlice({
    name : 'user',
    initialState:{
        currentUser:null
    },
    reducers:{
        setUser: (state,action)=>{
            let data = action.payload;
            console.log(data)
            state.currentUser = data;
            console.log(state.currentUser)
        },
        removeUser:(state,action)=>{
            state.currentUser = null;
        }
    }
});

export const {setUser,removeUser} = Slice.actions;
export default Slice.reducer;
