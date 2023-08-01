import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { uPageName } from '../../store/tempSlice'
import { categoriesArr } from '../../../data/static'
import { uPickedMode, uUserName } from '../../store/userPickSlice'

import { PiCheckFatFill } from 'react-icons/pi'

import { MdOutlineModeEdit } from 'react-icons/md'
import MyInput from '../../components/Tools/MyInput/MyInput'

const MainPage = () => {
  const dispatch = useDispatch()

  const { userName } = useSelector((state) => state.userPick)

  useEffect(() => {
    dispatch(uPageName('iSwear'))
  }, [])

  const checkUserName = (link) => {
    dispatch(uPickedMode(link))
  }

  const [tempUserName, setTempUserName] = useState('')
  const [savedName, setSavedName] = useState(null)

  const saveName = (e) => {
    e.preventDefault()
    setSavedName(tempUserName)
    dispatch(uUserName(tempUserName))
    localStorage.setItem('username', tempUserName)
  }

  useEffect(() => {
    const value = localStorage.getItem('username')
    if (value) {
      setSavedName(value)
      setTempUserName(value)
      dispatch(uUserName(value))
    }
  }, [])

  const editName = () => {
    setSavedName(null)
  }

  return (
    <div className={styles.allPage}>
      <div className={styles.mainPage}>
        <div className={styles.categoryBlock}>
          {savedName ? (
            <div className={styles.nameBlock1}>
              <h3>Привіт, {userName}</h3>
              <MdOutlineModeEdit onClick={editName} />
            </div>
          ) : (
            <form onSubmit={saveName} className={styles.nameBlock}>
              <h3>Вкажіть ім'я щоб розпочати</h3>
              <MyInput
                placeholder="прояви фантазію"
                setFunc={setTempUserName}
                maxLength={10}
                minLength={3}
                value={tempUserName}
              />

              <button onClick={saveName} className={styles.saveBtn}>
                {' '}
                <h3>Зберегти</h3>
                <PiCheckFatFill />
              </button>
            </form>
          )}
        </div>
        {savedName && (
          <nav role="navigation" className={styles.categoryBlock}>
            <div className={styles.nameCategory}>
              <h3>Оберіть режим</h3>
            </div>
            <div className={styles.dayCarousel}>
              {categoriesArr &&
                categoriesArr.length &&
                categoriesArr.map((item, id) => (
                  <Link
                    key={id}
                    to={`${item.active && userName ? `/${item.link}` : '/'}`}
                    onClick={() => checkUserName(item.link)}
                    style={{ backgroundColor: `${!item.active && 'gray'}` }}
                    className={styles.oneBlock}
                  >
                    {item.active && (
                      <img className={styles.imgIco} src="/vite.svg" />
                    )}

                    <div className={styles.nameCount}>
                      <h3 className={styles.dayTimeP}>{item.name}</h3>
                      {item.beta && <p>зроблю пізніше</p>}
                    </div>
                  </Link>
                ))}
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}

export default MainPage
