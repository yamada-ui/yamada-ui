import type { Formatter } from "./formatters/interfaces"
import type { Linter } from "./linters/interfaces"
import { prettierFormatter } from "./formatters/prettier"
import { eslintLinter } from "./linters/eslint"
import { resolveAdapter } from "./resolve"

export type { FormatOptions, Formatter } from "./formatters/interfaces"
export type {
  Linter,
  LintFilesOptions,
  LintTextOptions,
} from "./linters/interfaces"

const formatters: Formatter[] = [prettierFormatter]
const linters: Linter[] = [eslintLinter]

export function resolveFormatter(
  cwd: string,
  tool?: string,
): Promise<Formatter> {
  return resolveAdapter(formatters, prettierFormatter, cwd, tool)
}

export function resolveLinter(cwd: string, tool?: string): Promise<Linter> {
  return resolveAdapter(linters, eslintLinter, cwd, tool)
}
