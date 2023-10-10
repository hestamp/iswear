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
                <h4 className={styles.dayTimeP}>{item.name}</h4>
              </Link>
            ))}
        </div>
        <div className={styles.footer}>
          <p>
            Developed by{' '}
            <span>
              <Link
                className={styles.link}
                target="_blank"
                to="https://hestamp.com"
              >
                Tom Hestamp
              </Link>
            </span>
          </p>
          <p>Copyright 2023</p>
        </div>
      </div>
    </>
  )
}

export default MainPage
