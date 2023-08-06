import React, { useEffect, useRef, useState } from 'react'
import styles from './GameClient.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { uPageColor, uPageName } from '../../store/tempSlice'
import { useNavigate } from 'react-router-dom'
import { PiUserSwitchBold } from 'react-icons/pi'
import { TbSwitch2 } from 'react-icons/tb'
import {
  uQuestArray,
  uSecondName,
  uTopicObj,
  uUserName,
} from '../../store/userPickSlice'
import { myReasons, staticMenu } from '../../../data/static'

const GameClient = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [roundNum, setRoundNum] = useState(1)
  const [roundTurn, setRoundTurn] = useState(1)
  const [tipUsed, setTipUsed] = useState(false)
  const [noTopic, setNoTopic] = useState(true)
  const [isCard, setIsCard] = useState(false)
  const [activeSpeaker, setActiveSpeaker] = useState(1)
  const [seconds, setSeconds] = useState(60)
  const intervalRef = useRef(null)
  const audioRef = useRef(null)

  const [topicName, setTopicName] = useState('')
  const [reasonName, setReasonName] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [isTimer, setIsTimer] = useState(false)
  const { userName, secondName, topicObj, questArray } = useSelector(
    (state) => state.userPick
  )

  const playBeep = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const generateRandomTopic = (notrandom) => {
    if (noTopic) {
      setNoTopic(false)
    }
    const randomIndex = Math.floor(Math.random() * questArray.length)

    if (notrandom) {
      const updatedArray = [...questArray]
      updatedArray.splice(randomIndex, 1)
      dispatch(uQuestArray(updatedArray))
    }

    return questArray[randomIndex]
  }
  const generateRandomReason = (notrandom) => {
    const randomIndex = Math.floor(Math.random() * myReasons.length)
    if (notrandom) {
      const updatedArray = [...questArray]
      updatedArray.splice(randomIndex, 1)
    }
    return myReasons[randomIndex]
  }

  useEffect(() => {
    const value = localStorage.getItem('username')
    const val2 = localStorage.getItem('secondname')
    if (!value && !val2) {
      navigate('/')
    }
    dispatch(uPageName('Дебати'))
  }, [])
  useEffect(() => {
    if (!topicObj) {
      dispatch(uTopicObj(staticMenu[0]))
      dispatch(uQuestArray(staticMenu[0].questions))
      setCategoryName(staticMenu[0].name)
      if (topicObj) {
        setCategoryName(topicObj.name)
      }
    } else {
      dispatch(uQuestArray(topicObj.questions))
      setCategoryName(topicObj.name)
    }
  }, [])

  useEffect(() => {
    if (isTimer && activeSpeaker == 1) {
      dispatch(uPageColor('skyblue'))
    } else if (isTimer && activeSpeaker == 2) {
      dispatch(uPageColor('pink'))
    } else {
      dispatch(uPageColor('#f7f8fa'))
    }
  }, [activeSpeaker, isTimer])

  const getNewTopic = () => {
    const newTopic = generateRandomTopic(true)
    setTopicName(newTopic)
    setRoundNum((prev) => prev + 1)
    setRoundTurn(1)
  }
  const getRandom = () => {
    const newTopic = generateRandomTopic()
    setTopicName(newTopic)
  }
  const getRandomReason = () => {
    setIsCard((prev) => !prev)
    const newReason = generateRandomReason()
    setReasonName(newReason)
    setSeconds((prevSeconds) => prevSeconds + 30)
  }

  const finishTimer = () => {
    runRound()
    setIsTimer(false)
    playBeep()
    clearInterval(intervalRef.current)
    intervalRef.current = null
    setSeconds(60)
  }

  useEffect(() => {
    if (seconds == 0) {
      finishTimer()
    }
    if (seconds < 3 && seconds != 0) {
      playBeep()
    }

    if (seconds == 10) {
      playBeep()
    }
  }, [seconds])

  const runRound = () => {
    if (roundTurn < 3) {
      setRoundTurn((prev) => prev + 1)
    }
  }

  const startTimer = () => {
    setIsTimer(true)
    setSeconds(60)
    if (intervalRef.current) return
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        return prevSeconds > 0 ? prevSeconds - 1 : 0
      })
    }, 1000)
  }

  const add30Seconds = () => {
    setSeconds((prevSeconds) => prevSeconds + 30)
    setTipUsed(true)
  }

  const nextPlayer = (num) => {
    if (!isTimer) {
      setActiveSpeaker(num)
    }
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

  useEffect(() => {
    if (activeSpeaker == 1 && !isTimer) {
      setActiveSpeaker(2)
    } else {
      setActiveSpeaker(1)
    }
    setTipUsed(false)
    setIsCard(false)
  }, [roundTurn])

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
            onClick={() => nextPlayer(1)}
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
            onClick={() => nextPlayer(2)}
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
                  onClick={getRandom}
                  style={{ display: `${isTimer ? 'none' : ''}` }}
                />
              </div>

              {noTopic && <h3>Оберіть тему і почніть дебати!</h3>}
              {!noTopic && questArray && questArray.length ? (
                <h2 data-value={topicName}>{topicName}</h2>
              ) : !noTopic ? (
                <h2>Теми закінчились</h2>
              ) : (
                <></>
              )}

              {!isCard ? (
                <div className={styles.reasonBlock}>
                  <h3>Причина:</h3>
                  <button className={styles.myButt2} onClick={getRandomReason}>
                    Взяти
                  </button>
                </div>
              ) : (
                <div className={styles.reasonBlock}>
                  <h3>{reasonName}</h3>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.gameInfo}>
          <div className={styles.gameStatus}>
            {isTimer ? (
              <>
                <h1 className={styles.secondDiv}>{seconds}</h1>
              </>
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
                  <h3>Раунд {roundNum}</h3>

                  <h3>
                    {activeSpeaker == 1 ? `${userName}` : `${secondName}`}:{' '}
                    {activeSpeaker == 1 ? 'ЗА' : 'ПРОТИ'}
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.gameInfo}>
          {isTimer ? (
            <div className={styles.buttBlock}>
              <button
                style={{ display: `${tipUsed ? 'none' : ''}` }}
                onClick={add30Seconds}
                className={styles.myButt}
              >
                +30с
              </button>
              <button onClick={finishTimer} className={styles.myButt}>
                Завершити
              </button>
            </div>
          ) : (
            <div className={styles.buttBlock}>
              {topicName.length && roundTurn <= 2 ? (
                <button onClick={startTimer} className={styles.myButt}>
                  Почати раунд
                </button>
              ) : topicName.length && roundTurn > 2 ? (
                <button onClick={getNewTopic} className={styles.myButt}>
                  Наступна тема
                </button>
              ) : (
                <div className={styles.buttBlock}>
                  <button onClick={getRandom} className={styles.myButt}>
                    Випадкова
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <audio preload="auto" ref={audioRef} src="/beep.wav" />
    </div>
  )
}

export default GameClient
