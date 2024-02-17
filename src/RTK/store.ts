import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import LangSlice from "./features/LangSlice/LangSlice";
import ShipmentSlice from "./shipment/shipment";

// ...
const store = configureStore({
  reducer: {
    lang: LangSlice,
    shipment: ShipmentSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
