import type { ViteUserConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"

export default {
  // @ts-expect-error
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        "**/*.types.{ts,tsx}",
        "**/*.stories.{ts,tsx}",
        "**/*.test.{ts,tsx}",
      ],
      include: ["src/**/*.{ts,tsx}"],
      provider: "v8",
    },
    watch: false,
    onConsoleLog: (_, type) => type !== "stderr",
  },
} satisfies ViteUserConfig
