import type { ObjectEncodingOptions } from "node:fs"
import type {
  FormatterConfig,
  FormatterToolName,
  LinterConfig,
  LinterToolName,
} from "./toolchain"
import { execFile } from "node:child_process"
import fs, { existsSync, statSync } from "node:fs"
import {
  glob,
  mkdir,
  writeFile as originalWriteFile,
  readdir,
  readFile,
} from "node:fs/promises"
import path from "node:path"
import { promisify } from "node:util"
import c from "picocolors"
import { REGISTRY_FILE_NAME } from "../constant"
import {
  resolveFormatter,
  resolveLinter,
  selectFormatter,
  selectLinter,
} from "./toolchain"

export const cwd = process.env.INIT_CWD ?? process.cwd()

export const execFileAsync = promisify(execFile)

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
  format?: FormatterConfig
  formatter?: FormatterToolName
  lint?: LinterConfig
  linter?: LinterToolName
}

export async function writeFile(
  path: string,
  content: string,
  options: WriteFileOptions = {},
) {
  await originalWriteFile(path, content, options.encoding ?? "utf-8")

  const optionsCwd = options.cwd ?? cwd

  const linterTool = selectLinter(options)
  if (linterTool) {
    const linter = await resolveLinter(optionsCwd, linterTool)
    await linter.lintFiles(path, { cwd: optionsCwd })
  }

  const formatterTool = selectFormatter(options)
  if (formatterTool) {
    const formatter = await resolveFormatter(optionsCwd, formatterTool)
    await formatter.formatFiles(path, {
      configPath: options.format?.configPath,
      language: options.format?.language,
    })
  }
}

export async function writeFileSafe(
  targetPath: string,
  content: string,
  options?: WriteFileOptions,
) {
  const dirPath = path.dirname(targetPath)

  if (!existsSync(dirPath)) await mkdir(dirPath, { recursive: true })

  await writeFile(targetPath, content, options)
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
  const [dirPath] = await Array.fromAsync(glob(pattern))

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
