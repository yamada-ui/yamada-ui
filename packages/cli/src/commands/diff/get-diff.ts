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
    | { diff: Diff; locale: string; remote: string }
    | { diff: Diff; locale: string }
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
    : section === "theme"
      ? config.theme!.path!
      : config.srcPath
}

export async function getDiff(
  generatedNames: string[],
  { locale, remote }: RegistryMap,
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
            const localeRegistry = locale[componentName]!

            if (componentName === "index") {
              const [source] = sources

              const fileName = transformExtension(source!.name, config.jsx)
              const [remote, locale] = await Promise.all([
                transformIndexWithFormatAndLint(
                  source!.content!,
                  config,
                  generatedNames,
                ),
                transformIndexWithFormatAndLint(
                  localeRegistry.sources[0]!.content!,
                  config,
                  generatedNames,
                ),
              ])
              const diff = diffLines(locale, remote)

              if (diff.length < 2) return

              changeMap[componentName] ??= {}
              changeMap[componentName][fileName] = {
                diff,
                locale,
                remote,
              }
            } else {
              const dirPath = getDirPath(section, componentName, config)

              if (dependencies || localeRegistry.dependencies) {
                const remoteDependencies = dependencies?.externals ?? []
                const localeDependencies =
                  localeRegistry.dependencies?.externals ?? []
                const remotePackageNames =
                  remoteDependencies.map(getPackageName)
                const localePackageNames =
                  localeDependencies.map(getPackageName)
                const add = remotePackageNames.filter(
                  (name) => !localePackageNames.includes(name),
                )
                const remove = localePackageNames.filter(
                  (name) => !remotePackageNames.includes(name),
                )
                const update = localeDependencies
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
                  const source = localeRegistry.sources.find(
                    (source) => source.name === name,
                  )

                  name = transformExtension(name, config.jsx)

                  const targetPath = path.join(dirPath, name)

                  if (content) {
                    if (source) {
                      const [remote, locale] = await Promise.all([
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
                      const diff = diffLines(locale, remote)

                      if (diff.length < 2) return

                      changeMap[componentName] ??= {}
                      changeMap[componentName][name] = {
                        diff,
                        locale,
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
                        const localeData = source?.data?.find(
                          ({ name }) => name === fileName,
                        )

                        fileName = transformExtension(fileName, config.jsx)

                        if (localeData) {
                          if (template === source?.template) return

                          const { name: _name, ...localeRest } = localeData
                          const [remote, locale] = await Promise.all([
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
                                localeRest,
                              ),
                              config,
                              generatedNames,
                            ),
                          ])
                          const diff = diffLines(locale, remote)

                          if (diff.length < 2) return

                          changeMap[componentName] ??= {}
                          changeMap[componentName][`${name}/${fileName}`] = {
                            diff,
                            locale,
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

              const removeSources = localeRegistry.sources.filter(
                ({ name }) => !sources.some((source) => source.name === name),
              )

              removeSources.forEach(({ name, content, data, template }) => {
                if (content) {
                  let locale = transformContent(
                    section,
                    content,
                    config,
                    generatedNames,
                  )

                  if (config.jsx)
                    locale = isJsx(name)
                      ? transformTsxToJsx(locale)
                      : transformTsToJs(locale)

                  const diff: Diff = [
                    {
                      added: false,
                      count: locale.length,
                      removed: true,
                      value: locale,
                    },
                  ]

                  changeMap[componentName] ??= {}
                  changeMap[componentName][name] = { diff, locale }
                } else if (template && data) {
                  data.forEach(({ name: fileName, ...remoteRest }) => {
                    let locale = transformContent(
                      section,
                      transformTemplateContent(template, remoteRest),
                      config,
                      generatedNames,
                    )

                    if (config.jsx)
                      locale = isJsx(fileName)
                        ? transformTsxToJsx(locale)
                        : transformTsToJs(locale)

                    const diff: Diff = [
                      {
                        added: true,
                        count: locale.length,
                        removed: false,
                        value: locale,
                      },
                    ]

                    changeMap[componentName] ??= {}
                    changeMap[componentName][`${name}/${fileName}`] = {
                      diff,
                      locale,
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
