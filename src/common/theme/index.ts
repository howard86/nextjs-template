import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      minHeight: "100%",
      colorPalette: "purple",
    },
  },
});

export const system = createSystem(defaultConfig, config);
