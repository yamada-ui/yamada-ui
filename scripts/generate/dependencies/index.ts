import { readdir, readFile, writeFile } from "fs/promises"
import { join } from "path"
import { Project, ScriptKind } from "ts-morph"

const rootPkg = JSON.parse(
  await readFile(join(process.cwd(), "packages/react/package.json"), "utf-8"),
)

const dependencies = { ...rootPkg.dependencies, ...rootPkg.devDependencies }

function getVersion(moduleSpecifier: string): null | string {
  const splitModule = moduleSpecifier.split("/")[0]
  const raw =
    dependencies?.[moduleSpecifier] ??
    (splitModule ? dependencies?.[splitModule] : undefined)

  return typeof raw === "string" ? raw.replace(/^[~^]/, "") : null
}

const CATEGORIES = ["components", "hooks", "providers"] as const
type Category = (typeof CATEGORIES)[number]

const IGNORE_PACKAGES: readonly string[] = [
  "../../theme",
  "../../utils",
  "../../core",
  "@/core",
  "@/utils",
  "@/theme",
  "react",
  "@emotion/react",
  "@storybook/react",
  "@yamada-ui/test",
  "@yamada-ui/utils",
] as const

const isIgnorePackage = (pkg: string): boolean => IGNORE_PACKAGES.includes(pkg)

const getDirectories = async (source: string): Promise<string[]> =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)

type Rule = (importPath: string) => Category | null
type Ruleset = { [K in Category]: Rule[] }

const ruleset: Ruleset = {
  components: [
    (p: string) =>
      p.startsWith("../../hooks") || p.startsWith("@/hooks") ? "hooks" : null,
    (p: string) =>
      p.startsWith("../../providers") || p.startsWith("@/providers")
        ? "providers"
        : null,
    (p: string) =>
      p.startsWith("components") ||
      p.startsWith("@/components") ||
      p.startsWith("../")
        ? "components"
        : null,
  ],
  hooks: [
    (p: string) =>
      p.startsWith("../../components") || p.startsWith("@/components")
        ? "components"
        : null,
    (p: string) =>
      p.startsWith("../../providers") || p.startsWith("@/providers")
        ? "providers"
        : null,
    (p: string) =>
      p.startsWith("../") || p.startsWith("@/hooks") ? "hooks" : null,
  ],
  providers: [
    (p: string) =>
      p.startsWith("../../components") || p.startsWith("@/components")
        ? "components"
        : null,
    (p: string) =>
      p.startsWith("../../hooks") || p.startsWith("@/hooks") ? "hooks" : null,
    (p: string) =>
      p.startsWith("../") || p.startsWith("@/providers") ? "providers" : null,
  ],
}

type Classification = "external" | "ignore" | Category | null

const classifyImport = (type: Category, path: string): Classification => {
  if (path.startsWith("./")) {
    return "ignore"
  }
  if (isIgnorePackage(path)) return "ignore"

  for (const rule of ruleset[type]) {
    const res = rule(path)
    if (res) return res
  }
  return "external"
}

const extractImports = async (
  filePath: string,
  type: Category,
  project: Project,
) => {
  const imports = {
    external: new Set<string>(),
    internal: {
      components: new Set<string>(),
      hooks: new Set<string>(),
      providers: new Set<string>(),
    },
  }

  try {
    const sourceFile = project.createSourceFile(
      filePath,
      await readFile(filePath, "utf-8"),
      { overwrite: true, scriptKind: ScriptKind.TSX },
    )

    sourceFile.getImportDeclarations().forEach((importDeclaration) => {
      const moduleSpecifier = importDeclaration.getModuleSpecifierValue()
      const result = classifyImport(type, moduleSpecifier)

      const isCategory = (val: Classification): val is Category =>
        CATEGORIES.includes(val as Category)

      if (result === "external") {
        const version = getVersion(moduleSpecifier)
        if (version) {
          imports.external.add(`${moduleSpecifier}@${version}`)
        } else {
          imports.external.add(moduleSpecifier)
        }
      } else if (isCategory(result)) {
        const packageName = moduleSpecifier.split("/").pop()
        if (packageName) {
          imports.internal[result].add(packageName)
        }
      }
    })
  } catch (error) {
    console.warn(`Error parsing file: ${filePath}`, error)
  }

  return {
    external: Array.from(imports.external),
    internal: {
      components: Array.from(imports.internal.components),
      hooks: Array.from(imports.internal.hooks),
      providers: Array.from(imports.internal.providers),
    },
  }
}

const generateDependencies = async (
  name: string,
  type: Category,
  basePath: string,
  project: Project,
) => {
  const dirPath = join(basePath, name)
  const files = (await readdir(dirPath)).filter(
    (file) =>
      (file.endsWith(".ts") || file.endsWith(".tsx")) &&
      !file.endsWith(".stories.tsx") &&
      !file.endsWith(".test.ts") &&
      !file.endsWith(".test.tsx") &&
      !file.endsWith(".style.ts") &&
      !file.endsWith("namespace.ts"),
  )

  const allImports = {
    external: new Set<string>(),
    internal: {
      components: new Set<string>(),
      hooks: new Set<string>(),
      providers: new Set<string>(),
    },
  }

  for (const file of files) {
    const filePath = join(dirPath, file)
    const { external, internal } = await extractImports(filePath, type, project)

    external.forEach((dependency) => allImports.external.add(dependency))

    for (const [category, dependencies] of Object.entries(internal) as [
      keyof typeof allImports.internal,
      string[],
    ][]) {
      for (const dependency of dependencies) {
        allImports.internal[category].add(dependency)
      }
    }
  }

  await writeFile(
    `${basePath}/${name}/data.json`,
    JSON.stringify(
      {
        dependencies: {
          external: Array.from(allImports.external).sort(),
          internal: {
            components: Array.from(allImports.internal.components).sort(),
            hooks: Array.from(allImports.internal.hooks).sort(),
            providers: Array.from(allImports.internal.providers).sort(),
          },
        },
      },
      null,
      2,
    ),
  )
}

try {
  const project = new Project({ useInMemoryFileSystem: true })

  for (const type of CATEGORIES) {
    const basePath = join("packages/react/src", type)
    const names = await getDirectories(basePath)

    for (const name of names) {
      await generateDependencies(name, type, basePath, project)
    }
  }
  console.log("succeed generate data.json")
} catch (error) {
  console.error("Error generating dependencies JSON:", error)
}
