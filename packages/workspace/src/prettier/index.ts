import type { Options } from "prettier"
import { writeFile } from "fs/promises"
import path from "path"
import { format as OriginalFormat, resolveConfig } from "prettier"

export async function format(content: string, options?: Options) {
  const config = await resolveConfig(path.resolve(".prettier.js"))

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

export async function writeFileWithFormat(
  path: string,
  content: any,
  options?: Options,
) {
  const formatted = await format(
    typeof content === "string" ? content : JSON.stringify(content, null, 2),
    options,
  )

  await writeFile(path, formatted)
}
