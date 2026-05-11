import type { PlaywrightProviderOptions } from "@vitest/browser-playwright"
import type { BrowserInstanceOption } from "vitest/node"
import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { defineProject, mergeConfig } from "@yamada-ui/workspace/vitest"
import sharedConfig from "@yamada-ui/workspace/vitest/config"

const browsers: {
  browser: BrowserInstanceOption["browser"]
  options?: PlaywrightProviderOptions
}[] = [
  { browser: "chromium" },
  {
    browser: "firefox",
    options: {
      launchOptions: {
        firefoxUserPrefs: {
          "signon.autofillForms": false,
          "signon.generation.enabled": false,
          "signon.rememberSignons": false,
          "browser.sessionhistory.max_total_viewers": 0,
          "javascript.options.mem.max": 2048,
        },
      },
    },
  },
  { browser: "webkit" },
]

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
        test: {
          name: "jsdom",
          environment: "jsdom",
          exclude: ["src/**/*.test.{browser,chromium,firefox,webkit}.{ts,tsx}"],
          globals: true,
          include: ["src/**/*.test.{ts,tsx}"],
          setupFiles: ["@yamada-ui/workspace/vitest/setup"],
        },
      }),
      ...browsers.map(({ browser, options }) =>
        defineProject({
          test: {
            name: `browser:${browser}`,
            browser: {
              enabled: true,
              headless: true,
              instances: [{ browser }],
              provider: playwright(options),
            },
            globals: true,
            include: [
              "src/**/*.test.browser.{ts,tsx}",
              `src/**/*.test.${browser}.{ts,tsx}`,
            ],
          },
        }),
      ),
    ],
  },
})
