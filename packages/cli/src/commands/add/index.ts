import type { ListrTask } from "listr2"
import type { Section } from "../../index.type"
import { isObject, isUndefined } from "@yamada-ui/utils"
import { Command } from "commander"
import { existsSync } from "fs"
import { readdir, readFile } from "fs/promises"
import { Listr } from "listr2"
import ora from "ora"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { CONFIG_FILE_NAME, REGISTRY_FILE_NAME } from "../../constant"
import {
  cwd,
  fetchRegistries,
  fetchRegistry,
  fetchRegistryNames,
  generateSources,
  getConfig,
  getGeneratedNameMap,
  getNotInstalledDependencies,
  getPackageJson,
  getPackageName,
  installDependencies,
  timer,
  transformContent,
  transformIndex,
  validateDir,
  writeFileSafe,
} from "../../utils"

interface Options {
  config: string
  cwd: string
  install: boolean
  overwrite: boolean
  sequential: boolean
  format?: boolean
  lint?: boolean
}

export const add = new Command("add")
  .description("add a component to your project")
  .argument("[components...]", "components to add")
  .option("--cwd <path>", "current working directory", cwd)
  .option("-c, --config <path>", "path to the config file", CONFIG_FILE_NAME)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option("-i, --install", "install dependencies", false)
  .option("-s, --sequential", "run tasks sequentially.", false)
  .option("-f, --format", "format the output files.")
  .option("-l, --lint", "lint the output files.")
  .action(async function (
    componentNames: string[],
    {
      config: configPath,
      cwd,
      format,
      install,
      lint,
      overwrite,
      sequential,
    }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath, { format, lint })

      spinner.succeed("Fetched config")

      let generatedNameMap: undefined | { [key in Section]: string[] }

      const omittedGeneratedNames: string[] = []

      if (!componentNames.length) {
        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          initial: true,
          message: c.reset(`Add all available components?`),
        })

        if (!proceed) process.exit(0)

        if (!overwrite && existsSync(config.srcPath)) {
          const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            initial: false,
            message: c.reset(
              `The directory already exists. Do you want to overwrite it?`,
            ),
          })

          if (!overwrite) process.exit(0)
        }

        spinner.start("Fetching all available components")

        componentNames = await fetchRegistryNames()

        spinner.succeed("Fetched all available components")
      } else {
        spinner.start("Getting generated components")

        generatedNameMap = await getGeneratedNameMap(config)

        const generatedNames = Object.values(generatedNameMap).flat()
        const existsNames = componentNames.filter((name) =>
          generatedNames.includes(name),
        )

        spinner.succeed("Got generated components")

        if (!overwrite && existsNames.length) {
          const colorizedNames = existsNames.map((name) => c.yellow(name))

          const { overwrite } = await prompts({
            type: "confirm",
            name: "overwrite",
            initial: false,
            message: c.reset(
              [
                `The ${colorizedNames.join(", ")} components already exist.`,
                "Do you want to overwrite them?",
              ].join(" "),
            ),
          })

          if (!overwrite) process.exit(0)
        }

        omittedGeneratedNames.push(
          ...generatedNames.filter((name) => !componentNames.includes(name)),
        )
      }

      spinner.start("Fetching registries")

      const registries = await fetchRegistries(componentNames, config, {
        dependencies: !!componentNames.length,
        dependents: !!componentNames.length,
        omit: omittedGeneratedNames,
      })
      const registryNames = Object.keys(registries)
      const dependencies = [
        ...new Set(
          Object.values(registries)
            .map(({ dependencies }) => dependencies?.externals)
            .filter((dependencies) => !isUndefined(dependencies))
            .flat(),
        ),
      ]
      const affectedNames = [
        ...new Set(
          Object.values(registries)
            .map(({ dependents }) => [
              ...(dependents?.components ?? []),
              ...(dependents?.hooks ?? []),
              ...(dependents?.providers ?? []),
            ])
            .flat()
            .filter((dependent) => omittedGeneratedNames.includes(dependent)),
        ),
      ]

      spinner.succeed("Fetched registries")

      if (componentNames.length !== registryNames.length) {
        const colorizedNames = registryNames.map((name) => c.yellow(name))

        const { proceed } = await prompts({
          type: "confirm",
          name: "proceed",
          initial: true,
          message: c.reset(
            `The following components will be added: ${colorizedNames.join(", ")}. Do you want to add them?`,
          ),
        })

        if (!proceed) process.exit(0)
      }

      const targetNames = [
        ...new Set([...omittedGeneratedNames, ...registryNames]),
      ]

      const tasks = new Listr(
        Object.entries(registries)
          .map(([name, registry]): ListrTask | undefined => {
            if (!config.isSection(registry.section)) return

            const sectionPath = config.getSectionAbsolutePath(registry.section)
            const dirPath = path.join(sectionPath, name)

            return {
              task: async (_, task) => {
                await generateSources(dirPath, registry, config, targetNames)

                task.title = `Generated ${c.cyan(name)}`
              },
              title: `Generating ${c.cyan(name)}`,
            }
          })
          .filter((task) => !isUndefined(task)),
        { concurrent: !sequential },
      )

      if (affectedNames.length && generatedNameMap) {
        if (!overwrite) {
          const colorizedNames = affectedNames.map((name) => c.yellow(name))

          const { update } = await prompts({
            type: "confirm",
            name: "update",
            initial: true,
            message: c.reset(
              [
                `The following generated files will be updated: ${colorizedNames.join(", ")}.`,
                "Do you want to update them?",
              ].join(" "),
            ),
          })

          if (update) overwrite = update
        }

        if (overwrite) {
          Object.entries(generatedNameMap).forEach(([section, names]) => {
            names.forEach((name) => {
              if (!affectedNames.includes(name)) return

              tasks.add({
                task: async (_, task) => {
                  const sectionPath = config.getSectionAbsolutePath(
                    section as Section,
                  )
                  const dirPath = path.join(sectionPath, name)
                  const dirents = await readdir(dirPath, {
                    withFileTypes: true,
                  })

                  await Promise.all(
                    dirents.map(async (dirent) => {
                      if (dirent.isDirectory()) {
                        const dirents = await readdir(
                          path.join(dirent.parentPath, name),
                          {
                            withFileTypes: true,
                          },
                        )

                        await Promise.all(
                          dirents.map(async (dirent) => {
                            if (dirent.isDirectory()) return
                            if (dirent.name === REGISTRY_FILE_NAME) return

                            const targetPath = path.join(
                              dirent.parentPath,
                              dirent.name,
                            )
                            const data = await readFile(targetPath, "utf-8")
                            const content = transformContent(
                              section as Section,
                              data,
                              config,
                              targetNames,
                            )

                            await writeFileSafe(targetPath, content, config)
                          }),
                        )
                      } else if (dirent.name !== REGISTRY_FILE_NAME) {
                        const targetPath = path.join(
                          dirent.parentPath,
                          dirent.name,
                        )
                        const data = await readFile(targetPath, "utf-8")
                        const content = transformContent(
                          section as Section,
                          data,
                          config,
                          targetNames,
                        )

                        await writeFileSafe(targetPath, content, config)
                      }
                    }),
                  )

                  task.title = `Updated ${c.cyan(name)}`
                },
                title: `Updating ${c.cyan(name)}`,
              })
            })
          })
        }
      }

      if (existsSync(config.indexPath)) {
        tasks.add({
          task: async (_, task) => {
            const content = transformIndex(
              targetNames,
              await readFile(config.indexPath, "utf-8"),
              config,
            )

            await writeFileSafe(config.indexPath, content, config)

            task.title = `Updated ${c.cyan("index.ts")}`
          },
          title: `Updating ${c.cyan("index.ts")}`,
        })
      } else {
        tasks.add({
          task: async (_, task) => {
            const {
              sources: [source],
            } = await fetchRegistry("index")
            const content = transformIndex(
              targetNames,
              source!.content!,
              config,
            )

            await writeFileSafe(config.indexPath, content, config)

            task.title = `Generated ${c.cyan("index.ts")}`
          },
          title: `Generating ${c.cyan("index.ts")}`,
        })
      }

      if (dependencies.length) {
        const targetPath = config.monorepo ? config.rootPath : cwd

        spinner.start(`Checking ${c.cyan("package.json")} dependencies`)

        const packageJson = await getPackageJson(targetPath)
        const notInstalledDependencies = getNotInstalledDependencies(
          packageJson,
          dependencies,
        )

        spinner.succeed(`Checked ${c.cyan("package.json")} dependencies`)

        if (!install && notInstalledDependencies.length) {
          const colorizedNames = notInstalledDependencies.map((value) =>
            c.yellow(
              isObject(value)
                ? value.current
                  ? `${value.name}@${value.current}->${c.red(value.wanted)}`
                  : value.name
                : value,
            ),
          )

          const { proceed } = await prompts({
            type: "confirm",
            name: "proceed",
            initial: true,
            message: c.reset(
              [
                `The following dependencies are not installed: ${colorizedNames.join(", ")}.`,
                "Do you want to install them?",
              ].join(" "),
            ),
          })

          install = proceed
        }

        if (install) {
          tasks.add({
            task: async (_, task) => {
              await installDependencies(
                notInstalledDependencies.map(getPackageName),
                { cwd: targetPath },
              )

              task.title = "Installed dependencies"
            },
            title: "Installing dependencies",
          })
        }
      }

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
