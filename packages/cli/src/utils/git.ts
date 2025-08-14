import { execSync } from "child_process"
import { rmSync } from "fs"
import path from "path"

export function isInGitRepo(): boolean {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" })

    return true
  } catch {
    return false
  }
}

export function initGit(cwd: string): boolean {
  const gitPath = path.resolve(cwd, ".git")

  let isInit = false

  try {
    execSync("git --version", { stdio: "ignore" })

    if (isInGitRepo()) return false

    execSync("git init", { stdio: "ignore" })

    isInit = true

    try {
      execSync("git config init.defaultBranch", { stdio: "ignore" })
    } catch {
      execSync("git checkout -b main", { stdio: "ignore" })
    }

    execSync("git add -A", { stdio: "ignore" })
    execSync('git commit -m "Initial commit"', {
      stdio: "ignore",
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
