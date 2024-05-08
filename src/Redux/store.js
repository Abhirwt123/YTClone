import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice'
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";
 const store =configureStore({
    reducer:{
        app:appReducer,
        chat:chatSlice,
        search:searchSlice
    },
})

export default store;