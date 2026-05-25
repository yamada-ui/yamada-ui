import { prettierFormatter } from "./formatters/prettier"
import { eslintLinter } from "./linters/eslint"
import { resolveAdapter } from "./resolve"

export type {
  FormatOptions,
  FormatterAdapter as Formatter,
} from "./formatters/interfaces"
export type {
  LinterAdapter as Linter,
  LintFilesOptions,
  LintTextOptions,
} from "./linters/interfaces"
export type { ToolchainAdapter as Adapter } from "./resolve"

const formatters = [prettierFormatter]
const linters = [eslintLinter]

export async function resolveToolchain(cwd: string) {
  const [formatter, linter] = await Promise.all([
    resolveAdapter(formatters, prettierFormatter.name, cwd),
    resolveAdapter(linters, eslintLinter.name, cwd),
  ])

  return { formatter, linter }
}
