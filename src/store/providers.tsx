"use client";

import { Provider } from "react-redux";
import { persistor, reduxStore } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
