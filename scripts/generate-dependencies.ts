import { readdirSync, writeFileSync } from "fs"
import { readdir, readFile } from "fs/promises"
import { join } from "path"
import { Project, ScriptKind } from "ts-morph"

const CATEGORIES = ["components", "hooks", "providers"] as const
type Category = (typeof CATEGORIES)[number]

interface PackageDependencies {
  type: Category
  name: string
  dependencies: {
    external: string[]
    internal: {
      components: string[]
      hooks: string[]
      providers: string[]
    }
  }
}

const IGNORE_PACKAGES: readonly string[] = [
  "../../theme",
  "../../utils",
  "../../core",
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
    (p: string) => (p.startsWith("../../hooks") ? "hooks" : null),
    (p: string) => (p.startsWith("../../providers") ? "providers" : null),
    (p: string) =>
      p.startsWith("components") || p.startsWith("../") ? "components" : null,
  ],
  hooks: [
    (p: string) => (p.startsWith("../../components") ? "components" : null),
    (p: string) => (p.startsWith("../../providers") ? "providers" : null),
    (p: string) => (p.startsWith("../") ? "hooks" : null),
  ],
  providers: [
    (p: string) => (p.startsWith("../../components") ? "components" : null),
    (p: string) => (p.startsWith("../../hooks") ? "hooks" : null),
    (p: string) => (p.startsWith("../") ? "providers" : null),
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

const extractImports = async (filePath: string, type: Category) => {
  const imports = {
    external: new Set<string>(),
    internal: {
      components: new Set<string>(),
      hooks: new Set<string>(),
      providers: new Set<string>(),
    },
  }

  try {
    const project = new Project()
    const sourceFile = project.createSourceFile(
      filePath,
      await readFile(filePath, "utf-8"),
      { overwrite: true, scriptKind: ScriptKind.TSX },
    )

    sourceFile.getImportDeclarations().forEach((importDeclaration) => {
      const moduleSpecifier = importDeclaration.getModuleSpecifierValue()
      const result = classifyImport(type, moduleSpecifier)

      const isCategory = (val: Classification): val is Category =>
        val === "components" || val === "hooks" || val === "providers"

      if (result === "external") {
        imports.external.add(moduleSpecifier)
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

const analyzeDependencies = async (
  name: string,
  type: Category,
  basePath: string,
): Promise<PackageDependencies> => {
  const dirPath = join(basePath, name)
  const files = readdirSync(dirPath).filter(
    (file) =>
      (file.endsWith(".ts") || file.endsWith(".tsx")) &&
      !file.endsWith(".stories.tsx") &&
      !file.endsWith(".test.ts") &&
      !file.endsWith(".test.tsx") &&
      !file.endsWith("index.ts") &&
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
    const { external, internal } = await extractImports(filePath, type)

    external.forEach((dep) => allImports.external.add(dep))

    for (const [category, deps] of Object.entries(internal) as [
      keyof typeof allImports.internal,
      string[],
    ][]) {
      for (const dep of deps) {
        allImports.internal[category].add(dep)
      }
    }
  }

  return {
    type,
    name,
    dependencies: {
      external: Array.from(allImports.external).sort(),
      internal: {
        components: Array.from(allImports.internal.components).sort(),
        hooks: Array.from(allImports.internal.hooks).sort(),
        providers: Array.from(allImports.internal.providers).sort(),
      },
    },
  }
}

const generateDependenciesJson = async () => {
  const allDependencies: PackageDependencies[] = []

  for (const type of CATEGORIES) {
    const typePath = join("packages/react/src", type)
    const names = await getDirectories(typePath)

    for (const name of names) {
      const dependencies = await analyzeDependencies(name, type, typePath)
      allDependencies.push(dependencies)
    }
  }

  writeFileSync("dependencies.json", JSON.stringify(allDependencies, null, 2))
}

try {
  generateDependenciesJson()
  console.log("Dependencies JSON generated successfully.")
} catch (error) {
  console.error("Error generating dependencies JSON:", error)
}
