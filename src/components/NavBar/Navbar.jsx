import React, { useContext } from 'react'
import styles from './Navbar.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { uSidebar } from '../../store/logicSlice'
import { LuHome } from 'react-icons/lu'

import { ThemeContext } from '../../context/ThemeContext'
import MyTooltip from '../Tools/MyTooltip/MyTooltip'
import { BiMoon, BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const dispatch = useDispatch()
  const toggleSide = () => {
    dispatch(uSidebar(true))
  }

  const { setThemeMode, themeMode } = useContext(ThemeContext)

  return (
    <nav role="navigation" className={styles.navDiv}>
      <section className={styles.menuDiv}>
        <MyTooltip description={'Menu'} duration={100}>
          {/* <button onClick={toggleSide} className={styles.themetoggle}>
            <RiMenu2Fill className={styles.icon} />
          </button> */}
          <Link className={styles.themetoggle} to="/">
            <LuHome className={styles.icon} />
          </Link>
        </MyTooltip>
      </section>

      <section className={styles.profileDiv}>
        <MyTooltip
          description={themeMode == 'light' ? 'Dark Mode' : 'Light Mode'}
          duration={100}
        >
          <button onClick={setThemeMode} className={styles.themetoggle}>
            {themeMode == 'light' ? (
              <BiMoon className={styles.icon} />
            ) : (
              <BiSun className={styles.icon} />
            )}
          </button>
        </MyTooltip>
      </section>
    </nav>
  )
}

export default NavBar
