import { existsSync } from "fs"
import path from "path"
import * as p from "@clack/prompts"
import c from "chalk"
import { initGit } from "./git"
import { installDependencies, type PackageManager } from "./package"
import type { Template } from "./templates"
import { getTemplatePrompts, installTemplate } from "./templates"

const getChangeDirPath = (projectPath: string, projectName: string) => {
  return path.join(process.cwd(), projectName) === projectPath
    ? projectName
    : projectPath
}

export const createProject = async <Y extends Template>(
  projectPath: string,
  projectName: string,
  template: Y,
  typescript: boolean,
  pkgManager: PackageManager,
  skipInstall: boolean,
) => {
  const s = p.spinner()

  try {
    const prompts = await getTemplatePrompts(template)

    s.start(`Creating project "${projectName}"`)

    await installTemplate[template](
      projectPath,
      projectName,
      typescript,
      prompts,
    )

    s.stop(`Created project "${projectName}"`)

    const hasPkgJson = existsSync(path.join(projectPath, "package.json"))

    if (!skipInstall && hasPkgJson) {
      s.start(`Installing dependencies with ${pkgManager}`)

      await installDependencies(pkgManager, projectPath)

      s.stop(`Installed dependencies with ${pkgManager}`)
    }

    s.start(`Initializing git`)

    const isInit = initGit(projectPath)

    s.stop(isInit ? `Initialized git` : `Failed to initialize git`)

    const changeDirPath = getChangeDirPath(projectPath, projectName)

    p.log.info("We suggest that you begin by typing")
    p.log.message(`cd ${c.cyan(changeDirPath)}`)
  } catch (e) {
    s.stop(`An error occurred`, 500)

    if (e instanceof Error) throw new Error(e.message)
  }
}
