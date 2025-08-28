import type { UserConfig } from "../../index.type"
import { merge } from "@yamada-ui/utils"
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
  REGISTRY_FILE_NAME,
  THEME_PATH,
} from "../../constant"
import {
  cwd,
  fetchRegistry,
  getConfig,
  isTsx,
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
  overwrite: boolean
  format?: boolean
  js?: boolean
  lint?: boolean
}

export const theme = new Command("theme")
  .description("generate theme to your project")
  .argument("[path]", "path to the theme directory")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-o, --overwrite", "overwrite existing directory.", false)
  .option("-j, --js", "use js instead of ts")
  .option("-f, --format", "format the output files.")
  .option("-l, --lint", "lint the output files.")
  .action(async function (
    themePath: string | undefined,
    { config: configPath, cwd, format, js, lint, overwrite }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath, { format, jsx: js, lint })
      const resolvedPath = themePath
        ? path.resolve(cwd, themePath)
        : (config.theme?.path ?? path.resolve(cwd, THEME_PATH))

      spinner.succeed("Fetched config")

      if (!overwrite && existsSync(resolvedPath)) {
        const { overwrite } = await prompts({
          type: "confirm",
          name: "overwrite",
          initial: false,
          message: c.reset(
            `The directory already exists. Do you want to overwrite it?`,
          ),
        })

        if (!overwrite) process.exit(0)

        spinner.start("Clearing directory")

        await rimraf(resolvedPath)

        spinner.succeed("Cleared directory")
      }

      spinner.start("Fetching registry")

      const registry = await fetchRegistry("theme")

      spinner.succeed("Fetched registry")

      const tasks = new Listr(
        [
          {
            task: async (_, task) => {
              await Promise.all([
                ...registry.sources.map(async ({ name, content }) => {
                  if (!content) return

                  name = transformExtension(name, config.jsx)

                  const targetPath = path.resolve(resolvedPath, name)

                  if (config.jsx)
                    content = isTsx(name)
                      ? transformTsxToJsx(content)
                      : transformTsToJs(content)

                  await writeFileSafe(targetPath, content, config)
                }),
                writeFileSafe(
                  path.resolve(resolvedPath, REGISTRY_FILE_NAME),
                  JSON.stringify(registry),
                  merge(config, { format: { parser: "json" } }),
                ),
              ])

              task.title = `Generated theme`
            },
            title: `Generating theme`,
          },
          {
            task: async (_, task) => {
              const targetPath = path.resolve(cwd, configPath)
              const data = await readFile(targetPath, "utf-8")
              const userConfig = JSON.parse(data) as UserConfig

              userConfig.theme ??= {}
              userConfig.theme.path ??= themePath ?? THEME_PATH

              await writeFileSafe(
                targetPath,
                JSON.stringify(userConfig),
                merge(config, { format: { parser: "json" } }),
              )

              task.title = `Updated config`
            },
            title: `Updating config`,
          },
        ],
        { concurrent: true },
      )

      await tasks.run()

      end()
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
