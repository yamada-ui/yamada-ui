import type { DiffRegistries } from "./get-registries-and-files"
import { Command } from "commander"
import { existsSync } from "fs"
import ora from "ora"
import c from "picocolors"
import prompts from "prompts"
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
import { printConflicts } from "../update/print-conflicts"
import { updateFiles } from "../update/update-files"
import { getDiff } from "./get-diff"
import { getRegistriesAndFiles } from "./get-registries-and-files"
import { printDiff, printDiffFile, printDiffFiles } from "./print-diff"

interface Options {
  config: string
  cwd: string
  detail: boolean
  sequential: boolean
}

export const diff = new Command("diff")
  .description("check for updates against the registry")
  .argument("[component]", "component to check")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-s, --sequential", "run tasks sequentially.", false)
  .option("-d, --detail", "show detailed changes", false)
  .action(async function (
    targetName: string | undefined,
    { config: configPath, cwd, detail, sequential }: Options,
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

      const config = await getConfig(cwd, configPath)

      spinner.succeed("Fetched config")

      spinner.start("Getting generated components")

      const componentNames: string[] = []
      const generatedNameMap = await getGeneratedNameMap(config)
      const generatedNames = Object.values(generatedNameMap).flat()
      const existsTheme = !!config.theme?.path && existsSync(config.theme.path)

      let index = targetName === "index"
      let theme = targetName === "theme"

      spinner.succeed("Got generated components")

      if (theme && !existsTheme) {
        throw new Error(
          [
            `No ${c.yellow("theme")} found.`,
            `Please run ${getCommand("theme")}`,
            "to generate it.",
          ].join(" "),
        )
      }

      if (!index && !theme) {
        if (targetName) {
          if (generatedNames.includes(targetName)) {
            componentNames.push(targetName)
          } else {
            throw new Error(
              [
                `No ${c.yellow(targetName)} found in generated components.`,
                `Please run ${getCommand("add")} ${c.green(targetName)}`,
                "to add it.",
              ].join(" "),
            )
          }
        } else {
          componentNames.push(...generatedNames)

          index = true

          if (existsTheme) theme = true
        }
      }

      if (!index && !theme && !componentNames.length) {
        throw new Error(
          [
            "No components found.",
            `Please run ${getCommand("add")} ${c.green("<component>")}`,
            "to add components.",
          ].join(" "),
        )
      }

      const { registries } = await getRegistriesAndFiles(
        componentNames,
        config,
        { concurrent: !sequential, index, theme },
      )
      const changes = await getDiff(
        generatedNames,
        registries,
        config,
        !sequential,
      )
      const hasChanges = Object.keys(changes).length

      console.log("---------------------------------")

      if (!hasChanges) {
        console.log(c.cyan("No updates found."))
      } else {
        if (targetName) {
          printDiff(changes[targetName], detail)
        } else {
          if (index) printDiffFile("index.ts", changes.index?.["index.ts"])
          if (theme) printDiffFiles("theme", changes.theme)

          componentNames.forEach((name) => {
            printDiffFiles(name, changes[name])
          })
        }

        console.log("---------------------------------")

        const { update } = await prompts({
          type: "confirm",
          name: "update",
          initial: true,
          message: c.reset("Do you want to update the files?"),
        })

        if (update) {
          const changeNames = Object.keys(changes)
          const omittedRegistries: DiffRegistries = {
            locale: Object.fromEntries(
              Object.entries(registries.locale).filter(([name]) =>
                changeNames.includes(name),
              ),
            ),
            remote: Object.fromEntries(
              Object.entries(registries.remote).filter(([name]) =>
                changeNames.includes(name),
              ),
            ),
          }
          const conflictMap = await updateFiles(
            generatedNames,
            omittedRegistries,
            config,
            {
              concurrent: !sequential,
            },
          )

          if (Object.keys(conflictMap).length) {
            console.log("---------------------------------")
            spinner.warn(
              "There are conflicts. Please check the following files:",
            )

            printConflicts(conflictMap, config)
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
