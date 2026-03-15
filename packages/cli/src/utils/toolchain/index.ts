import type { Formatter, FormatterTool, Linter, LinterTool } from "./types"
import { detectFormatter, detectLinter } from "./detect"

export type {
  Formatter,
  FormatterOptions,
  FormatterTool,
  Linter,
  LinterOptions,
  LinterTool,
} from "./types"

export async function resolveFormatter(
  cwd: string,
  tool?: FormatterTool,
): Promise<Formatter> {
  const resolved = detectFormatter(cwd, tool)

  switch (resolved) {
    case "prettier": {
      const { createPrettierFormatter } = await import("./formatters/prettier")

      return createPrettierFormatter()
    }

    case "biome":
      throw new Error(
        `Formatter adapter for "biome" is not yet implemented. Please use "prettier" or contribute an adapter.`,
      )

    case "oxfmt":
      throw new Error(
        `Formatter adapter for "oxfmt" is not yet implemented. Please use "prettier" or contribute an adapter.`,
      )

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
    case "eslint": {
      const { createESLintLinter } = await import("./linters/eslint")

      return createESLintLinter()
    }

    case "biome":
      throw new Error(
        `Linter adapter for "biome" is not yet implemented. Please use "eslint" or contribute an adapter.`,
      )

    case "oxlint":
      throw new Error(
        `Linter adapter for "oxlint" is not yet implemented. Please use "eslint" or contribute an adapter.`,
      )

    default: {
      const _exhaustive: never = resolved
      throw new Error(`Unknown linter tool: ${_exhaustive}`)
    }
  }
}
