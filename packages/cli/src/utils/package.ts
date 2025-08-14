import type { Dict } from "@yamada-ui/utils"
import { isObject } from "@yamada-ui/utils"
import { execSync } from "child_process"
import { existsSync } from "fs"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"
import validateProjectName from "validate-npm-package-name"
import YAML from "yamljs"
import { writeFileSafe } from "./fs"

export type PackageManager = "bun" | "npm" | "pnpm" | "yarn"

export function getPackageManager(): PackageManager {
  const userAgent = process.env.npm_config_user_agent || ""

  if (userAgent.startsWith("yarn")) return "yarn"
  if (userAgent.startsWith("pnpm")) return "pnpm"
  if (userAgent.startsWith("bun")) return "bun"

  return "npm"
}

export function validatePackageName(name: string) {
  const nameValidation = validateProjectName(name)

  const errors = [
    ...(nameValidation.errors ?? []),
    ...(nameValidation.warnings ?? []),
  ]

  return !!errors.length
}

export async function getPackageJson(cwd: string): Promise<Dict> {
  try {
    const packageJson = await readFile(
      path.resolve(cwd, "package.json"),
      "utf8",
    )

    return JSON.parse(packageJson)
  } catch {
    throw new Error(
      `No package.json found. Please run ${c.cyan(`${getPackageManager()} init`)}.`,
    )
  }
}

export function hasDependencies(
  { dependencies, devDependencies }: Dict,
  name: string,
): string | undefined {
  if (isObject(dependencies) && name in dependencies) return dependencies[name]
  if (isObject(devDependencies) && name in devDependencies)
    return devDependencies[name]
}

export function requireDependencies(packageJson: Dict, dependencies: string[]) {
  return Object.fromEntries(
    dependencies.map((dependency) => [
      dependency,
      hasDependencies(packageJson, dependency),
    ]),
  )
}

export function installDependencies(cwd: string, dependencies?: string[]) {
  const packageManager = getPackageManager()

  switch (packageManager) {
    case "bun": {
      if (dependencies?.length) {
        execSync(`bun add ${dependencies.join(" ")}`, { cwd, stdio: "ignore" })
      } else {
        execSync(`bun install`, { cwd, stdio: "ignore" })
      }

      break
    }
    case "pnpm": {
      if (dependencies?.length) {
        execSync(`pnpm add ${dependencies.join(" ")}`, { cwd, stdio: "ignore" })
      } else {
        execSync(`pnpm install`, { cwd, stdio: "ignore" })
      }

      break
    }
    case "yarn": {
      if (dependencies?.length) {
        execSync(`yarn add ${dependencies.join(" ")}`, { cwd, stdio: "ignore" })
      } else {
        execSync(`yarn install`, { cwd, stdio: "ignore" })
      }

      break
    }
    default: {
      if (dependencies?.length) {
        execSync(`npm install ${dependencies.join(" ")}`, {
          cwd,
          stdio: "ignore",
        })
      } else {
        execSync(`npm install`, { cwd, stdio: "ignore" })
      }

      break
    }
  }
}

export async function addWorkspace(cwd: string, workspacePath: string) {
  const packageManager = getPackageManager()

  switch (packageManager) {
    case "pnpm": {
      if (existsSync(path.resolve(cwd, "pnpm-workspace.yaml"))) {
        const content = await readFile(
          path.resolve(cwd, "pnpm-workspace.yaml"),
          "utf8",
        )
        const json = YAML.parse(content)

        json.packages ??= []

        if (!json.packages.includes(workspacePath)) {
          json.packages.push(workspacePath)

          await writeFileSafe(
            path.resolve(cwd, "pnpm-workspace.yaml"),
            YAML.stringify(json, undefined, 2),
          )
        }
      } else {
        const content = YAML.stringify(
          { packages: [workspacePath] },
          undefined,
          2,
        )

        await writeFileSafe(path.resolve(cwd, "pnpm-workspace.yaml"), content)
      }

      break
    }
    default: {
      const packageJson = await getPackageJson(cwd)

      packageJson.workspaces ??= []

      if (!packageJson.workspaces.includes(workspacePath)) {
        packageJson.workspaces.push(workspacePath)

        await writeFileSafe(
          path.resolve(cwd, "package.json"),
          JSON.stringify(packageJson, null, 2),
        )
      }

      break
    }
  }
}
