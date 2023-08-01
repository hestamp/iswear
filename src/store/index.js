import { configureStore } from '@reduxjs/toolkit'

import logicReducer from './logicSlice'
import tempReducer from './tempSlice'
import userPickReducer from './userPickSlice'

export default configureStore({
  reducer: {
    logic: logicReducer,
    temp: tempReducer,
    userPick: userPickReducer,
  },
})
