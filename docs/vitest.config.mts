import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    include: ["pages/api/**/*.test.{ts,tsx}"],
    environment: "node",
    testTimeout: 10000,
    globals: true,
    watch: false,
    onConsoleLog: (_log, type) => type !== "stderr",
    setupFiles: ["scripts/setup-test.ts"],
  },
})
