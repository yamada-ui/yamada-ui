import type { IconName } from "@yamada-ui/react/components/icon/dynamic"
import { iconNames } from "@yamada-ui/react/components/icon/dynamic"
import { toKebabCase } from "@yamada-ui/utils"
import { writeFileWithFormat } from "@yamada-ui/workspace/oxfmt"
import { execFile } from "node:child_process"
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { promisify } from "node:util"
import ora from "ora"
import c from "picocolors"
import { rimraf } from "rimraf"

const execFileAsync = promisify(execFile)

const REPOSITORY_PATH = path.resolve(".lucide")
const DIST_PATH = path.resolve("data", "icons.json")
const MAX_RELATED_COUNT = 68
const NAME_WEIGHT = 5
const KEYWORD_WEIGHT = 4
const CATEGORY_WEIGHT = 3

interface Metadata {
  categories: string[]
  keywords: string[]
}

interface Group extends Pick<Metadata, "keywords"> {}

interface Data extends Metadata {
  related: string[]
}

async function getMetadata<Y extends "groups" | "icons">(
  dir: Y,
): Promise<{ [key: string]: Y extends "icons" ? Metadata : Group }> {
  const dirPath = path.resolve(REPOSITORY_PATH, dir)
  const fileNames = await readdir(dirPath)

  return Object.fromEntries(
    await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".json"))
        .map(async (fileName) => {
          const content = await readFile(
            path.resolve(dirPath, fileName),
            "utf-8",
          )
          const { categories = [], tags: keywords = [] } =
            JSON.parse(content) ?? {}

          return [
            fileName.replace(".json", ""),
            { categories, keywords },
          ] as const
        }),
    ),
  )
}

function isExtends(value: string) {
  return value.startsWith("$extends:")
}

function isGroup(value: string) {
  return value.startsWith("$group:")
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

  spinner.start(`Getting keywords and categories`)

  const data: { [key in IconName]?: Data } = {}
  const [icons, groups] = await Promise.all([
    getMetadata("icons"),
    getMetadata("groups"),
  ])

  function getCategories(categories: string[], chain: string[] = []): string[] {
    const mergedCategories = categories.flatMap((category) => {
      if (!isExtends(category)) return category

      if (chain.includes(category))
        throw new Error(
          `Circular reference: ${[...chain, category].join(" -> ")}`,
        )

      const metadata = icons[category.replace("$extends:", "")]

      return getCategories(metadata?.categories ?? [], [...chain, category])
    })

    return [...new Set(mergedCategories)]
  }

  function getKeywords(keywords: string[], chain: string[] = []): string[] {
    const mergedKeywords = keywords.flatMap((keyword) => {
      if (!isExtends(keyword) && !isGroup(keyword)) return keyword

      if (chain.includes(keyword))
        throw new Error(
          `Circular reference: ${[...chain, keyword].join(" -> ")}`,
        )

      if (isExtends(keyword)) {
        const metadata = icons[keyword.replace("$extends:", "")]

        return getKeywords(metadata?.keywords ?? [], [...chain, keyword])
      } else {
        const group = groups[keyword.replace("$group:", "")]

        return getKeywords(group?.keywords ?? [], [...chain, keyword])
      }
    })

    return [...new Set(mergedKeywords)]
  }

  iconNames.forEach((name) => {
    if (!Object.hasOwn(icons, name)) return

    const metadata = icons[name]!
    const categories = getCategories(metadata.categories)
    const keywords = getKeywords(metadata.keywords)

    data[name] = { categories, keywords, related: [] }
  })

  spinner.succeed(`Got keywords and categories`)

  spinner.start(`Getting related icons`)

  Object.entries(data).forEach(([currentName, currentData]) => {
    currentData.related = getRelatedData(data)(currentName, currentData)
  })

  spinner.succeed(`Got related icons`)

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
