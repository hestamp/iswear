import React from 'react'
import styles from './BackBar.module.css'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const BackBar = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className={styles.backBar}>
      <h4 className={styles.myButt} onClick={goBack}>
        <span>
          <RiArrowLeftSLine />
        </span>
        Назад
      </h4>
      <h4 className={styles.pathName}>Розділ</h4>
      <h4 style={{ opacity: '0' }} className={styles.myButt}>
        Далі
        <span>
          <RiArrowRightSLine />
        </span>
      </h4>
    </div>
  )
}

export default BackBar
