'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { menuLocal } from '../../data/localization'

export const GeneralContext = createContext()

export const GeneralProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [pickedMode, setPickedMode] = useState(null)
  const [pageColor, setPageColor] = useState('#f7f8fa')
  const [pickedTopic, setPickedTopic] = useState(null)
  const [subMode, setSubMode] = useState(null)
  const [topicObj, setTopicObj] = useState(null)
  const [questArray, setQuestArray] = useState(null)
  const [customTopics, setCustomTopics] = useState([])
  const [pageName, setPageName] = useState('Page')
  const [lang, setLang] = useState('ENG')

  useEffect(() => {
    const oneName = localStorage.getItem('username')
    if (oneName) {
      setFirstName(oneName)
    }
    const twoName = localStorage.getItem('secondname')
    if (twoName) {
      setSecondName(twoName)
    }

    const userLang = localStorage.getItem('language')
    if (userLang) {
      setLang(userLang)
    }
  }, [])

  const allStorage = {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    pickedMode,
    setPickedMode,
    pickedTopic,
    setPickedTopic,
    subMode,
    setSubMode,
    topicObj,
    setTopicObj,
    questArray,
    setQuestArray,
    customTopics,
    setCustomTopics,
    pageColor,
    setPageColor,
    pageName,
    setPageName,
    lang,
    setLang,
  }

  return (
    <GeneralContext.Provider value={allStorage}>
      {children}
    </GeneralContext.Provider>
  )
}

export function useMyContext() {
  const context = useContext(GeneralContext)
  if (!context) {
    throw new Error('Global context is oudside of Global Provider')
  }
  return context
}
