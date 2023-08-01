import { createSlice } from '@reduxjs/toolkit'

const tempSlice = createSlice({
  name: 'temp',
  initialState: {
    pageName: 'iSwear',
  },
  reducers: {
    uPageName: (state, action) => {
      state.pageName = action.payload
    },
  },
})

export const { uPageName } = tempSlice.actions
export default tempSlice.reducer
