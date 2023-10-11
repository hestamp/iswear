import React, { useState } from 'react'
import styles from './MySelector.module.css'

const MySelector = ({ options, onSelect, active, basic }) => {
  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value
    onSelect(newSelectedOption)
    if (active) {
      active(newSelectedOption)
    }
  }
  return (
    <div className={styles.simpleSelector}>
      <select
        className={styles.option}
        value={basic}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.span ? (
              <img src={option.span} alt={option.value} />
            ) : (
              <span>{option.text}</span>
            )}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MySelector
