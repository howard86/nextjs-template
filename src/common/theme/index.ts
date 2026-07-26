import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      colorPalette: "purple",
      minHeight: "100%",
    },
  },
});

export const system = createSystem(defaultConfig, config);
