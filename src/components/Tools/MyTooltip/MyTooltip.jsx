'use client'

import React from 'react'
import styles from './MyTooltip.module.css'
import * as Tooltip from '@radix-ui/react-tooltip'

const MyTooltip = ({
  children,
  description,
  duration,
  position,
  side,
  ...rest
}) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={duration}>
        <Tooltip.Trigger asChild>
          <div {...rest} className={styles.IconButton}>
            {children}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={position || 'top'}
            className={styles.TooltipContent}
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
