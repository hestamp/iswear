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
import { uSecondName, uUserName } from './store/userPickSlice'
import NavBar from './components/NavBar/Navbar'
import CustomPage from './pages/CustomPage/CustomPage'
import { ThemeProvider } from './context/ThemeContext'
import PageBlock from './components/PageBlock/PageBlock'
import InfiniteSpace from './pages/InfiniteSpace/InfiniteSpace'

function App() {
  const dispatch = useDispatch()

  const closeRest = () => {
    if (sidebar) {
      dispatch(uSidebar(false))
    }
  }
  const { sidebar } = useSelector((state) => state.logic)
  const { pageColor } = useSelector((state) => state.temp)

  useEffect(() => {
    const value = localStorage.getItem('username')
    if (value) {
      dispatch(uUserName(value))
    }
    const val2 = localStorage.getItem('secondname')
    if (val2) {
      dispatch(uSecondName(val2))
    }
  }, [])
  return (
    <ThemeProvider>
      <main className={styles.mainapp}>
        <div className={styles.container}>
          <div
            className={` ${sidebar ? styles.sidebarOpen : styles.sidebarClose}`}
          >
            <Sidebar />
          </div>
          <div onClick={closeRest} className={styles.section1}>
            <NavBar />
          </div>
          {/* <div
            style={{ backgroundColor: pageColor }}
            onClick={closeRest}
            className={styles.section2}
          >
            
          </div> */}
          <PageBlock>
            <Routes>
              {/* Main> */}
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/space" element={<InfiniteSpace />} />

              <Route path="/game/:catname" element={<GameClient />} />
              <Route path="/duo" element={<ModePicker />} />
              <Route path="/duo/names" element={<UserNames />} />
              <Route path="/duo/params" element={<CategoriesPage />} />
              <Route path="/duo/custom" element={<CustomPage />} />

              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/about" element={<AboutPage />} />
            </Routes>
          </PageBlock>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
