import type { BuiltInParserName } from "prettier"
import type { FormatConfig } from "../index.type"
import { format as prettier, resolveConfig, resolveConfigFile } from "prettier"

export interface FormatOptions extends FormatConfig {
  parser?: BuiltInParserName
}

export async function format(
  content: string,
  { configPath, enabled = true, ...options }: FormatOptions = {},
) {
  if (!enabled) return content

  try {
    configPath ??= await resolveConfigFile()

    const config = configPath ? await resolveConfig(configPath) : {}

    return prettier(content, {
      ...config,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}
