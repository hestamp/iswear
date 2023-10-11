import React from 'react'
import styles from './Footer.module.css'
import MySelector from '../Tools/MySelector/MySelector'
import { useMyContext } from '../../context/GeneralContext'
import { Link } from 'react-router-dom'
import { footerLang } from '../../../data/static'
const Footer = () => {
  const { lang, setLang } = useMyContext()
  const options = [
    { value: 'ENG', text: 'English' },
    { value: 'UKR', text: 'Ukrainian' },
  ]

  const handleOptionSelect = (newOption) => {
    setLang(newOption)
  }

  const localSet = (item) => {
    localStorage.setItem('language', item)
  }
  return (
    <div className={styles.footer}>
      <MySelector
        basic={lang}
        active={localSet}
        options={options}
        onSelect={handleOptionSelect}
      />
      <p>
        {footerLang.dev[lang]}{' '}
        <span>
          <Link
            className={styles.link}
            target="_blank"
            to="https://hestamp.com"
          >
            {footerLang.by[lang]}
          </Link>
        </span>
      </p>
    </div>
  )
}

export default Footer
