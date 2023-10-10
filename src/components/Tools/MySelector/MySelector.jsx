import React, { useState } from 'react'
import styles from './MySelector.module.css'

const MySelector = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value)

  const handleOptionChange = (event) => {
    const newSelectedOption = event.target.value
    setSelectedOption(newSelectedOption)
    onSelect(newSelectedOption)
  }
  return (
    <div className={styles.simpleSelector}>
      <select
        className={styles.option}
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default MySelector
