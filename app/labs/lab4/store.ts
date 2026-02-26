import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../lab4/redux/hello/helloReducer";
import counterReducer from "../lab4/redux/CounterRedux/counterReducer";

const store = configureStore({
    reducer: { 
        helloReducer,
        counterReducer,
    }});
    
export type RootState = ReturnType<typeof store.getState>;
export default store;