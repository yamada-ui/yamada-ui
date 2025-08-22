import type { ListrTask } from "listr2"
import type { Config, Registries } from "../../index.type"
import { readFile } from "fs/promises"
import { Listr } from "listr2"
import path from "path"
import c from "picocolors"
import { REGISTRY_FILE_NAME } from "../../constant"
import { fetchLocaleRegistry, fetchRegistry, getFiles } from "../../utils"

export interface Files {
  [key: string]: string
}

export interface FileMap {
  [key: string]: Files
}

export interface DiffRegistries {
  locale: Registries
  remote: Registries
}

export interface GetComponentDataOptions {
  concurrent?: boolean
  index?: boolean
  theme?: boolean
}

export async function getRegistriesAndFiles(
  componentNames: string[],
  config: Config,
  {
    concurrent = true,
    index = false,
    theme = false,
  }: GetComponentDataOptions = {},
) {
  const fileMap: FileMap = {}
  const registries: DiffRegistries = {
    locale: {},
    remote: {},
  }

  const tasks = new Listr([], { concurrent })

  if (index) {
    tasks.add([
      {
        task: async (_, task) => {
          fileMap.index = {
            "index.ts": await readFile(config.indexPath, "utf-8"),
          }
          registries.locale.index = await fetchLocaleRegistry(
            config.registryPath,
          )

          task.title = `Got ${c.cyan("index")} file`
        },
        title: `Getting ${c.cyan("index")} file`,
      },
      {
        task: async (_, task) => {
          registries.remote.index = await fetchRegistry("index")

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

          const { dirPath, files } = await getFiles(config.theme.path)

          fileMap.theme = files
          registries.locale.theme = await fetchLocaleRegistry(
            path.join(dirPath, REGISTRY_FILE_NAME),
          )

          task.title = `Got ${c.cyan("theme")} files`
        },
        title: `Getting ${c.cyan("theme")} files`,
      },
      {
        task: async (_, task) => {
          registries.remote.theme = await fetchRegistry("theme")
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
                const { dirPath, files } = await getFiles(
                  path.join(config.srcPath, "**", componentName),
                )
                fileMap[componentName] = files
                registries.locale[componentName] = await fetchLocaleRegistry(
                  path.join(dirPath, REGISTRY_FILE_NAME),
                )

                task.title = `Got ${c.cyan(componentName)} files`
              },
              title: `Getting ${c.cyan(componentName)} files`,
            },
            {
              task: async (_, task) => {
                registries.remote[componentName] =
                  await fetchRegistry(componentName)

                task.title = `Fetched ${c.cyan(componentName)} registry`
              },
              title: `Fetching ${c.cyan(componentName)} registry`,
            },
          ] satisfies ListrTask[],
      )
      .flat(),
  )

  await tasks.run()

  return { fileMap, registries }
}
