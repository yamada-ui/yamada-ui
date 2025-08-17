import type { ChangeObject } from "diff"
import type { ListrTask } from "listr2"
import type { Config, Registries } from "../../index.type"
import boxen from "boxen"
import { Command } from "commander"
import { diffLines } from "diff"
import { Listr } from "listr2"
import ora from "ora"
import c from "picocolors"
import packageJson from "../../../package.json"
import { CONFIG_FILE_NAME } from "../../constant"
import {
  fetchRegistry,
  format,
  getComponentFiles,
  getConfig,
  getGeneratedNameMap,
  getPackageManager,
  packageExecuteCommands,
  timer,
  transformContent,
  validateDir,
} from "../../utils"

interface data {
  [key: string]: { [key: string]: string }
}

interface Changes {
  [key: string]: {
    [key: string]: ChangeObject<string>[]
  }
}

async function getData(componentNames: string[], config: Config) {
  const data: { [key: string]: { [key: string]: string } } = {}
  const registries: Registries = {}
  const tasks = new Listr(
    [
      ...componentNames.map(
        (componentName) =>
          ({
            task: async (_, task) => {
              data[componentName] = await getComponentFiles(
                componentName,
                config,
              )

              task.title = `Got ${c.cyan(componentName)} files`
            },
            title: `Getting ${c.cyan(componentName)} files`,
          }) satisfies ListrTask,
      ),
      ...componentNames.map(
        (componentName) =>
          ({
            task: async (_, task) => {
              registries[componentName] = await fetchRegistry(componentName)

              task.title = `Fetched ${c.cyan(componentName)} registry`
            },
            title: `Fetching ${c.cyan(componentName)} registry`,
          }) satisfies ListrTask,
      ),
    ],
    { concurrent: true },
  )

  await tasks.run()

  return { data, registries }
}

async function getDiff(
  generatedNames: string[],
  data: data,
  registries: Registries,
  config: Config,
) {
  const changes: Changes = {}

  await Promise.all(
    Object.entries(data).map(async ([name, files]) => {
      const registry = registries[name]

      if (!registry) return

      await Promise.all(
        Object.entries(files).map(async ([fileName, file]) => {
          const registryFile = registry.sources.find(
            ({ name }) => name === fileName,
          )

          if (!registryFile?.content) return

          const content = await format(
            transformContent(
              registry.section,
              registryFile.content,
              config,
              generatedNames,
            ),
          )

          const diff = diffLines(file, content)

          if (diff.length < 2) return

          changes[name] ??= {}
          changes[name][fileName] = diff
        }),
      )
    }),
  )

  return changes
}

interface Options {
  config: string
  cwd: string
  detail: boolean
}

export const diff = new Command("diff")
  .description("Check for updates against the registry")
  .argument("[component]", "Component to check")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .option("-c, --config <path>", "Path to the config file", CONFIG_FILE_NAME)
  .option("-d, --detail", "Show detailed changes", false)
  .action(async function (
    componentName: string | undefined,
    { config: configPath, cwd, detail = false }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      const packageManager = getPackageManager()
      const { args, command } = packageExecuteCommands(packageManager)
      const prefix = `${command}${args.length ? ` ${args.join(" ")}` : ""}`
      const addCommand = c.cyan(`${prefix} ${packageJson.name}@latest add`)
      const diffCommand = c.cyan(`${prefix} ${packageJson.name}@latest diff`)

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath)

      spinner.succeed("Fetched config")

      const componentNames: string[] = []

      spinner.start("Getting generated components")

      const generatedNameMap = await getGeneratedNameMap(config)
      const generatedNames = Object.values(generatedNameMap).flat()

      spinner.succeed("Got generated components")

      if (componentName) {
        if (generatedNames.includes(componentName)) {
          componentNames.push(componentName)
        } else {
          throw new Error(
            [
              `No ${c.yellow(componentName)} found in generated components.`,
              `Please run ${addCommand} ${c.green(componentName)}`,
              "to add it.",
            ].join(" "),
          )
        }
      } else {
        componentNames.push(...generatedNames)
      }

      if (!componentNames.length) {
        throw new Error(
          [
            "No components found.",
            `Please run ${addCommand} ${c.green("<component>")}`,
            "to add components.",
          ].join(" "),
        )
      }

      const { data, registries } = await getData(componentNames, config)
      const changes = await getDiff(generatedNames, data, registries, config)
      const hasChanges = Object.keys(changes).length

      console.log("---------------------------------")

      if (!hasChanges) {
        console.log(c.cyan("No updates found."))
      } else {
        if (componentName) {
          const diff = changes[componentName]

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
          componentNames.forEach((name) => {
            const diff = changes[name]

            if (!diff) return

            console.log(`- ${name}`)

            Object.entries(diff).forEach(([fileName, diff]) => {
              const added = diff.reduce((prev, { added, count }) => {
                if (added) return prev + count

                return prev
              }, 0)
              const removed = diff.reduce((prev, { count, removed }) => {
                if (removed) return prev + count

                return prev
              }, 0)

              console.log(
                `  - ${c.cyan(fileName)} ${c.green(added)} insertions ${c.red(removed)} deletions`,
              )
            })
          })

          console.log("")
          console.log(
            boxen(
              [
                "Run",
                c.cyan(diffCommand),
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
