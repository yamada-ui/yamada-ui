import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { defineProject, mergeConfig } from "@yamada-ui/workspace/vitest"
import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { resolve } from "node:path"

const baselineDir = resolve("visual-baseline")

export default mergeConfig(
  sharedConfig,
  defineProject({
    plugins: [react()],
    test: {
      browser: {
        enabled: true,
        expect: {
          toMatchScreenshot: {
            resolveScreenshotPath: ({ arg, browserName, ext, platform }) =>
              `${baselineDir}/${arg}-${browserName}-${platform}${ext}`,
          },
        },
        headless: true,
        instances: [
          { browser: "chromium", viewport: { height: 800, width: 1000 } },
        ],
        provider: playwright(),
      },
      include: ["visual/**/*.visual.tsx"],
    },
  }),
)
