import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ShipmentState {}

const initialState: ShipmentState = {};

const ShipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {},
});

// export const {} = ShipmentSlice.actions;
export const langSelector = ({ shipment }: RootState) => shipment;

export default ShipmentSlice.reducer;
