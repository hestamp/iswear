import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { BsMoonStars, BsSun, BsHouse } from 'react-icons/bs'

const Header = () => {
  const { themeMode, setThemeMode } = useTheme()
  return (
    <nav role="navigation" className={styles.navbar}>
      <Link className={styles.home} to="/">
        <BsHouse />
      </Link>
      <div onClick={setThemeMode} className={styles.theme}>
        {themeMode == 'light' ? <BsMoonStars /> : <BsSun />}
      </div>
    </nav>
  )
}

export default Header
