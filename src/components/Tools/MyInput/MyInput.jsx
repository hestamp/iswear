import React from 'react'
import styles from './MyInput.module.css'
const MyInput = ({
  placeholder,
  setFunc,
  value,
  maxLength,
  minLength,
  leftIco,
  leftFunc,
}) => {
  return (
    <div className={styles.myInput}>
      {' '}
      <div className={styles.inputDiv}>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => setFunc(e.target.value)}
          maxLength={maxLength}
          minLength={minLength}
          type="text"
        />
      </div>
      {leftIco && (
        <div onClick={leftFunc} className={styles.inputIconLeft}>
          {leftIco}
        </div>
      )}
    </div>
  )
}

export default MyInput
