import { createSlice } from '@reduxjs/toolkit'

const logicSlice = createSlice({
  name: 'logic',
  initialState: {
    sidebar: false,
  },
  reducers: {
    uSidebar: (state, action) => {
      state.sidebar = action.payload
    },
  },
})

export const { uSidebar } = logicSlice.actions
export default logicSlice.reducer
