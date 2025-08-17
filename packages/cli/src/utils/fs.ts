import type { Config } from "../index.type"
import fs, { existsSync, statSync } from "fs"
import { mkdir, readdir, readFile, writeFile } from "fs/promises"
import { glob } from "glob"
import path from "path"
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

    console.log("")
    console.log(c.green(`Done in ${duration}s`))
  }

  return { end, start }
}

export async function getComponentFiles(
  componentName: string,
  { srcPath }: Config,
) {
  const files: { [key: string]: string } = {}
  const [dirPath] = await glob(path.join(srcPath, "**", componentName))

  if (!dirPath) return files

  const dirents = await readdir(dirPath, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      const name = dirent.name

      if (dirent.isDirectory()) {
        const data = await readdir(path.join(dirent.parentPath, name), {
          withFileTypes: true,
        })

        await Promise.all(
          data.map(async (dirent) => {
            if (dirent.isDirectory()) return

            const targetPath = path.join(dirent.parentPath, dirent.name)
            const data = await readFile(targetPath, "utf-8")

            files[`${name}/${dirent.name}`] = data
          }),
        )
      } else {
        const targetPath = path.join(dirent.parentPath, dirent.name)
        const data = await readFile(targetPath, "utf-8")

        files[name] = data
      }
    }),
  )

  return files
}
