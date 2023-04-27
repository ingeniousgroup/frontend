import { createSlice } from "@reduxjs/toolkit"

const Slice = createSlice({
    name : 'postProperty',
    initialState:{
        PostProperty:[]
    },
    reducers:{
        setProperty : (state,action)=>{
            let data = action.payload;
            console.log(data)
            state.PostProperty = data;
            console.log(state.PostProperty)
        }
    }
});

export const {setUser} = Slice.actions;
export default Slice.reducer;
    