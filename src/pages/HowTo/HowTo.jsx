import React from 'react'
import styles from './HowTo.module.css'
import { useMyContext } from '../../context/GeneralContext'
import { howToPage } from '../../../data/static'
import Footer from '../../components/Footer/Footer'
const HowTo = () => {
  const { lang } = useMyContext()

  return (
    <div className={styles.scroll}>
      <div className={styles.howto}>
        <div className={styles.logo}>
          <h1>{howToPage.name[lang]}</h1>
        </div>
        <div className={styles.textBlock}>
          {howToPage.desc[lang].map((text, id) => (
            <p key={id}>{text}</p>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default HowTo
