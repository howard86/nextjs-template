import { ChakraProvider } from "@chakra-ui/react";
import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";
import { Provider as ReduxProvider } from "react-redux";

import { makeStore } from "@/common/redux/store";
import { system } from "@/common/theme";

export const appRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(
    <ReduxProvider store={makeStore()}>
      <ChakraProvider value={system}>{ui}</ChakraProvider>
    </ReduxProvider>,
    options
  );
