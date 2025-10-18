"use server"

import { format } from "@yamada-ui/workspace/prettier"

export const formatCode = async (code: string) => {
  return format(code)
}
