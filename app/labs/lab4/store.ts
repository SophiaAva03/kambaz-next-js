import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../lab4/redux/hello/helloReducer";

const store = configureStore({
    reducer: { helloReducer }});
    
export type RootState = ReturnType<typeof store.getState>;
export default store;