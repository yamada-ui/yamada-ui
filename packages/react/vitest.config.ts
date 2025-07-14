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
    test: {
      coverage: {
        exclude: [
          // TODO: Remove legacy-components
          "src/legacy-components/**",
        ],
      },
      exclude: ["src/legacy-components/**"],
    },
  }),
)
