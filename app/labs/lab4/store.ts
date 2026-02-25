// store.ts
import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../lab4/redux/hello/helloReducer";

// Create the store with the correct reducer mapping
export const store = configureStore({
  reducer: {
    hello: helloReducer, // ✅ slice name matches exported reducer
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;