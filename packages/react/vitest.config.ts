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
          exclude: [
            "src/components/badge/badge.test.tsx",
            "src/components/carousel/carousel.test.tsx",
            "src/components/flex/flex.test.tsx",
            "src/components/list/list.test.tsx",
            "src/components/stack/z-stack.test.tsx",
            "src/hooks/use-os/use-os.test.tsx",
          ],
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
          include: [
            "src/components/badge/badge.test.tsx",
            "src/components/carousel/carousel.test.tsx",
            "src/components/flex/flex.test.tsx",
            "src/components/list/list.test.tsx",
            "src/components/stack/z-stack.test.tsx",
            "src/hooks/use-os/use-os.test.tsx",
          ],
        },
      }),
    ],
  },
})
