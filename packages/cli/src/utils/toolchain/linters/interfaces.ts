import type { LintConfig } from "../../../index.type"
import type { Detection } from "../resolve"

export interface LintTextOptions extends LintConfig {
  cwd?: string
  filePath?: string
}

export interface LintFilesOptions extends Omit<LintTextOptions, "filePath"> {}

export interface Linter {
  name: string
  detect(cwd: string): Promise<Detection>
  lintFiles(
    patterns: string | string[],
    options?: LintFilesOptions,
  ): Promise<void>
  lintText(content: string, options?: LintTextOptions): Promise<string>
}
