import { execFile } from "child_process"
import c from "picocolors"
import { promisify } from "util"

const execFileAsync = promisify(execFile)

export async function validateDiff3() {
  try {
    await execFileAsync("diff3", ["--version"])

    return true
  } catch {
    throw new Error(`${c.yellow("diff3")} is not installed. Please install it.`)
  }
}
