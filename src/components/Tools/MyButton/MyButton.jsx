import React from 'react'
import styles from './MyButton.module.css'
const MyButton = ({ icon: IconComponent, text, iconAlign, onClick }) => {
  return (
    <button onClick={onClick} className={styles.saveBtn}>
      {IconComponent && iconAlign == 'left' && <IconComponent />}
      <h3>{text}</h3>

      {IconComponent && iconAlign == 'right' && <IconComponent />}
    </button>
  )
}

export default MyButton
