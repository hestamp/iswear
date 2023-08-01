import React, { useEffect, useState } from 'react'
import styles from './CategoriesPage.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { uPageName } from '../../store/tempSlice'

import { useNavigate } from 'react-router-dom'
import { staticMenu } from '../../../data/static'
import { uPickedTopic, uQuestArray, uTopicObj } from '../../store/userPickSlice'
import BackBar from '../../components/Tools/BackBar/BackBar'

const CategoriesPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [expandedItem, setExpandedItem] = useState(null)
  useEffect(() => {
    dispatch(uPageName('Категорії'))
  }, [])

  const clickItem = (item) => {
    if (expandedItem === item.link) {
      setExpandedItem(null)
    } else {
      setExpandedItem(item.link)
      dispatch(uTopicObj(item))
      dispatch(uQuestArray(item.questions))
    }
  }

  const runMode = () => {
    if (expandedItem) {
      navigate(`/game/${expandedItem}`)
      dispatch(uPickedTopic(expandedItem))
    }
  }

  return (
    <div className={styles.allPage}>
      {expandedItem && (
        <button onClick={runMode} className={styles.myButt}>
          Обрати
        </button>
      )}
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
    </div>
  )
}

export default CategoriesPage
