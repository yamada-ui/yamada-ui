import { config } from "dotenv"
import { execa } from "execa"
import { rimraf } from "rimraf"
import path from "path"
import { readdir, readFile, writeFile } from "fs/promises"
import { toCamelCase } from "utils/string"
import { prettier } from "libs/prettier"

const DIR_PATH = path.resolve(".lucide")

config()

const getTags = async (fileName: string) => {
  const data = await readFile(
    path.resolve(DIR_PATH, "icons", fileName),
    "utf-8",
  )

  const { tags } = JSON.parse(data || "{}") ?? {}

  return tags as string[]
}

const main = async () => {
  await rimraf(DIR_PATH)

  await execa("git", [
    "clone",
    "https://github.com/lucide-icons/lucide.git",
    DIR_PATH,
  ])

  const fileNames = await readdir(path.resolve(DIR_PATH, "icons"))

  const tags: Record<string, string[]> = {}

  await Promise.all(
    fileNames.map(async (fileName) => {
      if (!fileName.endsWith(".json")) return

      const iconName = fileName.replace(".json", "")

      tags[toCamelCase(iconName)] = await getTags(fileName)
    }),
  )

  let data = `export const TAGS: Record<string, string[]> = ${JSON.stringify(tags)}`

  data = await prettier(data, { parser: "typescript" })

  await writeFile(path.resolve("pages", "icons", "tags.ts"), data)

  await rimraf(DIR_PATH)
}

main()
