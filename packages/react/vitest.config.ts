import react from "@vitejs/plugin-react-swc"
import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { defineConfig, mergeConfig } from "vitest/config"

export default mergeConfig(
  sharedConfig,
  defineConfig({
    plugins: [react()],
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
