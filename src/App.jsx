import styles from './App.module.css'

import { Routes, Route } from 'react-router-dom'
import Settings from './pages/Settings/Settings'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import MainPage from './pages/MainPage/MainPage'
import ModePicker from './pages/ModePicker/ModePicker'
import GameClient from './pages/GameClient/GameClient'
import UserNames from './pages/UserNames/UserNames'
import CustomPage from './pages/CustomPage/CustomPage'
import Header from './components/Header/Header'
import HowTo from './pages/HowTo/HowTo'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    let animationFrameId

    // Function to keep the display active
    const keepDisplayActive = () => {
      animationFrameId = requestAnimationFrame(keepDisplayActive)
    }

    // Start keeping the display active as soon as the component mounts
    animationFrameId = requestAnimationFrame(keepDisplayActive)

    return () => {
      // Clean up the animation frame when the component unmounts
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={styles.appwrap}>
      <nav role="navigation" className={styles.section1}>
        <Header />
      </nav>
      <main className={styles.section2}>
        <div className={styles.allPage}>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/game/:catname" element={<GameClient />} />
            <Route path="/mode" element={<ModePicker />} />
            <Route path="/mode/names" element={<UserNames />} />
            <Route path="/mode/params" element={<CategoriesPage />} />
            <Route path="/mode/custom" element={<CustomPage />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/howto" element={<HowTo />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
