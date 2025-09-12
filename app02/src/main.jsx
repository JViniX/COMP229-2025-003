import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DemoComponent from './DemoComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DemoComponent/>
  </StrictMode>,
)
