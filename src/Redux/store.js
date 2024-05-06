import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'
import chatSlice from "./chatSlice";
 const store =configureStore({
    reducer:{
        app:appReducer,
        chat:chatSlice
    },
})

export default store;