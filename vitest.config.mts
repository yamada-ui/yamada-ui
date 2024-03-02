import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"

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
      exclude: ["dist", "theme", "tests", "test"],
    },
    setupFiles: ["./scripts/setup-test.ts"],
  },
})
