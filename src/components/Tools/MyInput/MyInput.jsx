import React from 'react'
import styles from './MyInput.module.css'
import { MdOutlineBackspace } from 'react-icons/md'
const MyInput = ({
  placeholder,
  setFunc,
  value,
  maxLength,
  minLength,
  bgcolor,
  leftIco,
  rightIco,
  rightFunc,
  rightOpacity,
  leftFunc,
}) => {
  return (
    <div className={styles.inputDiv}>
      <input
        style={{ backgroundColor: bgcolor }}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setFunc(e.target.value)}
        maxLength={maxLength}
        minLength={minLength}
        type="text"
      />
      {leftIco && (
        <div onClick={leftFunc} className={styles.inputIconLeft}>
          {leftIco}
        </div>
      )}

      {rightIco && (
        <MdOutlineBackspace
          style={{ opacity: `${rightOpacity}` }}
          className={styles.inputIconRight}
          onClick={rightFunc}
        />
      )}
    </div>
  )
}

export default MyInput
