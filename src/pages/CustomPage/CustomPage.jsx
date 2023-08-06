import React, { useEffect, useState } from 'react'
import styles from './CustomPage.module.css'
import BackBar from '../../components/Tools/BackBar/BackBar'
import { MdAddCircleOutline, MdOutlineClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  uCustomTopics,
  uPickedTopic,
  uQuestArray,
  uTopicObj,
} from '../../store/userPickSlice'
import MyInput from '../../components/Tools/MyInput/MyInput'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useNavigate } from 'react-router-dom'

const arrayList = []

const customTopicsArr = {
  name: 'Свої теми',
  link: 'custom',
  desc: 'Власні питання, шо додані юзером вручну',
  questions: [],
}

const CustomPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { customTopics } = useSelector((state) => state.userPick)
  const [topicName, setTopicName] = useState('')

  useEffect(() => {
    dispatch(uCustomTopics(arrayList))
  }, [])

  const deleteItem = (item) => {
    const filtredTopics = customTopics.filter((_, id) => id != item)
    if (filtredTopics) {
      dispatch(uCustomTopics(filtredTopics))
    }
  }

  const clearInput = () => {
    setTopicName('')
  }

  const addItem = () => {
    const newTopicsArray = [...customTopics, topicName]
    setTopicName('')
    dispatch(uCustomTopics(newTopicsArray))
  }

  const runMode = () => {
    if (customTopics.length > 5) {
      navigate(`/game/custom`)
      dispatch(uPickedTopic('Cвої теми'))
      dispatch(uQuestArray(customTopics))
      let newObjCreate = newTopicObj()
      dispatch(uTopicObj(newObjCreate))
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
        <h4 className={styles.mainLabel}>Придумай цікаву тему:</h4>
        <MyInput
          rightIco={
            <MdOutlineClose
              style={{ display: `${topicName.length ? '' : 'none'}` }}
              className={styles.closeIco}
              onClick={clearInput}
            />
          }
          leftIco={
            <MdAddCircleOutline
              style={{ display: `${topicName.length > 5 ? '' : 'none'}` }}
              className={styles.addIco}
              onClick={addItem}
            />
          }
          placeholder="прояви фантазію"
          setFunc={setTopicName}
          minLength={3}
          value={topicName}
          bgcolor="white"
        />
        <div className={styles.topicsBlock}>
          <div className={styles.signNumb}>
            <h4>Список тем:</h4>
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
              Для початку гри
              <br />
              додайте ще хоч {6 - customTopics.length}
            </h4>
          ) : (
            <MyButton onClick={runMode} text={'Почати'} />
          )}
        </div>
      </div>
    </div>
  )
}

export default CustomPage
