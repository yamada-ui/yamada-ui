import react from "@vitejs/plugin-react-swc"
import { playwright } from "@vitest/browser-playwright"
import sharedConfig from "@yamada-ui/workspace/vitest/config"
import { readFile } from "fs/promises"
import { glob } from "glob"
import { resolve } from "node:path"
import { defineProject, mergeConfig } from "vitest/config"

async function getBrowserTestFiles() {
  const paths = await glob(resolve(__dirname, "src", "**", "*.test.{ts,tsx}"))
  const targetPaths: string[] = []

  await Promise.all(
    paths.map(async (path) => {
      try {
        const content = await readFile(path, "utf-8")
        const browser = /^import\s+\{[^}]*\}\s+from\s+"#test\/browser"/m.test(
          content,
        )

        if (browser) {
          targetPaths.push(path.replace(resolve(__dirname) + "/", ""))
        }
      } catch {}
    }),
  )

  return targetPaths
}

const browserTestFiles = await getBrowserTestFiles()

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
          exclude: browserTestFiles,
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
            provider: playwright() as any,
          },
          globals: true,
          include: browserTestFiles,
        },
      }),
    ],
  },
})
