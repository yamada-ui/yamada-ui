import type { ListrTask } from "listr2"
import type { Config, Registries } from "../../index.type"
import { readFile } from "fs/promises"
import { Listr } from "listr2"
import path from "path"
import c from "picocolors"
import { REGISTRY_FILE_NAME } from "../../constant"
import {
  fetchLocaleRegistry,
  fetchRegistry,
  getFiles,
  transformExtension,
} from "../../utils"

export interface Files {
  [key: string]: string
}

export interface FileMap {
  [key: string]: Files
}

export interface RegistryMap {
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
  const registryMap: RegistryMap = {
    locale: {},
    remote: {},
  }

  const tasks = new Listr([], { concurrent })

  if (index) {
    tasks.add([
      {
        task: async (_, task) => {
          const indexFileName = transformExtension("index.ts", config.jsx)

          fileMap.index = {
            [indexFileName]: await readFile(config.indexPath, "utf-8"),
          }
          registryMap.locale.index = await fetchLocaleRegistry(
            config.registryPath,
          )

          task.title = `Got ${c.cyan("index")} file`
        },
        title: `Getting ${c.cyan("index")} file`,
      },
      {
        task: async (_, task) => {
          registryMap.remote.index = await fetchRegistry("index")

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
          registryMap.locale.theme = await fetchLocaleRegistry(
            path.posix.join(dirPath, REGISTRY_FILE_NAME),
          )

          task.title = `Got ${c.cyan("theme")} files`
        },
        title: `Getting ${c.cyan("theme")} files`,
      },
      {
        task: async (_, task) => {
          registryMap.remote.theme = await fetchRegistry("theme")
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
                  path.posix.join(config.srcPath, "**", componentName),
                )
                fileMap[componentName] = files
                registryMap.locale[componentName] = await fetchLocaleRegistry(
                  path.posix.join(dirPath, REGISTRY_FILE_NAME),
                )

                task.title = `Got ${c.cyan(componentName)} files`
              },
              title: `Getting ${c.cyan(componentName)} files`,
            },
            {
              task: async (_, task) => {
                registryMap.remote[componentName] =
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

  return { fileMap, registryMap }
}
