import type { Dict } from "@yamada-ui/utils"
import type { SourceFile } from "typescript"
import { toKebabCase } from "@yamada-ui/utils"
import { format, writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { Command } from "commander"
import { existsSync } from "fs"
import { glob, mkdir, readdir, readFile } from "fs/promises"
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

type RegistrySection = "components" | "hooks" | "providers" | "root" | "theme"

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

interface Dependencies extends Dependents {
  externals: string[]
}

interface Registry {
  $schema: string
  section: RegistrySection
  sources: Source[]
  dependencies?: Dependencies
  dependents?: Dependents
  tag?: string
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
const PUBLIC_PATH = path.join(process.cwd(), "www", "public", "registry")
const PACKAGE_PATH = path.join(process.cwd(), "packages", "react")
const PACKAGE_JSON_PATH = path.join(PACKAGE_PATH, "package.json")
const ENTRY_PATH = path.join(PACKAGE_PATH, "src")
const TARGET_SECTIONS = ["components", "hooks", "providers"]
const PROVIDE_SECTIONS = ["core", "utils", "theme"]
const IGNORED_FILE_NAME = [
  ".test.(ts|tsx)",
  ".stories.(ts|tsx)",
  "^(?!.*\\.(ts|tsx)$).*",
]
const IGNORED_MODULES = ["react", "react-dom"]
const REGISTRY_SCHEMA_PATH = "https://yamada-ui.com/registry/v2/schema.json"

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
        iconName: iconName.replace(/Icon$/, ""),
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

    if (new RegExp(`../(${PROVIDE_SECTIONS.join("|")})`).test(target)) {
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
      const sectionName = dirent.name

      if (!dirent.isDirectory()) return
      if (!TARGET_SECTIONS.includes(sectionName)) return

      sourceMap[sectionName] ??= {}

      const targetPath = path.join(dirent.parentPath, sectionName)
      const dirents = await readdir(targetPath, { withFileTypes: true })

      await Promise.all(
        dirents.map(async (dirent) => {
          const name = dirent.name

          if (!dirent.isDirectory()) return

          if (sourceMap[sectionName]) sourceMap[sectionName][name] ??= []

          const targetPath = path.join(dirent.parentPath, name)
          const dirents = await readdir(targetPath, { withFileTypes: true })

          await Promise.all(
            dirents.map(async (dirent) => {
              const fileName = dirent.name

              const sources = sourceMap[sectionName]?.[name]
              const targetPath = path.join(dirent.parentPath, fileName)

              if (dirent.isDirectory()) {
                switch (fileName) {
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
                          name: `${fileName}/${dirent.name}`,
                          content,
                        })
                      }),
                    )

                    break
                  }
                }
              } else {
                if (shouldIgnoreFileName(fileName)) return

                const data = await readFile(targetPath, "utf-8")
                const content = await formatSource(data)

                sources?.push({ name: fileName, content })
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
      const sectionName = dirent.name

      if (!dirent.isDirectory()) return
      if (!TARGET_SECTIONS.includes(sectionName)) return

      dependencyMap[sectionName] ??= {}

      const targetPath = path.join(dirent.parentPath, sectionName)
      const dirents = await readdir(targetPath, { withFileTypes: true })

      await Promise.all(
        dirents.map(async (dirent) => {
          const name = dirent.name

          if (!dirent.isDirectory()) return

          if (dependencyMap[sectionName])
            dependencyMap[sectionName][name] ??= {
              components: [],
              externals: [],
              hooks: [],
              providers: [],
            }

          const targetPath = path.join(dirent.parentPath, name)
          const dirents = await readdir(targetPath, { withFileTypes: true })

          dirents.forEach((dirent) => {
            const fileName = dirent.name

            if (dirent.isDirectory()) return
            if (shouldIgnoreFileName(fileName)) return

            const targetPath = path.join(dirent.parentPath, fileName)
            const sourceFile = getSourceFile(targetPath)

            if (!sourceFile) return

            sourceFile.statements.forEach((statement) => {
              if (!isImportDeclaration(statement)) return

              const dependencies = dependencyMap[sectionName]?.[name]
              const module = statement.moduleSpecifier
                .getText(sourceFile)
                .replace(/["']/g, "")

              if (module.startsWith("../../")) {
                const [sectionName, name] = module.split("/").slice(-2)

                if (!sectionName || !name) return

                const target = dependencies?.[sectionName as keyof Dependencies]

                if (!target || target.includes(name)) return

                target.push(name)
              } else if (module.startsWith("../")) {
                const target = dependencies?.[sectionName as keyof Dependencies]
                const name = module.split("/").at(-1)

                if (!target || !name || target.includes(name)) return

                target.push(name)
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
    targetSectionName: string,
    targetName: string,
    sectionName: string,
    name: string,
  ) {
    if (!dependentMap[targetSectionName]) dependentMap[targetSectionName] = {}

    dependentMap[targetSectionName][targetName] ??= {
      components: [],
      hooks: [],
      providers: [],
    }

    const target =
      dependentMap[targetSectionName][targetName][
        sectionName as keyof Dependents
      ]

    target.push(name)
  }

  Object.entries(dependencyMap).forEach(([sectionName, children]) => {
    Object.entries(children).forEach(
      ([name, { components, hooks, providers }]) => {
        components.forEach((targetName) =>
          addDependent("components", targetName, sectionName, name),
        )
        hooks.forEach((targetName) =>
          addDependent("hooks", targetName, sectionName, name),
        )
        providers.forEach((targetName) =>
          addDependent("providers", targetName, sectionName, name),
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
  publicPath: string,
  tag?: string,
) {
  const dirents = await readdir(ENTRY_PATH, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      const sectionName = dirent.name

      if (!dirent.isDirectory()) return
      if (!TARGET_SECTIONS.includes(sectionName)) return

      const sectionDir = path.join(publicPath, sectionName)

      if (!existsSync(sectionDir)) await mkdir(sectionDir, { recursive: true })

      const targetPath = path.join(dirent.parentPath, sectionName)
      const dirents = await readdir(targetPath, { withFileTypes: true })

      await Promise.all(
        dirents.map(async (dirent) => {
          const name = dirent.name

          if (!dirent.isDirectory()) return

          const outputPath = path.join(publicPath, sectionName, `${name}.json`)
          const sources = (sourceMap[sectionName]?.[name] ?? []).sort((a, b) =>
            a.name.localeCompare(b.name),
          )
          const dependencies = dependencyMap[sectionName]?.[name]
          const dependents = dependentMap[sectionName]?.[name]
          const registry: Registry = {
            $schema: REGISTRY_SCHEMA_PATH,
            dependencies,
            dependents,
            section: sectionName as RegistrySection,
            sources,
            tag,
          }
          const content = JSON.stringify(registry)

          await writeFileWithFormat(outputPath, content, { parser: "json" })
        }),
      )
    }),
  )
}

async function generateThemeRegistry(publicPath: string, tag?: string) {
  const themePath = path.join(ENTRY_PATH, "theme")
  const filePaths = await Array.fromAsync(
    glob(path.join(themePath, "**", "*.{ts,tsx}")),
  )

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
    $schema: REGISTRY_SCHEMA_PATH,
    section: "theme",
    sources: sources.sort((a, b) => a.name.localeCompare(b.name)),
    tag,
  }
  const content = JSON.stringify(registry)

  if (!existsSync(publicPath)) await mkdir(publicPath, { recursive: true })

  await writeFileWithFormat(path.join(publicPath, "theme.json"), content, {
    parser: "json",
  })
}

async function generateIndexRegistry(publicPath: string, tag?: string) {
  const index = await readFile(path.join(ENTRY_PATH, "index.ts"), "utf-8")
  const registry: Registry = {
    $schema: REGISTRY_SCHEMA_PATH,
    section: "root",
    sources: [
      {
        name: "index.ts",
        content: index.replace(/\.\//g, "@yamada-ui/react/"),
      },
    ],
    tag,
  }
  const content = JSON.stringify(registry)

  if (!existsSync(publicPath)) await mkdir(publicPath, { recursive: true })

  await writeFileWithFormat(path.join(publicPath, "index.json"), content, {
    parser: "json",
  })
}

function main() {
  const program = new Command()
  const spinner = ora()

  program
    .option("-t, --tag <name>", "tag for the registries (e.g. dev, next)")
    .action(async ({ tag }: { tag?: string }) => {
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

      const publicPath = tag
        ? path.join(PUBLIC_PATH, tag, "v2")
        : path.join(PUBLIC_PATH, "v2")

      spinner.start(
        tag
          ? `Generating registries with tag "${tag}"`
          : "Generating registries",
      )

      await Promise.all([
        generateRegistries(
          sourceMap,
          dependencyMap,
          dependentMap,
          publicPath,
          tag,
        ),
        generateThemeRegistry(publicPath, tag),
        generateIndexRegistry(publicPath, tag),
      ])

      spinner.succeed(
        tag ? `Generated registries with tag "${tag}"` : "Generated registries",
      )

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    })

  program.parse()
}

main()
