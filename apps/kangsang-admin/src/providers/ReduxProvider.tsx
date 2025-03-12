"use client";

import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "../redux/store";

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: ReduxProviderProps) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
