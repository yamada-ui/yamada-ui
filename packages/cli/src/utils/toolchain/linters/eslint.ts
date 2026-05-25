import type { Detection } from "../resolve"
import type {
  LinterAdapter,
  LintFilesOptions,
  LintTextOptions,
} from "./interfaces"
import { ESLint } from "eslint"
import { existsSync } from "node:fs"
import { readFile } from "node:fs/promises"
import path from "node:path"

const CONFIG_FILES = [
  "eslint.config.js",
  "eslint.config.mjs",
  "eslint.config.cjs",
  "eslint.config.ts",
  "eslint.config.mts",
  "eslint.config.cts",
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.json",
  ".eslintrc.yaml",
  ".eslintrc.yml",
]

async function detect(cwd: string): Promise<Detection> {
  if (CONFIG_FILES.some((file) => existsSync(path.join(cwd, file))))
    return "config"

  const packageJsonPath = path.join(cwd, "package.json")

  if (existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(await readFile(packageJsonPath, "utf-8"))

      if (packageJson.eslintConfig) return "config"

      if (
        packageJson.dependencies?.eslint ||
        packageJson.devDependencies?.eslint
      )
        return "dependency"
    } catch {}
  }

  return false
}

async function lintText(
  content: string,
  { cwd, enabled = true, filePath }: LintTextOptions = {},
) {
  if (!enabled) return content

  try {
    const eslint = new ESLint({ cwd, fix: true })

    const [result] = await eslint.lintText(content, { filePath })

    if (result?.output) content = result.output

    return content
  } catch {
    return content
  }
}

async function lintFiles(
  patterns: string | string[],
  { cwd, enabled = true }: LintFilesOptions = {},
) {
  if (!enabled) return

  try {
    const eslint = new ESLint({ cwd, fix: true })

    const results = await eslint.lintFiles(patterns)

    await ESLint.outputFixes(results)
  } catch {}
}

export const eslintLinter = {
  name: "eslint",
  detect,
  lintFiles,
  lintText,
} as const satisfies LinterAdapter
