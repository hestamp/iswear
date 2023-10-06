import React from 'react'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'
import { categoriesArr } from '../../../data/static'
import { useMyContext } from '../../context/GeneralContext'

const MainPage = () => {
  const { setPickedMode } = useMyContext()

  return (
    <>
      <div className={styles.categoryBlock}>
        <h1>Prove It</h1>
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
                <img className={styles.imgIco} src="/vite.svg" />
                <h4 className={styles.dayTimeP}>{item.name}</h4>
              </Link>
            ))}
        </div>
      </div>
    </>
  )
}

export default MainPage
