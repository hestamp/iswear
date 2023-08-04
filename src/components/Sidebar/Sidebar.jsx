import React from 'react'
import styles from './Sidebar.module.css'
import { uSidebar } from '../../store/logicSlice'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'

import { PiPathBold } from 'react-icons/pi'
import { GoProjectRoadmap } from 'react-icons/go'

const menuLinks = [
  {
    name: 'Головна',
    link: '/',
    icon: <GoProjectRoadmap />,
  },

  {
    name: 'Режими',
    link: '/mypaths',
    icon: <PiPathBold />,
  },

  // {
  //   name: 'Налаштування',
  //   link: '/settings',
  //   icon: <TbSettings />,
  // },
  // {
  //   name: 'Про нас',
  //   link: '/about',
  //   icon: <RiInformationLine />,
  // },
]

const Sidebar = () => {
  const dispatch = useDispatch()
  const toggleSide = () => {
    dispatch(uSidebar(false))
  }
  return (
    <div className={styles.mainSide}>
      <div className={styles.section1}>
        <MdOutlineKeyboardArrowLeft
          className={styles.ico0}
          onClick={toggleSide}
        />
        <div className={styles.logoDiv}>
          <img src="/vite.svg" />
          <h3>iSwear</h3>
        </div>
        <MdOutlineKeyboardArrowLeft
          className={styles.icoClose}
          onClick={toggleSide}
        />
      </div>
      <div className={styles.section2}>
        <nav className={`${styles.pagesBlock}`}>
          {menuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              onClick={toggleSide}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              <div className={styles.textIcoBLock}>
                {React.cloneElement(link.icon, {
                  className: styles.menuIcon,
                })}
                <h3>{link.name}</h3>
              </div>
              {link.new && <span className={styles.newDiv}>New</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
