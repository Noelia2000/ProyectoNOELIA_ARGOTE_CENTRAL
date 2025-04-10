import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/slce'; 

export const store = configureStore({
    reducer:{
        users: usersReducer,
    },
});