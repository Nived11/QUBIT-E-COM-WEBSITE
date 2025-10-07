import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"; // ✅ import auth slice

export const store = configureStore({
  reducer: {
    auth: authReducer, // ✅ add here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
