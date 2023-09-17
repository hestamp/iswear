import React, { useRef } from 'react'
import styles from './InfiniteSpace.module.css'
import starSky from './sky.webp'
import earthPic from './earth.webp'

const InfiniteSpace = () => {
  const bgboxRef = useRef(null)

  const handleEarthDivHover = () => {
    bgboxRef.current.style.transform = 'scale(1.1)'
  }

  const handleEarthDivLeave = () => {
    bgboxRef.current.style.transform = 'scale(1)'
  }

  return (
    <div className={styles.allBox}>
      <h3 className={styles.earthText}>EARTH</h3>
      <a
        target="_blank"
        href="https://solarsystem.nasa.gov/planets/earth/overview/"
        className={styles.earthButt}
      >
        MORE INFO
      </a>
      <div ref={bgboxRef} id="bgbox" className={styles.bgbox}>
        <div className={styles.spaceWrapper}>
          <img className={styles.spaceImg} src={starSky} alt="Space" />
          <img className={styles.spaceImg} src={starSky} alt="Space" />
        </div>
      </div>
      <div
        onMouseEnter={handleEarthDivHover}
        onMouseLeave={handleEarthDivLeave}
        className={styles.earthBox}
      >
        <div className={styles.earthDiv}>
          <div className={styles.disdiv}>
            <img src={earthPic} alt="Earth" />
            <img src={earthPic} alt="Earth" />
            <img src={earthPic} alt="Earth" />
            <img src={earthPic} alt="Earth" />
            <img src={earthPic} alt="Earth" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfiniteSpace
