import React, { useEffect, useState } from 'react'
import styles from './CustomPage.module.css'
import BackBar from '../../components/Tools/BackBar/BackBar'
import { MdOutlineClose } from 'react-icons/md'
import { FiPlus } from 'react-icons/fi'

import MyInput from '../../components/Tools/MyInput/MyInput'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useNavigate } from 'react-router-dom'
import { useMyContext } from '../../context/GeneralContext'
import { customLang } from '../../../data/static'

const customTopicsArr = {
  name: 'Свої теми',
  link: 'custom',
  desc: 'Власні питання, шо додані юзером вручну',
  questions: [],
}

const CustomPage = () => {
  const navigate = useNavigate()
  const {
    setPickedTopic,
    setTopicObj,
    setQuestArray,
    customTopics,
    setCustomTopics,
    lang,
  } = useMyContext()

  const [topicName, setTopicName] = useState('')

  useEffect(() => {
    setCustomTopics([])
  }, [])

  useEffect(() => {
    setPageName(lang == 'ENG' ? 'Custom topics' : 'Свої питання')
  }, [])

  const deleteItem = (item) => {
    const filtredTopics = customTopics.filter((_, id) => id != item)
    if (filtredTopics) {
      setCustomTopics(filtredTopics)
    }
  }

  const clearInput = () => {
    setTopicName('')
  }

  const addItem = () => {
    const newTopicsArray = [...customTopics, topicName]
    setTopicName('')
    setCustomTopics(newTopicsArray)
  }

  const runMode = () => {
    if (customTopics.length > 5) {
      navigate(`/game/custom`)
      setPickedTopic('Cвої теми')
      setQuestArray(customTopics)
      let newObjCreate = newTopicObj()
      setTopicObj(newObjCreate)
    }
  }

  const newTopicObj = () => {
    let newObj = customTopicsArr
    newObj.questions = customTopics
    return newObj
  }

  return (
    <div className={styles.allPage}>
      <div className={styles.customPage}>
        <BackBar />
        <h4 className={styles.mainLabel}>{customLang.header[lang]}:</h4>
        <MyInput
          rightIco
          rightFunc={clearInput}
          leftIco={
            <FiPlus
              style={{ display: `${topicName.length > 5 ? '' : 'none'}` }}
              className={styles.addIco}
              onClick={addItem}
            />
          }
          placeholder={customLang.inputplace[lang]}
          setFunc={setTopicName}
          minLength={3}
          value={topicName}
          bgcolor="white"
        />
        <div className={styles.topicsBlock}>
          <div className={styles.signNumb}>
            <h4>{customLang.list[lang]}:</h4>
            <h4>{customTopics.length}</h4>
          </div>
          {customTopics.length ? (
            <div className={styles.topicsBlock2}>
              {customTopics.length ? (
                customTopics.map((item, id) => (
                  <div className={styles.oneTopic} key={item}>
                    <h4>{item}</h4>
                    <MdOutlineClose
                      className={styles.closeIco}
                      onClick={() => deleteItem(id)}
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className={styles.startOrText}>
          {customTopics.length < 6 ? (
            <h4>
              {customLang.tostart[lang]}
              <br />
              {customLang.addsome[lang]} {6 - customTopics.length}
            </h4>
          ) : (
            <MyButton onClick={runMode}>{customLang.start[lang]}</MyButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomPage
