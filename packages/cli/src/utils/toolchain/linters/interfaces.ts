import type { LintConfig } from "../../../index.type"
import type { ToolchainAdapter } from "../resolve"

export interface LintTextOptions extends LintConfig {
  cwd?: string
  filePath?: string
}

export interface LintFilesOptions extends Omit<LintTextOptions, "filePath"> {}

export interface LinterAdapter extends ToolchainAdapter {
  lintFiles(
    patterns: string | string[],
    options?: LintFilesOptions,
  ): Promise<void>
  lintText(content: string, options?: LintTextOptions): Promise<string>
}
