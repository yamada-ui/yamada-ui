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

export type FormatterTool = "auto" | "biome" | "oxfmt" | "prettier"
export type LinterTool = "auto" | "biome" | "eslint" | "oxlint"
