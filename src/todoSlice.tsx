import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  done?: boolean;
  initialState?: [];
}

const initialState = [
  { id: 1, text: "Faire les courses", done: false },
  { id: 2, text: "Ménage !", done: true },
] as Todo[];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        text: action.payload,
        id: Date.now(),
        done: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    deleteTask: (state, action) => {
      state = state.filter((t) => t.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, toggleTask, deleteTask } = todoSlice.actions;
