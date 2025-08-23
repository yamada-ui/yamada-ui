import type { LintConfig } from "../index.type"
import { ESLint } from "eslint"

export interface LintTextOptions extends LintConfig {
  cwd?: string
  filePath?: string
}

export async function lintText(
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

export interface LintFilesOptions extends Omit<LintTextOptions, "filePath"> {}

export async function lintFiles(
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
