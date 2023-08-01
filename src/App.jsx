import styles from './App.module.css'

import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import Settings from './pages/Settings/Settings'
import AboutPage from './pages/AboutPage/AboutPage'
import { uSidebar } from './store/logicSlice'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import MainPage from './pages/MainPage/MainPage'

import ModePicker from './pages/ModePicker/ModePicker'
import GameClient from './pages/GameClient/GameClient'
import UserNames from './pages/UserNames/UserNames'
import { useEffect } from 'react'
import { uUserName } from './store/userPickSlice'
import NavBar from './components/NavBar/Navbar'

function App() {
  const dispatch = useDispatch()

  const closeRest = () => {
    if (sidebar) {
      dispatch(uSidebar(false))
    }
  }
  const { sidebar } = useSelector((state) => state.logic)

  useEffect(() => {
    const value = localStorage.getItem('username')
    if (value) {
      dispatch(uUserName(value))
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={` ${sidebar ? styles.sidebarOpen : styles.sidebarClose}`}>
        <Sidebar />
      </div>
      <div onClick={closeRest} className={styles.section1}>
        <NavBar />
      </div>
      <div onClick={closeRest} className={styles.section2}>
        <Routes>
          {/* Main> */}
          <Route exact path="/" element={<MainPage />} />

          <Route path="/game/:catname" element={<GameClient />} />
          <Route path="/duo" element={<ModePicker />} />
          <Route path="/duo/names" element={<UserNames />} />
          <Route path="/duo/params" element={<CategoriesPage />} />

          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
