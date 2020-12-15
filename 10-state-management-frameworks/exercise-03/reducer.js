import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counter.js'
import { reducer as menuReducer } from './menu.js'

export default combineReducers({
  counter: counterReducer,
  menu: menuReducer,
})