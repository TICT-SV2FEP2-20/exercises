import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'menu',
  initialState: false,
  reducers: {
    open: () => true,
    close: () => false
  }
})

export {
  actions,
  reducer
}