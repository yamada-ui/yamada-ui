import { isUndefined } from "@yamada-ui/utils"
import { readdir, readFile, writeFile } from "fs/promises"
import { glob } from "glob"
import ora from "ora"
import path from "path"
import c from "picocolors"

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
  }
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

async function generateRelations(registries: Registries): Promise<Relations> {
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

        return [name, { dependencies, dependents }]
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

  spinner.start("Generating relations")

  const relations = await generateRelations(registries)

  spinner.succeed("Generated relations")

  spinner.succeed("Writing relations")

  await writeFile(DIST_PATH, JSON.stringify(relations, null, 2))

  spinner.succeed("Wrote relations")

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
