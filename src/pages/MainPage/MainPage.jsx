import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { uPageColor, uPageName } from '../../store/tempSlice'
import { categoriesArr, randomNames } from '../../../data/static'
import { uPickedMode, uUserName } from '../../store/userPickSlice'

import { PiCheckFatFill } from 'react-icons/pi'

import { MdOutlineClose, MdOutlineModeEdit } from 'react-icons/md'
import MyInput from '../../components/Tools/MyInput/MyInput'
import { FaRandom } from 'react-icons/fa'
import MyButton from '../../components/Tools/MyButton/MyButton'

const MainPage = () => {
  const dispatch = useDispatch()

  const { userName } = useSelector((state) => state.userPick)

  useEffect(() => {
    dispatch(uPageName('iSwear'))
  }, [])

  const checkUserName = (link) => {
    dispatch(uPickedMode(link))
  }

  const [tempUserName, setTempUserName] = useState('')
  const [savedName, setSavedName] = useState(null)

  const saveName = (e) => {
    e.preventDefault()
    setSavedName(tempUserName)
    dispatch(uUserName(tempUserName))
    localStorage.setItem('username', tempUserName)
  }

  useEffect(() => {
    const value = localStorage.getItem('username')
    if (value) {
      setSavedName(value)
      setTempUserName(value)
      dispatch(uUserName(value))
      dispatch(uPageColor('#f7f8fa'))
    }
  }, [])

  const editName = () => {
    setSavedName(null)
  }

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
  return (
    <div className={styles.allPage}>
      <div className={styles.mainPage}>
        <div className={styles.categoryBlock}>
          {savedName ? (
            <div className={styles.nameBlock1}>
              <h4>Привіт, {userName}</h4>
              <MdOutlineModeEdit onClick={editName} />
            </div>
          ) : (
            <form onSubmit={saveName} className={styles.nameBlock}>
              <h4>Вкажіть ім'я щоб розпочати</h4>

              <MyInput
                rightIco={
                  <MdOutlineClose
                    style={{ opacity: `${tempUserName.length ? '1' : '0'}` }}
                    className={styles.closeIco}
                    onClick={() => clearInput(setTempUserName)}
                  />
                }
                leftIco={
                  <FaRandom
                    onClick={() => getName(setTempUserName)}
                    className={styles.closeIco}
                  />
                }
                placeholder="прояви фантазію"
                setFunc={setTempUserName}
                maxLength={10}
                minLength={3}
                value={tempUserName}
                bgcolor="white"
              />

              <MyButton
                onClick={saveName}
                iconAlign="right"
                text="Зберегти"
                icon={PiCheckFatFill}
              />
            </form>
          )}
        </div>
        {savedName && (
          <nav role="navigation" className={styles.categoryBlock}>
            <div className={styles.nameCategory}>
              <h4>Оберіть режим</h4>
            </div>
            <div className={styles.dayCarousel}>
              {categoriesArr &&
                categoriesArr.length &&
                categoriesArr.map((item, id) => (
                  <Link
                    key={id}
                    to={`${item.active && userName ? `/${item.link}` : '/'}`}
                    onClick={() => checkUserName(item.link)}
                    style={{
                      backgroundColor: `${!item.active && 'lightgray'}`,
                    }}
                    className={styles.oneBlock}
                  >
                    {item.active && (
                      <img className={styles.imgIco} src="/vite.svg" />
                    )}

                    <div className={styles.nameCount}>
                      <h4 className={styles.dayTimeP}>{item.name}</h4>
                      {item.beta && <p>зроблю пізніше</p>}
                    </div>
                  </Link>
                ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}

export default MainPage
