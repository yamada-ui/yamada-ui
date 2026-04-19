"use server"

import type { FormatConfigWithParser } from "@yamada-ui/workspace/oxfmt"
import { format as originalFormat } from "@yamada-ui/workspace/oxfmt"

export async function format(
  content: string,
  options?: FormatConfigWithParser,
) {
  return originalFormat(content, options)
}
