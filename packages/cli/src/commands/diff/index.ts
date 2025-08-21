import boxen from "boxen"
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
import { getComponentData } from "./get-component-data"
import { getComponentDiff } from "./get-component-diff"
import { printCount, printDiff } from "./print-diff"

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

      const { data, registries } = await getComponentData(
        componentNames,
        config,
        { concurrent: !sequential, index, theme },
      )
      const changes = await getComponentDiff(
        generatedNames,
        data,
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
          const diff = changes[targetName]

          if (!diff) return

          Object.entries(diff).forEach(([fileName, diff], index) => {
            if (!!index) console.log("")

            console.log(`- ${c.cyan(fileName)}`)

            console.log("")

            diff.forEach(({ added, removed, value }) => {
              if (added) {
                return process.stdout.write(c.green(value))
              } else if (removed) {
                return process.stdout.write(c.red(value))
              } else {
                if (detail) return process.stdout.write(value)
              }
            })
          })
        } else {
          if (index) {
            const diff = changes.index

            if (!diff) return

            printCount("index.ts", diff["index.ts"], "")
          }

          if (theme) printDiff("theme", changes.theme)

          componentNames.forEach((name) => {
            printDiff(name, changes[name])
          })

          console.log("")
          console.log(
            boxen(
              [
                "Run",
                getCommand("diff"),
                c.green("<component>"),
                "to see the changes.",
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
