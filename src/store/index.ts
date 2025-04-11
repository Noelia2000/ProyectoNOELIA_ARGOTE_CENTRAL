import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/slice'; 

const persisteanceLocalStorageMiddleware=(store) =>(next)=>(action)=>{
    next(action);
    localStorage.setItem("__redux__State__",JSON.stringify(store.getState()));

};

export const store = configureStore({
    reducer:{
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persisteanceLocalStorageMiddleware),
});
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;

