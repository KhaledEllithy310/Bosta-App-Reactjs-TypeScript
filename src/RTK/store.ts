import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import LangSlice from "./features/LangSlice/LangSlice";

// ...
const store = configureStore({
  reducer: {
    lang: LangSlice,
    shipment: LangSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
