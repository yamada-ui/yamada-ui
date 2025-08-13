import fs from "fs"

export async function isWriteable(directory: string) {
  try {
    await fs.promises.access(
      directory,
      ("constants" in fs ? fs.constants : fs).W_OK,
    )

    return true
  } catch {
    return false
  }
}
