import fs, { existsSync, statSync } from "fs"
import { mkdir, writeFile } from "fs/promises"
import c from "picocolors"

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

export async function validateDir(path: string) {
  const writeable = await isWriteable(path)

  if (!writeable)
    throw new Error(
      `The path ${path} does not writeable. Please check the permissions.`,
    )

  if (!existsSync(path))
    throw new Error(`The path ${path} does not exist. Please try again.`)

  if (!statSync(path).isDirectory())
    throw new Error(`The path ${path} is not a directory. Please try again.`)

  return true
}

export function timer() {
  const start = process.hrtime.bigint()

  const end = () => {
    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    console.log("\n", c.green(`Done in ${duration}s`))
  }

  return { end, start }
}
