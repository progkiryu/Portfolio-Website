import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Portfolio.jsx'
import "./index.css"

export function isDev() {
  return import.meta.env.NODE_ENV === "development";
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
