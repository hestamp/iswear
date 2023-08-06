import { createSlice } from '@reduxjs/toolkit'

const userPickSlice = createSlice({
  name: 'userPick',
  initialState: {
    userName: null,
    secondName: null,
    pickedMode: null,
    pickedTopic: null,
    subMode: null,
    topicObj: null,
    questArray: null,
    customTopics: [],
  },
  reducers: {
    uPickedMode: (state, action) => {
      state.pickedMode = action.payload
    },
    uPickedTopic: (state, action) => {
      state.pickedTopic = action.payload
    },

    uSubMode: (state, action) => {
      state.subMode = action.payload
    },
    uUserName: (state, action) => {
      state.userName = action.payload
    },
    uSecondName: (state, action) => {
      state.secondName = action.payload
    },
    uTopicObj: (state, action) => {
      state.topicObj = action.payload
    },
    uQuestArray: (state, action) => {
      state.questArray = action.payload
    },
    uCustomTopics: (state, action) => {
      state.customTopics = action.payload
    },
  },
})

export const {
  uPickedMode,
  uPickedTopic,
  uSubMode,
  uUserName,
  uSecondName,
  uTopicObj,
  uQuestArray,
  uCustomTopics,
} = userPickSlice.actions
export default userPickSlice.reducer
