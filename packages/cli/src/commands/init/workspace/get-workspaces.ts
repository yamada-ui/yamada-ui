import type { PackageManager } from "../../../utils"
import { glob, readFile } from "node:fs/promises"
import path from "node:path"
import * as YAML from "yaml"

export async function getWorkspaces(
  cwd: string,
  packageManager: PackageManager,
): Promise<string[]> {
  let workspacePatterns: string[] = []

  if (packageManager === "pnpm") {
    const yamlPath = path.join(cwd, "pnpm-workspace.yaml")
    const ymlPath = path.join(cwd, "pnpm-workspace.yml")

    for (const pnpmWorkspacePath of [yamlPath, ymlPath]) {
      let content: string
      try {
        content = await readFile(pnpmWorkspacePath, "utf-8")
      } catch (e) {
        if ((e as NodeJS.ErrnoException).code === "ENOENT") continue
        throw new Error(
          `Failed to read ${pnpmWorkspacePath}: ${e instanceof Error ? e.message : String(e)}`,
        )
      }
      try {
        const parsed = YAML.parse(content)
        if (Array.isArray(parsed?.packages)) {
          workspacePatterns = parsed.packages
        }
      } catch (e) {
        throw new Error(
          `Failed to parse ${pnpmWorkspacePath}: ${e instanceof Error ? e.message : String(e)}`,
        )
      }
      break
    }
  } else {
    const packageJsonPath = path.join(cwd, "package.json")
    let content: string | undefined
    try {
      content = await readFile(packageJsonPath, "utf-8")
    } catch (e) {
      if ((e as NodeJS.ErrnoException).code !== "ENOENT") {
        throw new Error(
          `Failed to read ${packageJsonPath}: ${e instanceof Error ? e.message : String(e)}`,
        )
      }
    }
    if (content !== undefined) {
      try {
        const pkg = JSON.parse(content)
        if (Array.isArray(pkg.workspaces)) {
          workspacePatterns = pkg.workspaces
        } else if (
          pkg.workspaces?.packages &&
          Array.isArray(pkg.workspaces.packages)
        ) {
          workspacePatterns = pkg.workspaces.packages
        }
      } catch (e) {
        throw new Error(
          `Failed to parse ${packageJsonPath}: ${e instanceof Error ? e.message : String(e)}`,
        )
      }
    }
  }

  if (workspacePatterns.length === 0) return []

  const positivePatterns = workspacePatterns.filter((p) => !p.startsWith("!"))
  const negativePatterns = workspacePatterns
    .filter((p) => p.startsWith("!"))
    .map((p) => p.slice(1))

  const excludedPaths = new Set<string>()
  for (const pattern of negativePatterns) {
    const normalizedPattern = pattern.replace(/\/$/, "")
    const matches = await Array.fromAsync(
      glob(`${normalizedPattern}/package.json`, { cwd }),
    )
    for (const match of matches) {
      excludedPaths.add(path.dirname(match))
    }
  }

  const actualWorkspaces = new Set<string>()
  for (const pattern of positivePatterns) {
    const normalizedPattern = pattern.replace(/\/$/, "")
    const matches = await Array.fromAsync(
      glob(`${normalizedPattern}/package.json`, { cwd }),
    )
    for (const match of matches) {
      const dir = path.dirname(match)
      if (!excludedPaths.has(dir)) actualWorkspaces.add(dir)
    }
  }

  return [...actualWorkspaces]
}
