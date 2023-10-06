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
      <button className={styles.backButt} onClick={goBack}>
        <span>
          <RiArrowLeftSLine />
        </span>
      </button>
      <h4 className={styles.pathName}>Розділ</h4>
      <button style={{ opacity: 0 }} className={styles.backButt}>
        <span>
          <RiArrowRightSLine />
        </span>
      </button>
    </div>
  )
}

export default BackBar
