import { mergeConfig } from "@yamada-ui/workspace/vitest"
import sharedConfig from "@yamada-ui/workspace/vitest/config"

export default mergeConfig(sharedConfig, {
  test: {
    name: "lint",
    environment: "node",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
  },
})
