import { createSlice } from "@reduxjs/toolkit";


const authSlice=createSlice({
    name:'auth',
    initialState:{
        isAuthenticate:false,
        userData:[]
    },
    reducers:{
       setUserData:(state,action)=>{
           state.userData.push(action.payload);
           state.isAuthenticate=true;
           localStorage.setItem('userData',JSON.stringify(action.payload))
       }
    }
});

export const {setUserData}=authSlice.actions;
export default authSlice.reducer;