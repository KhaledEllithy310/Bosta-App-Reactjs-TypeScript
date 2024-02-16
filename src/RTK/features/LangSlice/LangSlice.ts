import { createSlice } from "@reduxjs/toolkit";
import {
  getDataFromLocalStorage,
  storeInLocalStorage,
} from "../../../helpers/Functions";
import { RootState } from "../../store";

interface LangState {
  lang: string;
}

const initialState: LangState = {
  lang: getDataFromLocalStorage("lang") || "ar",
};

const LangSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    enToAr: (state) => {
      state.lang = "ar";
      storeInLocalStorage("lang", "ar");
      document.documentElement.lang = "ar";
    },
    arToEn: (state) => {
      state.lang = "en";
      storeInLocalStorage("lang", "en");
      document.documentElement.lang = "en";
    },
  },
});

export const { enToAr, arToEn } = LangSlice.actions;
export const langSelector = ({ lang }: RootState) => lang;

export default LangSlice.reducer;
