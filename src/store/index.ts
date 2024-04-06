import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import timezoneReducer from "./slices/timezone/timezoneReducer";

export const store = configureStore({
  reducer: {
    timezone: timezoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
