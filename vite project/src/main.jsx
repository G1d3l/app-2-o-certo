import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'; // Certifique-se de que o caminho do CSS está correto
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
