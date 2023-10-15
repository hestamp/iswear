import React, { useEffect, useRef, useState } from 'react'
import styles from './GameClient.module.css'
import { PiUserSwitchBold } from 'react-icons/pi'
import { BsPlayFill } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { TbSwitch2 } from 'react-icons/tb'
import {
  allTopics,
  gameLang,
  myReasons,
  staticMenu,
} from '../../../data/static'
import { useMyContext } from '../../context/GeneralContext'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { FiRepeat } from 'react-icons/fi'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'

const GameClient = () => {
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

  const navigate = useNavigate()

  const { playerColor, setPlayerColor } = useTheme()

  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    setPageColor,
    subMode,
    questArray,
    setQuestArray,
    lang,
    topicObj,
    setTopicObj,
  } = useMyContext()

  useEffect(() => {
    if (!secondName || !firstName) {
      navigate(`/`)
    }
  }, [])

  useEffect(() => {
    if (!topicObj && subMode == null) {
      setTopicObj(staticMenu[0])
      setQuestArray(staticMenu[0].questions[lang])
      setCategoryName(staticMenu[0].name[lang])
    } else if (!topicObj && subMode == 'random') {
      setQuestArray(allTopics)
      setCategoryName(lang == 'ENG' ? 'Random' : 'Випадкові')
    } else if (topicObj && subMode == 'custom') {
      setQuestArray(topicObj.questions)
      setCategoryName(lang == 'ENG' ? 'Custom topics' : 'Свої теми')
    } else {
      setQuestArray(topicObj.questions[lang])
      setCategoryName(topicObj.name[lang])
    }
  }, [])

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
      setQuestArray(updatedArray)
    }

    return questArray[randomIndex]
  }
  const generateRandomReason = () => {
    const randomIndex = Math.floor(Math.random() * myReasons[lang].length)

    return myReasons[lang][randomIndex]
  }

  useEffect(() => {
    if (isTimer && activeSpeaker == 1) {
      setPageColor('skyblue')
      setPlayerColor('skyblue')
    } else if (isTimer && activeSpeaker == 2) {
      setPageColor('pink')
      setPlayerColor('pink')
    } else {
      setPageColor('#f7f8fa')
      setPlayerColor('')
    }
  }, [activeSpeaker, isTimer])

  const getNewTopic = () => {
    const newTopic = generateRandomTopic(true)
    setTopicName(newTopic)
    setRoundNum((prev) => prev + 1)
    setRoundTurn(1)
  }

  const repeatRound = () => {
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
    const oneNames = firstName
    const twoNames = secondName
    setFirstName(twoNames)
    setSecondName(oneNames)
  }

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
          {activeSpeaker == 2 && isTimer ? (
            <div className={styles.oneUser}>
              <h1 className={styles.secondDiv}>{seconds}</h1>
            </div>
          ) : (
            <button
              onClick={() => nextPlayer(1)}
              style={{ backgroundColor: 'skyblue' }}
              className={`${styles.oneUser} ${
                activeSpeaker == 1 && styles.activeUser
              }`}
            >
              {activeSpeaker == 1 && (
                <img className={styles.icoSvg} src="/vite.svg" />
              )}
              <h4>{firstName}</h4>
            </button>
          )}
          {activeSpeaker == 1 && isTimer ? (
            <div className={styles.oneUser}>
              <h1 className={styles.secondDiv}>{seconds}</h1>
            </div>
          ) : (
            <button
              onClick={() => nextPlayer(2)}
              style={{ backgroundColor: 'pink' }}
              className={`${styles.oneUser} ${
                activeSpeaker == 2 && styles.activeUser
              }`}
            >
              <h4>{secondName}</h4>
              {activeSpeaker == 2 && (
                <img className={styles.icoSvg2} src="/vite.svg" />
              )}
            </button>
          )}
        </div>

        <div className={styles.cardInfo}>
          <div className={styles.cardBlock}>
            <div className={styles.buttAndName}>
              <h4 className={styles.topicName}> {categoryName}</h4>
            </div>

            {noTopic && <h3>{gameLang.choose[lang]}!</h3>}
            {!noTopic && questArray && questArray.length ? (
              <h3 data-value={topicName}>{topicName}</h3>
            ) : !noTopic ? (
              <h3>{gameLang.over[lang]}</h3>
            ) : (
              <></>
            )}

            {!isCard ? (
              <div className={styles.reasonBlock}>
                <h4>{gameLang.reason[lang]}:</h4>
                <button className={styles.myButt2} onClick={getRandomReason}>
                  <FaPlus />
                </button>
              </div>
            ) : (
              <div className={styles.reasonBlock}>
                <h4>{reasonName}</h4>
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
                +30{gameLang.sec[lang]}
              </button>
              <button onClick={finishTimer} className={styles.myButt}>
                {gameLang.end[lang]}
              </button>
            </div>
          ) : (
            <div className={styles.buttBlock}>
              <button
                className={styles.icoSvg3}
                style={{ display: `${isTimer ? 'none' : ''}` }}
                onClick={switchNames}
              >
                {' '}
                <PiUserSwitchBold />
              </button>
              {topicName.length && roundTurn <= 2 ? (
                <button onClick={startTimer} className={styles.myButt}>
                  {gameLang.start[lang]}
                  <BsPlayFill />
                </button>
              ) : topicName.length && roundTurn > 2 ? (
                <>
                  <button onClick={repeatRound} className={styles.myButt}>
                    <FiRepeat />
                  </button>
                  <button onClick={getNewTopic} className={styles.myButt}>
                    <TbPlayerTrackNextFilled />
                  </button>
                </>
              ) : (
                <div className={styles.buttBlock}>
                  <button onClick={getRandom} className={styles.myButt}>
                    {gameLang.random[lang]}
                  </button>
                </div>
              )}
              <button
                className={styles.icoSvg3}
                onClick={getRandom}
                style={{ display: `${isTimer ? 'none' : ''}` }}
              >
                {' '}
                <TbSwitch2 />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GameClient
