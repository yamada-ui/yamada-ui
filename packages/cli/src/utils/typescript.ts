import type { Dict } from "@yamada-ui/utils"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"
import { transform } from "sucrase"

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

export function transformExtension(value: string, jsx: boolean | undefined) {
  if (!jsx) return value

  const extension = value.split(".").at(-1)

  console.log(extension)

  if (extension === "tsx") return value.replace(/\.tsx$/, ".jsx")
  if (extension === "ts") return value.replace(/\.ts$/, ".js")

  return value
}

export function isTsx(value: string) {
  return value.endsWith(".tsx")
}

export function isJsx(value: string) {
  return value.endsWith(".jsx")
}

export function transformTsxToJsx(content: string) {
  return transform(content, {
    jsxRuntime: "preserve",
    transforms: ["jsx", "typescript"],
  }).code
}

export function transformTsToJs(content: string) {
  return transform(content, {
    transforms: ["typescript"],
  }).code
}
