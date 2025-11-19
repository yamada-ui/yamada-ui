import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { resolve } from "node:path"
import { defineProject, mergeConfig } from "vitest/config"

export default mergeConfig(sharedConfig, {
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
          exclude: ["src/**/*.browser.test.{ts,tsx}"],
          globals: true,
          include: ["src/**/*.test.{ts,tsx}"],
          setupFiles: ["@yamada-ui/workspace/vitest/setup"],
        },
      }),
      defineProject({
        resolve: {
          alias: {
            "#browser-test": resolve(__dirname, "./browser-test"),
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
          include: ["src/**/*.browser.test.{ts,tsx}"],
        },
      }),
    ],
  },
})
