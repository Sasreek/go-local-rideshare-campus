
import { createRoot } from 'react-dom/client'
import React from 'react'; // Added React import
import App from './App.tsx'
import './index.css'

// Make sure we have a valid DOM element
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
