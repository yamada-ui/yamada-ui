import type { ChangeObject } from "diff"
import type { ListrTask } from "listr2"
import type { Config, RegistrySection } from "../../index.type"
import type { DiffRegistries } from "./get-registries-and-files"
import { diffLines } from "diff"
import { Listr } from "listr2"
import path from "path"
import c from "picocolors"
import {
  transformContent,
  transformContentWithFormatAndLint,
  transformIndexWithFormatAndLint,
  transformTemplateContent,
} from "../../utils"

export interface Diff {
  [key: string]: ChangeObject<string>[]
}

export interface Changes {
  [key: string]: Diff
}

export function getFilePath(
  section: RegistrySection,
  name: string,
  fileName: string,
  config: Config,
) {
  return config.isSection(section)
    ? path.join(config.getSectionAbsolutePath(section), name, fileName)
    : path.join(config.srcPath, section === "theme" ? name : "", fileName)
}

export async function getDiff(
  generatedNames: string[],
  { locale, remote }: DiffRegistries,
  config: Config,
  concurrent = true,
) {
  const changes: Changes = {}

  const tasks = new Listr(
    Object.entries(remote).map(
      ([componentName, { section, sources }]) =>
        ({
          task: async (_, task) => {
            const localeRegistry = locale[componentName]!

            if (componentName === "index") {
              const [source] = sources

              const fileName = source!.name
              const [remoteContent, localeContent] = await Promise.all([
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
              const diff = diffLines(localeContent, remoteContent)

              if (diff.length < 2) return

              changes[componentName] ??= {}
              changes[componentName][fileName] = diff
            } else {
              await Promise.all(
                sources.map(async ({ name, content, data, template }) => {
                  const filePath = getFilePath(
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
                      const [remoteContent, localeContent] = await Promise.all([
                        transformContentWithFormatAndLint(
                          filePath,
                          section,
                          content,
                          config,
                          generatedNames,
                        ),
                        transformContentWithFormatAndLint(
                          filePath,
                          section,
                          source.content!,
                          config,
                          generatedNames,
                        ),
                      ])
                      const diff = diffLines(localeContent, remoteContent)

                      if (diff.length < 2) return

                      changes[componentName] ??= {}
                      changes[componentName][name] = diff
                    } else {
                      const remoteContent = transformContent(
                        section,
                        content,
                        config,
                        generatedNames,
                      )

                      changes[componentName] ??= {}
                      changes[componentName][name] = [
                        {
                          added: true,
                          count: remoteContent.length,
                          removed: false,
                          value: remoteContent,
                        },
                      ]
                    }
                  } else if (template && data) {
                    await Promise.all(
                      data.map(async ({ name: fileName, ...remoteRest }) => {
                        const localeData = source?.data?.find(
                          ({ name }) => name === fileName,
                        )

                        if (localeData) {
                          if (template === source?.template) return

                          const { name: _name, ...localeRest } = localeData
                          const [remoteContent, localeContent] =
                            await Promise.all([
                              transformContentWithFormatAndLint(
                                path.join(filePath, fileName),
                                section,
                                transformTemplateContent(template, remoteRest),
                                config,
                                generatedNames,
                              ),
                              transformContentWithFormatAndLint(
                                path.join(filePath, fileName),
                                section,
                                transformTemplateContent(
                                  source!.template!,
                                  localeRest,
                                ),
                                config,
                                generatedNames,
                              ),
                            ])
                          const diff = diffLines(localeContent, remoteContent)

                          if (diff.length < 2) return

                          changes[componentName] ??= {}
                          changes[componentName][`${name}/${fileName}`] = diff
                        } else {
                          const remoteContent = transformContent(
                            section,
                            transformTemplateContent(template, remoteRest),
                            config,
                            generatedNames,
                          )

                          changes[componentName] ??= {}
                          changes[componentName][`${name}/${fileName}`] = [
                            {
                              added: true,
                              count: remoteContent.length,
                              removed: false,
                              value: remoteContent,
                            },
                          ]
                        }
                      }),
                    )
                  }
                }),
              )
            }

            task.title = `Checked ${c.cyan(componentName)}`
          },
          title: `Checking ${c.cyan(componentName)}`,
        }) satisfies ListrTask,
    ),
    { concurrent },
  )

  await tasks.run()

  return changes
}
