import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';

// ✅ GLOBAL CSS IMPORTS
import "./styles/theme.css";
import "./styles/auth.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer/>
  </StrictMode>,
)
