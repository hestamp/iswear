import React from 'react'
import styles from './MyDropdown.module.css'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const MyDropdown = ({
  selected,
  array,
  myalign,
  theme,
  setPickedId,
  setCurrentName,
}) => {
  return (
    <DropdownMenu.Root className={styles.mainDrop}>
      <DropdownMenu.Trigger asChild>
        <div
          // style={{
          //   background: `${theme == 'dark' ? '#202020' : '#fbfbfb'}`,
          // }}
          className={styles.mainDrop}
          aria-label="Picker"
        >
          <div className={styles.pickedDate}>{selected}</div>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={myalign}
          // style={{
          //   backgroundColor: `${theme === 'dark' ? '#202020' : 'white'}`,
          //   color: `${theme === 'dark' ? 'white' : 'black'}`,
          //   marginTop: '-5px',
          // }}
          className={styles.DropdownMenuContent}
        >
          {array.map((item) => {
            const funcItem = (item) => {
              setCurrentName(item.name)
              setPickedId(item.id)
            }
            return (
              <DropdownMenu.Item
                key={item.name}
                onClick={() => funcItem(item)}
                className={styles.DropdownMenuItem}
              >
                {item.name}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default MyDropdown
