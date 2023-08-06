import React from 'react'
import styles from './MyButton.module.css'
const MyButton = ({ icon: IconComponent, text, iconAlign, onClick }) => {
  return (
    <button onClick={onClick} className={styles.saveBtn}>
      {IconComponent && iconAlign == 'left' && (
        <IconComponent className={styles.icoSvg} />
      )}
      <h4>{text}</h4>

      {IconComponent && iconAlign == 'right' && (
        <IconComponent className={styles.icoSvg} />
      )}
    </button>
  )
}

export default MyButton
