import type { ChangeObject } from "diff"
import type { ListrTask } from "listr2"
import type {
  Config,
  PackageNameWithVersion,
  RegistrySection,
} from "../../index.type"
import type { RegistryMap } from "./get-registries-and-files"
import { isUndefined } from "@yamada-ui/utils"
import { diffLines } from "diff"
import { Listr } from "listr2"
import path from "path"
import c from "picocolors"
import {
  getPackageName,
  isJsx,
  splitVersion,
  transformContent,
  transformContentWithFormatAndLint,
  transformExtension,
  transformIndexWithFormatAndLint,
  transformTemplateContent,
  transformTsToJs,
  transformTsxToJsx,
} from "../../utils"

export type Diff = ChangeObject<string>[]

export interface Changes {
  [key: string]:
    | { diff: Diff; local: string; remote: string }
    | { diff: Diff; local: string }
    | { diff: Diff; remote: string }
}

export interface ChangeMap {
  [key: string]: Changes
}

export interface DependencyMap {
  add: string[]
  remove: string[]
  update: Exclude<PackageNameWithVersion, string>[]
}

export function getDirPath(
  section: RegistrySection,
  name: string,
  config: Config,
) {
  return config.isSection(section)
    ? path.join(config.getSectionResolvedPath(section), name)
    : config.paths[section === "theme" ? "theme" : "ui"].src
}

export async function getDiff(
  generatedNames: string[],
  { local, remote }: RegistryMap,
  config: Config,
  concurrent = true,
) {
  const changeMap: ChangeMap = {}
  const dependencyMap: DependencyMap = { add: [], remove: [], update: [] }

  const tasks = new Listr(
    Object.entries(remote).map(
      ([componentName, { dependencies, section, sources }]) =>
        ({
          task: async (_, task) => {
            const localRegistry = local[componentName]!

            if (componentName === "index") {
              const [source] = sources

              const fileName = transformExtension(source!.name, config.jsx)
              const [remote, local] = await Promise.all([
                transformIndexWithFormatAndLint(
                  source!.content!,
                  config,
                  generatedNames,
                ),
                transformIndexWithFormatAndLint(
                  localRegistry.sources[0]!.content!,
                  config,
                  generatedNames,
                ),
              ])
              const diff = diffLines(local, remote)

              if (diff.length < 2) return

              changeMap[componentName] ??= {}
              changeMap[componentName][fileName] = {
                diff,
                local,
                remote,
              }
            } else {
              const dirPath = getDirPath(section, componentName, config)

              if (dependencies || localRegistry.dependencies) {
                const remoteDependencies = dependencies?.externals ?? []
                const localDependencies =
                  localRegistry.dependencies?.externals ?? []
                const remotePackageNames =
                  remoteDependencies.map(getPackageName)
                const localPackageNames = localDependencies.map(getPackageName)
                const add = remotePackageNames.filter(
                  (name) => !localPackageNames.includes(name),
                )
                const remove = localPackageNames.filter(
                  (name) => !remotePackageNames.includes(name),
                )
                const update = localDependencies
                  .map((name) => {
                    const [packageName, current] = splitVersion(name)
                    const remoteDependency = remoteDependencies.find(
                      (name) => getPackageName(name) === packageName,
                    )
                    if (!remoteDependency) return

                    const [, wanted] = splitVersion(remoteDependency)

                    if (current === wanted) return

                    return { name: packageName, current, wanted: wanted! }
                  })
                  .filter((data) => !isUndefined(data))

                dependencyMap.add.push(...add)
                dependencyMap.remove.push(...remove)
                dependencyMap.update.push(...update)
              }

              await Promise.all(
                sources.map(async ({ name, content, data, template }) => {
                  const source = localRegistry.sources.find(
                    (source) => source.name === name,
                  )

                  name = transformExtension(name, config.jsx)

                  const targetPath = path.join(dirPath, name)

                  if (content) {
                    if (source) {
                      const [remote, local] = await Promise.all([
                        transformContentWithFormatAndLint(
                          targetPath,
                          section,
                          content,
                          config,
                          generatedNames,
                        ),
                        transformContentWithFormatAndLint(
                          targetPath,
                          section,
                          source.content!,
                          config,
                          generatedNames,
                        ),
                      ])
                      const diff = diffLines(local, remote)

                      if (diff.length < 2) return

                      changeMap[componentName] ??= {}
                      changeMap[componentName][name] = {
                        diff,
                        local,
                        remote,
                      }
                    } else {
                      let remote = transformContent(
                        section,
                        content,
                        config,
                        generatedNames,
                      )

                      if (config.jsx)
                        remote = isJsx(name)
                          ? transformTsxToJsx(remote)
                          : transformTsToJs(remote)

                      const diff: Diff = [
                        {
                          added: true,
                          count: remote.length,
                          removed: false,
                          value: remote,
                        },
                      ]

                      changeMap[componentName] ??= {}
                      changeMap[componentName][name] = { diff, remote }
                    }
                  } else if (template && data) {
                    await Promise.all(
                      data.map(async ({ name: fileName, ...remoteRest }) => {
                        const localData = source?.data?.find(
                          ({ name }) => name === fileName,
                        )

                        fileName = transformExtension(fileName, config.jsx)

                        if (localData) {
                          if (template === source?.template) return

                          const { name: _name, ...localRest } = localData
                          const [remote, local] = await Promise.all([
                            transformContentWithFormatAndLint(
                              path.join(targetPath, fileName),
                              section,
                              transformTemplateContent(template, remoteRest),
                              config,
                              generatedNames,
                            ),
                            transformContentWithFormatAndLint(
                              path.join(targetPath, fileName),
                              section,
                              transformTemplateContent(
                                source!.template!,
                                localRest,
                              ),
                              config,
                              generatedNames,
                            ),
                          ])
                          const diff = diffLines(local, remote)

                          if (diff.length < 2) return

                          changeMap[componentName] ??= {}
                          changeMap[componentName][`${name}/${fileName}`] = {
                            diff,
                            local,
                            remote,
                          }
                        } else {
                          let remote = transformContent(
                            section,
                            transformTemplateContent(template, remoteRest),
                            config,
                            generatedNames,
                          )

                          if (config.jsx)
                            remote = isJsx(fileName)
                              ? transformTsxToJsx(remote)
                              : transformTsToJs(remote)

                          const diff: Diff = [
                            {
                              added: true,
                              count: remote.length,
                              removed: false,
                              value: remote,
                            },
                          ]

                          changeMap[componentName] ??= {}
                          changeMap[componentName][`${name}/${fileName}`] = {
                            diff,
                            remote,
                          }
                        }
                      }),
                    )
                  }
                }),
              )

              const removeSources = localRegistry.sources.filter(
                ({ name }) => !sources.some((source) => source.name === name),
              )

              removeSources.forEach(({ name, content, data, template }) => {
                if (content) {
                  let local = transformContent(
                    section,
                    content,
                    config,
                    generatedNames,
                  )

                  if (config.jsx)
                    local = isJsx(name)
                      ? transformTsxToJsx(local)
                      : transformTsToJs(local)

                  const diff: Diff = [
                    {
                      added: false,
                      count: local.length,
                      removed: true,
                      value: local,
                    },
                  ]

                  changeMap[componentName] ??= {}
                  changeMap[componentName][name] = { diff, local }
                } else if (template && data) {
                  data.forEach(({ name: fileName, ...remoteRest }) => {
                    let local = transformContent(
                      section,
                      transformTemplateContent(template, remoteRest),
                      config,
                      generatedNames,
                    )

                    if (config.jsx)
                      local = isJsx(fileName)
                        ? transformTsxToJsx(local)
                        : transformTsToJs(local)

                    const diff: Diff = [
                      {
                        added: true,
                        count: local.length,
                        removed: false,
                        value: local,
                      },
                    ]

                    changeMap[componentName] ??= {}
                    changeMap[componentName][`${name}/${fileName}`] = {
                      diff,
                      local,
                    }
                  })
                }
              })
            }

            task.title = `Checked ${c.cyan(componentName)}`
          },
          title: `Checking ${c.cyan(componentName)}`,
        }) satisfies ListrTask,
    ),
    { concurrent },
  )

  await tasks.run()

  return { changeMap, dependencyMap }
}
