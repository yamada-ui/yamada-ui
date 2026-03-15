import type { FormatterTool, LinterTool } from "./types"
import { existsSync, readFileSync } from "fs"
import { join } from "path"

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

const PRETTIER_CONFIGS = [
  ".prettierrc",
  ".prettierrc.json",
  ".prettierrc.yaml",
  ".prettierrc.yml",
  ".prettierrc.js",
  ".prettierrc.cjs",
  ".prettierrc.mjs",
  ".prettierrc.toml",
  "prettier.config.js",
  "prettier.config.cjs",
  "prettier.config.mjs",
]

const ESLINT_CONFIGS = [
  ".eslintrc",
  ".eslintrc.json",
  ".eslintrc.yaml",
  ".eslintrc.yml",
  ".eslintrc.js",
  ".eslintrc.cjs",
  ".eslintrc.mjs",
  "eslint.config.js",
  "eslint.config.cjs",
  "eslint.config.mjs",
  "eslint.config.ts",
]

export function detectFormatter(
  cwd: string,
  tool?: FormatterTool,
): Exclude<FormatterTool, "auto"> {
  if (tool && tool !== "auto") return tool

  if (hasConfigFile(cwd, PRETTIER_CONFIGS) || hasDependency(cwd, "prettier"))
    return "prettier"

  return "prettier"
}

export function detectLinter(
  cwd: string,
  tool?: LinterTool,
): Exclude<LinterTool, "auto"> {
  if (tool && tool !== "auto") return tool

  if (hasConfigFile(cwd, ESLINT_CONFIGS) || hasDependency(cwd, "eslint"))
    return "eslint"

  return "eslint"
}
