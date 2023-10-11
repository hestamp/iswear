import React from 'react'
import styles from './Settings.module.css'
import { useMyContext } from '../../context/GeneralContext'
import { settingPage } from '../../../data/static'
import Footer from '../../components/Footer/Footer'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useTheme } from '../../context/ThemeContext'
const Settings = () => {
  const { lang, setLang, firstName, setFirstName, secondName, setSecondName } =
    useMyContext()
  const { themeMode, setMode } = useTheme()
  const clearChache = () => {
    localStorage.clear()
    setLang('ENG')
    setMode('light')
    setFirstName('')
    setSecondName('')
  }

  return (
    <div className={styles.setting}>
      <div className={styles.logo}>
        <h1>{settingPage.name[lang]}</h1>
      </div>
      <div className={styles.statBlock}>
        <div className={styles.oneBlock}>
          <h4>{settingPage.player[lang]} 1</h4>
          <p>{firstName || '-'}</p>
        </div>
        <div className={styles.oneBlock}>
          <h4>{settingPage.player[lang]} 2</h4>
          <p>{secondName || '-'}</p>
        </div>
        <div className={styles.oneBlock}>
          <h4>{settingPage.theme[lang]}</h4>
          <p>{themeMode}</p>
        </div>
        <div className={styles.oneBlock}>
          <h4>{settingPage.lang[lang]}</h4>
          <p>{lang}</p>
        </div>
      </div>
      <MyButton onClick={clearChache}>{settingPage.clear[lang]}</MyButton>
      <Footer />
    </div>
  )
}

export default Settings
