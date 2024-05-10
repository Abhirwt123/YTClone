import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
import authSlice from "./authSlice";
 const store =configureStore({
    reducer:{
        auth:authSlice,
        app:appSlice,
        chat:chatSlice,
        search:searchSlice
    },
})

export default store;