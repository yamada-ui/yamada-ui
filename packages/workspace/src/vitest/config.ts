import type { ViteUserConfig } from "vitest/config"

export default {
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
