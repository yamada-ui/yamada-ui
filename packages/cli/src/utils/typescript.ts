import type { Dict } from "@yamada-ui/utils"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"

export async function getTsconfig(cwd: string): Promise<Dict> {
  try {
    const tsconfigJson = await readFile(
      path.resolve(cwd, "tsconfig.json"),
      "utf8",
    )

    return JSON.parse(tsconfigJson)
  } catch {
    throw new Error(
      `No tsconfig.json found. Please run ${c.cyan(`npx tsc --init`)}.`,
    )
  }
}
