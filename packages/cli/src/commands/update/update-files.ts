import type { ListrTask } from "listr2"
import type { Config } from "../../index.type"
import type { DiffRegistries } from "../diff/get-registries-and-files"
import { merge } from "@yamada-ui/utils"
import { execa, ExecaError } from "execa"
import { mkdtemp } from "fs/promises"
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
  transformContentWithFormatAndLint,
  transformIndexWithFormatAndLint,
  transformTemplateContent,
  uninstallDependencies,
  writeFileSafe,
} from "../../utils"
import { getFilePath } from "../diff/get-diff"

async function mergeContent(
  remotePath: string,
  localePath: string,
  currentPath: string,
  fallback: string,
) {
  let content = ""
  let conflict = false

  try {
    const { stdout } = await execa("diff3", [
      "-m",
      remotePath,
      localePath,
      currentPath,
    ])

    content = stdout
  } catch (e) {
    if (e instanceof ExecaError) {
      if (e.stdout as string | undefined) {
        conflict = true
        content = e.stdout as unknown as string
      } else {
        content = fallback
      }
    }
  }

  content = content.replaceAll(remotePath, "remote")
  content = content.replaceAll(localePath, "locale")
  content = content.replaceAll(currentPath, "current")
  content = content.replace(/\|\|\|\|\|\|\|[\s\S]*?=======/g, "=======")

  return { conflict, content }
}

export interface ConflictMap {
  [key: string]: {
    [key: string]: string
  }
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
  const conflictMap: ConflictMap = {}
  const notInstalledDependencies: string[] = []
  const shouldUninstallDependencies: string[] = []
  const disabledFormatAndLint = {
    format: { enabled: false },
    lint: { enabled: false },
  }

  const tasks = new Listr(
    Object.entries(remote).map(
      ([componentName, { dependencies, section, sources }]) =>
        ({
          task: async (_, task) => {
            const tempDirPath = await mkdtemp(
              path.join(tmpdir(), `yamada-ui-${componentName}-`),
            )
            const localeRegistry = locale[componentName]!

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
              if (componentName === "index") {
                const [source] = sources
                const fileName = source!.name
                const remotePath = path.join(tempDirPath, `remote-${fileName}`)
                const localePath = path.join(tempDirPath, `locale-${fileName}`)
                const [remoteContent, localeContent] = await Promise.all([
                  transformIndexWithFormatAndLint(
                    sources[0]!.content!,
                    config,
                    generatedNames,
                  ),
                  transformIndexWithFormatAndLint(
                    localeRegistry.sources[0]!.content!,
                    config,
                    generatedNames,
                  ),
                ])

                await Promise.all([
                  writeFileSafe(
                    remotePath,
                    remoteContent,
                    disabledFormatAndLint,
                  ),
                  writeFileSafe(
                    localePath,
                    localeContent,
                    disabledFormatAndLint,
                  ),
                ])

                const { conflict, content: mergedContent } = await mergeContent(
                  remotePath,
                  localePath,
                  config.indexPath,
                  remoteContent,
                )

                await writeFileSafe(
                  config.indexPath,
                  mergedContent,
                  conflict ? merge(config, disabledFormatAndLint) : config,
                )

                if (conflict) {
                  conflictMap[componentName] ??= {}
                  conflictMap[componentName][fileName] = config.indexPath
                }
              } else {
                await Promise.all(
                  sources.map(async ({ name, content, data, template }) => {
                    const currentPath = getFilePath(
                      section,
                      componentName,
                      name,
                      config,
                    )
                    const source = localeRegistry.sources.find(
                      (source) => source.name === name,
                    )

                    if (content) {
                      if (source) {
                        const remotePath = path.join(
                          tempDirPath,
                          `remote-${name}`,
                        )
                        const localePath = path.join(
                          tempDirPath,
                          `locale-${name}`,
                        )
                        const [remoteContent, localeContent] =
                          await Promise.all([
                            transformContentWithFormatAndLint(
                              currentPath,
                              section,
                              content,
                              config,
                              generatedNames,
                            ),
                            transformContentWithFormatAndLint(
                              currentPath,
                              section,
                              source.content!,
                              config,
                              generatedNames,
                            ),
                          ])

                        await Promise.all([
                          writeFileSafe(
                            remotePath,
                            remoteContent,
                            disabledFormatAndLint,
                          ),
                          writeFileSafe(
                            localePath,
                            localeContent,
                            disabledFormatAndLint,
                          ),
                        ])

                        const { conflict, content: mergedContent } =
                          await mergeContent(
                            remotePath,
                            localePath,
                            currentPath,
                            remoteContent,
                          )

                        await writeFileSafe(
                          currentPath,
                          mergedContent,
                          conflict
                            ? merge(config, disabledFormatAndLint)
                            : config,
                        )

                        if (conflict) {
                          conflictMap[componentName] ??= {}
                          conflictMap[componentName][name] = currentPath
                        }
                      } else {
                        const remoteContent = transformContent(
                          section,
                          content,
                          config,
                          generatedNames,
                        )

                        await writeFileSafe(currentPath, remoteContent, config)
                      }
                    } else if (template && data) {
                      await Promise.all(
                        data.map(async ({ name: fileName, ...remoteRest }) => {
                          const currentFilePath = path.join(
                            currentPath,
                            fileName,
                          )
                          const localeData = source?.data?.find(
                            ({ name }) => name === fileName,
                          )

                          if (localeData) {
                            if (template === source!.template) return

                            const { name: _name, ...localeRest } = localeData
                            const remotePath = path.join(
                              tempDirPath,
                              `remote-${name}-${fileName}`,
                            )
                            const localePath = path.join(
                              tempDirPath,
                              `locale-${name}-${fileName}`,
                            )
                            const [remoteContent, localeContent] =
                              await Promise.all([
                                transformContentWithFormatAndLint(
                                  currentFilePath,
                                  section,
                                  transformTemplateContent(
                                    template,
                                    remoteRest,
                                  ),
                                  config,
                                  generatedNames,
                                ),
                                transformContentWithFormatAndLint(
                                  currentFilePath,
                                  section,
                                  transformTemplateContent(
                                    source!.template!,
                                    localeRest,
                                  ),
                                  config,
                                  generatedNames,
                                ),
                              ])

                            await Promise.all([
                              writeFileSafe(
                                remotePath,
                                remoteContent,
                                disabledFormatAndLint,
                              ),
                              writeFileSafe(
                                localePath,
                                localeContent,
                                disabledFormatAndLint,
                              ),
                            ])

                            const { conflict, content: mergedContent } =
                              await mergeContent(
                                remotePath,
                                localePath,
                                currentFilePath,
                                remoteContent,
                              )

                            await writeFileSafe(
                              currentFilePath,
                              mergedContent,
                              conflict
                                ? merge(config, disabledFormatAndLint)
                                : config,
                            )

                            if (conflict) {
                              conflictMap[componentName] ??= {}
                              conflictMap[componentName][
                                `${name}/${fileName}`
                              ] = currentFilePath
                            }
                          } else {
                            const remoteContent = transformContent(
                              section,
                              transformTemplateContent(template, remoteRest),
                              config,
                              generatedNames,
                            )

                            await writeFileSafe(
                              currentFilePath,
                              remoteContent,
                              config,
                            )
                          }
                        }),
                      )
                    }
                  }),
                )
              }
            } catch {
            } finally {
              await rimraf(tempDirPath)
            }

            task.title = `Changed ${c.cyan(componentName)}`
          },
          title: `Changing ${c.cyan(componentName)}`,
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

    if (!install) return conflictMap
  }

  const cwd = config.monorepo ? config.rootPath : config.cwd

  if (shouldUninstallDependencies.length)
    await uninstallDependencies(
      shouldUninstallDependencies.map((value) => splitVersion(value)[0]!),
      { cwd },
    )

  if (notInstalledDependencies.length)
    await installDependencies(notInstalledDependencies, { cwd })

  return conflictMap
}
