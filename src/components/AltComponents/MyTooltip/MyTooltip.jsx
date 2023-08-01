import React from 'react'
import styles from './MyTooltip.module.css'

import * as Tooltip from '@radix-ui/react-tooltip'

const MyTooltip = ({ insider, description, actFunc, duration }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={duration}>
        <Tooltip.Trigger asChild>
          <div onClick={actFunc} className={styles.IconButton}>
            {insider}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            className={styles.TooltipContent}
            sideOffset={5}
          >
            {description}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default MyTooltip
