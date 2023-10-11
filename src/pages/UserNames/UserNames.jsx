import React, { useEffect, useState } from 'react'
import styles from './UserNames.module.css'

import { useNavigate } from 'react-router-dom'

import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { randomNames } from '../../../data/static'
import BackBar from '../../components/Tools/BackBar/BackBar'
import MyInput from '../../components/Tools/MyInput/MyInput'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useMyContext } from '../../context/GeneralContext'
const UserNames = () => {
  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    setPageName,
    lang,
  } = useMyContext()

  const navigate = useNavigate()

  const { subMode } = useMyContext()

  const clearInput = (func) => {
    func('')
  }

  useEffect(() => {
    setPageName(lang == 'ENG' ? 'Names' : 'Гравці')
  }, [])

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * randomNames[lang].length)
    return randomNames[lang][randomIndex]
  }

  const getName = (setFunc) => {
    const newName = generateRandomName()
    setFunc(newName)
  }

  const saveName = (e) => {
    e.preventDefault()
    if (firstName.length > 2 && secondName.length > 2) {
      localStorage.setItem('username', firstName)
      localStorage.setItem('secondname', secondName)

      if (subMode == 'classic') {
        navigate('/mode/params')
      } else if (subMode == 'custom') {
        navigate('/mode/custom')
      } else if (subMode == 'random') {
        navigate('/game/random')
      } else {
        navigate('/')
      }
    }
  }

  return (
    <>
      <div className={styles.usernamesPage}>
        <BackBar />

        <form onSubmit={saveName} className={styles.nameBlock}>
          <div className={styles.onePlayer}>
            <h4>{lang == 'ENG' ? 'Player 1' : 'Гравець 1'}</h4>
            <MyInput
              rightIco
              rightOpacity={firstName.length}
              rightFunc={() => clearInput(setFirstName)}
              leftFunc={() => getName(setFirstName)}
              leftIco={<HiOutlineSwitchHorizontal />}
              placeholder={
                lang == 'ENG' ? 'place for imagination' : 'місце для фантазії'
              }
              setFunc={setFirstName}
              maxLength={11}
              minLength={3}
              value={firstName}
              bgcolor="white"
            />
          </div>

          <div className={styles.onePlayer}>
            <h4>{lang == 'ENG' ? 'Player 2' : 'Гравець 2'}</h4>
            <MyInput
              placeholder={
                lang == 'ENG' ? 'place for imagination' : 'місце для фантазії'
              }
              rightOpacity={secondName.length}
              rightIco
              rightFunc={() => clearInput(setSecondName)}
              leftIco={
                <HiOutlineSwitchHorizontal
                  onClick={() => getName(setSecondName)}
                  className={styles.closeIco2}
                />
              }
              setFunc={setSecondName}
              maxLength={11}
              minLength={3}
              bgcolor="white"
              value={secondName}
            />
          </div>
        </form>
        {
          <div className={styles.myDiv}>
            {firstName.length > 1 && secondName.length > 1 ? (
              <MyButton onClick={saveName}>
                {lang == 'ENG' ? 'Save' : 'Зберегти'}
              </MyButton>
            ) : (
              <div></div>
            )}
          </div>
        }
      </div>
    </>
  )
}

export default UserNames
