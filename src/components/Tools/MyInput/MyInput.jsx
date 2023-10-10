import React from 'react'
import styles from './MyInput.module.css'
import { RxCross1 } from 'react-icons/rx'
const MyInput = ({
  placeholder,
  setFunc,
  value,
  maxLength,
  minLength,
  leftIco,
  rightIco,
  rightFunc,
  rightOpacity,
  leftFunc,
}) => {
  return (
    <div className={styles.inputDiv}>
      <input
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
        <RxCross1
          style={{ opacity: `${rightOpacity}` }}
          className={styles.inputIconRight}
          onClick={rightFunc}
        />
      )}
    </div>
  )
}

export default MyInput
