import { Command } from "commander"
import { existsSync } from "fs"
import ora from "ora"
import c from "picocolors"
import packageJson from "../../../package.json"
import { CONFIG_FILE_NAME } from "../../constant"
import {
  cwd,
  getConfig,
  getGeneratedNameMap,
  getPackageManager,
  packageExecuteCommands,
  timer,
  validateDir,
} from "../../utils"
import { getDiff } from "../diff/get-diff"
import { getRegistriesAndFiles } from "../diff/get-registries-and-files"
import { printConflicts } from "./print-conflicts"
import { updateFiles } from "./update-files"

interface Options {
  config: string
  cwd: string
  format: boolean
  install: boolean
  lint: boolean
  sequential: boolean
}

export const update = new Command("update")
  .description("update components in your project")
  .argument("[components...]", "components to update")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-i, --install", "install dependencies", false)
  .option("-s, --sequential", "run tasks sequentially.", false)
  .option("-f, --format", "format the output files.")
  .option("-l, --lint", "lint the output files.")
  .action(async function (
    targetNames: string[],
    { config: configPath, cwd, format, install, lint, sequential }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      const packageManager = getPackageManager()
      const { args, command } = packageExecuteCommands(packageManager)
      const prefix = `${command}${args.length ? ` ${args.join(" ")}` : ""}`
      const getCommand = (command: string) =>
        c.cyan(`${prefix} ${packageJson.name}@latest ${command}`)

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath, { format, lint })

      spinner.succeed("Fetched config")

      spinner.start("Getting generated components")

      const all = !targetNames.length
      const index = all || targetNames.includes("index")
      const theme = all || targetNames.includes("theme")
      const existsTheme = !!config.theme?.path && existsSync(config.theme.path)

      if (theme && !existsTheme) {
        throw new Error(
          [
            `No ${c.yellow("theme")} found.`,
            `Please run ${getCommand("theme")}`,
            "to generate it.",
          ].join(" "),
        )
      }

      const omittedTargetNames = targetNames.filter(
        (name) => !["index", "theme"].includes(name),
      )
      const componentNames: string[] = []
      const generatedNameMap = await getGeneratedNameMap(config)
      const generatedNames = Object.values(generatedNameMap).flat()

      spinner.succeed("Got generated components")

      if (omittedTargetNames.length) {
        const notFoundNames = omittedTargetNames.filter(
          (name) => !generatedNames.includes(name),
        )

        if (notFoundNames.length) {
          throw new Error(
            [
              `No ${notFoundNames.map((name) => c.yellow(name)).join(", ")} found in generated components.`,
              `Please run ${getCommand("add")} ${notFoundNames.map((name) => c.green(name)).join(", ")}`,
              "to add it.",
            ].join(" "),
          )
        } else {
          componentNames.push(...omittedTargetNames)
        }
      } else if (all || (!index && !theme)) {
        componentNames.push(...generatedNames)
      }

      const { registryMap } = await getRegistriesAndFiles(
        componentNames,
        config,
        { concurrent: !sequential, index, theme },
      )
      const { changeMap, dependencyMap } = await getDiff(
        generatedNames,
        registryMap,
        config,
        !sequential,
      )
      const hasChanges = !!Object.keys(changeMap).length
      const hasDependencyChanges =
        !!dependencyMap.add.length ||
        !!dependencyMap.remove.length ||
        !!dependencyMap.update.length

      console.log("---------------------------------")

      if (!hasChanges && !hasDependencyChanges) {
        console.log(c.cyan("No updates found."))
      } else {
        const conflictMap = await updateFiles(
          changeMap,
          dependencyMap,
          registryMap,
          config,
          { concurrent: !sequential, install },
        )

        if (Object.keys(conflictMap).length) {
          console.log("---------------------------------")
          spinner.warn("There are conflicts. Please check the following files:")

          printConflicts(conflictMap, config)
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
