import type { PackageManager } from "../../../utils"
import { existsSync } from "node:fs"
import { glob, readFile } from "node:fs/promises"
import path from "node:path"
import YAML from "yamljs"

export async function getWorkspaces(
  cwd: string,
  packageManager: PackageManager,
): Promise<string[]> {
  let workspacePatterns: string[] = []

  if (packageManager === "pnpm") {
    const yamlPath = path.join(cwd, "pnpm-workspace.yaml")
    const ymlPath = path.join(cwd, "pnpm-workspace.yml")
    const pnpmWorkspacePath = existsSync(yamlPath)
      ? yamlPath
      : existsSync(ymlPath)
        ? ymlPath
        : null

    if (pnpmWorkspacePath) {
      const content = await readFile(pnpmWorkspacePath, "utf-8")
      const parsed = YAML.parse(content)
      if (Array.isArray(parsed?.packages)) {
        workspacePatterns = parsed.packages
      }
    }
  } else {
    const packageJsonPath = path.join(cwd, "package.json")
    if (existsSync(packageJsonPath)) {
      const pkg = JSON.parse(await readFile(packageJsonPath, "utf-8"))
      if (Array.isArray(pkg.workspaces)) {
        workspacePatterns = pkg.workspaces
      } else if (
        pkg.workspaces?.packages &&
        Array.isArray(pkg.workspaces.packages)
      ) {
        workspacePatterns = pkg.workspaces.packages
      }
    }
  }

  if (workspacePatterns.length === 0) return []

  const actualWorkspaces: string[] = []

  for (const pattern of workspacePatterns) {
    const normalizedPattern = pattern.replace(/\/$/, "")
    const packageJsonPattern = `${normalizedPattern}/package.json`

    const matches = await Array.fromAsync(glob(packageJsonPattern, { cwd }))

    for (const match of matches) {
      actualWorkspaces.push(path.dirname(match))
    }
  }

  return actualWorkspaces
}
