import { toPascalCase } from "@yamada-ui/utils"
import { execa } from "execa"
import { readdir, readFile, writeFile } from "fs/promises"
import path from "path"
import { rimraf } from "rimraf"
import { prettier } from "@/libs/prettier"

const REPOSITORY_PATH = path.resolve(".lucide")
const DIST_PATH = path.resolve("data", "icons.json")

async function getKeywords(fileName: string): Promise<string[]> {
  const data = await readFile(
    path.resolve(REPOSITORY_PATH, "icons", fileName),
    "utf-8",
  )

  const { tags = [] } = JSON.parse(data || "{}")

  return tags
}

async function main() {
  await rimraf(REPOSITORY_PATH)

  await execa("git", [
    "clone",
    "https://github.com/lucide-icons/lucide.git",
    REPOSITORY_PATH,
  ])

  const fileNames = await readdir(path.resolve(REPOSITORY_PATH, "icons"))

  const data: { [key: string]: string[] } = {}

  await Promise.all(
    fileNames.map(async (fileName) => {
      if (!fileName.endsWith(".json")) return

      const iconName = fileName.replace(".json", "")

      data[`${toPascalCase(iconName)}Icon`] = await getKeywords(fileName)
    }),
  )

  const content = await prettier(JSON.stringify(data, null, 2), {
    parser: "json",
  })

  await writeFile(DIST_PATH, content)

  await rimraf(REPOSITORY_PATH)
}

main()
