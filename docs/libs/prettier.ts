import path from "path"
import type { Options } from "prettier"
import { format, resolveConfig } from "prettier"

export const prettier = async (content: string, customConfig?: Options) => {
  const config = await resolveConfig(path.join(process.cwd(), ".prettierrc"))

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
