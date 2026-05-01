import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { defineProject, mergeConfig } from "@yamada-ui/workspace/vitest"
import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { resolve } from "node:path"

const browserPatterns = [
  "src/**/*.test.browser.{ts,tsx}",
  "src/**/*.test.chromium.{ts,tsx}",
  "src/**/*.test.firefox.{ts,tsx}",
  "src/**/*.test.webkit.{ts,tsx}",
]

const alias = {
  "@": resolve(__dirname, "./src"),
}

export default mergeConfig(sharedConfig, {
  plugins: [react()],
  test: {
    coverage: {
      exclude: [
        "src/components/icon/icons/**/*.{ts,tsx}",
        "src/providers/i18n-provider/intl/**/*.{ts,tsx}",
        "src/theme/**/*.{ts,tsx}",
      ],
    },
    projects: [
      defineProject({
        resolve: { alias },
        test: {
          name: "jsdom",
          environment: "jsdom",
          exclude: browserPatterns,
          globals: true,
          include: ["src/**/*.test.{ts,tsx}"],
          setupFiles: ["@yamada-ui/workspace/vitest/setup"],
          testTimeout: 10000,
        },
      }),
      defineProject({
        optimizeDeps: { include: ["axe-core"] },
        resolve: { alias },
        test: {
          name: "browser",
          browser: {
            enabled: true,
            headless: true,
            instances: [
              { browser: "chromium" },
              { browser: "webkit" },
              { browser: "firefox" },
            ],
            provider: playwright() as any,
          },
          globals: true,
          include: browserPatterns,
          testTimeout: 10000,
        },
      }),
    ],
  },
})
