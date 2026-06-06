import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en-US.json";
import ru from "../locales/ru-RU.json";
import cz from "../locales/cs-CZ.json";

export const lngResources = {
  en: en,
  ru: ru,
  cs: cz,
};

const lng = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: lngResources,
  supportedLngs: ["en", "ru", "cs"],
  lng: lng,
  fallbackLng: "en",

  detection: {
    caches: ["localStorage"],
  },

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
