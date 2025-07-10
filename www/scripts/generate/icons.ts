import { toPascalCase } from "@yamada-ui/utils"
import { execa } from "execa"
import { readdir, readFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { rimraf } from "rimraf"
import { writeFileWithFormat } from "@/libs/prettier"

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
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Clearing .lucide`)

  await rimraf(REPOSITORY_PATH)

  spinner.succeed(`Cleared .lucide`)

  spinner.start(`Cloning .lucide`)

  await execa("git", [
    "clone",
    "https://github.com/lucide-icons/lucide.git",
    REPOSITORY_PATH,
  ])

  spinner.succeed(`Cloned .lucide`)

  spinner.start(`Getting icons`)

  const fileNames = await readdir(path.resolve(REPOSITORY_PATH, "icons"))

  spinner.succeed(`Got icons`)

  const data: { [key: string]: string[] } = {}

  spinner.start(`Getting keywords`)

  await Promise.all(
    fileNames.map(async (fileName) => {
      if (!fileName.endsWith(".json")) return

      const iconName = fileName.replace(".json", "")

      data[`${toPascalCase(iconName)}Icon`] = await getKeywords(fileName)
    }),
  )

  spinner.succeed(`Got keywords`)

  spinner.start(`Writing data`)

  await writeFileWithFormat(DIST_PATH, data)

  spinner.succeed(`Wrote data`)

  spinner.start(`Clearing .lucide`)

  await rimraf(REPOSITORY_PATH)

  spinner.succeed(`Cleared .lucide`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
