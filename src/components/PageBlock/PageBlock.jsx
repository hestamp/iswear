'use client'

import React, { useContext } from 'react'
import styles from './PageBlock.module.css'

import { useLocation } from 'react-router-dom'

const PageBlock = ({ children }) => {
  // const {pathname} = useLocation()

  return <main className={styles.section2}>{children}</main>
}

export default PageBlock
