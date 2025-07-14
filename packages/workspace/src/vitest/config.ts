import type { ViteUserConfig } from "vitest/config"

export default {
  test: {
    coverage: {
      exclude: [
        "**/*.types.{ts,tsx}",
        "**/*.stories.{ts,tsx}",
        "**/*.test.{ts,tsx}",
      ],
      include: ["src"],
      provider: "v8",
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["@yamada-ui/workspace/vitest/setup"],
    watch: false,
    onConsoleLog: (_, type) => type !== "stderr",
  },
} satisfies ViteUserConfig
