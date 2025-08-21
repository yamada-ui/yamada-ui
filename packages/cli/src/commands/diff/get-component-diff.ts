import type { ChangeObject } from "diff"
import type { ListrTask } from "listr2"
import type { Config, Registries } from "../../index.type"
import type { Data } from "./get-component-data"
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

export async function getComponentDiff(
  generatedNames: string[],
  data: Data,
  registries: Registries,
  config: Config,
  concurrent = true,
) {
  const { cwd, format, lint } = config
  const changes: Changes = {}

  const tasks = new Listr(
    Object.entries(registries).map(
      ([name, { section, sources }]) =>
        ({
          task: async (_, task) => {
            const files = data[name]

            if (name === "index") {
              const [source] = sources

              if (!source) return

              const fileName = source.name
              const file = files?.[fileName]

              if (!file) return

              let content = source.content!

              content = replaceIndex(generatedNames, source!.content!, config)
              content = await lintText(content, {
                ...lint,
                cwd,
                filePath: config.indexPath,
              })
              content = await formatText(content, format)

              const diff = diffLines(file, content)

              if (diff.length > 1) {
                changes[name] ??= {}
                changes[name][fileName] = diff
              }
            } else {
              await Promise.all(
                sources.map(async ({ name: fileName, content }) => {
                  if (!content) return

                  const file = files?.[fileName]

                  if (file) {
                    const filePath = config.isSection(section)
                      ? path.join(
                          config.getSectionAbsolutePath(section),
                          name,
                          fileName,
                        )
                      : path.join(
                          config.srcPath,
                          section === "theme" ? name : "",
                          fileName,
                        )

                    content = transformContent(
                      section,
                      content,
                      config,
                      generatedNames,
                    )
                    content = await lintText(content, {
                      ...lint,
                      cwd,
                      filePath,
                    })
                    content = await formatText(content, format)

                    const diff = diffLines(file, content)

                    if (diff.length > 1) {
                      changes[name] ??= {}
                      changes[name][fileName] = diff
                    }
                  } else {
                    changes[name] ??= {}
                    // TODO: Add a new file to the changes
                    changes[name][fileName] = []
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
