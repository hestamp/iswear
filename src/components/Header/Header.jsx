import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { BsMoonStars, BsSun, BsHouse } from 'react-icons/bs'
import MySelector from '../Tools/MySelector/MySelector'

const Header = () => {
  const { themeMode, setThemeMode } = useTheme()
  const options = [
    { value: 'ENG', text: 'ENG' },
    { value: 'UKR', text: 'UKR' },
  ]
  const [selectedOption, setSelectedOption] = useState(options[0].value)

  const handleOptionSelect = (newOption) => {
    setSelectedOption(newOption)
  }

  return (
    <div className={styles.navbar}>
      <Link className={styles.home} to="/">
        <BsHouse />
      </Link>

      <div onClick={setThemeMode} className={styles.theme}>
        {themeMode == 'light' ? <BsMoonStars /> : <BsSun />}
      </div>
    </div>
  )
}

export default Header
