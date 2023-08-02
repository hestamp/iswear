import React from 'react'
import styles from './Sidebar.module.css'
import { uSidebar } from '../../store/logicSlice'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { TbSettings } from 'react-icons/tb'

import { RiInformationLine } from 'react-icons/ri'
import { PiPathBold } from 'react-icons/pi'
import { GoProjectRoadmap } from 'react-icons/go'

import { FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import MyTooltip from '../Tools/MyTooltip/MyTooltip'
const menuLinks = [
  {
    name: 'Головна',
    link: '/',
    icon: <GoProjectRoadmap />,
  },

  // {
  //   name: 'Режими',
  //   link: '/mypaths',
  //   icon: <PiPathBold />,
  // },

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

const socLinks = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/tomhestamp/',
    icon: FaInstagram,
  },

  {
    title: 'Pinterest',
    link: 'https://www.instagram.com/tomhestamp/',
    icon: FaPinterest,
  },
  {
    title: 'Twitter',
    link: 'https://www.instagram.com/tomhestamp/',
    icon: FaTwitter,
  },
]

const emptyFunc = () => {}

const SocButton = ({ title, icon: IconComponent, link }) => (
  <MyTooltip
    actFunc={emptyFunc}
    insider={
      <Link to={link} target="_blank" rel="noreferrer">
        <div className={styles.socB}>
          {' '}
          <IconComponent className={styles.socIcon} />
        </div>
      </Link>
    }
    description={title}
    duration={100}
  />
)

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
        <h3>iSwear</h3>
        <MdOutlineKeyboardArrowLeft
          className={styles.icoClose}
          onClick={toggleSide}
        />
      </div>
      <div className={styles.section2}>
        <div className={styles.socBlock}>
          {socLinks.map((social) => (
            <SocButton
              key={social.title}
              link={social.link}
              title={social.title}
              icon={social.icon}
            />
          ))}
        </div>
        <nav className={`${styles.pagesBlock}`}>
          {menuLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive && 'gray',
                  color: isActive && 'white',
                }
              }}
              onClick={toggleSide}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.normalLink
              }
            >
              <div className={styles.textIcoBLock}>
                {React.cloneElement(link.icon, {
                  className: styles.menuIcon,
                })}
                <span>{link.name}</span>
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
