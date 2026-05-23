import type { Formatter } from "./formatters/interfaces"
import type { Linter } from "./linters/interfaces"
import { prettierFormatter } from "./formatters/prettier"
import { eslintLinter } from "./linters/eslint"

export type { FormatOptions, Formatter } from "./formatters/interfaces"
export type {
  Linter,
  LintFilesOptions,
  LintTextOptions,
} from "./linters/interfaces"

export const formatterAdapters: [Formatter, ...Formatter[]] = [
  prettierFormatter,
]
export const linterAdapters: [Linter, ...Linter[]] = [eslintLinter]
