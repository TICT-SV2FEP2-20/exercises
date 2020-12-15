import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + (action.payload || 1),
    decrement: (state, action) => state - (action.payload || 1),
    reset: () => 0,
  }
})

export {
  actions,
  reducer
}