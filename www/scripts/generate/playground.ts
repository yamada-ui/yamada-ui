import fs from "fs"
import path from "path"
import { pathToFileURL } from "url"

export function copyEsbuildWasm(cwd = process.cwd()) {
  fs.copyFileSync(
    path.join(cwd, "node_modules/esbuild-wasm/esbuild.wasm"),
    path.join(cwd, "public/esbuild.wasm"),
  )
}

const PLAYGROUND_DEPENDENCIES = [
  "@faker-js/faker",
  "@lucide/lab",
  "dayjs",
  "motion",
  "react",
  "react-hook-form",
] as const

type PlaygroundDependency = (typeof PLAYGROUND_DEPENDENCIES)[number]

function normalizeVersion(version: string) {
  return version.replace(/\(.*/, "")
}

export function parseImporterVersions(
  lockfile: string,
  importerName: string,
  sectionName: "dependencies" | "devDependencies",
) {
  const dependencies = new Map<string, string>()
  const lines = lockfile.split("\n")
  let inImporter = false
  let inSection = false
  let currentDependency: null | string = null

  for (const line of lines) {
    if (!inImporter) {
      if (line === `  ${importerName}:`) inImporter = true
      continue
    }

    if (!line.startsWith("    ")) break

    if (!inSection) {
      if (line === `    ${sectionName}:`) {
        inSection = true
      }
      continue
    }

    if (!line.startsWith("      ")) break

    if (line.startsWith("      ") && !line.startsWith("        ")) {
      const dependency = line.slice(6).trim().replace(/:$/, "")
      currentDependency = dependency.replace(/^["']|["']$/g, "")
      continue
    }

    if (currentDependency && line.startsWith("        version: ")) {
      const version = normalizeVersion(
        line.slice("        version: ".length).trim(),
      )

      dependencies.set(currentDependency, version)
    }
  }

  return dependencies
}

export function resolvePlaygroundVersions(lockfile: string) {
  const runtimeDependencies = parseImporterVersions(
    lockfile,
    "packages/react",
    "dependencies",
  )
  const devDependencies = parseImporterVersions(
    lockfile,
    "packages/react",
    "devDependencies",
  )

  return Object.fromEntries(
    PLAYGROUND_DEPENDENCIES.map((dependency) => {
      const version =
        runtimeDependencies.get(dependency) ?? devDependencies.get(dependency)

      if (!version) {
        throw new Error(
          `Missing playground dependency version for "${dependency}" in pnpm-lock importer`,
        )
      }

      return [dependency, version]
    }),
  ) as { [key in PlaygroundDependency]: string }
}

export function buildPlaygroundVersionsModule(lockfile: string) {
  const versions = resolvePlaygroundVersions(lockfile)

  return `export const FAKER_VERSION = ${JSON.stringify(versions["@faker-js/faker"])}
export const DAYJS_VERSION = ${JSON.stringify(versions.dayjs)}
export const LUCIDE_LAB_VERSION = ${JSON.stringify(versions["@lucide/lab"])}
export const MOTION_VERSION = ${JSON.stringify(versions.motion)}
export const REACT_VERSION = ${JSON.stringify(versions.react)}
export const REACT_HOOK_FORM_VERSION = ${JSON.stringify(versions["react-hook-form"])}
`
}

export function generatePlaygroundVersionsFile(cwd = process.cwd()) {
  const lockfilePath = path.join(cwd, "..", "pnpm-lock.yaml")
  const outputPath = path.join(
    cwd,
    "app/[locale]/(apps)/playground/versions.gen.ts",
  )
  const lockfile = fs.readFileSync(lockfilePath, "utf8")

  fs.writeFileSync(outputPath, buildPlaygroundVersionsModule(lockfile))
}

function main() {
  copyEsbuildWasm()
  generatePlaygroundVersionsFile()
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main()
}
