import type { Formatter, FormatterOptions } from "../types"
import { toArray } from "@yamada-ui/utils"
import { readFile, writeFile } from "fs/promises"

export function createPrettierFormatter(): Formatter {
  const formatText = async (
    content: string,
    options?: FormatterOptions,
  ): Promise<string> => {
    try {
      const { format, resolveConfig, resolveConfigFile } =
        await import("prettier")

      let configPath = options?.configPath ?? null

      configPath ??= (await resolveConfigFile()) ?? null

      const config = configPath ? await resolveConfig(configPath) : {}

      return format(content, {
        ...config,
        parser: options?.language ?? "typescript",
      })
    } catch {
      return content
    }
  }

  const formatFiles = async (
    patterns: string | string[],
    options?: FormatterOptions,
  ): Promise<void> => {
    const files = toArray(patterns)

    await Promise.all(
      files.map(async (pattern) => {
        let content = await readFile(pattern, "utf-8")

        content = await formatText(content, options)

        await writeFile(pattern, content, "utf-8")
      }),
    )
  }

  return { formatFiles, formatText }
}
