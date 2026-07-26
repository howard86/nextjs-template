"use client";

import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { useRef } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { type AppStore, makeStore } from "@/common/redux/store";
import { system } from "@/common/theme";

export function Providers({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  storeRef.current ??= makeStore();

  return (
    <ReduxProvider store={storeRef.current}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ReduxProvider>
  );
}
