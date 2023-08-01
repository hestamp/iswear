import React from 'react'
import styles from './Navbar.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { uSidebar } from '../../store/logicSlice'
import { RiMenu2Fill } from 'react-icons/ri'
import { FaRegUser } from 'react-icons/fa'

const NavBar = () => {
  const dispatch = useDispatch()
  const toggleSide = () => {
    dispatch(uSidebar(true))
  }

  const { pageName } = useSelector((state) => state.temp)
  return (
    <nav role="navigation" className={styles.navDiv}>
      <div className={styles.menuDiv}>
        <button onClick={toggleSide} className={styles.menuToggle}>
          <RiMenu2Fill className={styles.menuIco} />
          <h3 className={styles.menuText}>Меню</h3>
        </button>
      </div>
      <h3>{pageName}</h3>
      <div className={styles.profileDiv}>
        <button className={styles.userBar}>
          <h3>Профіль</h3>
          <FaRegUser className={styles.icoUser} />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
