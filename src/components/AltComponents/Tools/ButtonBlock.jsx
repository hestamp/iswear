import React from 'react'
import styles from './ButtonBlock.module.css'

const ButtonBlock = ({ onClick, icon: IconComponent, label }) => {
  return (
    <button className={styles.buttBlock} onClick={onClick}>
      {IconComponent && <IconComponent className={styles.roundIco} />}
      <h3>{label}</h3>
    </button>
  )
}

export default ButtonBlock
