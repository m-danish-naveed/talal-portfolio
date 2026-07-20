"use client";

import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  isFirstLoadComplete: boolean;
  setIsFirstLoadComplete: (val: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType>({
  isFirstLoadComplete: false,
  setIsFirstLoadComplete: () => {},
});

export const useGlobalState = () => useContext(GlobalContext);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [isFirstLoadComplete, setIsFirstLoadComplete] = useState(false);

  return (
    <GlobalContext.Provider
      value={{ isFirstLoadComplete, setIsFirstLoadComplete }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
