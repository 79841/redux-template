import type { Category as TCategory } from "@/types/Category";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CategoryListSliceState = [];

export const categoryListSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TCategory>) => {
      for (let category of state) {
        if (category.name === action.payload.name) return state;
      }
      state.push(action.payload);
    },
    delete: (state, action: PayloadAction<string>) => {
      return state.filter((category) => category.name != action.payload);
    },
  },
});

export const categoryListActions = categoryListSlice.actions;

export type CategoryListSliceState = TCategory[];
