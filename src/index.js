import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

// translations imports
import language_en from '../src/translations/en.json';
import language_pl from '../src/translations/pl.json';
import i18next from 'i18next';
import { I18NextReactProvider } from 'i18next-react';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pl",
  resources: {
    pl: {
      global: language_pl,
    },
    en: {
      global: language_en,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18NextReactProvider i18next={i18next}>
      <App />
    </I18NextReactProvider>
    
  </React.StrictMode>
);
