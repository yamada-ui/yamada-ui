import { execa } from "execa"
import { rmSync } from "fs"
import path from "path"

export async function isInGitRepo(): Promise<boolean> {
  try {
    await execa("git", ["rev-parse", "--is-inside-work-tree"], {
      stdout: "ignore",
    })

    return true
  } catch {
    return false
  }
}

export async function initGit(cwd: string): Promise<boolean> {
  const gitPath = path.resolve(cwd, ".git")

  let isInit = false

  try {
    await execa("git", ["--version"], { stdout: "ignore" })

    if (await isInGitRepo()) return false

    await execa("git", ["init"], { stdout: "ignore" })

    isInit = true

    try {
      await execa("git", ["config", "init.defaultBranch"], {
        stdout: "ignore",
      })
    } catch {
      await execa("git", ["checkout", "-b", "main"], { stdout: "ignore" })
    }

    await execa("git", ["add", "-A"], { stdout: "ignore" })
    await execa("git", ["commit", "-m", "Initial commit"], {
      stdout: "ignore",
    })

    return true
  } catch {
    if (isInit)
      try {
        rmSync(gitPath, { force: true, recursive: true })
      } catch {}

    return false
  }
}
