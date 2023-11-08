import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import { storage } from "./storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["categoryList"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducer)
);

export const reduxStore = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(reduxStore);

export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
