import type { Dict } from "@yamada-ui/utils"
import type { PackageNameWithVersion, WantedVersion } from "../index.type"
import { isObject } from "@yamada-ui/utils"
import { execSync } from "child_process"
import { existsSync } from "fs"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"
import semver from "semver"
import validateProjectName from "validate-npm-package-name"
import YAML from "yamljs"
import { writeFileSafe } from "./fs"
import { format } from "./prettier"

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

export function getVersion(
  { dependencies, devDependencies }: Dict,
  nameWithVersion: string,
): string | undefined | WantedVersion {
  const [name, version] = splitVersion(nameWithVersion)

  if (!name) return

  let currentVersion: string | undefined

  if (isObject(dependencies) && name in dependencies) {
    currentVersion = dependencies[name]
  } else if (isObject(devDependencies) && name in devDependencies) {
    currentVersion = devDependencies[name]
  }

  if (!version) return currentVersion
  if (!currentVersion) return { wanted: version }

  if (currentVersion === version || semver.satisfies(currentVersion, version)) {
    return currentVersion
  } else {
    return { current: currentVersion, wanted: version }
  }
}

export function findDependencies(packageJson: Dict, dependencies: string[]) {
  return Object.fromEntries(
    dependencies.map((dependency) => [
      splitVersion(dependency)[0]!,
      getVersion(packageJson, dependency),
    ]),
  )
}

export function getNotInstalledDependencies(
  packageJson: Dict,
  dependencies: string[],
): PackageNameWithVersion[] {
  const installedDependencies = findDependencies(packageJson, dependencies)

  return Object.entries(installedDependencies)
    .filter(([_, version]) => !version || isObject(version))
    .map(([name, version]) => (isObject(version) ? { name, ...version } : name))
}

export function splitVersion(value: string) {
  if (value.startsWith("@")) {
    const [, name, version] = value.split("@")

    return [`@${name}`, version]
  } else {
    return value.split("@")
  }
}

export function getPackageName(value: PackageNameWithVersion) {
  return isObject(value) ? `${value.name}@${value.wanted}` : value
}

export interface PackageAddCommandOptions {
  dev?: boolean
  exact?: boolean
}

export function packageAddCommand(
  packageManager: PackageManager,
  { dev = false, exact = false }: PackageAddCommandOptions = {},
) {
  const command: string[] = [packageManager]

  if (packageManager === "npm") {
    command.push("install")
  } else {
    command.push("add")
  }

  if (dev) {
    if (packageManager === "npm") {
      command.push("--save-dev")
    } else {
      command.push("--dev")
    }
  }

  if (exact) command.push("--save-exact")

  return command.join(" ")
}

export function packageExecuteCommand(packageManager: PackageManager) {
  switch (packageManager) {
    case "npm":
      return "npx"
    case "pnpm":
      return "pnpm dlx"
    case "yarn":
      return "yarn dlx"
    case "bun":
      return "bunx --bun"
  }
}

export interface InstallDependenciesOptions extends PackageAddCommandOptions {
  cwd?: string
}

export function installDependencies(
  dependencies?: string[],
  { cwd, dev, exact = true }: InstallDependenciesOptions = {},
) {
  const packageManager = getPackageManager()

  if (dependencies?.length) {
    const command = packageAddCommand(packageManager, { dev, exact })

    execSync(`${command} ${dependencies.join(" ")}`, { cwd, stdio: "ignore" })
  } else {
    execSync(`${packageManager} install`, { cwd, stdio: "ignore" })
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

          const content = await format(YAML.stringify(json), { parser: "yaml" })

          await writeFileSafe(path.resolve(cwd, "pnpm-workspace.yaml"), content)
        }
      } else {
        const data = YAML.stringify({ packages: [workspacePath] })
        const content = await format(data, { parser: "yaml" })

        await writeFileSafe(path.resolve(cwd, "pnpm-workspace.yaml"), content)
      }

      break
    }
    default: {
      const packageJson = await getPackageJson(cwd)

      packageJson.workspaces ??= []

      if (!packageJson.workspaces.includes(workspacePath)) {
        packageJson.workspaces.push(workspacePath)

        const content = await format(JSON.stringify(packageJson), {
          parser: "json",
        })

        await writeFileSafe(path.resolve(cwd, "package.json"), content)
      }

      break
    }
  }
}
