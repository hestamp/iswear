import React, { useEffect, useState } from 'react'
import styles from './ModePicker.module.css'
import { useNavigate } from 'react-router-dom'

import MySpinner from '../../components/Tools/MySpinner/MySpinner'
import BackBar from '../../components/Tools/BackBar/BackBar'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useMyContext } from '../../context/GeneralContext'
import { modeList } from '../../../data/static'

const ModePicker = () => {
  const navigate = useNavigate()

  const [expandedItem, setExpandedItem] = useState('classic')
  const { setSubMode, setPageName, lang } = useMyContext()
  const pickCategory = (event, item) => {
    event.preventDefault()
    setSubMode(item.myid)

    navigate(`/mode/names`)
  }

  const clickItem = (item) => {
    if (expandedItem === item.myid) {
      setExpandedItem(null)
    } else {
      setExpandedItem(item.myid)
    }
  }

  useEffect(() => {
    setPageName(lang == 'ENG' ? 'Mode' : 'Режими')
  }, [])

  return (
    <div className={styles.allPage}>
      <BackBar />
      {modeList ? (
        <div className={styles.categoryList}>
          {modeList.map((item) => (
            <div
              onClick={() => clickItem(item)}
              key={item.myid}
              className={styles.oneBlock}
            >
              <h4>{item.name[lang]}</h4>
              {expandedItem == item.myid && <p>{item.description[lang]}</p>}
              {expandedItem == item.myid ? (
                <MyButton onClick={(event) => pickCategory(event, item)}>
                  {lang == 'ENG' ? 'Pick' : 'Обрати'}
                </MyButton>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        <MySpinner />
      )}
    </div>
  )
}

export default ModePicker
