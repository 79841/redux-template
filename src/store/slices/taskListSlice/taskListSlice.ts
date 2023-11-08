import type { Task as TTask } from "@/types/Task";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: TaskListSliceState = [];

export const taskListSlice = createSlice({
  name: "task list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TTask>) => {
      if (action.payload.name === "" || action.payload.category === "")
        return state;
      for (let task of state) {
        if (task.name == action.payload.name) return state;
      }
      state.push(action.payload);
    },
    switchState: (state, action: PayloadAction<string>) => {
      return state.map((task) => {
        return {
          ...task,
          done: task.name === action.payload ? !task.done : task.done,
        };
      });
    },
    delete: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.name != action.payload);
    },
  },
});

export type TaskListSliceState = TTask[];
