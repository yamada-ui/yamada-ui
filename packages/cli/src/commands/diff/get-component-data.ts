import type { ListrTask } from "listr2"
import type { Config, Registries } from "../../index.type"
import { readFile } from "fs/promises"
import { Listr } from "listr2"
import path from "path"
import c from "picocolors"
import { fetchRegistry, getFiles } from "../../utils"

export interface Data {
  [key: string]: { [key: string]: string }
}

export interface GetComponentDataOptions {
  concurrent?: boolean
  index?: boolean
  theme?: boolean
}

export async function getComponentData(
  componentNames: string[],
  config: Config,
  {
    concurrent = true,
    index = false,
    theme = false,
  }: GetComponentDataOptions = {},
) {
  const data: Data = {}
  const registries: Registries = {}

  const tasks = new Listr([], { concurrent })

  if (index) {
    tasks.add([
      {
        task: async (_, task) => {
          data.index = { "index.ts": await readFile(config.indexPath, "utf-8") }
          task.title = `Got ${c.cyan("index")} file`
        },
        title: `Getting ${c.cyan("index")} file`,
      },
      {
        task: async (_, task) => {
          registries.index = await fetchRegistry("index")
          task.title = `Fetched ${c.cyan("index")} registry`
        },
        title: `Fetching ${c.cyan("index")} registry`,
      },
    ])
  }

  if (theme) {
    tasks.add([
      {
        task: async (_, task) => {
          if (!config.theme?.path) return

          data.theme = await getFiles(config.theme.path)
          task.title = `Got ${c.cyan("theme")} files`
        },
        title: `Getting ${c.cyan("theme")} files`,
      },
      {
        task: async (_, task) => {
          registries.theme = await fetchRegistry("theme")
          task.title = `Fetched ${c.cyan("theme")} registry`
        },
        title: `Fetching ${c.cyan("theme")} registry`,
      },
    ])
  }

  tasks.add(
    componentNames
      .map(
        (componentName) =>
          [
            {
              task: async (_, task) => {
                data[componentName] = await getFiles(
                  path.join(config.srcPath, "**", componentName),
                )

                task.title = `Got ${c.cyan(componentName)} files`
              },
              title: `Getting ${c.cyan(componentName)} files`,
            },
            {
              task: async (_, task) => {
                registries[componentName] = await fetchRegistry(componentName)

                task.title = `Fetched ${c.cyan(componentName)} registry`
              },
              title: `Fetching ${c.cyan(componentName)} registry`,
            },
          ] satisfies ListrTask[],
      )
      .flat(),
  )

  await tasks.run()

  return { data, registries }
}
