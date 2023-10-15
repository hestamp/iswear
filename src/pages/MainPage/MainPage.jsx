import React, { useEffect } from 'react'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import { categoriesArr } from '../../../data/static'
import { useMyContext } from '../../context/GeneralContext'
import Footer from '../../components/Footer/Footer'
import { useTheme } from '../../context/ThemeContext'

const MainPage = () => {
  const { setPickedMode, lang, setLang } = useMyContext()

  const { setPlayerColor } = useTheme()

  useEffect(() => {
    setPlayerColor('')
  }, [])

  return (
    <>
      <div className={styles.categoryBlock}>
        <div className={styles.logo}>
          <img className={styles.imgIco} src="/vite.svg" />
          <h1>Prove It</h1>
        </div>
        <div className={styles.dayCarousel}>
          {categoriesArr &&
            categoriesArr.length &&
            categoriesArr.map((item, id) => (
              <Link
                key={id}
                to={item.link}
                onClick={() => setPickedMode(item.link)}
                className={styles.oneBlock}
              >
                {<item.ico />}
                <h4 className={styles.dayTimeP}>{item.name[lang]}</h4>
              </Link>
            ))}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainPage
