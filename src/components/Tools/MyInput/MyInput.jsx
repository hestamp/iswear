import React from 'react'
import styles from './MyInput.module.css'
const MyInput = ({
  placeholder,
  setFunc,
  value,
  maxLength,
  minLength,
  bgcolor,
  leftIco,
  rightIco,
}) => {
  return (
    <div className={styles.inputDiv}>
      {leftIco && leftIco}
      <input
        style={{ backgroundColor: bgcolor }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setFunc(e.target.value)}
        maxLength={maxLength}
        minLength={minLength}
        type="text"
      />
      {rightIco && rightIco}
    </div>
  )
}

export default MyInput
