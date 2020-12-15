import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    removeTodo: (state, action) => state.filter(todo => todo.id !== action.payload),
    updateTodoStatus: (state, action) => state.map(todo => {
      if (todo.id !== action.payload) {
        return todo;
      }

      return {
        ...todo,
        checked: !todo.checked
      }
    })
  }
});

export const { addTodo, removeTodo, updateTodoStatus } = actions;
export { reducer };