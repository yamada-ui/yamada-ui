import react from "@vitejs/plugin-react-swc"
// @ts-nocheck -- vite version mismatch between storybook (5.x) and vitest (7.x)
import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { resolve } from "node:path"
import { defineProject, mergeConfig } from "vitest/config"

export default mergeConfig(sharedConfig, {
  plugins: [react()],
  test: {
    projects: [
      defineProject({
        resolve: {
          alias: {
            "#test": resolve(__dirname, "./test"),
            "@": resolve(__dirname, "./src"),
          },
        },
        test: {
          name: "jsdom",
          environment: "jsdom",
          exclude: ["src/{components,hooks}/**/*.browser.test.tsx"],
          globals: true,
          include: ["src/**/*.test.{ts,tsx}"],
          setupFiles: ["@yamada-ui/workspace/vitest/setup"],
        },
      }),
      defineProject({
        resolve: {
          alias: {
            "#test/browser": resolve(__dirname, "./test/browser"),
            "@": resolve(__dirname, "./src"),
          },
        },
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
          globals: true,
          include: ["src/{components,hooks}/**/*.browser.test.tsx"],
        },
      }),
    ],
  },
})
