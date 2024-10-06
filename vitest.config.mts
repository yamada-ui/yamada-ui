import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        "**/dist",
        "**/bin",
        "**/@types",
        "packages/cli",
        "packages/react",
        "packages/theme",
        "packages/test",
        "packages/next",
        "packages/**/tests",
        "packages/**/scripts",
      ],
      include: ["packages"],
      provider: "v8",
    },
    environment: "jsdom",
    globals: true,
    include: ["packages/**/*.test.{ts,tsx}"],
    setupFiles: ["./scripts/setup-test.ts"],
    watch: false,
    onConsoleLog: (_log, type) => type !== "stderr",
  },
})
