import React from 'react'
import styles from './BackBar.module.css'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const BackBar = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className={styles.backBar}>
      <h4 onClick={goBack}>
        <span>
          <RiArrowLeftSLine />
        </span>
        Назад
      </h4>
    </div>
  )
}

export default BackBar
