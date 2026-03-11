import { isUndefined } from "@yamada-ui/utils"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { readdir, readFile } from "fs/promises"
import { glob } from "glob"
import matter from "gray-matter"
import ora from "ora"
import path from "path"
import c from "picocolors"

const MIN_RESEMBLE_SCORE = 0.3
const MAX_RESEMBLE_COUNT = 8
const REGISTRY_PATH = path.resolve("public", "registry", "v2")
const CONTENT_PATH = path.resolve("contents")
const DIST_PATH = path.resolve("data", "relations.json")

interface Dependents {
  components: string[]
  hooks: string[]
  providers: string[]
}

interface Dependencies extends Dependents {
  externals: string[]
}

interface Registry {
  dependencies?: Dependencies
  dependents?: Dependents
}

interface Registries {
  [key: string]: Registry
}

interface Relations {
  [key: string]: {
    dependencies?: Omit<Dependencies, "externals" | "providers">
    dependents?: Omit<Dependents, "providers">
    resembles?: string[]
  }
}

interface Tags {
  [key: string]: string[]
}

interface Resembles {
  [key: string]: string[]
}

async function getFileNames(dirName: string): Promise<string[]> {
  const dirents = await readdir(path.join(REGISTRY_PATH, dirName))

  return dirents.map((name) => path.join(dirName, name))
}

async function getRegistries(): Promise<Registries> {
  const components = await getFileNames("components")
  const hooks = await getFileNames("hooks")
  const registries = [...components, ...hooks]

  return Object.fromEntries(
    await Promise.all(
      registries.map(async (filePath) => {
        const content = await readFile(
          path.join(REGISTRY_PATH, filePath),
          "utf-8",
        )
        const data = JSON.parse(content)
        const name = path.basename(filePath).replace(".json", "")

        return [name, data]
      }),
    ),
  )
}

function jaccard(a: string[], b: string[]): number {
  const omittedA = new Set(a)
  const omittedB = new Set(b)
  const length = [...omittedA].filter((value) => omittedB.has(value)).length
  const count = new Set([...omittedA, ...omittedB]).size

  return count === 0 ? 0 : length / count
}

async function getResembles() {
  const tags: Tags = {}
  const filePaths = await glob(
    path.resolve("contents", "components", "*\(*\)*", "**", "*.mdx"),
  )
  const omittedFilePaths = filePaths.filter((path) => !path.includes(".ja."))

  await Promise.all(
    omittedFilePaths.map(async (filePath) => {
      const content = await readFile(filePath, "utf-8")
      const { data } = matter(content)
      const name = path.basename(filePath, ".mdx")

      if (data.status === "planned") return
      if (!data.tags?.length) return

      tags[name] = data.tags
    }),
  )

  const names = Object.keys(tags)
  const resembles: Resembles = Object.fromEntries(
    names.map((name) => [name, []]),
  )

  names.forEach((rootName) => {
    resembles[rootName] = names
      .filter((name) => name !== rootName)
      .map((name) => ({ name, score: jaccard(tags[rootName]!, tags[name]!) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .filter(({ score }) => score >= MIN_RESEMBLE_SCORE)
      .slice(0, MAX_RESEMBLE_COUNT)
      .map(({ name }) => name)
  })

  return resembles
}

async function filterRelations(
  name: string,
  dirName: string,
  fileNames: string[],
): Promise<string[]> {
  const results = await Promise.all(
    fileNames.map(async (fileName) => {
      const files = await glob(
        path.join(CONTENT_PATH, dirName, "**", `${fileName}.mdx`),
      )

      if (!files.length) console.log(name, fileName)

      return files.length > 0 ? fileName : undefined
    }),
  )

  return results.filter((result) => !isUndefined(result))
}

async function generateRelations(
  registries: Registries,
  similarComponents: Tags,
): Promise<Relations> {
  return Object.fromEntries(
    await Promise.all(
      Object.entries(registries).map(async ([name, registry]) => {
        const dependencies = registry.dependencies
          ? {
              components: await filterRelations(
                name,
                "components",
                registry.dependencies.components,
              ),
              hooks: await filterRelations(
                name,
                "hooks",
                registry.dependencies.hooks,
              ),
            }
          : undefined
        const dependents = registry.dependents
          ? {
              components: await filterRelations(
                name,
                "components",
                registry.dependents.components,
              ),
              hooks: await filterRelations(
                name,
                "hooks",
                registry.dependents.hooks,
              ),
            }
          : undefined
        const resembles = similarComponents[name]

        return [name, { dependencies, dependents, resembles }]
      }),
    ),
  )
}

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start("Getting registries")

  const registries = await getRegistries()

  spinner.succeed("Got registries")

  spinner.start("Getting resembles")

  const resembles = await getResembles()

  spinner.succeed("Got resembles")

  spinner.start("Generating relations")

  const relations = await generateRelations(registries, resembles)

  spinner.succeed("Generated relations")

  spinner.start("Writing relations")

  await writeFileWithFormat(DIST_PATH, relations, { parser: "json" })

  spinner.succeed("Wrote relations")

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
