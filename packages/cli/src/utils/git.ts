import { rmSync } from "fs"
import path from "path"
import { execFileAsync } from "./fs"

export async function isInGitRepo(): Promise<boolean> {
  try {
    await execFileAsync("git", ["rev-parse", "--is-inside-work-tree"])

    return true
  } catch {
    return false
  }
}

export async function initGit(cwd: string): Promise<boolean> {
  const gitPath = path.resolve(cwd, ".git")

  let isInit = false

  try {
    await execFileAsync("git", ["--version"])

    if (await isInGitRepo()) return false

    await execFileAsync("git", ["init"])

    isInit = true

    try {
      await execFileAsync("git", ["config", "init.defaultBranch"])
    } catch {
      await execFileAsync("git", ["checkout", "-b", "main"])
    }

    await execFileAsync("git", ["add", "-A"])
    await execFileAsync("git", ["commit", "-m", "Initial commit"])

    return true
  } catch {
    if (isInit)
      try {
        rmSync(gitPath, { force: true, recursive: true })
      } catch {}

    return false
  }
}
