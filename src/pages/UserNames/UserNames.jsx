import React, { useEffect, useState } from 'react'
import styles from './UserNames.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { PiCheckFatFill } from 'react-icons/pi'

import { uSecondName, uUserName } from '../../store/userPickSlice'
import { useNavigate } from 'react-router-dom'
import { MdOutlineClose } from 'react-icons/md'
import { FaRandom } from 'react-icons/fa'
import { randomNames } from '../../../data/static'
import BackBar from '../../components/Tools/BackBar/BackBar'
import MyInput from '../../components/Tools/MyInput/MyInput'
const UserNames = () => {
  const [firstName, setFirstName] = useState('')
  const [twoName, setTwoName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userName, secondName } = useSelector((state) => state.userPick)

  useEffect(() => {
    if (userName) {
      setFirstName(userName)
    }
    if (secondName) {
      setTwoName(secondName)
    }
  }, [])

  const clearInput = (func) => {
    func('')
  }

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * randomNames.length)
    return randomNames[randomIndex]
  }

  const getName = (setFunc) => {
    const newName = generateRandomName()
    setFunc(newName)
  }

  const saveName = (e) => {
    e.preventDefault()
    if (firstName.length > 2 && twoName.length > 2) {
      localStorage.setItem('username', firstName)
      localStorage.setItem('secondname', twoName)
      dispatch(uUserName(firstName))
      dispatch(uSecondName(twoName))
      navigate('/duo/params')
    }
  }

  return (
    <div className={styles.allPage}>
      <div className={styles.usernamesPage}>
        <BackBar />

        <form onSubmit={saveName} className={styles.nameBlock}>
          <h3>Гравець 1</h3>
          <MyInput
            rightIco={
              <MdOutlineClose
                style={{ opacity: `${firstName.length}` }}
                className={styles.closeIco}
                onClick={() => clearInput(setFirstName)}
              />
            }
            leftIco={
              <FaRandom
                onClick={() => getName(setFirstName)}
                className={styles.closeIco}
              />
            }
            placeholder=""
            setFunc={setFirstName}
            maxLength={10}
            minLength={3}
            value={firstName}
            bgcolor="white"
          />
          <h3>Гравець 2</h3>
          <MyInput
            placeholder=""
            rightIco={
              <MdOutlineClose
                style={{ opacity: `${twoName.length}` }}
                className={styles.closeIco}
                onClick={() => clearInput(setTwoName)}
              />
            }
            leftIco={
              <FaRandom
                onClick={() => getName(setTwoName)}
                className={styles.closeIco}
              />
            }
            setFunc={setTwoName}
            maxLength={10}
            minLength={3}
            bgcolor="white"
            value={twoName}
          />
          <button type="submit" className={styles.saveBtn}>
            {' '}
            <h3>Зберегти</h3>
            <PiCheckFatFill />
          </button>
        </form>
      </div>
    </div>
  )
}

export default UserNames
