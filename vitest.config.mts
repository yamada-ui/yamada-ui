import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["packages/**/*.test.{ts,tsx}"],
    environment: "jsdom",
    globals: true,
    watch: false,
    coverage: {
      provider: "v8",
      include: ["packages"],
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
    },
    onConsoleLog: (_log, type) => type !== "stderr",
    setupFiles: ["./scripts/setup-test.ts"],
  },
})
