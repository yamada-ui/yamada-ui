import type { ListrTask } from "listr2"
import type { Config } from "../../index.type"
import type { ChangeMap, DependencyMap } from "../diff/get-diff"
import type { RegistryMap } from "../diff/get-registries-and-files"
import { isUndefined, merge } from "@yamada-ui/utils"
import { mkdtemp } from "fs/promises"
import { Listr } from "listr2"
import { tmpdir } from "os"
import ora from "ora"
import path from "path"
import c from "picocolors"
import prompts from "prompts"
import { rimraf } from "rimraf"
import { REGISTRY_FILE_NAME } from "../../constant"
import {
  execFileAsync,
  getPackageName,
  getPackageNameWithVersion,
  installDependencies,
  uninstallDependencies,
  writeFileSafe,
} from "../../utils"
import { getDirPath } from "../diff/get-diff"
import { createContext } from "../../context"

async function mergeContent(
  remotePath: string,
  localPath: string,
  currentPath: string,
  fallback: string,
) {
  let content = ""
  let conflict = false

  try {
    const { stdout } = await execFileAsync("diff3", [
      "-m",
      remotePath,
      localPath,
      currentPath,
    ])

    content = stdout
  } catch (e: any) {
    if (e?.stdout) {
      conflict = true
      content = e.stdout
    } else {
      content = fallback
    }
  }

  content = content.replaceAll(remotePath, "remote")
  content = content.replaceAll(localPath, "local")
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
  force?: boolean
  install?: boolean
  yes?: boolean
  dryRun?: boolean
}

export async function updateFiles(
  changeMap: ChangeMap,
  { add, remove, update }: DependencyMap,
  { remote }: RegistryMap,
  config: Config,
  {
    concurrent = true,
    force = false,
    install,
    yes = false,
    dryRun = false,
  }: UpdateFilesOptions = {},
) {
  const ctx = createContext(dryRun, ora()) // Create context with dry-run support
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
                const name = config.paths.ui.index.split("/").at(-1)!
                const data = changes[name]!

                if (!("local" in data && "remote" in data)) return

                if (force) {
                  await ctx.fs.writeFileSafe(
                    config.paths.ui.index,
                    data.remote,
                    config,
                  )
                } else {
                  const remotePath = path.join(tempDirPath, `remote-${name}`)
                  const localPath = path.join(tempDirPath, `local-${name}`)

                  await Promise.all([
                    ctx.fs.writeFileSafe(
                      remotePath,
                      data.remote,
                      disabledFormatAndLint,
                    ),
                    ctx.fs.writeFileSafe(localPath, data.local, disabledFormatAndLint),
                  ])

                  const { conflict, content: mergedContent } =
                    await mergeContent(
                      remotePath,
                      localPath,
                      config.paths.ui.index,
                      data.remote,
                    )

                  await ctx.fs.writeFileSafe(
                    config.paths.ui.index,
                    mergedContent,
                    conflict ? merge(config, disabledFormatAndLint) : config,
                  )

                  if (conflict) {
                    conflictMap[componentName] ??= {}
                    conflictMap[componentName][name] = config.paths.ui.index
                  }
                }
              } else {
                await Promise.all(
                  Object.entries(changes).map(async ([name, { ...data }]) => {
                    const currentPath = path.join(dirPath, name)

                    if ("local" in data && "remote" in data) {
                      if (force) {
                        await ctx.fs.writeFileSafe(currentPath, data.remote, config)
                      } else {
                        const remotePath = path.join(
                          tempDirPath,
                          `remote-${name}`,
                        )
                        const localPath = path.join(
                          tempDirPath,
                          `local-${name}`,
                        )

                        await Promise.all([
                          ctx.fs.writeFileSafe(
                            remotePath,
                            data.remote,
                            disabledFormatAndLint,
                          ),
                          ctx.fs.writeFileSafe(
                            localPath,
                            data.local,
                            disabledFormatAndLint,
                          ),
                        ])

                        const { conflict, content: mergedContent } =
                          await mergeContent(
                            remotePath,
                            localPath,
                            currentPath,
                            data.remote,
                          )

                        await ctx.fs.writeFileSafe(
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
                      }
                    } else if ("remote" in data) {
                      await ctx.fs.writeFileSafe(currentPath, data.remote, config)
                    } else {
                      await ctx.fs.rmrf(currentPath)
                    }
                  }),
                )
              }

              await ctx.fs.writeFileSafe(
                path.resolve(dirPath, REGISTRY_FILE_NAME),
                JSON.stringify(registry),
                merge(config, { format: { parser: "json" } }),
              )
            } catch {
            } finally {
              await ctx.fs.rmrf(tempDirPath)
            }

            task.title = `Changed ${c.cyan(componentName)}`
          },
          title: `Changing ${c.cyan(componentName)}`,
        }) satisfies ListrTask,
    ),
    { concurrent },
  )

  await tasks.run()

  if (!install && (add.length || remove.length || update.length) && !dryRun) {
    const answer = !dryRun ? await prompts({
      type: !yes && isUndefined(install) ? "confirm" : null,
      name: "install",
      initial: true,
      message: c.reset(
        "There are dependency updates. Do you want to install them?",
      ),
    }) : { install: true }

    install ??= answer.install ?? true

    if (!install) return conflictMap
  }

  const cwd = config.monorepo ? config.paths.ui.root : config.cwd

  remove.push(...update.map(({ name }) => name))
  add.push(...update.map(getPackageNameWithVersion))

  if (remove.length)
    await uninstallDependencies(remove.map(getPackageName), { cwd })

  if (add.length) await ctx.install.dependencies(add, { cwd })

  return conflictMap
}
