import { execSync } from "child_process"
import { rmSync } from "fs"
import path from "path"

const isInGitRepo = (): boolean => {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" })

    return true
  } catch {
    return false
  }
}

const isInMercurialRepo = (): boolean => {
  try {
    execSync("hg --cwd . root", { stdio: "ignore" })

    return true
  } catch {
    return false
  }
}

export const initGit = (root: string): boolean => {
  const gitPath = path.join(root, ".git")

  let isInit = false

  try {
    execSync("git --version", { stdio: "ignore" })

    if (isInGitRepo() || isInMercurialRepo()) return false

    execSync("git init", { stdio: "ignore" })

    isInit = true

    try {
      execSync("git config init.defaultBranch", { stdio: "ignore" })
    } catch {
      execSync("git checkout -b main", { stdio: "ignore" })
    }

    execSync("git add -A", { stdio: "ignore" })
    execSync('git commit -m "Initial commit from Create Yamada App"', {
      stdio: "ignore",
    })

    return true
  } catch {
    if (isInit)
      try {
        rmSync(gitPath, { recursive: true, force: true })
      } catch {}

    return false
  }
}
