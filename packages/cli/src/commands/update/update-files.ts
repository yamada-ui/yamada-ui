import type { ListrTask } from "listr2"
import type { Config } from "../../index.type"
import type { ChangeMap, DependencyMap } from "../diff/get-diff"
import type { RegistryMap } from "../diff/get-registries-and-files"
import { merge } from "@yamada-ui/utils"
import { execa, ExecaError } from "execa"
import { mkdtemp } from "fs/promises"
import { Listr } from "listr2"
import { tmpdir } from "os"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { rimraf } from "rimraf"
import { REGISTRY_FILE_NAME } from "../../constant"
import {
  getPackageName,
  getPackageNameWithVersion,
  installDependencies,
  uninstallDependencies,
  writeFileSafe,
} from "../../utils"
import { getDirPath } from "../diff/get-diff"

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
  changeMap: ChangeMap,
  { add, remove, update }: DependencyMap,
  { remote }: RegistryMap,
  config: Config,
  { concurrent = true, install = false }: UpdateFilesOptions = {},
) {
  const conflictMap: ConflictMap = {}
  const disabledFormatAndLint = {
    format: { enabled: false },
    lint: { enabled: false },
  }

  const tasks = new Listr(
    Object.entries(changeMap).map(
      ([componentName, changes]) =>
        ({
          task: async (_, task) => {
            const tempDirPath = await mkdtemp(
              path.join(tmpdir(), `yamada-ui-${componentName}-`),
            )
            const registry = remote[componentName]!
            const dirPath = getDirPath(registry.section, componentName, config)

            try {
              if (componentName === "index") {
                const name = config.indexPath.split("/").at(-1)!
                const data = changes[name]!

                if (!("locale" in data && "remote" in data)) return

                const remotePath = path.join(tempDirPath, `remote-${name}`)
                const localePath = path.join(tempDirPath, `locale-${name}`)

                await Promise.all([
                  writeFileSafe(remotePath, data.remote, disabledFormatAndLint),
                  writeFileSafe(localePath, data.locale, disabledFormatAndLint),
                ])

                const { conflict, content: mergedContent } = await mergeContent(
                  remotePath,
                  localePath,
                  config.indexPath,
                  data.remote,
                )

                await writeFileSafe(
                  config.indexPath,
                  mergedContent,
                  conflict ? merge(config, disabledFormatAndLint) : config,
                )

                if (conflict) {
                  conflictMap[componentName] ??= {}
                  conflictMap[componentName][name] = config.indexPath
                }
              } else {
                await Promise.all(
                  Object.entries(changes).map(async ([name, { ...data }]) => {
                    const currentPath = path.join(dirPath, name)

                    if ("locale" in data && "remote" in data) {
                      const remotePath = path.join(
                        tempDirPath,
                        `remote-${name}`,
                      )
                      const localePath = path.join(
                        tempDirPath,
                        `locale-${name}`,
                      )

                      await Promise.all([
                        writeFileSafe(
                          remotePath,
                          data.remote,
                          disabledFormatAndLint,
                        ),
                        writeFileSafe(
                          localePath,
                          data.locale,
                          disabledFormatAndLint,
                        ),
                      ])

                      const { conflict, content: mergedContent } =
                        await mergeContent(
                          remotePath,
                          localePath,
                          currentPath,
                          data.remote,
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
                    } else if ("remote" in data) {
                      await writeFileSafe(currentPath, data.remote, config)
                    } else {
                      await rimraf(currentPath)
                    }
                  }),
                )
              }

              await writeFileSafe(
                path.resolve(dirPath, REGISTRY_FILE_NAME),
                JSON.stringify(registry),
                merge(config, { format: { parser: "json" } }),
              )
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

  if (!install && (add.length || remove.length || update.length)) {
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

  remove.push(...update.map(({ name }) => name))
  add.push(...update.map(getPackageNameWithVersion))

  if (remove.length)
    await uninstallDependencies(remove.map(getPackageName), { cwd })

  if (add.length) await installDependencies(add, { cwd })

  return conflictMap
}
