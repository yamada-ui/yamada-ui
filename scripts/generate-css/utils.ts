import type { Options } from "prettier"
import { format, resolveConfig } from "prettier"

export const prettier = async (content: string, options?: Options) => {
  const prettierConfig = await resolveConfig(process.cwd())

  try {
    return format(content, {
      ...prettierConfig,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}

export const toCamelCase = (value: string & {}) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

export const toKebabCase = (value: string & {}) =>
  value
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/^-/, "")
