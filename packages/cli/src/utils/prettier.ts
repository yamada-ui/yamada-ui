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
