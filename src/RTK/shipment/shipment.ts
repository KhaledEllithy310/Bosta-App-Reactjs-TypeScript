import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IShipment } from "../../interfaces";

interface ShipmentState {
  shipment: IShipment;
}

const initialState: ShipmentState = {
  shipment: {} as IShipment,
};

const ShipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    storeShipment: (state, action) => {
      state.shipment = action.payload;
    },
  },
});

export const { storeShipment } = ShipmentSlice.actions;
export const shipmentSelector = ({ shipment }: RootState) => shipment;

export default ShipmentSlice.reducer;
