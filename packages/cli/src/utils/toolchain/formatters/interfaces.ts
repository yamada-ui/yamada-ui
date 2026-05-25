import type { FormatConfig } from "../../../index.type"
import type { ToolchainAdapter } from "../resolve"

export interface FormatOptions extends FormatConfig {
  cwd?: string
}

export interface FormatterAdapter extends ToolchainAdapter {
  formatFiles(
    patterns: string | string[],
    options?: FormatOptions,
  ): Promise<void>
  formatText(content: string, options?: FormatOptions): Promise<string>
}
