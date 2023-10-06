import React, { useState } from 'react'
import styles from './CategoriesPage.module.css'

import { useNavigate } from 'react-router-dom'
import { staticMenu } from '../../../data/static'

import BackBar from '../../components/Tools/BackBar/BackBar'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useMyContext } from '../../context/GeneralContext'

const CategoriesPage = () => {
  const navigate = useNavigate()

  const [expandedItem, setExpandedItem] = useState(null)

  const { setPickedTopic, setTopicObj, questArray, setQuestArray } =
    useMyContext()

  const clickItem = (item) => {
    if (expandedItem === item.link) {
      setExpandedItem(null)
    } else {
      setExpandedItem(item.link)
      setTopicObj(item)
      setQuestArray(item.questions)
    }
  }

  const runMode = () => {
    if (expandedItem) {
      navigate(`/game/${expandedItem}`)
      setPickedTopic(expandedItem)
    }
  }

  return (
    <>
      <div className={styles.categoriesPage}>
        <BackBar />
        <div className={styles.dayCarousel}>
          {staticMenu &&
            staticMenu.length &&
            staticMenu.map((item, id) => {
              return (
                <div
                  key={id}
                  onClick={() => clickItem(item)}
                  className={`${
                    expandedItem == item.link
                      ? styles.pickedItem
                      : styles.oneBlock
                  }`}
                >
                  <div className={styles.nameCount}>
                    <h4 className={styles.dayTimeP}>{item.name}</h4>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      {expandedItem && (
        <div className={styles.myDiv}>
          {' '}
          <MyButton onClick={runMode}>Обрати</MyButton>
        </div>
      )}
    </>
  )
}

export default CategoriesPage
