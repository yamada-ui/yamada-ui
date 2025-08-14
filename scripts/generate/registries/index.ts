import type { Dict } from "@yamada-ui/utils"
import type { SourceFile } from "typescript"
import { toKebabCase } from "@yamada-ui/utils"
import { format, writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { Command } from "commander"
import { existsSync } from "fs"
import { mkdir, readdir, readFile, writeFile } from "fs/promises"
import { glob } from "glob"
import ora from "ora"
import path from "path"
import c from "picocolors"
import {
  createProgram,
  isImportDeclaration,
  parseJsonConfigFileContent,
  readConfigFile,
  sys,
} from "typescript"
import { ICON_TEMPLATE } from "../icons/template"

type RegistryType = "components" | "hooks" | "providers" | "root" | "theme"

interface Source {
  name: string
  content?: string
  data?: Dict[]
  template?: string
}

interface Dependents {
  components: string[]
  hooks: string[]
  providers: string[]
}

interface Dependencies {
  components: string[]
  externals: string[]
  hooks: string[]
  providers: string[]
}

interface Registry {
  type: RegistryType
  sources: Source[]
  dependencies?: Dependencies
  dependents?: Dependents
}

interface Map<Y> {
  [key: string]: { [key: string]: Y }
}
interface SourceMap extends Map<Source[]> {}
interface DependencyMap extends Map<Dependencies> {}
interface DependentMap extends Map<Dependents> {}
interface ExternalsMap {
  [key: string]: string
}

const CONFIG_PATH = path.join(process.cwd(), "tsconfig.json")
const PUBLIC_PATH = path.join(process.cwd(), "www", "public", "registry", "v2")
const PACKAGE_PATH = path.join(process.cwd(), "packages", "react")
const PACKAGE_JSON_PATH = path.join(PACKAGE_PATH, "package.json")
const ENTRY_PATH = path.join(PACKAGE_PATH, "src")
const TARGET_DIRECTORIES = ["components", "hooks", "providers"]
const PROVIDE_DIRECTORIES = ["core", "utils", "theme"]
const IGNORED_FILE_NAME = [
  ".test.(ts|tsx)",
  ".stories.(ts|tsx)",
  "^(?!.*\\.(ts|tsx)$).*",
]
const IGNORED_MODULES = ["react", "react-dom"]

async function getExternals(): Promise<ExternalsMap> {
  const data = await readFile(PACKAGE_JSON_PATH, "utf-8")
  const { dependencies, devDependencies } = JSON.parse(data)

  return { ...dependencies, ...devDependencies }
}

async function getIconsSources() {
  const index = await readFile(
    path.join(ENTRY_PATH, "components", "icon", "icons", "index.ts"),
    "utf-8",
  )
  const indexTypes = await readFile(
    path.join(ENTRY_PATH, "components", "icon", "icons", "index.types.ts"),
    "utf-8",
  )
  const icons =
    index
      .match(/{\s*([^}]+)\s*}/g)
      ?.map((match) => match.replace(/{\s*|\s*}/g, "")) ?? []

  const sources: Source[] = [
    { name: "icons/index.ts", content: index },
    { name: "icons/index.types.ts", content: indexTypes },
    {
      name: "icons",
      data: icons.map((iconName) => ({
        name: `${toKebabCase(iconName)}.tsx`,
        iconName,
      })),
      template: ICON_TEMPLATE,
    },
  ]

  return sources
}

function shouldIgnoreFileName(name: string) {
  return IGNORED_FILE_NAME.some((pattern) => new RegExp(pattern).test(name))
}

function replaceImportDeclarations(data: string, importDeclarations: string[]) {
  const [target, ...rest] = importDeclarations

  const result = rest
    .reduce((prev, current) => {
      data = data.replace(`${current}\n`, "")

      const [, members] = current.match(/\{([^}]+)\}/) ?? []

      if (members)
        prev = prev.replace(
          /\{([^}]+)\}/,
          (_, prevMembers) =>
            `{ ${prevMembers.trim().replace(/,$/, "")}, ${members.trim()} }`,
        )

      return prev
    }, target!)
    .replace(/"([^"]+)"/, '"@yamada-ui/react"')

  return data.replace(target!, result)
}

async function formatSource(data: string) {
  const regexp =
    /import\s+(?:type\s+)?(?:{[\s\S]*?}|\*\s+as\s+\w+|\w+)\s+from\s+["'][^"']+["']/g

  let match = regexp.exec(data)

  const importDeclarations: string[] = []
  const importTypeDeclarations: string[] = []

  while (match != null) {
    const [target] = match

    if (new RegExp(`../(${PROVIDE_DIRECTORIES.join("|")})`).test(target)) {
      if (target.includes("import type")) {
        importTypeDeclarations.push(target)
      } else {
        importDeclarations.push(target)
      }
    }

    match = regexp.exec(data)
  }

  if (!importDeclarations.length && !importTypeDeclarations.length) return data

  if (importDeclarations.length) {
    data = replaceImportDeclarations(data, importDeclarations)
  }

  if (importTypeDeclarations.length) {
    data = replaceImportDeclarations(data, importTypeDeclarations)
  }

  return format(data)
}

async function getSources() {
  const sourceMap: SourceMap = {}
  const dirents = await readdir(ENTRY_PATH, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      const parentName = dirent.name

      if (!dirent.isDirectory()) return
      if (!TARGET_DIRECTORIES.includes(parentName)) return

      sourceMap[parentName] ??= {}

      const targetPath = path.join(dirent.parentPath, parentName)
      const dirents = await readdir(targetPath, { withFileTypes: true })

      await Promise.all(
        dirents.map(async (dirent) => {
          const childName = dirent.name

          if (!dirent.isDirectory()) return

          if (sourceMap[parentName]) sourceMap[parentName][childName] ??= []

          const targetPath = path.join(dirent.parentPath, childName)
          const dirents = await readdir(targetPath, { withFileTypes: true })

          await Promise.all(
            dirents.map(async (dirent) => {
              const name = dirent.name

              const sources = sourceMap[parentName]?.[childName]
              const targetPath = path.join(dirent.parentPath, name)

              if (dirent.isDirectory()) {
                switch (name) {
                  case "icons": {
                    sources?.push(...(await getIconsSources()))

                    break
                  }
                  default: {
                    const dirents = await readdir(targetPath, {
                      withFileTypes: true,
                    })

                    await Promise.all(
                      dirents.map(async (dirent) => {
                        if (dirent.isDirectory()) return

                        const targetPath = path.join(
                          dirent.parentPath,
                          dirent.name,
                        )
                        const data = await readFile(targetPath, "utf-8")
                        const content = await formatSource(data)

                        sources?.push({
                          name: `${name}/${dirent.name}`,
                          content,
                        })
                      }),
                    )

                    break
                  }
                }
              } else {
                if (shouldIgnoreFileName(name)) return

                const data = await readFile(targetPath, "utf-8")
                const content = await formatSource(data)

                sources?.push({ name, content })
              }
            }),
          )
        }),
      )
    }),
  )

  return sourceMap
}

function getModuleNameWithVersion(
  moduleName: string,
  externalMap: ExternalsMap,
) {
  const segments = moduleName.split("/")

  const version = segments.reduce((prev, segment, index) => {
    if (prev) {
      return prev
    } else {
      const name = [...segments.slice(0, index), segment].join("/")
      const version = externalMap[name] ?? ""

      if (version) moduleName = name

      return version
    }
  }, "")

  if (!version) return
  if (IGNORED_MODULES.includes(moduleName)) return

  return `${moduleName}@${version}`
}

async function getDependencies(
  getSourceFile: (fileName: string) => SourceFile | undefined,
  externalMap: ExternalsMap,
) {
  const dependencyMap: DependencyMap = {}
  const dirents = await readdir(ENTRY_PATH, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      const parentName = dirent.name

      if (!dirent.isDirectory()) return
      if (!TARGET_DIRECTORIES.includes(parentName)) return

      dependencyMap[parentName] ??= {}

      const targetPath = path.join(dirent.parentPath, parentName)
      const dirents = await readdir(targetPath, { withFileTypes: true })

      await Promise.all(
        dirents.map(async (dirent) => {
          const childName = dirent.name

          if (!dirent.isDirectory()) return

          if (dependencyMap[parentName])
            dependencyMap[parentName][childName] ??= {
              components: [],
              externals: [],
              hooks: [],
              providers: [],
            }

          const targetPath = path.join(dirent.parentPath, childName)
          const dirents = await readdir(targetPath, { withFileTypes: true })

          dirents.forEach((dirent) => {
            const name = dirent.name

            if (dirent.isDirectory()) return
            if (shouldIgnoreFileName(name)) return

            const targetPath = path.join(dirent.parentPath, name)
            const sourceFile = getSourceFile(targetPath)

            if (!sourceFile) return

            sourceFile.statements.forEach((statement) => {
              if (!isImportDeclaration(statement)) return

              const dependencies = dependencyMap[parentName]?.[childName]
              const module = statement.moduleSpecifier
                .getText(sourceFile)
                .replace(/["']/g, "")

              if (module.startsWith("../../")) {
                const [parentName, childName] = module.split("/").slice(-2)

                if (!parentName || !childName) return

                const target = dependencies?.[parentName as keyof Dependencies]

                if (!target || target.includes(childName)) return

                target.push(childName)
              } else if (module.startsWith("../")) {
                const target = dependencies?.[parentName as keyof Dependencies]
                const childName = module.split("/").at(-1)

                if (!target || !childName || target.includes(childName)) return

                target.push(childName)
              } else if (!module.startsWith(".")) {
                const target = dependencies?.externals
                const name = getModuleNameWithVersion(module, externalMap)

                if (!target || !name || target.includes(name)) return

                target.push(name)
              }
            })
          })
        }),
      )
    }),
  )

  return dependencyMap
}

function getDependents(dependencyMap: DependencyMap) {
  const dependentMap: DependentMap = {}

  function addDependent(
    targetName: string,
    name: string,
    parentName: string,
    childName: string,
  ) {
    if (!dependentMap[targetName]) dependentMap[targetName] = {}

    dependentMap[targetName][name] ??= {
      components: [],
      hooks: [],
      providers: [],
    }

    const target =
      dependentMap[targetName][name][parentName as keyof Dependents]

    target.push(childName)
  }

  Object.entries(dependencyMap).forEach(([parentName, children]) => {
    Object.entries(children).forEach(
      ([childName, { components, hooks, providers }]) => {
        components.forEach((name) =>
          addDependent("components", name, parentName, childName),
        )
        hooks.forEach((name) =>
          addDependent("hooks", name, parentName, childName),
        )
        providers.forEach((name) =>
          addDependent("providers", name, parentName, childName),
        )
      },
    )
  })

  return dependentMap
}

async function generateRegistries(
  sourceMap: SourceMap,
  dependencyMap: DependencyMap,
  dependentMap: DependentMap,
) {
  const dirents = await readdir(ENTRY_PATH, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      const parentName = dirent.name

      if (!dirent.isDirectory()) return
      if (!TARGET_DIRECTORIES.includes(parentName)) return

      const targetPath = path.join(dirent.parentPath, parentName)
      const dirents = await readdir(targetPath, { withFileTypes: true })

      await Promise.all(
        dirents.map(async (dirent) => {
          const childName = dirent.name

          if (!dirent.isDirectory()) return

          const targetPath = path.join(
            dirent.parentPath,
            childName,
            "registry.json",
          )
          const sources = (sourceMap[parentName]?.[childName] ?? []).sort(
            (a, b) => a.name.localeCompare(b.name),
          )
          const dependencies = dependencyMap[parentName]?.[childName]
          const dependents = dependentMap[parentName]?.[childName]
          const registry: Registry = {
            type: parentName as RegistryType,
            dependencies,
            dependents,
            sources,
          }
          const content = JSON.stringify(registry)

          await writeFileWithFormat(targetPath, content, { parser: "json" })
        }),
      )
    }),
  )
}

async function generateThemeRegistry() {
  const themePath = path.join(ENTRY_PATH, "theme")
  const filePaths = await glob(path.join(themePath, "**", "*.{ts,tsx}"))

  const sources: Source[] = []

  await Promise.all(
    filePaths.map(async (filePath) => {
      if (shouldIgnoreFileName(filePath)) return

      const name = filePath.replace(`${themePath}/`, "")
      const data = await readFile(filePath, "utf-8")
      const content = await formatSource(data)

      sources.push({ name, content })
    }),
  )

  const registry: Registry = {
    type: "theme",
    sources: sources.sort((a, b) => a.name.localeCompare(b.name)),
  }
  const content = JSON.stringify(registry)

  await writeFileWithFormat(path.join(themePath, "registry.json"), content, {
    parser: "json",
  })
}

async function generateIndexRegistry() {
  const index = await readFile(path.join(ENTRY_PATH, "index.ts"), "utf-8")
  const registry: Registry = {
    type: "root",
    sources: [
      {
        name: "index.ts",
        content: index.replace(/\.\//g, "@yamada-ui/react/"),
      },
    ],
  }
  const content = JSON.stringify(registry)

  await writeFileWithFormat(path.join(ENTRY_PATH, "registry.json"), content, {
    parser: "json",
  })
}

async function publishRegistries() {
  const filePaths = await glob(path.join(ENTRY_PATH, "**", "registry.json"))

  if (!existsSync(PUBLIC_PATH)) await mkdir(PUBLIC_PATH, { recursive: true })

  await Promise.all(
    filePaths.map(async (filePath) => {
      const [parentName, childName] = filePath.split("/").slice(-3)

      if (!parentName || !childName) return

      const content = await readFile(filePath, "utf-8")

      let targetPath: string

      if (parentName === "react") {
        targetPath = path.join(PUBLIC_PATH, "index.json")
      } else if (childName === "theme") {
        targetPath = path.join(PUBLIC_PATH, "theme.json")
      } else {
        if (!existsSync(path.join(PUBLIC_PATH, parentName)))
          await mkdir(path.join(PUBLIC_PATH, parentName), { recursive: true })

        targetPath = path.join(PUBLIC_PATH, parentName, `${childName}.json`)
      }

      await writeFile(targetPath, content)
    }),
  )
}

function main() {
  const program = new Command()
  const spinner = ora()

  program
    .option("-p, --publish", "Publish the registries")
    .action(async ({ publish = false }) => {
      const start = process.hrtime.bigint()

      spinner.start("Getting tsconfig")

      const { config } = readConfigFile(CONFIG_PATH, sys.readFile)
      const { fileNames, options } = parseJsonConfigFileContent(
        config,
        sys,
        path.dirname(CONFIG_PATH),
      )
      const { getSourceFile } = createProgram(fileNames, options)

      spinner.succeed("Got tsconfig")

      spinner.start("Getting package.json")

      const externalMap = await getExternals()

      spinner.succeed("Got package.json")

      spinner.start("Getting sources")

      const sourceMap = await getSources()

      spinner.succeed("Got sources")

      spinner.start("Getting dependencies")

      const dependencyMap = await getDependencies(getSourceFile, externalMap)

      spinner.succeed("Got dependencies")

      spinner.start("Getting dependents")

      const dependentMap = getDependents(dependencyMap)

      spinner.succeed("Got dependents")

      spinner.start("Generating registries")

      await Promise.all([
        generateRegistries(sourceMap, dependencyMap, dependentMap),
        generateThemeRegistry(),
        generateIndexRegistry(),
      ])

      spinner.succeed("Generated registries")

      if (publish) {
        spinner.start("Publishing registries")

        await publishRegistries()

        spinner.succeed("Published registries")
      }

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    })

  program.parse()
}

main()
