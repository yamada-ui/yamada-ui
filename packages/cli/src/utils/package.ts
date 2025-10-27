import type { Dict } from "@yamada-ui/utils"
import type {
  PackageNameWithVersion,
  UserConfig,
  WantedVersion,
} from "../index.type"
import { isObject, merge } from "@yamada-ui/utils"
import { execa } from "execa"
import { existsSync } from "fs"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"
import semver from "semver"
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

export function getVersion(
  { dependencies, devDependencies }: Dict,
  nameWithVersion: string,
): string | undefined | WantedVersion {
  const [name, version] = splitVersion(nameWithVersion)

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
      splitVersion(dependency)[0],
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

    return [`@${name}`, version] as const
  } else {
    return value.split("@") as [string, string | undefined]
  }
}

export function getPackageName(value: string) {
  return splitVersion(value)[0]
}

export function getPackageNameWithVersion(value: PackageNameWithVersion) {
  return isObject(value) ? `${value.name}@${value.wanted}` : value
}

export interface PackageAddCommandOptions {
  dev?: boolean
  exact?: boolean
}

export function packageAddArgs(
  packageManager: PackageManager,
  { dev = false, exact = false }: PackageAddCommandOptions = {},
) {
  const args: string[] = []

  if (packageManager === "npm") {
    args.push("install")
  } else {
    args.push("add")
  }

  if (dev) {
    if (packageManager === "npm" || packageManager === "pnpm") {
      args.push("--save-dev")
    } else {
      args.push("--dev")
    }
  }

  if (exact) args.push("--save-exact")

  return args
}

export function packageExecuteCommands(packageManager: PackageManager) {
  switch (packageManager) {
    case "npm":
      return { args: [], command: "npx" }
    case "pnpm":
      return { args: ["dlx"], command: "pnpm" }
    case "yarn":
      return { args: ["dlx"], command: "yarn" }
    case "bun":
      return { args: ["--bun"], command: "bunx" }
  }
}

export interface InstallDependenciesOptions extends PackageAddCommandOptions {
  cwd?: string
}

export async function installDependencies(
  dependencies?: string[],
  { cwd, dev, exact = true }: InstallDependenciesOptions = {},
) {
  const packageManager = getPackageManager()

  if (dependencies?.length) {
    const args = packageAddArgs(packageManager, { dev, exact })

    await execa(packageManager, [...args, ...dependencies], {
      cwd,
      stdout: "ignore",
    })
  } else {
    await execa(packageManager, ["install"], { cwd, stdout: "ignore" })
  }
}

export interface UninstallDependenciesOptions
  extends Pick<InstallDependenciesOptions, "cwd"> {}

export async function uninstallDependencies(
  dependencies: string[],
  { cwd }: InstallDependenciesOptions = {},
) {
  const packageManager = getPackageManager()

  if (dependencies.length) {
    const command = packageManager === "npm" ? "uninstall" : "remove"

    await execa(packageManager, [command, ...dependencies], {
      cwd,
      stdout: "ignore",
    })
  }
}

export async function addWorkspace(
  cwd: string,
  workspacePath: string,
  config: UserConfig,
) {
  const packageManager = getPackageManager()

  switch (packageManager) {
    case "pnpm": {
      const targetPath = path.resolve(cwd, "pnpm-workspace.yaml")

      if (existsSync(targetPath)) {
        const content = await readFile(targetPath, "utf8")
        const json = YAML.parse(content)

        json.packages ??= []

        if (!json.packages.includes(workspacePath)) {
          json.packages.push(workspacePath)

          await writeFileSafe(
            targetPath,
            YAML.stringify(json),
            merge(config, { format: { parser: "yaml" } }),
          )
        }
      } else {
        const content = YAML.stringify({ packages: [workspacePath] })

        await writeFileSafe(
          targetPath,
          content,
          merge(config, { format: { parser: "yaml" } }),
        )
      }

      break
    }
    default: {
      const packageJson = await getPackageJson(cwd)

      packageJson.workspaces ??= []

      if (!packageJson.workspaces.includes(workspacePath)) {
        packageJson.workspaces.push(workspacePath)

        const targetPath = path.resolve(cwd, "package.json")
        const content = JSON.stringify(packageJson)

        await writeFileSafe(
          targetPath,
          content,
          merge(config, { format: { parser: "json" } }),
        )
      }

      break
    }
  }
}
