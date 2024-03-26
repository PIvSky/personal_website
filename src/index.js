import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// translations imports

import lang_en from '../src/translations/en/global.json';
import lang_pl from '../src/translations/pl/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';


i18next.init({
  interpolation: { escapeValue: false },
  lng: "pl",
  resources: {
    pl: {
      global: lang_pl,
    },
    en: {
      global: lang_en,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
