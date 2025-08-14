import type { Options } from "prettier"
import {
  format as OriginalFormat,
  resolveConfig,
  resolveConfigFile,
} from "prettier"

export async function format(content: string, options?: Options) {
  const path = await resolveConfigFile()

  const config = path ? await resolveConfig(path) : {}

  try {
    return OriginalFormat(content, {
      ...config,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}
