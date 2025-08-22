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
  timer,
  validateDir,
  writeFileSafe,
} from "../../utils"

interface Options {
  config: string
  cwd: string
  overwrite: boolean
  format?: boolean
  lint?: boolean
}

export const theme = new Command("theme")
  .description("generate theme to your project")
  .argument("[path]", "path to the theme directory")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-o, --overwrite", "overwrite existing directory.", false)
  .option("-f, --format", "format the output files.")
  .option("-l, --lint", "lint the output files.")
  .action(async function (
    themePath: string | undefined,
    { config: configPath, cwd, format, lint, overwrite }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath, { format, lint })
      const themeAbsolutePath = themePath
        ? path.resolve(cwd, themePath)
        : (config.theme?.path ?? path.resolve(cwd, THEME_PATH))

      spinner.succeed("Fetched config")

      if (!overwrite && existsSync(themeAbsolutePath)) {
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

        await rimraf(themeAbsolutePath)

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

                  const targetPath = path.resolve(themeAbsolutePath, name)

                  await writeFileSafe(targetPath, content, config)
                }),
                writeFileSafe(
                  path.resolve(themeAbsolutePath, REGISTRY_FILE_NAME),
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
              userConfig.theme.path = themePath

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
