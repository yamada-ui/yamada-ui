import react from "@vitejs/plugin-react-swc"
import { resolve } from "node:path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  // @ts-expect-error
  plugins: [react()],
  resolve: {
    alias: {
      "#browser-test": resolve(__dirname, "./browser-test"),
      "#test": resolve(__dirname, "./test"),
      "@": resolve(__dirname, "./src"),
    },
  },
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
    globals: true,
    watch: false,
    onConsoleLog: (_, type) => type !== "stderr",

    projects: [
      {
        extends: true,
        test: {
          name: "jsdom",
          environment: "jsdom",
          exclude: ["src/**/*.browser.test.{ts,tsx}"],
          include: ["src/**/*.test.{ts,tsx}"],
          setupFiles: ["@yamada-ui/workspace/vitest/setup"],
        },
      },
      {
        extends: true,
        test: {
          name: "browser",
          browser: {
            enabled: true,
            headless: true,
            instances: [
              {
                browser: "chromium",
              },
              {
                browser: "webkit",
              },
              {
                browser: "firefox",
              },
            ],
            provider: "playwright",
          },
          include: ["src/**/*.browser.test.{ts,tsx}"],
          setupFiles: ["@yamada-ui/workspace/vitest/setup-browser"],
        },
      },
    ],
  },
})
