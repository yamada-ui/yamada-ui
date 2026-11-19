import type { PlaywrightProviderOptions } from "@vitest/browser-playwright"
import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { defineProject, mergeConfig } from "@yamada-ui/workspace/vitest"
import sharedConfig from "@yamada-ui/workspace/vitest/config"

const browsers: {
  browser: "chromium" | "firefox" | "webkit"
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
        },
      },
    },
  },
  { browser: "webkit" },
]

const isolatedJsdomTests = [
  "src/components/carousel/carousel.test.tsx",
  "src/utils/effect.test.ts",
  "src/utils/ssr.test.ts",
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
          exclude: [
            "src/**/*.test.{browser,chromium,firefox,webkit}.{ts,tsx}",
            ...isolatedJsdomTests,
          ],
          globals: true,
          include: ["src/**/*.test.{ts,tsx}"],
          isolate: false,
          restoreMocks: true,
          setupFiles: ["@yamada-ui/workspace/vitest/setup", "./test/setup.ts"],
          unstubEnvs: true,
          unstubGlobals: true,
        },
      }),
      defineProject({
        test: {
          name: "jsdom:isolated",
          environment: "jsdom",
          globals: true,
          include: isolatedJsdomTests,
          isolate: true,
          restoreMocks: true,
          setupFiles: ["@yamada-ui/workspace/vitest/setup", "./test/setup.ts"],
          unstubEnvs: true,
          unstubGlobals: true,
        },
      }),
      ...browsers.map(({ browser, options }) =>
        defineProject({
          test: {
            name: `browser:${browser}`,
            browser: {
              enabled: true,
              headless: true,
              instances: [{ browser: browser }],
              provider: playwright(options),
            },
            fileParallelism: browser !== "firefox",
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
