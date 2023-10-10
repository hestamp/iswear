import React, { useEffect, useState } from 'react'
import styles from './ModePicker.module.css'
import { useNavigate } from 'react-router-dom'

import MySpinner from '../../components/Tools/MySpinner/MySpinner'
import BackBar from '../../components/Tools/BackBar/BackBar'
import MyButton from '../../components/Tools/MyButton/MyButton'
import { useMyContext } from '../../context/GeneralContext'

const modeList = [
  {
    name: 'Класичний',
    description:
      'Проводь дебати на обрану тему. Стандартний ліміт в 1 хвилину для виступу кожного з учасників',
    myid: 'classic',
  },

  {
    name: 'Свої теми',
    description:
      'Ви можете додати свої теми і кожного раунду випадковим чином вибирається одна з доданих тем',
    myid: 'custom',
  },
  {
    name: 'Випадковий',
    description: 'Ви отримуєте тему, причини і сторони абсолютно випадково',
    myid: 'random',
  },
]
const ModePicker = () => {
  const navigate = useNavigate()

  const [expandedItem, setExpandedItem] = useState('classic')
  const { setSubMode, setPageName } = useMyContext()
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
    setPageName('Режим')
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
              <h4>{item.name}</h4>
              {expandedItem == item.myid && <p>{item.description}</p>}
              {expandedItem == item.myid ? (
                <MyButton onClick={(event) => pickCategory(event, item)}>
                  Обрати
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
