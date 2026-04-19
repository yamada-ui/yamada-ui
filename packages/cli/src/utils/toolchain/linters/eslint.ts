import type { Linter, LinterOptions, ToolDetectEntry } from "../types"

export const eslintDetect: ToolDetectEntry = {
  configs: [
    ".eslintrc",
    ".eslintrc.json",
    ".eslintrc.yaml",
    ".eslintrc.yml",
    ".eslintrc.js",
    ".eslintrc.cjs",
    ".eslintrc.mjs",
    "eslint.config.js",
    "eslint.config.cjs",
    "eslint.config.mjs",
    "eslint.config.ts",
  ],
  dependency: "eslint",
}

export function createESLintLinter(): Linter {
  const lintText = async (
    content: string,
    options?: LinterOptions,
  ): Promise<string> => {
    try {
      const { ESLint } = await import("eslint")

      const eslint = new ESLint({
        cwd: options?.cwd,
        fix: true,
        overrideConfigFile: options?.configPath ?? undefined,
      })

      const [result] = await eslint.lintText(content, {
        filePath: options?.filePath,
      })

      if (result?.output) content = result.output

      return content
    } catch {
      return content
    }
  }

  const lintFiles = async (
    patterns: string | string[],
    options?: LinterOptions,
  ): Promise<void> => {
    try {
      const { ESLint } = await import("eslint")

      const eslint = new ESLint({
        cwd: options?.cwd,
        fix: true,
        overrideConfigFile: options?.configPath ?? undefined,
      })

      const results = await eslint.lintFiles(patterns)

      await ESLint.outputFixes(results)
    } catch {}
  }

  return { lintFiles, lintText }
}
