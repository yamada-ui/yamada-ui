import type { FormatterTool, LinterTool, ToolDetectEntry } from "./types"
import { existsSync, readFileSync } from "fs"
import { join } from "path"
import { prettierDetect } from "./formatters/prettier"
import { eslintDetect } from "./linters/eslint"

const FORMATTERS: { [K in Exclude<FormatterTool, "auto">]: ToolDetectEntry } = {
  prettier: prettierDetect,
}

const LINTERS: { [K in Exclude<LinterTool, "auto">]: ToolDetectEntry } = {
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
): Exclude<FormatterTool, "auto"> {
  if (tool && tool !== "auto") return tool

  return detectTool(cwd, FORMATTERS) ?? "prettier"
}

export function detectLinter(
  cwd: string,
  tool?: LinterTool,
): Exclude<LinterTool, "auto"> {
  if (tool && tool !== "auto") return tool

  return detectTool(cwd, LINTERS) ?? "eslint"
}
