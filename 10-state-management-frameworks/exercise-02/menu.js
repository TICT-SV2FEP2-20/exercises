import { createReducer } from '@reduxjs/toolkit';

export default {
  open: createAction('menu/OPEN'),
  close: createAction('menu/CLOSE')
}

export const actions = {
  open,
  close,
}

export const reducer = createReducer(false, {
  'menu/OPEN': () => true,
  'menu/CLOSE': () => false
})