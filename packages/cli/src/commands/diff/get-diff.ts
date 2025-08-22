import type { ChangeObject } from "diff"
import type { ListrTask } from "listr2"
import type { Config, RegistrySection } from "../../index.type"
import type { DiffRegistries } from "./get-registries-and-files"
import { diffLines } from "diff"
import { Listr } from "listr2"
import path from "path"
import c from "picocolors"
import {
  formatText,
  lintText,
  replaceIndex,
  transformContent,
} from "../../utils"

export interface Diff {
  [key: string]: ChangeObject<string>[]
}

export interface Changes {
  [key: string]: Diff
}

export async function generateIndexContent(
  content: string,
  config: Config,
  generatedNames: string[],
) {
  const { cwd, format, lint } = config

  content = replaceIndex(generatedNames, content, config)
  content = await lintText(content, {
    ...lint,
    cwd,
    filePath: config.indexPath,
  })
  content = await formatText(content, format)

  return content
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

export async function generateContent(
  filePath: string,
  section: RegistrySection,
  content: string,
  config: Config,
  generatedNames: string[],
) {
  const { cwd, format, lint } = config

  content = transformContent(section, content, config, generatedNames)
  content = await lintText(content, {
    ...lint,
    cwd,
    filePath,
  })
  content = await formatText(content, format)

  return content
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
      ([name, { section, sources }]) =>
        ({
          task: async (_, task) => {
            const localeRegistry = locale[name]!

            if (name === "index") {
              const [source] = sources

              const fileName = source!.name
              const localeContent = localeRegistry.sources[0]!.content!

              const content = await generateIndexContent(
                source!.content!,
                config,
                generatedNames,
              )

              const diff = diffLines(localeContent, content)

              if (diff.length < 2) return

              changes[name] ??= {}
              changes[name][fileName] = diff
            } else {
              await Promise.all(
                sources.map(async ({ name: fileName, content }) => {
                  if (content) {
                    const source = localeRegistry.sources.find(
                      ({ name }) => name === fileName,
                    )

                    if (source) {
                      const localeContent = source.content!
                      const filePath = getFilePath(
                        section,
                        name,
                        fileName,
                        config,
                      )

                      content = await generateContent(
                        filePath,
                        section,
                        content,
                        config,
                        generatedNames,
                      )

                      const diff = diffLines(localeContent, content)

                      if (diff.length < 2) return

                      changes[name] ??= {}
                      changes[name][fileName] = diff
                    } else {
                      changes[name] ??= {}
                      changes[name][fileName] = [
                        {
                          added: true,
                          count: content.length,
                          removed: false,
                          value: content,
                        },
                      ]
                    }
                  } else {
                    // TODO: Add template file
                  }
                }),
              )
            }

            task.title = `Diffed ${c.cyan(name)}`
          },
          title: `Diffing ${c.cyan(name)}`,
        }) satisfies ListrTask,
    ),
    { concurrent },
  )

  await tasks.run()

  return changes
}
