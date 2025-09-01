import type { ObjectEncodingOptions } from "fs"
import type { LintFilesOptions } from "./lint"
import type { FormatOptions } from "./prettier"
import fs, { existsSync, statSync } from "fs"
import {
  mkdir,
  writeFile as originalWriteFile,
  readdir,
  readFile,
} from "fs/promises"
import { glob } from "glob"
import path from "path"
import c from "picocolors"
import { REGISTRY_FILE_NAME } from "../constant"
import { lintFiles } from "./lint"
import { formatFiles } from "./prettier"

export const cwd = process.env.INIT_CWD ?? process.cwd()

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

export interface WriteFileOptions extends ObjectEncodingOptions {
  cwd?: string
  format?: FormatOptions
  lint?: LintFilesOptions
}

export async function writeFile(
  path: string,
  content: string,
  options: WriteFileOptions = {},
) {
  await originalWriteFile(path, content, options.encoding ?? "utf-8")
  await lintFiles(path, { cwd: options.cwd ?? cwd, ...options.lint })
  await formatFiles(path, options.format)
}

export async function writeFileSafe(
  path: string,
  content: string,
  options?: WriteFileOptions,
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
      `The path ${c.yellow(path)} does not writeable. Please check the permissions.`,
    )

  if (!existsSync(path))
    throw new Error(
      `The path ${c.yellow(path)} does not exist. Please try again.`,
    )

  if (!statSync(path).isDirectory())
    throw new Error(
      `The path ${c.yellow(path)} is not a directory. Please try again.`,
    )

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

export async function getFiles(pattern: string) {
  const files: { [key: string]: string } = {}
  const [dirPath] = await glob(pattern)

  const dirents = await readdir(dirPath!, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      const name = dirent.name

      if (dirent.isDirectory()) {
        const dirents = await readdir(path.join(dirent.parentPath, name), {
          withFileTypes: true,
        })

        await Promise.all(
          dirents.map(async (dirent) => {
            if (dirent.isDirectory()) return
            if (dirent.name === REGISTRY_FILE_NAME) return

            const targetPath = path.join(dirent.parentPath, dirent.name)
            const data = await readFile(targetPath, "utf-8")

            files[`${name}/${dirent.name}`] = data
          }),
        )
      } else if (name !== REGISTRY_FILE_NAME) {
        const targetPath = path.join(dirent.parentPath, dirent.name)
        const data = await readFile(targetPath, "utf-8")

        files[name] = data
      }
    }),
  )

  return { dirPath: dirPath!, files }
}
