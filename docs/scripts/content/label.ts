import { program } from "commander"
import { readFile, stat } from "fs/promises"
import { glob } from "glob"
import matter from "gray-matter"
import path from "path"
import { writeMDXFile } from "scripts/utils"
import c from "chalk"

const getPaths = async (query: string) => {
  const pattern = path.join("contents", "**", query)

  const paths = await glob(pattern)

  return paths
}

type FrontMatter = Record<string, any>

type UpdateFrontMatterTransform = (data: FrontMatter) => FrontMatter

const updateFrontMatter =
  (transform: UpdateFrontMatterTransform, enableRecursive: boolean = false) =>
  async (contentPath: string) => {
    try {
      const stats = await stat(contentPath)

      if (stats.isDirectory()) {
        if (!enableRecursive) return

        const contentPaths = await glob(path.join(contentPath, "**"))

        await Promise.all(contentPaths.map(updateFrontMatter(transform)))
      } else {
        const content = await readFile(contentPath, "utf-8")

        const { data } = matter(content)

        const resolvedData = transform(data)

        await writeMDXFile(contentPath, resolvedData, content)

        console.log(c.cyan("updated:"), contentPath)
      }
    } catch (e) {
      console.error(e)
    }
  }

const updateMDX = async (
  names: string[],
  callback: UpdateFrontMatterTransform,
) => {
  if (names.length) {
    const isMultiple = names.length > 1
    const query = isMultiple ? `{${names.join(",")}}` : names[0]
    const contentPaths = await getPaths(query)

    await Promise.all(contentPaths.map(updateFrontMatter(callback, true)))
  } else {
    const contentPaths = await getPaths("*")

    await Promise.all(contentPaths.map(updateFrontMatter(callback)))
  }
}

const addLabel =
  (label: string): UpdateFrontMatterTransform =>
  (data) => {
    return { ...data, label }
  }

const removeLabel =
  (exclude: string[]): UpdateFrontMatterTransform =>
  ({ label, data }) => {
    if (exclude.includes(label)) return { label, ...data }

    return { ...data }
  }

type AddOptions = {
  label?: string
}

type ResetOptions = {
  exclude: string[]
}

const main = async () => {
  program
    .command("add <name...>")
    .option("-l, --label <label>")
    .action(async (names, { label }: AddOptions) => {
      if (!label) return

      const start = process.hrtime.bigint()

      await updateMDX(names, addLabel(label))

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log(`${c.green(`Done`)} in ${c.dim(`${duration}s`)}\n`)
    })

  program
    .command("remove [name...]")
    .option("-x, --exclude <label...>")
    .action(async (names, { exclude = [] }: ResetOptions) => {
      const start = process.hrtime.bigint()

      await updateMDX(names, removeLabel(exclude))

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log(`${c.green(`Done`)} in ${c.dim(`${duration}s`)}\n`)
    })

  program.parse()
}

main()
