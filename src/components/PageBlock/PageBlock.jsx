'use client'

import React, { useContext } from 'react'
import styles from './PageBlock.module.css'

import { useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

const PageBlock = ({ children, pt }) => {
  // const {pathname} = useLocation()

  const { themeMode } = useContext(ThemeContext)
  return (
    <main
      style={pt && { paddingTop: '8px' }}
      className={`${styles.section2} ${
        themeMode == 'light' ? styles.light : styles.dark
      }`}
    >
      {children}
    </main>
  )
}

export default PageBlock
