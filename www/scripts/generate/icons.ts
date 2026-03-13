import { toKebabCase, toPascalCase } from "@yamada-ui/utils"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { execFile } from "child_process"
import { readdir, readFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { rimraf } from "rimraf"
import { promisify } from "util"

const execFileAsync = promisify(execFile)

const REPOSITORY_PATH = path.resolve(".lucide")
const DIST_PATH = path.resolve("data", "icons.json")
const MAX_RELATED_COUNT = 68
const NAME_WEIGHT = 5
const KEYWORD_WEIGHT = 4
const CATEGORY_WEIGHT = 3

interface Data {
  categories: string[]
  keywords: string[]
  related: string[]
}

async function getData(fileName: string): Promise<Data> {
  const data = await readFile(
    path.resolve(REPOSITORY_PATH, "icons", fileName),
    "utf-8",
  )

  const { categories = [], tags: keywords = [] } = JSON.parse(data || "{}")

  return { categories, keywords, related: [] }
}

function nameParts(name: string) {
  return toKebabCase(name)
    .split("-")
    .filter((part) => part.length > 2)
}

function arrayMatches(a: string[], b: string[]) {
  return a.filter((item) => b.includes(item)).length
}

function getRelatedData(data: { [key: string]: Data }) {
  return function (currentName: string, currentData: Data) {
    function iconSimilarity(name: string, data: Data) {
      return (
        NAME_WEIGHT * arrayMatches(nameParts(name), nameParts(currentName)) +
        CATEGORY_WEIGHT *
          arrayMatches(data.categories, currentData.categories) +
        KEYWORD_WEIGHT * arrayMatches(data.keywords, currentData.keywords)
      )
    }

    return Object.entries(data)
      .filter(([name]) => name !== currentName)
      .map(([name, data]) => [name, iconSimilarity(name, data)] as const)
      .filter((a) => a[1] > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([name]) => name)
      .slice(0, MAX_RELATED_COUNT)
  }
}

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Clearing .lucide`)

  await rimraf(REPOSITORY_PATH)

  spinner.succeed(`Cleared .lucide`)

  spinner.start(`Cloning .lucide`)

  await execFileAsync("git", [
    "clone",
    "https://github.com/lucide-icons/lucide.git",
    REPOSITORY_PATH,
  ])

  spinner.succeed(`Cloned .lucide`)

  spinner.start(`Getting icons`)

  const fileNames = await readdir(path.resolve(REPOSITORY_PATH, "icons"))

  spinner.succeed(`Got icons`)

  const data: { [key: string]: Data } = {}

  spinner.start(`Getting keywords and categories`)

  await Promise.all(
    fileNames.map(async (fileName) => {
      if (!fileName.endsWith(".json")) return

      const iconName = fileName.replace(".json", "")

      data[`${toPascalCase(iconName)}Icon`] = await getData(fileName)
    }),
  )

  spinner.succeed(`Got keywords and categories`)

  spinner.start(`Getting related icons`)

  Object.entries(data).forEach(([currentName, currentData]) => {
    currentData.related = getRelatedData(data)(currentName, currentData)
  })

  spinner.succeed(`Got related icons`)

  spinner.start(`Writing data`)

  await writeFileWithFormat(DIST_PATH, data, { parser: "json" })

  spinner.succeed(`Wrote data`)

  spinner.start(`Clearing .lucide`)

  await rimraf(REPOSITORY_PATH)

  spinner.succeed(`Cleared .lucide`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
