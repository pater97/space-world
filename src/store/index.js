import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "./slice/peopleSlice";

const store = configureStore({
    reducer:{
        people:peopleSlice
    }
})

export default store