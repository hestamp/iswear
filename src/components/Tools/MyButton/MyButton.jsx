import React from 'react'
import styles from './MyButton.module.css'
const MyButton = ({ children, onClick, ...rest }) => {
  return (
    <button
      aria-label="Button"
      onClick={onClick}
      {...rest}
      className={styles.allButt}
    >
      {children}
    </button>
  )
}

export default MyButton
