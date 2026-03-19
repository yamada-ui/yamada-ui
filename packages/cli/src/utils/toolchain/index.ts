import type { Formatter, FormatterTool, Linter, LinterTool } from "./types"
import { detectFormatter, detectLinter } from "./detect"

export type {
  Formatter,
  FormatterConfig,
  FormatterOptions,
  FormatterTool,
  Linter,
  LinterConfig,
  LinterOptions,
  LinterTool,
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
