import type { DocMap } from "@/data"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { readFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { langs } from "@/utils/i18n"

const DATA_PATH = path.resolve("data")

interface Options {
  desc?: boolean
}

function findDocMap(items: DocMap[], inputPath: string) {
  const docMap = items.find(({ pathname, segment }) => {
    const group = segment.startsWith("(") && segment.endsWith(")")

    if (group) {
      return inputPath.split("/").at(-1) === segment
    } else {
      return inputPath === pathname
    }
  })

  if (docMap) return docMap

  const parentDocMap = items.find(
    ({ pathname }) => pathname && inputPath.startsWith(pathname),
  )

  if (parentDocMap?.items) return findDocMap(parentDocMap.items, inputPath)
}

function replaceDocMap(
  parentDocMap: DocMap,
  items: DocMap[],
  inputPath: string,
) {
  parentDocMap.items?.forEach((item) => {
    if (inputPath === item.pathname) {
      item.items = items
    } else {
      const group = item.segment.startsWith("(") && item.segment.endsWith(")")

      if (group && inputPath.split("/").at(-1) === item.segment) {
        item.items = items
      } else {
        replaceDocMap(item, items, inputPath)
      }
    }
  })
}

export async function sort(inputPath: string, { desc }: Options) {
  if (!inputPath.startsWith("/")) inputPath = "/" + inputPath

  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Sorting docs`)

  await Promise.all(
    langs.map(async (lang) => {
      const filePath = path.join(DATA_PATH, `doc-map.${lang}.json`)
      const data = await readFile(filePath, "utf-8")
      const docMap = JSON.parse(data) as DocMap

      const targetDocMap = findDocMap(docMap.items ?? [], inputPath)

      if (targetDocMap?.items) {
        const items = targetDocMap.items.sort((a, b) =>
          desc
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title),
        )

        targetDocMap.items = items

        replaceDocMap(docMap, items, inputPath)

        await writeFileWithFormat(
          path.join(DATA_PATH, `doc-map.${lang}.json`),
          docMap,
          { parser: "json" },
        )
      } else {
        throw new Error(`No items found for ${inputPath}`)
      }
    }),
  )

  spinner.succeed(`Sorted docs`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}
