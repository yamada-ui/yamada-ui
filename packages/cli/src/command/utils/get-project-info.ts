import type { RawConfig } from "./get-config.js"
import fg from "fast-glob"
import fs, { pathExists } from "fs-extra"
import { resolve } from "node:path"
import { loadConfig } from "tsconfig-paths"
import { resolveConfigPaths } from "./get-config.js"

type ProjectType = "next-app" | "next-app-src" | "next-pages" | "next-pages-src"

const PROJECT_SHARED_IGNORE = [
  "**/node_modules/**",
  ".next",
  "public",
  "dist",
  "build",
]

export async function getProjectConfig(cwd: string) {
  const projectType = await getProjectType(cwd)
  const tsConfigAliasPrefix = getTsConfigAliasPrefix(cwd)

  if (!projectType || !tsConfigAliasPrefix) {
    return null
  }

  const isTsx = await isTypeScriptProject(cwd)

  const config: RawConfig = {
    dependencies: {
      external: true,
      ["yamada-ui"]: {
        components: true,
        hooks: true,
        utils: true,
      },
    },
    outputs: {
      components: `${tsConfigAliasPrefix}/components`,
      hooks: `${tsConfigAliasPrefix}/hooks`,
      utils: `${tsConfigAliasPrefix}/utils`,
    },
    tsx: isTsx,
    useClient: true,
    versionConflict: "prompt",
  }

  return resolveConfigPaths(cwd, config)
}

export async function isTypeScriptProject(cwd: string) {
  return pathExists(resolve(cwd, "tsconfig.json"))
}

export async function getProjectType(cwd: string): Promise<null | ProjectType> {
  const files = await fg.glob("**/*", {
    cwd,
    deep: 3,
    ignore: PROJECT_SHARED_IGNORE,
  })

  const isNextProject = files.find((file) => file.startsWith("next.config."))
  if (!isNextProject) {
    return null
  }

  const isUsingSrcDir = await fs.pathExists(resolve(cwd, "src"))
  const isUsingAppDir = await fs.pathExists(
    resolve(cwd, `${isUsingSrcDir ? "src/" : ""}app`),
  )

  if (isUsingAppDir) {
    return isUsingSrcDir ? "next-app-src" : "next-app"
  }

  return isUsingSrcDir ? "next-pages-src" : "next-pages"
}

export function getTsConfigAliasPrefix(cwd: string) {
  const tsConfig = loadConfig(cwd)

  if (tsConfig.resultType === "failed") {
    return null
  }

  // This assume that the first alias is the prefix.
  for (const [alias, paths] of Object.entries(tsConfig.paths)) {
    if (paths.includes("./*") || paths.includes("./src/*")) {
      return alias.at(0)
    }
  }

  return null
}
