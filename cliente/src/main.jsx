import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import App from './App.jsx'
import './index.css'







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
