import React, { useEffect, useRef, useState } from 'react'
import styles from './GameClient.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { uPageName } from '../../store/tempSlice'
import { useNavigate } from 'react-router-dom'
import { FaUber } from 'react-icons/fa'
import { PiUserSwitchBold } from 'react-icons/pi'
import { TbSwitch2 } from 'react-icons/tb'
import { uSecondName, uUserName } from '../../store/userPickSlice'

const GameClient = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isCard, setIsCard] = useState(false)
  const [activeSpeaker, setActiveSpeaker] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef(null)
  const [topicName, setTopicName] = useState('')
  const [reasonName, setReasonName] = useState('')
  const [categoryName, setCategoryName] = useState('')

  const [isTimer, setIsTimer] = useState(false)
  const { userName, secondName, topicObj, questArray } = useSelector(
    (state) => state.userPick
  )

  const generateRandomTopic = () => {
    const randomIndex = Math.floor(Math.random() * questArray.length)
    return questArray[randomIndex]
  }

  useEffect(() => {
    if (!userName || !secondName) {
      navigate('/')
    }

    dispatch(uPageName('Дебати'))
  }, [])
  useEffect(() => {
    if (topicObj) {
      setCategoryName(topicObj.name)
      setReasonName('Прибульці')
    }

    if (questArray) {
      getNewTopic()
    }
  }, [])

  const getNewTopic = () => {
    const newTopic = generateRandomTopic()
    setTopicName(newTopic)
  }

  const clickCard = () => {
    setIsCard((prev) => !prev)
  }

  useEffect(() => {
    if (seconds == 0) {
      setIsTimer(false)
    }
  }, [seconds])

  const startTimer = () => {
    setIsTimer(true)
    setSeconds(60)
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0))
    }, 1000)
  }

  const add30Seconds = () => {
    setSeconds((prevSeconds) => prevSeconds + 30)
  }

  const resetTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setSeconds(10)
    setIsTimer(false)
  }

  const switchNames = () => {
    const oneNames = userName
    const twoNames = secondName
    dispatch(uUserName(twoNames))
    dispatch(uSecondName(oneNames))
  }

  const truncateTopicName = (name, maxLength) => {
    return name.length > maxLength ? name.slice(0, maxLength - 3) + '...' : name
  }

  const truncatedTopicName = truncateTopicName(categoryName, 15)

  return (
    <div
      style={{
        backgroundColor: `${
          isTimer && activeSpeaker == 1
            ? 'skyblue'
            : isTimer && activeSpeaker == 2
            ? 'pink'
            : ''
        }`,
      }}
      className={styles.allPage}
    >
      <div className={styles.gameClient}>
        <div className={styles.userBLock}>
          <div
            style={{ backgroundColor: 'skyblue' }}
            className={`${styles.oneUser} ${
              activeSpeaker == 1 && styles.activeUser
            }`}
          >
            {activeSpeaker == 1 && (
              <img className={styles.icoSvg} src="/vite.svg" />
            )}
            <h3>{userName}</h3>
          </div>
          <div
            style={{ backgroundColor: 'pink' }}
            className={`${styles.oneUser} ${
              activeSpeaker == 2 && styles.activeUser
            }`}
          >
            <h3>{secondName}</h3>
            {activeSpeaker == 2 && (
              <img className={styles.icoSvg2} src="/vite.svg" />
            )}
          </div>
        </div>

        <div className={styles.allInfoBlock}>
          <div className={styles.cardInfo}>
            <div className={styles.cardBlock}>
              <div className={styles.buttAndName}>
                <PiUserSwitchBold
                  style={{ display: `${isTimer ? 'none' : ''}` }}
                  onClick={switchNames}
                />

                <h3 className={styles.topicName}> {truncatedTopicName}</h3>
                <TbSwitch2
                  onClick={getNewTopic}
                  style={{ display: `${isTimer ? 'none' : ''}` }}
                />
              </div>

              <h2>{topicName}</h2>

              <div className={styles.reasonBlock}>
                <h3>Причина:</h3>
                {isCard ? (
                  <h3 onClick={clickCard}>{reasonName}</h3>
                ) : (
                  <button className={styles.myButt2} onClick={clickCard}>
                    Взяти
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.gameStatus}>
            {isTimer ? (
              <h1>{seconds}</h1>
            ) : (
              <div className={styles.posBlock}>
                <div
                  style={{
                    backgroundColor: `${
                      activeSpeaker == 1 ? 'skyblue' : 'pink'
                    }`,
                  }}
                  className={styles.positionH}
                >
                  <h3>
                    Хід: {activeSpeaker == 1 ? `${userName}` : `${secondName}`}
                  </h3>
                  <h3>Позиція: {activeSpeaker == 1 ? 'ЗА' : 'ПРОТИ'}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.gameInfo}>
          {isTimer ? (
            <div className={styles.buttBlock}>
              <button onClick={add30Seconds} className={styles.myButt}>
                +30с
              </button>
              <button onClick={resetTimer} className={styles.myButt}>
                Завершити
              </button>
            </div>
          ) : (
            <div className={styles.buttBlock}>
              <button onClick={startTimer} className={styles.myButt}>
                Почати
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameClient
