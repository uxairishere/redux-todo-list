import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todoSlice.redux";

export default configureStore({
    reducer: {
        tasks: taskReducer,
    }
});