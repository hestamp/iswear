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
import MyButton from '../../components/Tools/MyButton/MyButton'
const UserNames = () => {
  const [firstName, setFirstName] = useState('')
  const [twoName, setTwoName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userName, secondName, subMode } = useSelector(
    (state) => state.userPick
  )

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
      if (subMode == 'classic') {
        navigate('/duo/params')
      } else if (subMode == 'custom') {
        navigate('/duo/custom')
      } else {
        navigate('/')
      }
    }
  }

  return (
    <div className={styles.allPage}>
      <div className={styles.usernamesPage}>
        <BackBar />

        <form onSubmit={saveName} className={styles.nameBlock}>
          <div className={styles.onePlayer}>
            <h4>Гравець 1</h4>
            <MyInput
              rightIco
              rightOpacity={firstName.length}
              rightFunc={() => clearInput(setFirstName)}
              leftFunc={() => getName(setFirstName)}
              leftIco={<FaRandom />}
              placeholder="місце для фантазії"
              setFunc={setFirstName}
              maxLength={11}
              minLength={3}
              value={firstName}
              bgcolor="white"
            />
          </div>

          <div className={styles.onePlayer}>
            <h4>Гравець 2</h4>
            <MyInput
              placeholder="місце для фантазії"
              rightOpacity={twoName.length}
              rightIco
              rightFunc={() => clearInput(setTwoName)}
              leftIco={
                <FaRandom
                  onClick={() => getName(setTwoName)}
                  className={styles.closeIco2}
                />
              }
              setFunc={setTwoName}
              maxLength={11}
              minLength={3}
              bgcolor="white"
              value={twoName}
            />
          </div>

          <MyButton
            onClick={saveName}
            iconAlign="right"
            text="Зберегти"
            icon={PiCheckFatFill}
          />
        </form>
      </div>
    </div>
  )
}

export default UserNames
