import type { Config, Section, UserConfig } from "../index.type"
import { existsSync } from "fs"
import { readFile } from "fs/promises"
import path from "path"
import c from "picocolors"
import packageJson from "../../package.json"
import { DEFAULT_PATH, SECTION_NAMES } from "../constant"
import { getPackageManager, packageExecuteCommand } from "./package"

export async function getConfig(
  cwd: string,
  configPath: string,
): Promise<Config> {
  try {
    const data = await readFile(path.resolve(cwd, configPath), "utf8")
    const userConfig = JSON.parse(data) as UserConfig
    const rootPath = path.resolve(
      cwd,
      userConfig.path ??
        (userConfig.monorepo ? DEFAULT_PATH.monorepo : DEFAULT_PATH.polyrepo),
    )
    const src = existsSync(path.resolve(rootPath, "src"))
    const srcPath = src ? path.resolve(rootPath, "src") : rootPath
    const sectionMap = Object.fromEntries(
      SECTION_NAMES.map((section) => {
        const path = userConfig[section]?.path ?? DEFAULT_PATH[section]
        const replacedSection = path
          .replace(/(\.\.\/|\.\/)/g, "")
          .replace(/(^\/|\/$)/g, "")

        return [section, replacedSection]
      }),
    )

    function getSectionAbsolutePath(section: Section) {
      return path.resolve(
        srcPath,
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
          absolutePath: getSectionAbsolutePath(section),
          path: getSectionPath(section),
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
          absolutePath: getSectionAbsolutePath(section),
          path: getSectionPath(section),
          section,
        }
      }
    }

    return {
      ...userConfig,
      src,
      cwd,
      getSection,
      getSectionAbsolutePath,
      getSectionPath,
      rootPath,
      srcPath,
    }
  } catch {
    const packageManager = getPackageManager()
    const command = packageExecuteCommand(packageManager)

    throw new Error(
      `No config found. Please run ${c.cyan(`${command} ${packageJson.name}@latest init`)}.`,
    )
  }
}
