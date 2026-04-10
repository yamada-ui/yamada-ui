"use server"

import type { Options } from "prettier"
import { format as originalFormat } from "@yamada-ui/workspace/prettier"

export async function format(content: string, options?: Options) {
  return originalFormat(content, options)
}
