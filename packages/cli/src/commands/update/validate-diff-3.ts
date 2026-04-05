import { execFile } from "node:child_process"
import { promisify } from "node:util"
import c from "picocolors"

const execFileAsync = promisify(execFile)

export async function validateDiff3() {
  try {
    await execFileAsync("diff3", ["--version"])

    return true
  } catch {
    throw new Error(`${c.yellow("diff3")} is not installed. Please install it.`)
  }
}
