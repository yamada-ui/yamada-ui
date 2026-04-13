import type {
  Formatter,
  FormatterTool,
  FormatterToolName,
  Linter,
  LinterTool,
  LinterToolName,
} from "./types"
import {
  DEFAULT_FORMATTER,
  DEFAULT_LINTER,
  detectFormatter,
  detectLinter,
} from "./detect"

export { DEFAULT_FORMATTER, DEFAULT_LINTER }

export function selectFormatter(options: {
  format?: { enabled?: boolean }
  formatter?: FormatterToolName
}): FormatterToolName | undefined {
  if (options.formatter !== undefined) return options.formatter
  if (options.format?.enabled === false) return undefined
  return DEFAULT_FORMATTER
}

export function selectLinter(options: {
  lint?: { enabled?: boolean }
  linter?: LinterToolName
}): LinterToolName | undefined {
  if (options.linter !== undefined) return options.linter
  if (options.lint?.enabled === false) return undefined
  return DEFAULT_LINTER
}

export type {
  Formatter,
  FormatterConfig,
  FormatterOptions,
  FormatterTool,
  FormatterToolName,
  Linter,
  LinterConfig,
  LinterOptions,
  LinterTool,
  LinterToolName,
} from "./types"

export async function resolveFormatter(
  cwd: string,
  tool?: FormatterTool,
): Promise<Formatter> {
  const resolved = detectFormatter(cwd, tool)

  switch (resolved) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- exhaustive switch for future tool additions
    case "prettier": {
      const { createPrettierFormatter } = await import("./formatters/prettier")

      return createPrettierFormatter()
    }

    default: {
      const _exhaustive: never = resolved
      throw new Error(`Unknown formatter tool: ${_exhaustive}`)
    }
  }
}

export async function resolveLinter(
  cwd: string,
  tool?: LinterTool,
): Promise<Linter> {
  const resolved = detectLinter(cwd, tool)

  switch (resolved) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- exhaustive switch for future tool additions
    case "eslint": {
      const { createESLintLinter } = await import("./linters/eslint")

      return createESLintLinter()
    }

    default: {
      const _exhaustive: never = resolved
      throw new Error(`Unknown linter tool: ${_exhaustive}`)
    }
  }
}
