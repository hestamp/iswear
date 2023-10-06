import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { GeneralProvider } from './context/GeneralContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GeneralProvider>
        <Router>
          <App />
        </Router>
      </GeneralProvider>
    </ThemeProvider>
  </React.StrictMode>
)
