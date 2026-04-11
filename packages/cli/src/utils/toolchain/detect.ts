import type {
  FormatterTool,
  FormatterToolName,
  LinterTool,
  LinterToolName,
  ToolDetectEntry,
} from "./types"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { prettierDetect } from "./formatters/prettier"
import { eslintDetect } from "./linters/eslint"

export const DEFAULT_FORMATTER: FormatterToolName = "prettier"
export const DEFAULT_LINTER: LinterToolName = "eslint"

const FORMATTERS: { [K in FormatterToolName]: ToolDetectEntry } = {
  prettier: prettierDetect,
}

const LINTERS: { [K in LinterToolName]: ToolDetectEntry } = {
  eslint: eslintDetect,
}

function hasDependency(cwd: string, name: string): boolean {
  try {
    const pkgPath = join(cwd, "package.json")

    if (!existsSync(pkgPath)) return false

    const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"))

    return !!(pkg.dependencies?.[name] || pkg.devDependencies?.[name])
  } catch {
    return false
  }
}

function hasConfigFile(cwd: string, patterns: string[]): boolean {
  return patterns.some((pattern) => existsSync(join(cwd, pattern)))
}

function detectTool<T extends string>(
  cwd: string,
  registry: { [K in T]: ToolDetectEntry },
): T | undefined {
  const found = Object.entries<ToolDetectEntry>(registry).find(
    ([, entry]) =>
      hasConfigFile(cwd, entry.configs) || hasDependency(cwd, entry.dependency),
  )

  return found?.[0] as T | undefined
}

export function detectFormatter(
  cwd: string,
  tool?: FormatterTool,
): FormatterToolName {
  if (tool && tool !== "auto") return tool

  return detectTool(cwd, FORMATTERS) ?? DEFAULT_FORMATTER
}

export function detectLinter(cwd: string, tool?: LinterTool): LinterToolName {
  if (tool && tool !== "auto") return tool

  return detectTool(cwd, LINTERS) ?? DEFAULT_LINTER
}
