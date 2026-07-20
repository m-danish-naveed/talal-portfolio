"use client";

import { useState } from "react";

import { useGlobalState } from "../providers/global-provider";

export function useEntryDelay() {
  const { isFirstLoadComplete } = useGlobalState();
  const [delay] = useState(() => (isFirstLoadComplete ? 1.0 : 4.3));
  return delay;
}
