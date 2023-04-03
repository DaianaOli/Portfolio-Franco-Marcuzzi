import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "../Data/es/translation.json"
import en from "../Data/en/translation.json"

const resources = {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  };

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Integra i18next con React
  .init({
    fallbackLng: "es", // Idioma por defecto
    debug: true, // Activa el modo de depuración
    interpolation: {
      escapeValue: false // Evita la necesidad de escapar los valores interpolados
    },
    resources: resources,
  });

export default i18n;
