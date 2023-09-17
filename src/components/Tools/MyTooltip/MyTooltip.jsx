'use client'

import React, { useContext } from 'react'
import styles from './MyTooltip.module.css'

import * as Tooltip from '@radix-ui/react-tooltip'

import { ThemeContext } from '../../../context/ThemeContext'

const MyTooltip = ({ children, description, duration, position, side }) => {
  const { themeMode } = useContext(ThemeContext)
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={duration}>
        <Tooltip.Trigger asChild>
          <div className={styles.IconButton}>{children}</div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={position || 'top'}
            className={`${styles.TooltipContent} ${
              themeMode == 'light' ? styles.light : styles.dark
            }`}
            sideOffset={side || 6}
          >
            {description}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default MyTooltip
