import { createSlice } from '@reduxjs/toolkit'

const tempSlice = createSlice({
  name: 'temp',
  initialState: {
    pageName: 'ProveIt',
    pageColor: '#f7f8fa',
  },
  reducers: {
    uPageName: (state, action) => {
      state.pageName = action.payload
    },
    uPageColor: (state, action) => {
      state.pageColor = action.payload
    },
  },
})

export const { uPageName, uPageColor } = tempSlice.actions
export default tempSlice.reducer
