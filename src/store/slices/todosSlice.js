import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    toggleDoneTodo: (state, { payload }) => {
      state.list = state.list.map((todo) => {
        return todo.id === payload.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo;
      });
    },
    editTodo: (state, { payload }) => {
      state.list = state.list.map((todo) => {
        return todo.id === payload.id
          ? {
              ...todo,
              text: payload.text,
            }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, toggleDoneTodo, editTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
