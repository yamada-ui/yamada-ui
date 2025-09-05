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
  transformExtension,
  validateDir,
} from "../../utils"
import { printConflicts } from "../update/print-conflicts"
import { updateFiles } from "../update/update-files"
import { validateDiff3 } from "../update/validate-diff-3"
import { getDiff } from "./get-diff"
import { getRegistriesAndFiles } from "./get-registries-and-files"
import {
  printDiff,
  printDiffDependencies,
  printDiffFile,
  printDiffFiles,
} from "./print-diff"

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

      spinner.start("Validating methods")

      await validateDiff3()

      spinner.succeed("Validated methods")

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
        if (targetName) {
          printDiff(changeMap[targetName], detail)
        } else {
          if (index && changeMap.index) {
            const indexFileName = transformExtension("index.ts", config.jsx)

            printDiffFile(indexFileName, changeMap.index[indexFileName]?.diff)
          }

          if (theme && changeMap.theme) printDiffFiles("theme", changeMap.theme)

          componentNames.forEach((name) => {
            printDiffFiles(name, changeMap[name])
          })
        }

        if (hasDependencyChanges) printDiffDependencies(dependencyMap)

        console.log("---------------------------------")

        const { update } = await prompts({
          type: "confirm",
          name: "update",
          initial: true,
          message: c.reset("Do you want to update the files?"),
        })

        if (update) {
          const conflictMap = await updateFiles(
            changeMap,
            dependencyMap,
            registryMap,
            config,
            { concurrent: !sequential },
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
