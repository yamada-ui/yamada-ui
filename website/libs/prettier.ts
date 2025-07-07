import type { Options } from "prettier"
import path from "path"
import { format, resolveConfig } from "prettier"

export const prettier = async (content: string, customConfig?: Options) => {
  const config = await resolveConfig(path.resolve(".prettierrc"))

  try {
    return format(content, {
      ...config,
      parser: "mdx",
      ...customConfig,
    })
  } catch {
    return content
  }
}
