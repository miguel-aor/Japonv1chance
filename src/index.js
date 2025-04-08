import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Importa tus estilos Tailwind/CSS
import 'leaflet/dist/leaflet.css'; // Importa los estilos de Leaflet
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
