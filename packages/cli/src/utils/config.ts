import type { Config, Section, UserConfig } from "../index.type"
import { isUndefined } from "@yamada-ui/utils"
import { existsSync } from "fs"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"
import packageJson from "../../package.json"
import { DEFAULT_PATH, REGISTRY_FILE_NAME, SECTION_NAMES } from "../constant"
import { getPackageManager, packageExecuteCommands } from "./package"
import { transformExtension } from "./typescript"

function getPaths(rootPath: string, jsx?: boolean) {
  const existsSrc = existsSync(path.resolve(rootPath, "src"))
  const srcPath = existsSrc ? path.resolve(rootPath, "src") : rootPath
  const indexPath = path.resolve(srcPath, transformExtension("index.ts", jsx))
  const registryPath = path.resolve(srcPath, REGISTRY_FILE_NAME)

  return {
    src: srcPath,
    index: indexPath,
    registry: registryPath,
    root: rootPath,
  }
}

export interface GetConfigOptions {
  format?: boolean
  jsx?: boolean
  lint?: boolean
}

export async function getConfig(
  cwd: string,
  configPath: string,
  { format, jsx, lint }: GetConfigOptions = {},
): Promise<Config> {
  try {
    const data = await readFile(path.resolve(cwd, configPath), "utf-8")
    const userConfig = JSON.parse(data) as UserConfig

    if (!isUndefined(format)) userConfig.format = { enabled: format }
    if (!isUndefined(lint)) userConfig.lint = { enabled: lint }
    if (!isUndefined(jsx)) userConfig.jsx = jsx

    const paths = {
      theme: getPaths(
        path.resolve(
          cwd,
          userConfig.theme?.path ??
            (userConfig.monorepo
              ? DEFAULT_PATH.theme.monorepo
              : DEFAULT_PATH.theme.polyrepo),
        ),
        userConfig.jsx,
      ),
      ui: getPaths(
        path.resolve(
          cwd,
          userConfig.path ??
            (userConfig.monorepo
              ? DEFAULT_PATH.ui.monorepo
              : DEFAULT_PATH.ui.polyrepo),
        ),
        userConfig.jsx,
      ),
    }

    const sectionMap = Object.fromEntries(
      SECTION_NAMES.map((section) => {
        const path = userConfig[section]?.path ?? DEFAULT_PATH[section]
        const replacedSection = path
          .replace(/(\.\.\/|\.\/)/g, "")
          .replace(/(^\/|\/$)/g, "")

        return [section, replacedSection]
      }),
    )

    if (userConfig.theme?.path)
      userConfig.theme.path = path.resolve(cwd, userConfig.theme.path)

    function isSection(section: string): section is Section {
      return SECTION_NAMES.includes(section as Section)
    }

    function getSectionResolvedPath(section: Section) {
      return path.resolve(
        paths.ui.src,
        userConfig[section]?.path ?? DEFAULT_PATH[section],
      )
    }

    function getSectionPath(section: Section) {
      let path = userConfig[section]?.path ?? DEFAULT_PATH[section]

      if (path.startsWith("/")) path = `./${path}`
      if (!path.startsWith("./")) path = `./${path}`

      return path
    }

    function getSection(value?: string) {
      if (!value) return

      if (SECTION_NAMES.includes(value as Section)) {
        const section = value as Section

        return {
          ...userConfig[section],
          path: getSectionPath(section),
          resolvedPath: getSectionResolvedPath(section),
          section,
        }
      } else {
        const [result] =
          Object.entries(sectionMap).find(
            ([section, replaceSection]) =>
              replaceSection === value || section === value,
          ) ?? []

        if (!result) return

        const section = result as Section

        return {
          ...userConfig[section],
          path: getSectionPath(section),
          resolvedPath: getSectionResolvedPath(section),
          section,
        }
      }
    }

    return {
      ...userConfig,
      cwd,
      getSection,
      getSectionPath,
      getSectionResolvedPath,
      isSection,
      paths,
    }
  } catch {
    const packageManager = getPackageManager()
    const { args, command } = packageExecuteCommands(packageManager)
    const prefix = `${command}${args.length ? ` ${args.join(" ")}` : ""}`

    throw new Error(
      `No ${c.yellow("config")} found. Please run ${c.cyan(`${prefix} ${packageJson.name}@latest init`)}.`,
    )
  }
}
