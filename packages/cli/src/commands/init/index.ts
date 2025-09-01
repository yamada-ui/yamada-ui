import type { PackageNameWithVersion, UserConfig } from "../../index.type"
import { isObject, merge } from "@yamada-ui/utils"
import boxen from "boxen"
import { Command } from "commander"
import { existsSync } from "fs"
import { Listr } from "listr2"
import ora from "ora"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { rimraf } from "rimraf"
import {
  CONFIG_FILE_NAME,
  DEFAULT_CONFIG,
  DEFAULT_PACKAGE_JSON,
  DEFAULT_PACKAGE_JSON_EXPORTS,
  DEFAULT_PACKAGE_NAME,
  DEFAULT_PATH,
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
  timer,
  transformExtension,
  transformTsToJs,
  validateDir,
  writeFileSafe,
} from "../../utils"

interface Options {
  config: string
  cwd: string
  jsx: boolean
  overwrite: boolean
}

export const init = new Command("init")
  .description("initialize your project and install dependencies")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option("-j, --jsx", "use jsx instead of tsx", false)
  .action(async function ({
    config: configPath,
    cwd,
    jsx,
    overwrite,
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

      let {
        src = true,
        format = true,
        lint = true,
        monorepo = true,
        outdir = "",
        packageName = "",
      } = await prompts([
        {
          type: "toggle",
          name: "monorepo",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(`Would you like to use monorepo? (recommended)`),
        },
        {
          type: "text",
          name: "outdir",
          initial: (_, { monorepo }) =>
            monorepo ? DEFAULT_PATH.monorepo : DEFAULT_PATH.polyrepo,
          message: (_, { monorepo }) =>
            monorepo
              ? c.reset(`What is the path to the monorepo?`)
              : c.reset(`What is the path to the directory?`),
        },
        {
          type: (_, { monorepo }) => (monorepo ? "text" : null),
          name: "packageName",
          initial: DEFAULT_PACKAGE_NAME,
          message: c.reset("What is the package name?"),
        },
        {
          type: (_, { monorepo }) => (monorepo ? "toggle" : null),
          name: "src",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(
            "Would you like your code inside a `src/` directory?",
          ),
        },
        {
          type: "toggle",
          name: "format",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(`Would you like to use Prettier?`),
        },
        {
          type: "toggle",
          name: "lint",
          active: "Yes",
          inactive: "No",
          initial: true,
          message: c.reset(`Would you like to use ESLint?`),
        },
      ])

      // eslint-disable-next-line no-control-regex
      outdir = outdir.replace(/\x17/g, "").trim()
      outdir ||= monorepo ? DEFAULT_PATH.monorepo : DEFAULT_PATH.polyrepo
      // eslint-disable-next-line no-control-regex
      packageName = packageName.replace(/\x17/g, "").trim()
      packageName ||= DEFAULT_PACKAGE_NAME

      if (monorepo) config.monorepo = monorepo
      if (jsx) config.jsx = jsx

      config.path = outdir
      config.format = { enabled: format }
      config.lint = { enabled: lint }

      const { generate } = await prompts({
        type: "confirm",
        name: "generate",
        initial: true,
        message: c.reset(`Generate ${c.cyan(configFileName)}. Proceed?`),
      })

      if (!generate) process.exit(0)

      if (!overwrite && existsSync(configPath)) {
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
        const { generate } = await prompts({
          type: "confirm",
          name: "generate",
          initial: true,
          message: c.reset(`Generate ${c.cyan(packageName)}. Proceed?`),
        })

        if (!generate) process.exit(0)

        const tasks = new Listr(
          [
            {
              task: async (_, task) => {
                const targetPath = path.resolve(outdirPath, "package.json")
                const content = JSON.stringify({
                  name: packageName,
                  ...DEFAULT_PACKAGE_JSON,
                  exports: DEFAULT_PACKAGE_JSON_EXPORTS[jsx ? "JSX" : "TSX"],
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
                const registry = await fetchRegistry("index")

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
              const content = JSON.stringify({ ...TSCONFIG_JSON })

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

        const { install } = await prompts({
          type: "confirm",
          name: "install",
          initial: true,
          message: c.reset(
            `The workspace is generated. Do you want to install dependencies?`,
          ),
        })

        if (install) dependencies = []
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
                    // TODO: Once `@yamada-ui/react` releases v2, I'll add it.
                    // REQUIRED_DEPENDENCIES,
                    // TODO: Once `@yamada-ui/react` releases v2, I'll remove it.
                    [...REQUIRED_DEPENDENCIES, "@yamada-ui/react@dev"],
                  ),
                )

                notInstalledDevDependencies.push(
                  ...getNotInstalledDependencies(
                    packageJson,
                    REQUIRED_DEV_DEPENDENCIES,
                  ),
                )

                task.title = `Checked ${c.cyan("package.json")} dependencies`
              },
              title: `Checking ${c.cyan("package.json")} dependencies`,
            },
            {
              task: async (_, task) => {
                const registry = await fetchRegistry("index")

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

          const { install } = await prompts({
            type: "confirm",
            name: "install",
            initial: true,
            message: c.reset(
              [
                `The following dependencies are not installed: ${colorizedNames.join(", ")}.`,
                "Do you want to install them?",
              ].join(" "),
            ),
          })

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

      if (dependencies || devDependencies) {
        spinner.start("Installing dependencies")

        if (dependencies) await installDependencies(dependencies, { cwd })
        if (devDependencies)
          await installDependencies(devDependencies, { cwd, dev: true })

        // TODO: Once `@yamada-ui/react` releases v2, I'll remove it.
        if (monorepo)
          await installDependencies(["@yamada-ui/react@dev"], {
            cwd: outdirPath,
          })

        spinner.succeed("Installed dependencies")
      }

      if (monorepo) {
        const packageManager = getPackageManager()
        const args = packageAddArgs(packageManager)

        console.log("")
        console.log(
          boxen(
            [
              "Run",
              c.cyan(
                `${packageManager} ${args.join(" ")} "${packageName}@workspace:*"`,
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
