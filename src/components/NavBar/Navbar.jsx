import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { BsMoonStars, BsSun, BsHouse } from 'react-icons/bs'
import MyTooltip from '../Tools/MyTooltip/MyTooltip'
const Navbar = () => {
  const { themeMode, setThemeMode } = useTheme()
  return (
    <nav role="navigation" className={styles.navbar}>
      <MyTooltip description="Home" position="bottom">
        <Link className={styles.home} to="/">
          <BsHouse />
        </Link>
      </MyTooltip>
      <MyTooltip
        description="Theme"
        position="bottom"
        className={styles.theme}
        onClick={setThemeMode}
      >
        {themeMode == 'light' ? <BsMoonStars /> : <BsSun />}
      </MyTooltip>
    </nav>
  )
}

export default Navbar
