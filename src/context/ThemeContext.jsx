'use client'

import { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uSidebar } from '../store/logicSlice'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [themeMode, setMode] = useState('light')
  const { sidebar } = useSelector((state) => state.logic)

  const setThemeMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const closeRest = () => {
    if (sidebar) {
      dispatch(uSidebar(false))
    }
  }

  return (
    <ThemeContext.Provider value={{ setThemeMode, themeMode }}>
      <div onClick={closeRest} className={`theme ${themeMode}`}>
        {' '}
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
