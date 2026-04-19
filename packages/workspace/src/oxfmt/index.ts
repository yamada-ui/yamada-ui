import type { FormatConfig } from "oxfmt"
import { writeFile } from "node:fs/promises"
import { format as originalFormat } from "oxfmt"
import config from "./config.ts"

export interface FormatConfigWithParser extends FormatConfig {
  parser?: string
}

export async function format(
  content: string,
  { parser = "ts", ...rest }: FormatConfigWithParser = {},
) {
  try {
    const { code } = await originalFormat(`tmp.${parser}`, content, {
      ...config,
      ...rest,
    })
    return code
  } catch {
    return content
  }
}

export async function writeFileWithFormat(
  path: string,
  content: any,
  options?: FormatConfig,
) {
  try {
    const { code } = await originalFormat(
      path.split("/").at(-1)!,
      typeof content === "string" ? content : JSON.stringify(content),
      { ...config, ...options },
    )
    await writeFile(path, code)
  } catch {
    await writeFile(path, content)
  }
}
