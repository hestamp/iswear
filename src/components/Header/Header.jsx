import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { BsMoonStars, BsSun, BsHouse } from 'react-icons/bs'

const Header = () => {
  const { themeMode, setThemeMode, playerColor } = useTheme()

  return (
    <div className={`${styles.navbar} ${playerColor && styles.black}`}>
      <Link className={styles.home} to="/">
        <BsHouse />
      </Link>

      <button onClick={setThemeMode} className={styles.theme}>
        {themeMode == 'light' ? <BsMoonStars /> : <BsSun />}
      </button>
    </div>
  )
}

export default Header
