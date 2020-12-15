import { createReducer } from '@reduxjs/toolkit';

const initialState = 0

export const actions = {
  increment: createAction('counter/INCREMENT', (amount) => ({payload: amount ?? 1})),
  decrement: createAction('counter/DECREMENT', (amount) => ({payload: amount ?? 1})),
  reset: createAction('counter/RESET')
}

export const reducer = createReducer(initialState, {
  'counter/INCREMENT': (state, action) => state + action.payload,
  'counter/DECREMENT': (state, action) => state - action.payload,
  'counter/RESET': () => initialState
})