import { mergeConfig } from "@yamada-ui/workspace/vitest"
import sharedConfig from "@yamada-ui/workspace/vitest/config"

export default mergeConfig(sharedConfig, {
  test: {
    name: "cli",
    coverage: {
      exclude: ["src/index.ts"],
    },
    environment: "node",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
    testTimeout: 60000,
  },
})
