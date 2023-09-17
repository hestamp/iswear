import React, { useEffect, useState } from 'react'
import styles from './ModePicker.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { uPageName } from '../../store/tempSlice'
import { uSubMode } from '../../store/userPickSlice'

import MySpinner from '../../components/Tools/MySpinner/MySpinner'
import BackBar from '../../components/Tools/BackBar/BackBar'
import MyButton from '../../components/Tools/MyButton/MyButton'

const modeList = [
  {
    name: 'Класичний',
    description:
      'Проводь дебати на обрану тему. Стандартний ліміт в 1 хвилину для виступу кожного з учасників',
    myid: 'classic',
    active: true,
  },

  {
    name: 'Свої теми',
    description:
      'Ви можете додати свої теми і кожного раунду випадковим чином вибирається одна з доданих тем',
    myid: 'custom',
    active: true,
  },
  {
    name: 'Випадковий',
    description: 'Ви отримуєте тему, причини і сторони абсолютно випадково',
    myid: 'random',
    active: true,
  },
]
const ModePicker = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(uPageName('Дебати'))
  }, [])

  const [expandedItem, setExpandedItem] = useState('classic')

  const pickCategory = (event, item) => {
    event.preventDefault()
    dispatch(uSubMode(item.myid))

    navigate(`/duo/names`)
  }

  const clickItem = (item) => {
    if (expandedItem === item.myid) {
      setExpandedItem(null)
    } else {
      setExpandedItem(item.myid)
    }
  }

  return (
    <div className={styles.allPage}>
      <BackBar />
      {modeList ? (
        <div className={styles.categoryList}>
          {modeList.map((item) => (
            <div
              onClick={() => clickItem(item)}
              key={item.myid}
              style={{ backgroundColor: `${!item.active && 'lightgray'}` }}
              className={styles.oneBlock}
            >
              <h4>{item.name}</h4>
              {expandedItem == item.myid && <p>{item.description}</p>}
              {expandedItem == item.myid && item.active ? (
                <MyButton
                  onClick={(event) => pickCategory(event, item)}
                  text="Обрати"
                />
              ) : expandedItem == item.myid && !item.active ? (
                <MyButton onClick={() => {}} text="Недоступно" />
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
