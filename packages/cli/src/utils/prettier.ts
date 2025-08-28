import type { BuiltInParserName } from "prettier"
import type { FormatConfig } from "../index.type"
import { toArray } from "@yamada-ui/utils"
import { readFile, writeFile } from "fs/promises"
import { format as prettier, resolveConfig, resolveConfigFile } from "prettier"

export interface FormatOptions extends FormatConfig {
  parser?: BuiltInParserName
}

export async function formatText(
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

export interface FormatFilesOptions extends FormatOptions {}

export async function formatFiles(
  patterns: string | string[],
  { enabled = true, ...options }: FormatFilesOptions = {},
) {
  if (!enabled) return

  patterns = toArray(patterns)

  await Promise.all(
    patterns.map(async (pattern) => {
      let content = await readFile(pattern, "utf-8")

      content = await formatText(content, options)

      await writeFile(pattern, content, "utf-8")
    }),
  )
}
