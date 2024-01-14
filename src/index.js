import React from 'react';
import ReactDOM from 'react-dom/client';
import WhatsappButton from './components/WhatsappButton';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <WhatsappButton />
  </React.StrictMode>
);