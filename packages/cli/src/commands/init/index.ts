import type { PackageNameWithVersion, UserConfig } from "../../index.type"
import { isObject, isUndefined, merge } from "@yamada-ui/utils"
import boxen from "boxen"
import { exec } from "child_process"
import { Command } from "commander"
import { existsSync } from "fs"
import { readdir, readFile } from "fs/promises"
import { Listr } from "listr2"
import ora from "ora"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { rimraf } from "rimraf"
import { promisify } from "util"
import {
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG,
  DEFAULT_PACKAGE_JSON,
  DEFAULT_PACKAGE_JSON_EXPORTS,
  DEFAULT_PACKAGE_NAME,
  DEFAULT_PATH,
  PACKAGE_NAME,
  REGISTRY_FILE_NAME,
  REQUIRED_DEPENDENCIES,
  REQUIRED_DEV_DEPENDENCIES,
  TSCONFIG_JSON,
} from "../../constant"
import {
  addWorkspace,
  cwd,
  fetchRegistry,
  getNotInstalledDependencies,
  getPackageJson,
  getPackageManager,
  getPackageNameWithVersion,
  installDependencies,
  packageAddArgs,
  replaceVersion,
  splitVersion,
  timer,
  transformExtension,
  transformTsToJs,
  validateDir,
  writeFileSafe,
} from "../../utils"

const execAsync = promisify(exec)

interface Options {
  config: string
  cwd: string
  jsx: boolean
  overwrite: boolean
  yes: boolean
  format?: boolean
  install?: boolean
  lint?: boolean
  monorepo?: boolean
  outdir?: string
  packageName?: string
  src?: boolean
  tag?: string
}

async function getWorkspaces(cwd: string): Promise<string[]> {
  let workspacePatterns: string[] = []

  const pnpmWorkspacePath = path.join(cwd, "pnpm-workspace.yaml")
  if (existsSync(pnpmWorkspacePath)) {
    const content = await readFile(pnpmWorkspacePath, "utf-8")
    const matches = Array.from(content.matchAll(/^\s*- ['"]?([^'"]+)['"]?/gm))
    if (matches.length > 0) {
      workspacePatterns = matches.map((m) => m[1]!.trim())
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
    if (pattern.endsWith("/*")) {
      const baseDir = pattern.replace("/*", "")
      const fullBaseDir = path.join(cwd, baseDir)
      if (existsSync(fullBaseDir)) {
        const dirents = await readdir(fullBaseDir, { withFileTypes: true })
        for (const dirent of dirents) {
          if (dirent.isDirectory()) {
            const workspacePath = path.join(baseDir, dirent.name)
            if (existsSync(path.join(cwd, workspacePath, "package.json"))) {
              actualWorkspaces.push(workspacePath)
            }
          }
        }
      }
    } else {
      if (existsSync(path.join(cwd, pattern, "package.json"))) {
        actualWorkspaces.push(pattern)
      }
    }
  }

  return actualWorkspaces
}

export const init = new Command("init")
  .description("initialize your project and install dependencies.")
  .option("--cwd <path>", "current working directory.", cwd)
  .option("-c, --config <path>", "path to the config file.", CONFIG_FILE_NAME)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option("-t, --tag <name>", "tag for the registries (e.g. dev, next).")
  .option("-j, --jsx", "use jsx instead of tsx.", false)
  .option("-y, --yes", "skip all confirmation prompts.", false)
  .option("-m, --monorepo", "enable monorepo mode.")
  .option("--no-monorepo", "disable monorepo mode.")
  .option("-p, --package-name <name>", "package name.")
  .option("-s, --src", "use `src/` directory when choice is monorepo.")
  .option("-i, --install", "install dependencies when choice is monorepo.")
  .option(
    "--no-install",
    "do not install dependencies when choice is monorepo.",
  )
  .option("-f, --format", "use Prettier.")
  .option("--no-format", "do not use Prettier.")
  .option("-l, --lint", "use ESLint.")
  .option("--no-lint", "do not use ESLint.")
  .option("--outdir <path>", "output directory path.")
  .action(async function ({
    src,
    config: configPath,
    cwd,
    format,
    install,
    jsx,
    lint,
    monorepo,
    outdir = "",
    overwrite,
    packageName = "",
    tag,
    yes,
  }: Options) {
    const spinner = ora()

    try {
      const { end } = timer()

      await validateDir(cwd)

      const indexFileName = transformExtension("index.ts", jsx)
      const configFileName = configPath.includes("/")
        ? configPath.split("/").at(-1)!
        : configPath
      const config: UserConfig = { ...DEFAULT_CONFIG }

      configPath = path.resolve(cwd, configPath)

      let dependencies: string[] | undefined
      let devDependencies: string[] | undefined

      const answer = await prompts([
        {
          type: !yes && isUndefined(monorepo) ? "toggle" : null,
          name: "monorepo",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(`Would you like to use monorepo? (recommended)`),
        },
        {
          type: !yes && !outdir ? "text" : null,
          name: "outdir",
          initial: (_, answer) =>
            (answer.monorepo ?? monorepo)
              ? DEFAULT_PATH.ui.monorepo
              : DEFAULT_PATH.ui.polyrepo,
          message: (_, answer) =>
            (answer.monorepo ?? monorepo)
              ? c.reset(`What is the path to the monorepo?`)
              : c.reset(`What is the path to the directory?`),
        },
        {
          type:
            !yes && !packageName
              ? (_, answer) => ((answer.monorepo ?? monorepo) ? "text" : null)
              : null,
          name: "packageName",
          initial: DEFAULT_PACKAGE_NAME.ui,
          message: c.reset("What is the package name?"),
        },
        {
          type:
            !yes && isUndefined(src)
              ? (_, answer) => ((answer.monorepo ?? monorepo) ? "toggle" : null)
              : null,
          name: "src",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(
            "Would you like your code inside a `src/` directory?",
          ),
        },
        {
          type: !yes && isUndefined(format) ? "toggle" : null,
          name: "format",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(`Would you like to use Prettier?`),
        },
        {
          type: !yes && isUndefined(lint) ? "toggle" : null,
          name: "lint",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(`Would you like to use ESLint?`),
        },
      ])

      monorepo ??= answer.monorepo ?? true
      src ??= answer.src ?? true
      lint ??= answer.lint ?? true
      format ??= answer.format ?? true

      // eslint-disable-next-line no-control-regex
      outdir = (answer.outdir ?? "").replace(/\x17/g, "").trim()
      outdir ||= monorepo ? DEFAULT_PATH.ui.monorepo : DEFAULT_PATH.ui.polyrepo

      // eslint-disable-next-line no-control-regex
      packageName = (answer.packageName ?? "").replace(/\x17/g, "").trim()
      packageName ||= DEFAULT_PACKAGE_NAME.ui
      if (monorepo) config.monorepo = monorepo
      if (jsx) config.jsx = jsx

      config.path = outdir
      config.format = { enabled: format }
      config.lint = { enabled: lint }

      if (!yes) {
        const { generate } = await prompts({
          type: "confirm",
          name: "generate",
          initial: true,
          message: c.reset(`Generate ${c.cyan(configFileName)}. Proceed?`),
        })

        if (!generate) process.exit(0)
      }

      if (!overwrite && existsSync(configPath)) {
        if (yes) {
          throw new Error(
            `The config file already exists. Use ${c.cyan("--overwrite")} to overwrite it.`,
          )
        }

        const { overwrite } = await prompts({
          type: "confirm",
          name: "overwrite",
          initial: false,
          message: c.reset(
            `The config file already exists. Do you want to overwrite it?`,
          ),
        })

        if (!overwrite) process.exit(0)
      }

      spinner.start(`Generating ${c.cyan(configFileName)}`)

      await writeFileSafe(
        configPath,
        JSON.stringify(config),
        merge(config, { format: { parser: "json" } }),
      )

      spinner.succeed(`Generated ${c.cyan(configFileName)}`)

      const outdirPath = path.resolve(cwd, outdir)

      if (!overwrite && existsSync(outdirPath)) {
        if (yes) {
          throw new Error(
            `The ${c.yellow(outdir)} directory already exists. Use ${c.cyan("--overwrite")} to overwrite it.`,
          )
        }

        const { overwrite } = await prompts({
          type: "confirm",
          name: "overwrite",
          initial: false,
          message: c.reset(
            [
              `The ${c.yellow(outdir)} directory already exists.`,
              "Do you want to overwrite it?",
            ].join(" "),
          ),
        })

        if (!overwrite) process.exit(0)

        spinner.start("Clearing directory")

        await rimraf(outdirPath)

        spinner.succeed("Cleared directory")
      }

      if (monorepo) {
        if (!yes) {
          const { generate } = await prompts({
            type: "confirm",
            name: "generate",
            initial: true,
            message: c.reset(`Generate ${c.cyan(packageName)}. Proceed?`),
          })

          if (!generate) process.exit(0)
        }

        const tasks = new Listr(
          [
            {
              task: async (_, task) => {
                const targetPath = path.resolve(outdirPath, "package.json")
                const defaultExports =
                  DEFAULT_PACKAGE_JSON_EXPORTS.ui[jsx ? "jsx" : "tsx"]
                const exports = src
                  ? defaultExports
                  : Object.fromEntries(
                      Object.entries(defaultExports).map(([key, value]) => [
                        key,
                        value.replace(/src\//, ""),
                      ]),
                    )

                const content = JSON.stringify({
                  name: packageName,
                  ...DEFAULT_PACKAGE_JSON,
                  dependencies: Object.fromEntries(
                    REQUIRED_DEPENDENCIES.ui.map((dependency) =>
                      splitVersion(
                        replaceVersion(dependency, PACKAGE_NAME, tag),
                      ),
                    ),
                  ),
                  devDependencies: Object.fromEntries(
                    REQUIRED_DEV_DEPENDENCIES.ui.map((dependency) =>
                      splitVersion(
                        replaceVersion(dependency, PACKAGE_NAME, tag),
                      ),
                    ),
                  ),
                  exports,
                })

                await writeFileSafe(
                  targetPath,
                  content,
                  merge(config, { format: { parser: "json" } }),
                )

                task.title = `Generated ${c.cyan("package.json")}`
              },
              title: `Generating ${c.cyan("package.json")}`,
            },
            {
              task: async (_, task) => {
                const targetPath = path.resolve(outdirPath, src ? "src" : "")
                const registry = await fetchRegistry("index", { tag })

                let content = registry.sources[0]!.content!

                if (jsx) content = transformTsToJs(content)

                await Promise.all([
                  writeFileSafe(
                    path.join(targetPath, indexFileName),
                    content,
                    config,
                  ),
                  writeFileSafe(
                    path.join(targetPath, REGISTRY_FILE_NAME),
                    JSON.stringify(registry),
                    merge(config, { format: { parser: "json" } }),
                  ),
                ])

                task.title = `Generated ${c.cyan(indexFileName)}`
              },
              title: `Generating ${c.cyan(indexFileName)}`,
            },
            {
              task: async (_, task) => {
                if (outdir.includes("/")) {
                  const path = `${outdir.replace(/^\.\//, "").split("/")[0]}/**`

                  await addWorkspace(cwd, path, config)
                } else {
                  await addWorkspace(cwd, outdir, config)
                }

                task.title = "Added workspace"
              },
              title: "Adding workspace",
            },
          ],
          { concurrent: true },
        )

        if (!jsx) {
          tasks.add({
            task: async (_, task) => {
              const targetPath = path.resolve(outdirPath, "tsconfig.json")
              const tsconfig = { ...TSCONFIG_JSON }

              if (!src) {
                tsconfig.include = tsconfig.include.map((value) =>
                  value.replace(/src\//, ""),
                )
              }

              const content = JSON.stringify(tsconfig)

              await writeFileSafe(
                targetPath,
                content,
                merge(config, { format: { parser: "json" } }),
              )

              task.title = `Generated ${c.cyan("tsconfig.json")}`
            },
            title: `Generating ${c.cyan("tsconfig.json")}`,
          })
        }

        await tasks.run()

        if (isUndefined(install)) {
          const answer = await prompts({
            type: !yes ? "confirm" : null,
            name: "install",
            initial: true,
            message: c.reset(
              `The workspace is generated. Do you want to install dependencies?`,
            ),
          })

          install = answer.install ?? true

          if (install) dependencies = []
        } else {
          if (install) dependencies = []
        }
      } else {
        const notInstalledDependencies: PackageNameWithVersion[] = []
        const notInstalledDevDependencies: PackageNameWithVersion[] = []

        const tasks = new Listr(
          [
            {
              task: async (_, task) => {
                const packageJson = await getPackageJson(cwd)

                notInstalledDependencies.push(
                  ...getNotInstalledDependencies(
                    packageJson,
                    REQUIRED_DEPENDENCIES.ui.map((dependency) =>
                      replaceVersion(dependency, PACKAGE_NAME, tag),
                    ),
                  ),
                )

                notInstalledDevDependencies.push(
                  ...getNotInstalledDependencies(
                    packageJson,
                    REQUIRED_DEV_DEPENDENCIES.ui.map((dependency) =>
                      replaceVersion(dependency, PACKAGE_NAME, tag),
                    ),
                  ),
                )

                task.title = `Checked ${c.cyan("package.json")} dependencies`
              },
              title: `Checking ${c.cyan("package.json")} dependencies`,
            },
            {
              task: async (_, task) => {
                const registry = await fetchRegistry("index", { tag })

                let content = registry.sources[0]!.content!

                if (jsx) content = transformTsToJs(content)

                await Promise.all([
                  writeFileSafe(
                    path.resolve(outdirPath, indexFileName),
                    content,
                    config,
                  ),
                  writeFileSafe(
                    path.resolve(outdirPath, REGISTRY_FILE_NAME),
                    JSON.stringify(registry),
                    merge(config, { format: { parser: "json" } }),
                  ),
                ])

                task.title = `Generated ${c.cyan(indexFileName)}`
              },
              title: `Generating ${c.cyan(indexFileName)}`,
            },
          ],
          { concurrent: true },
        )

        await tasks.run()

        if (
          notInstalledDependencies.length ||
          notInstalledDevDependencies.length
        ) {
          const colorizedNames = [
            ...notInstalledDependencies,
            ...notInstalledDevDependencies,
          ].map((value) =>
            c.cyan(
              isObject(value)
                ? value.current
                  ? `${value.name}@${value.current}->${c.red(value.wanted)}`
                  : value.name
                : value,
            ),
          )

          if (isUndefined(install)) {
            const answer = await prompts({
              type: !yes ? "confirm" : null,
              name: "install",
              initial: true,
              message: c.reset(
                [
                  `The following dependencies are not installed: ${colorizedNames.join(", ")}.`,
                  "Do you want to install them?",
                ].join(" "),
              ),
            })

            install = answer.install ?? true
          }

          if (install) {
            dependencies = notInstalledDependencies.map(
              getPackageNameWithVersion,
            )
            devDependencies = notInstalledDevDependencies.map(
              getPackageNameWithVersion,
            )
          }
        }
      }

      if (install && (dependencies || devDependencies)) {
        spinner.start("Installing dependencies")

        if (dependencies) await installDependencies(dependencies, { cwd })
        if (devDependencies)
          await installDependencies(devDependencies, { cwd, dev: true })

        spinner.succeed("Installed dependencies")
      }

      if (monorepo) {
        const packageManager = getPackageManager()
        const args = packageAddArgs(packageManager)
        const installCommand = `${packageManager} ${args.join(" ")} "${packageName}@workspace:*"`

        const workspaces = await getWorkspaces(cwd)

        if (workspaces.length === 0) {
          console.log("")
          console.log(
            boxen(
              ["Run", c.cyan(installCommand), "in your application."].join(" "),
              {
                borderColor: "yellow",
                borderStyle: "round",
                padding: 1,
                textAlignment: "center",
              },
            ),
          )
        } else {
          if (yes) {
            console.log(`\nRun the following commands in your applications:\n`)
            workspaces.forEach((ws) => {
              console.log(c.cyan(`cd ${ws} && ${installCommand}`))
            })
            console.log("")
          } else {
            console.log("")
            const { selectedWorkspaces } = await prompts({
              type: "multiselect",
              name: "selectedWorkspaces",
              choices: workspaces.map((ws) => ({ title: ws, value: ws })),
              instructions: false,
              message: `Which workspaces would you like to add "${packageName}" to? (Press <space> to toggle)`,
            })

            if (selectedWorkspaces && selectedWorkspaces.length > 0) {
              spinner.start("Installing UI package in selected workspaces")

              try {
                for (const ws of selectedWorkspaces) {
                  await execAsync(installCommand, { cwd: path.join(cwd, ws) })
                }
                spinner.succeed("Installation complete")

                console.log(
                  `\nAdded "${packageName}@workspace:*" to the following workspaces:\n`,
                )
                selectedWorkspaces.forEach((ws: string) => {
                  console.log(c.cyan(`cd ${ws} && ${installCommand}`))
                })
                console.log("")
              } catch (error) {
                spinner.fail("Failed to install packages in workspaces.")
                console.error(c.red(String(error)))
              }
            } else {
              console.log(
                c.yellow(
                  "\nNo workspaces selected. Skipping automatic installation.\n",
                ),
              )
            }
          }
        }
      }

      end()
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
