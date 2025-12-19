// @ts-nocheck -- vite version mismatch between storybook (5.x) and vitest (7.x)
import react from "@vitejs/plugin-react-swc"
import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { resolve } from "node:path"
import { defineConfig, mergeConfig } from "vitest/config"

export default mergeConfig(
  sharedConfig,
  defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "#test": resolve(__dirname, "./test"),
        "@": resolve(__dirname, "./src"),
      },
    },
  }),
)
