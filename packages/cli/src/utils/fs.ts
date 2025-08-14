import fs, { existsSync } from "fs"
import { mkdir, writeFile } from "fs/promises"

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

export async function writeFileSafe(
  path: string,
  content: string,
  options?: BufferEncoding,
) {
  if (path.includes("/")) {
    const dirPath = path.split("/").slice(0, -1).join("/")

    if (!existsSync(dirPath)) await mkdir(dirPath, { recursive: true })
  }

  await writeFile(path, content, options)
}
