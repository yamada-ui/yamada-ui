import type { BuiltInParserName } from "prettier"
import type { FormatConfig } from "../../../index.type"
import type { Detection } from "../resolve"

export interface FormatOptions extends FormatConfig {
  cwd?: string
  parser?: BuiltInParserName
}

export interface Formatter {
  name: string
  detect(cwd: string): Promise<Detection>
  formatFiles(
    patterns: string | string[],
    options?: FormatOptions,
  ): Promise<void>
  formatText(content: string, options?: FormatOptions): Promise<string>
}
