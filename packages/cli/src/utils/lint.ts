import type { LintConfig } from "../index.type"
import { ESLint } from "eslint"

export interface LintOptions extends LintConfig {
  cwd?: string
}

export async function lint(
  content: string,
  { cwd, enabled = true, filePath }: LintOptions = {},
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
