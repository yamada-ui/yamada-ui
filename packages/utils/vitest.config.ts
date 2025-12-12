import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { mergeConfig } from "vitest/config"

export default mergeConfig(sharedConfig, {
  test: {
    name: "utils",
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["@yamada-ui/workspace/vitest/setup"],
  },
})
