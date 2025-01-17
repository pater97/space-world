import { configureStore } from "@reduxjs/toolkit";
import requestManagerReducer from './slice/requestManagerSlice';


const store = configureStore({
    reducer:{
        requestManager:requestManagerReducer
    }
})

export default store