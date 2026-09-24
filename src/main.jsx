import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './HomePage.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { MotionConfig } from 'motion/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Respeta "reducir movimiento" del sistema operativo en todas las animaciones */}
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </MotionConfig>
  </React.StrictMode>,
)
