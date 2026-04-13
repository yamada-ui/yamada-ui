export interface FormatterOptions {
  configPath?: null | string
  language?: string
}

export interface Formatter {
  formatFiles(
    patterns: string | string[],
    options?: FormatterOptions,
  ): Promise<void>
  formatText(content: string, options?: FormatterOptions): Promise<string>
}

export interface LinterOptions {
  configPath?: null | string
  cwd?: string
  filePath?: string
}

export interface Linter {
  lintFiles(patterns: string | string[], options?: LinterOptions): Promise<void>
  lintText(content: string, options?: LinterOptions): Promise<string>
}

export type FormatterToolName = "prettier"
export type LinterToolName = "eslint"
export type FormatterTool = "auto" | FormatterToolName
export type LinterTool = "auto" | LinterToolName
export interface ToolDetectEntry {
  configs: string[]
  dependency: string
}

export interface FormatterConfig extends FormatterOptions {
  enabled?: boolean
}

export interface LinterConfig extends LinterOptions {
  enabled?: boolean
}
