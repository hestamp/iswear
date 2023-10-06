import styles from './App.module.css'

import { Routes, Route } from 'react-router-dom'

import Settings from './pages/Settings/Settings'
import AboutPage from './pages/AboutPage/AboutPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import MainPage from './pages/MainPage/MainPage'

import ModePicker from './pages/ModePicker/ModePicker'
import GameClient from './pages/GameClient/GameClient'
import UserNames from './pages/UserNames/UserNames'

import Navbar from './components/Navbar/Navbar'
import CustomPage from './pages/CustomPage/CustomPage'

function App() {
  return (
    <div className={styles.appwrap}>
      <nav className={styles.section1}>
        <Navbar />
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
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
