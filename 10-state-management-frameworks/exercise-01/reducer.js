import {createReducer} from '@reduxjs/toolkit';
import counter from './actions.counter';
import menu from './actions.menu';

export default createReducer({counter: 0, menu: false}, {
  [counter.increment]: (state, action) => ({...state, counter: state.counter + action.payload}),
  [counter.decrement]: (state, action) => ({...state, counter: state.counter - action.payload}),
  [counter.reset]: (state, action) => ({...state, counter: 0}),
  [menu.open]: (state, action) => ({...state, menu: true}),
  [menu.close]: (state, action) => ({...state, menu: false})
});