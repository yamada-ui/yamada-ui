import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    coverage: {
      exclude: [
        "**/dist",
        "**/bin",
        "**/@types",
        "**/*.types.ts",
        "packages/cli",
        "packages/react",
        "packages/theme",
        "packages/test",
        "packages/next",
        "packages/create-yamada-app",
        "packages/**/tests",
        "packages/**/scripts",
      ],
      include: ["packages"],
      provider: "v8",
    },
    watch: false,
    onConsoleLog: (_log, type) => type !== "stderr",
  },
})
