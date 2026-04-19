import type { FormatConfig } from "oxfmt"
import { writeFile } from "node:fs/promises"
import { format as originalFormat } from "oxfmt"
import config from "../oxfmt/config.js"

type CompatibleFormatConfig = FormatConfig & {
  filePath?: string
  filepath?: string
  parser?: string
}

function getFileNameFromParser(parser: string): string {
  switch (parser) {
    case "json":
      return "file.json"
    case "markdown":
      return "file.md"
    case "mdx":
      return "file.mdx"
    case "yaml":
    case "yml":
      return "file.yml"
    default:
      return "file.ts"
  }
}

function getFileName(options?: CompatibleFormatConfig): string {
  const filePath = options?.filePath ?? options?.filepath

  if (filePath) return filePath

  if (options?.parser) return getFileNameFromParser(options.parser)

  return "file.ts"
}

function getFormatOptions(
  options?: CompatibleFormatConfig,
): Omit<CompatibleFormatConfig, "filePath" | "filepath" | "parser"> {
  if (!options) return {}

  const { filePath: _, filepath: __, parser: ___, ...formatOptions } = options

  return formatOptions
}

export async function format(
  content: string,
  options?: CompatibleFormatConfig,
) {
  try {
    const { code } = await originalFormat(getFileName(options), content, {
      ...config,
      ...getFormatOptions(options),
    })
    return code
  } catch {
    return content
  }
}

export async function writeFileWithFormat(
  path: string,
  content: any,
  options?: CompatibleFormatConfig,
) {
  const { code } = await originalFormat(
    path,
    typeof content === "string" ? content : JSON.stringify(content),
    {
      ...config,
      ...getFormatOptions(options),
    },
  )

  await writeFile(path, code)
}

export default config
