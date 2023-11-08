import { persistReducer } from "redux-persist";
import { categoryListSlice, taskListSlice } from "./slices";
import { storage } from "./storage";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer = {
  taskList: taskListSlice.reducer,
  categoryList: categoryListSlice.reducer,
};

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["categoryList"],
};

export const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducer)
);
