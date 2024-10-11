import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["pages/api/**/*.test.{ts,tsx}"],
    setupFiles: ["scripts/setup-test.ts"],
    testTimeout: 10000,
    watch: false,
    onConsoleLog: (_log, type) => type !== "stderr",
  },
})
