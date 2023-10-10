'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [themeMode, setMode] = useState('light')

  const setThemeMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
    localStorage.setItem('theme', themeMode == 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme) {
      setMode(theme)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ setThemeMode, themeMode }}>
      <div className={`theme ${themeMode}`}>
        {children}
        <div class="animation-container">
          <div class="background-transition"></div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Theme context is oudside of Theme Provider')
  }
  return context
}
