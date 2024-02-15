import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import navbarEn from "../i18n/en/navbar.json";
import navbarAr from "../i18n/ar/navbar.json";
import { getDataFromLocalStorage } from "../helpers/Functions";
const resources = {
  en: {
    navbar: navbarEn,
  },
  ar: {
    navbar: navbarAr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: getDataFromLocalStorage("lang") || "ar",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
