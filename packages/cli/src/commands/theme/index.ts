import type { UserConfig } from "../../index.type"
import { isUndefined, merge } from "@yamada-ui/utils"
import boxen from "boxen"
import { Command } from "commander"
import { existsSync } from "fs"
import { readFile } from "fs/promises"
import { Listr } from "listr2"
import ora from "ora"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { rimraf } from "rimraf"
import {
  CONFIG_FILE_NAME,
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
  cwd,
  fetchRegistry,
  getConfig,
  getPackageManager,
  installDependencies,
  isTsx,
  packageAddArgs,
  replaceVersion,
  splitVersion,
  timer,
  transformExtension,
  transformTsToJs,
  transformTsxToJsx,
  validateDir,
  writeFileSafe,
} from "../../utils"

interface Options {
  config: string
  cwd: string
  dryRun: boolean
  overwrite: boolean
  yes: boolean
  format?: boolean
  install?: boolean
  js?: boolean
  lint?: boolean
  packageName?: string
  src?: boolean
  tag?: string
}

export const theme = new Command("theme")
  .description("generate theme to your project.")
  .argument("[path]", "path to the theme directory.")
  .option("--cwd <path>", "current working directory.", cwd)
  .option("-c, --config <path>", "path to the config file.", CONFIG_FILE_NAME)
  .option("-o, --overwrite", "overwrite existing directory.", false)
  .option("-j, --js", "use js instead of ts.")
  .option("-y, --yes", "skip all confirmation prompts.", false)
  .option("-n, --dry-run", "preview changes without applying them.", false)
  .option("-p, --package-name <name>", "package name (for monorepo).")
  .option("-s, --src", "use src/ directory.")
  .option("--no-src", "do not use src/ directory.")
  .option("-i, --install", "install dependencies when choice is monorepo.")
  .option(
    "--no-install",
    "do not install dependencies when choice is monorepo.",
  )
  .option("-f, --format", "format the output files.")
  .option("--no-format", "do not format the output files.")
  .option("-l, --lint", "lint the output files.")
  .option("--no-lint", "do not lint the output files.")
  .option("-t, --tag <name>", "tag for the registries (e.g. dev, next).")
  .action(async function (
    themePath: string | undefined,
    {
      src,
      config: configPath,
      cwd,
      dryRun,
      format,
      install,
      js,
      lint,
      overwrite,
      packageName,
      tag,
      yes,
    }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath, { format, jsx: js, lint })

      spinner.succeed("Fetched config")

      themePath ??= config.theme?.path

      const defaultThemePath = config.monorepo
        ? DEFAULT_PATH.theme.monorepo
        : DEFAULT_PATH.theme.polyrepo

      const answer = await prompts({
        type: !yes && !themePath ? "text" : null,
        name: "themePath",
        initial: defaultThemePath,
        message: "What is the path to the theme directory?",
      })

      // eslint-disable-next-line no-control-regex
      themePath ??= (answer.themePath ?? "").replace(/\x17/g, "").trim()
      themePath ||= defaultThemePath

      const monorepoConfig = { src: false, packageName: "" }

      if (config.monorepo) {
        const answer = await prompts([
          {
            type: !yes && !packageName ? "text" : null,
            name: "packageName",
            initial: DEFAULT_PACKAGE_NAME.theme,
            message: c.reset("What is the package name?"),
          },
          {
            type: !yes && isUndefined(src) ? "toggle" : null,
            name: "src",
            active: "Yes",
            inactive: "No",
            initial: true,
            message: c.reset(
              "Would you like your code inside a `src/` directory?",
            ),
          },
        ])

        // eslint-disable-next-line no-control-regex
        packageName = (answer.packageName ?? "").replace(/\x17/g, "").trim()

        monorepoConfig.src = answer.src ?? true
        monorepoConfig.packageName = packageName || DEFAULT_PACKAGE_NAME.theme
      }

      const outdirPath = path.resolve(cwd, themePath)

      if (!overwrite && existsSync(outdirPath)) {
        if (yes) {
          throw new Error(
            `The directory already exists. Use ${c.cyan("--overwrite")} to overwrite it.`,
          )
        }

        const { overwrite } = await prompts({
          type: "confirm",
          name: "overwrite",
          initial: false,
          message: c.reset(
            `The directory already exists. Do you want to overwrite it?`,
          ),
        })

        if (!overwrite) process.exit(0)

        if (dryRun) {
          console.log(c.cyan(`(dry run) Would clear: ${outdirPath}`))
        } else {
          spinner.start("Clearing directory")

          await rimraf(outdirPath)

          spinner.succeed("Cleared directory")
        }
      }

      spinner.start("Fetching registry")

      const registry = await fetchRegistry("theme", { tag })

      spinner.succeed("Fetched registry")

      const tasks = new Listr(
        [
          {
            task: async (_, task) => {
              const targetPath = path.resolve(
                outdirPath,
                monorepoConfig.src ? "src" : "",
              )

              await Promise.all([
                ...registry.sources.map(async ({ name, content }) => {
                  if (!content) return

                  name = transformExtension(name, config.jsx)

                  if (config.jsx)
                    content = isTsx(name)
                      ? transformTsxToJsx(content)
                      : transformTsToJs(content)

                  await writeFileSafe(path.resolve(targetPath, name), content, {
                    ...config,
                    dryRun,
                  })
                }),
                writeFileSafe(
                  path.resolve(targetPath, REGISTRY_FILE_NAME),
                  JSON.stringify(registry),
                  merge(config, { dryRun, format: { parser: "json" } }),
                ),
              ])

              task.title = dryRun ? "Would generate theme" : "Generated theme"
            },
            title: `Generating theme`,
          },
          {
            task: async (_, task) => {
              const targetPath = path.resolve(cwd, configPath)
              const data = await readFile(targetPath, "utf-8")
              const userConfig = JSON.parse(data) as UserConfig

              userConfig.theme ??= {}
              userConfig.theme.path ??= themePath

              await writeFileSafe(
                targetPath,
                JSON.stringify(userConfig),
                merge(config, { dryRun, format: { parser: "json" } }),
              )

              task.title = dryRun ? "Would update config" : "Updated config"
            },
            title: `Updating config`,
          },
        ],
        { concurrent: true },
      )

      if (config.monorepo) {
        tasks.add({
          task: async (_, task) => {
            const targetPath = path.resolve(outdirPath, "package.json")
            const defaultExports =
              DEFAULT_PACKAGE_JSON_EXPORTS.theme[config.jsx ? "jsx" : "tsx"]
            const exports = monorepoConfig.src
              ? defaultExports
              : Object.fromEntries(
                  Object.entries(defaultExports).map(([key, value]) => [
                    key,
                    value.replace(/src\//, ""),
                  ]),
                )

            const content = JSON.stringify({
              name: monorepoConfig.packageName,
              ...DEFAULT_PACKAGE_JSON,
              dependencies: Object.fromEntries(
                REQUIRED_DEPENDENCIES.theme.map((dependency) =>
                  splitVersion(replaceVersion(dependency, PACKAGE_NAME, tag)),
                ),
              ),
              devDependencies: Object.fromEntries(
                REQUIRED_DEV_DEPENDENCIES.theme.map((dependency) =>
                  splitVersion(replaceVersion(dependency, PACKAGE_NAME, tag)),
                ),
              ),
              exports,
            })

            await writeFileSafe(
              targetPath,
              content,
              merge(config, { dryRun, format: { parser: "json" } }),
            )

            task.title = `${dryRun ? "Would generate" : "Generated"} ${c.cyan("package.json")}`
          },
          title: `Generating ${c.cyan("package.json")}`,
        })
      }

      if (!config.jsx) {
        tasks.add({
          task: async (_, task) => {
            const targetPath = path.resolve(outdirPath, "tsconfig.json")
            const tsconfig = { ...TSCONFIG_JSON }

            if (!monorepoConfig.src) {
              tsconfig.include = tsconfig.include.map((value) =>
                value.replace(/src\//, ""),
              )
            }

            const content = JSON.stringify(tsconfig)

            await writeFileSafe(
              targetPath,
              content,
              merge(config, { dryRun, format: { parser: "json" } }),
            )

            task.title = `${dryRun ? "Would generate" : "Generated"} ${c.cyan("tsconfig.json")}`
          },
          title: `Generating ${c.cyan("tsconfig.json")}`,
        })
      }

      await tasks.run()

      if (config.monorepo) {
        const answer = await prompts({
          type: !yes && isUndefined(install) ? "confirm" : null,
          name: "install",
          initial: true,
          message: c.reset(
            `The theme is generated. Do you want to install dependencies?`,
          ),
        })

        install ??= answer.install ?? true

        if (install) {
          spinner.start("Installing dependencies")

          await installDependencies([], { cwd, dryRun })

          spinner.succeed(
            dryRun ? "Would install dependencies" : "Installed dependencies",
          )
        }

        const packageManager = getPackageManager()
        const args = packageAddArgs(packageManager)

        console.log("")
        console.log(
          boxen(
            [
              "Run",
              c.cyan(
                `${packageManager} ${args.join(" ")} "${monorepoConfig.packageName}@workspace:*"`,
              ),
              "in your application.",
            ].join(" "),
            {
              borderColor: "yellow",
              borderStyle: "round",
              padding: 1,
              textAlignment: "center",
            },
          ),
        )
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
