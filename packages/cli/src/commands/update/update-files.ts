import type { ListrTask } from "listr2"
import type { Config } from "../../index.type"
import type { DiffRegistries } from "../diff/get-registries-and-files"
import { merge } from "@yamada-ui/utils"
import { execa, ExecaError } from "execa"
import { mkdtemp, writeFile } from "fs/promises"
import { Listr } from "listr2"
import { tmpdir } from "os"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { rimraf } from "rimraf"
import {
  installDependencies,
  splitVersion,
  transformContent,
  uninstallDependencies,
  writeFileSafe,
} from "../../utils"
import {
  generateContent,
  generateIndexContent,
  getFilePath,
} from "../diff/get-diff"

async function mergeContent(
  remoteFilePath: string,
  localeFilePath: string,
  currentFilePath: string,
  fallback: string,
) {
  let content = ""
  let conflict = false

  try {
    const { stdout } = await execa("diff3", [
      "-m",
      remoteFilePath,
      localeFilePath,
      currentFilePath,
    ])

    content = stdout
  } catch (e) {
    if (e instanceof ExecaError) {
      conflict = true
      content = (e.stdout as string | undefined) || fallback
    }
  }

  content = content.replaceAll(remoteFilePath, "remote")
  content = content.replaceAll(localeFilePath, "locale")
  content = content.replaceAll(currentFilePath, "current")
  content = content.replace(/\|\|\|\|\|\|\|[\s\S]*?=======/g, "=======")

  return { conflict, content }
}

export interface UpdateFilesOptions {
  concurrent?: boolean
  install?: boolean
}

export async function updateFiles(
  generatedNames: string[],
  { locale, remote }: DiffRegistries,
  config: Config,
  { concurrent = true, install = false }: UpdateFilesOptions = {},
) {
  const notInstalledDependencies: string[] = []
  const shouldUninstallDependencies: string[] = []

  const tasks = new Listr(
    Object.entries(remote).map(
      ([name, { dependencies, section, sources }]) =>
        ({
          task: async (_, task) => {
            const tempDirPath = await mkdtemp(
              path.join(tmpdir(), `yamada-ui-${name}-`),
            )
            const localeRegistry = locale[name]!

            if (dependencies || localeRegistry.dependencies) {
              const add =
                dependencies?.externals.filter(
                  (name) =>
                    !localeRegistry.dependencies?.externals.includes(name),
                ) ?? []
              const remove =
                localeRegistry.dependencies?.externals.filter(
                  (name) => !dependencies?.externals.includes(name),
                ) ?? []

              notInstalledDependencies.push(...add)
              shouldUninstallDependencies.push(...remove)
            }

            try {
              if (name === "index") {
                const [source] = sources
                const fileName = source!.name
                const remoteFilePath = path.join(
                  tempDirPath,
                  `remote-${fileName}`,
                )
                const localeFilePath = path.join(
                  tempDirPath,
                  `locale-${fileName}`,
                )
                const [remoteContent, localeContent] = await Promise.all([
                  generateIndexContent(
                    sources[0]!.content!,
                    config,
                    generatedNames,
                  ),
                  generateIndexContent(
                    localeRegistry.sources[0]!.content!,
                    config,
                    generatedNames,
                  ),
                ])

                await Promise.all([
                  writeFile(remoteFilePath, remoteContent),
                  writeFile(localeFilePath, localeContent),
                ])

                const { conflict, content: mergedContent } = await mergeContent(
                  remoteFilePath,
                  localeFilePath,
                  config.indexPath,
                  remoteContent,
                )

                await writeFileSafe(
                  config.indexPath,
                  mergedContent,
                  conflict
                    ? merge(config, {
                        format: { enabled: false },
                        lint: { enabled: false },
                      })
                    : config,
                )
              } else {
                await Promise.all(
                  sources.map(async ({ name: fileName, content }) => {
                    const source = localeRegistry.sources.find(
                      ({ name }) => name === fileName,
                    )

                    if (content) {
                      const currentFilePath = getFilePath(
                        section,
                        name,
                        fileName,
                        config,
                      )
                      const remoteFilePath = path.join(
                        tempDirPath,
                        `remote-${fileName}`,
                      )
                      const localeFilePath = path.join(
                        tempDirPath,
                        `locale-${fileName}`,
                      )

                      if (source) {
                        const [remoteContent, localeContent] =
                          await Promise.all([
                            generateContent(
                              currentFilePath,
                              section,
                              content,
                              config,
                              generatedNames,
                            ),
                            generateContent(
                              currentFilePath,
                              section,
                              source.content!,
                              config,
                              generatedNames,
                            ),
                          ])

                        await Promise.all([
                          writeFile(remoteFilePath, remoteContent),
                          writeFile(localeFilePath, localeContent),
                        ])

                        const { conflict, content: mergedContent } =
                          await mergeContent(
                            remoteFilePath,
                            localeFilePath,
                            currentFilePath,
                            remoteContent,
                          )

                        await writeFileSafe(
                          currentFilePath,
                          mergedContent,
                          conflict
                            ? merge(config, {
                                format: { enabled: false },
                                lint: { enabled: false },
                              })
                            : config,
                        )
                      } else {
                        const remoteContent = transformContent(
                          section,
                          content,
                          config,
                          generatedNames,
                        )

                        await writeFileSafe(
                          currentFilePath,
                          remoteContent,
                          config,
                        )
                      }
                    } else {
                      // TODO: Add template file
                    }
                  }),
                )
              }
            } catch (e) {
              console.log(e)
            } finally {
              await rimraf(tempDirPath)
            }

            task.title = `Changed ${c.cyan(name)}`
          },
          title: `Changing ${c.cyan(name)}`,
        }) satisfies ListrTask,
    ),
    { concurrent },
  )

  await tasks.run()

  if (
    !install &&
    (notInstalledDependencies.length || shouldUninstallDependencies.length)
  ) {
    const { install } = await prompts({
      type: "confirm",
      name: "install",
      initial: true,
      message: c.reset(
        "There are dependency updates. Do you want to install them?",
      ),
    })

    if (!install) return
  }

  const cwd = config.monorepo ? config.rootPath : config.cwd

  if (shouldUninstallDependencies.length)
    await uninstallDependencies(
      shouldUninstallDependencies.map((value) => splitVersion(value)[0]!),
      { cwd },
    )

  if (notInstalledDependencies.length)
    await installDependencies(notInstalledDependencies, { cwd })
}
