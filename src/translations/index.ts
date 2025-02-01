import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { en, pt } from "./langs"

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, pt: { translation: pt } },
  lng: "pt",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

export default i18n
