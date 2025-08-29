import { execa } from "execa"
import c from "picocolors"

export async function validateDiff3() {
  try {
    await execa("diff3", ["--version"])

    return true
  } catch {
    throw new Error(`${c.yellow("diff3")} is not installed. Please install it.`)
  }
}
