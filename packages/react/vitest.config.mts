import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        // TODO: Remove legacy-components
        "**/legacy-components",
        "**/dist",
        "**/bin",
        "**/@types",
        "**/*.types.ts",
        "**/*.stories.{ts,tsx}",
        "**/*.test.{ts,tsx}",
      ],
      include: ["src"],
      provider: "v8",
    },
    environment: "jsdom",
    globals: true,
    // TODO: Remove legacy-components
    include: ["src/!(legacy-components)/**/*.test.{ts,tsx}"],
    setupFiles: ["../../scripts/setup-test.ts"],
    watch: false,
    onConsoleLog: (_log, type) => type !== "stderr",
  },
})
