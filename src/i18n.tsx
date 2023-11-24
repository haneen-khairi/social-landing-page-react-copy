// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './i18n/en.json';
import arTranslation from './i18n/ar.json';
import esTranslation from './i18n/es.json';
import frTranslation from './i18n/fr.json';

const resources = {
  en: { translation: enTranslation },
  ar: { translation: arTranslation },
  es: { translation: esTranslation },
  fr: { translation: frTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // Default language
    keySeparator: false, // Allow using dots in keys
    interpolation: {
      escapeValue: false, // React already escapes values, so no need to escape again
    },
  });

export default i18n;
