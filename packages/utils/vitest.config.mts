import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        "**/dist",
        "**/bin",
        "**/@types",
        "**/*.types.ts",
        "**/*.test.{ts,tsx}",
      ],
      include: ["src"],
      provider: "v8",
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["../../scripts/setup-test.ts"],
    watch: false,
    onConsoleLog: (_log, type) => type !== "stderr",
  },
})
