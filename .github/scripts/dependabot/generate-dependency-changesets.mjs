import { execFileSync } from "node:child_process"
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { join, resolve } from "node:path"
import process from "node:process"
import { pathToFileURL } from "node:url"

const RELEASE_SECTIONS = [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
]
const REACT_EXCLUDED_DIRECT_DEPS = new Set([
  "lucide-react",
  "web-features",
  "@mdn/browser-compat-data",
])

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

function parseJson(content, source) {
  try {
    const parsed = JSON.parse(content)
    return isObject(parsed) ? parsed : {}
  } catch (error) {
    throw new Error(`Failed to parse JSON from ${source}: ${error.message}`)
  }
}

function readGitFile(ref, path) {
  try {
    return execFileSync("git", ["show", `${ref}:${path}`], { encoding: "utf8" })
  } catch {
    return null
  }
}

function getSection(manifest, section) {
  const value = manifest?.[section]
  return isObject(value) ? value : {}
}

function getReleaseDependencies(manifest) {
  const merged = {}

  for (const section of RELEASE_SECTIONS) {
    Object.assign(merged, getSection(manifest, section))
  }

  return merged
}

export function listChangedReleaseDeps(baseManifest, headManifest) {
  const changed = new Set()

  for (const section of RELEASE_SECTIONS) {
    const baseSection = getSection(baseManifest, section)
    const headSection = getSection(headManifest, section)
    const names = new Set([
      ...Object.keys(baseSection),
      ...Object.keys(headSection),
    ])

    for (const name of names) {
      if (baseSection[name] !== headSection[name]) {
        changed.add(name)
      }
    }
  }

  return [...changed]
}

export function parseCatalogEntries(workspaceYaml) {
  const catalog = {}
  const lines = workspaceYaml.split(/\r?\n/)
  let inCatalog = false
  let catalogIndent = 0

  for (const line of lines) {
    const sectionMatch = line.match(/^(\s*)catalog:\s*$/)
    if (sectionMatch) {
      inCatalog = true
      catalogIndent = sectionMatch[1].length
      continue
    }

    if (!inCatalog) {
      continue
    }

    if (!line.trim() || line.trimStart().startsWith("#")) {
      continue
    }

    const indent = line.match(/^\s*/)?.[0].length ?? 0
    if (indent <= catalogIndent) {
      inCatalog = false
      continue
    }

    const entryMatch = line.match(/^\s*("[^"]+"|[^\s:#]+)\s*:\s*(.*?)\s*$/)
    if (!entryMatch) {
      continue
    }

    const rawName = entryMatch[1]
    const name = rawName.startsWith('"') ? rawName.slice(1, -1) : rawName
    const value = entryMatch[2]

    catalog[name] = value
  }

  return catalog
}

export function listChangedCatalogDeps(baseWorkspaceYaml, headWorkspaceYaml) {
  const baseCatalog = parseCatalogEntries(baseWorkspaceYaml)
  const headCatalog = parseCatalogEntries(headWorkspaceYaml)
  const changed = new Set()

  for (const dep of new Set([
    ...Object.keys(baseCatalog),
    ...Object.keys(headCatalog),
  ])) {
    if (baseCatalog[dep] !== headCatalog[dep]) {
      changed.add(dep)
    }
  }

  return changed
}

export function shouldCreateDependencyChangeset({
  pkg,
  baseManifest,
  headManifest,
  changedCatalogDeps,
}) {
  const excluded = pkg === "react" ? REACT_EXCLUDED_DIRECT_DEPS : new Set()
  const directChange = listChangedReleaseDeps(baseManifest, headManifest).some(
    (dep) => !excluded.has(dep),
  )

  const catalogHit = Object.entries(getReleaseDependencies(headManifest)).some(
    ([dep, version]) => version === "catalog:" && changedCatalogDeps.has(dep),
  )

  return directChange || catalogHit
}

function writeChangesetFile({ pkg, pr }) {
  mkdirSync(".changeset", { recursive: true })
  const path = join(".changeset", `dependabot-deps-${pkg}-${pr}.md`)
  const content = `---\n"@yamada-ui/${pkg}": patch\n---\n\nUpdated dependencies.\n`
  writeFileSync(path, content)
}

function run() {
  const base = process.env.BASE
  const pr = process.env.PR

  if (!base || !pr) {
    throw new Error("BASE and PR environment variables are required")
  }

  const headWorkspaceYaml = readFileSync("pnpm-workspace.yaml", "utf8")
  const baseWorkspaceYaml =
    readGitFile(`origin/${base}`, "pnpm-workspace.yaml") ?? ""
  const changedCatalogDeps = listChangedCatalogDeps(
    baseWorkspaceYaml,
    headWorkspaceYaml,
  )

  for (const pkg of ["cli", "react", "utils"]) {
    const pkgPath = `packages/${pkg}/package.json`
    const headManifest = parseJson(readFileSync(pkgPath, "utf8"), pkgPath)
    const baseManifestContent = readGitFile(`origin/${base}`, pkgPath)
    const baseManifest = baseManifestContent
      ? parseJson(baseManifestContent, `origin/${base}:${pkgPath}`)
      : {}

    if (
      shouldCreateDependencyChangeset({
        pkg,
        baseManifest,
        headManifest,
        changedCatalogDeps,
      })
    ) {
      writeChangesetFile({ pkg, pr })
    }
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  run()
}
