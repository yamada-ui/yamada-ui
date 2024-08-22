import fs from "fs"
import path from "path"
import { glob } from "glob"

const VALID_FILES = [
  ".DS_Store",
  ".git",
  ".gitattributes",
  ".gitignore",
  ".gitlab-ci.yml",
  ".hg",
  ".hgcheck",
  ".hgignore",
  ".idea",
  ".npmignore",
  ".travis.yml",
  "LICENSE",
  "Thumbs.db",
  "docs",
  "mkdocs.yml",
  "npm-debug.log",
  "yarn-debug.log",
  "yarn-error.log",
  "yarnrc.yml",
  ".yarn",
]

export const isFolderEmpty = (root: string): boolean => {
  const conflicts = fs
    .readdirSync(root)
    .filter((file) => !VALID_FILES.includes(file) && !/\.iml$/.test(file))

  return !conflicts.length
}

export const isWriteable = async (directory: string) => {
  try {
    await fs.promises.access(directory, (fs.constants || fs).W_OK)

    return true
  } catch {
    return false
  }
}

const IGNORE_FILES = ["node_modules", ".next"]

const defaultExclude = (filePath: string) => {
  return new RegExp(`^(${IGNORE_FILES.join("|")})`).test(filePath)
}

const defaultFormat = (basename: string) => basename

export type CopyOption = {
  cwd?: string
  format?: (basename: string) => string
  exclude?: (filePath: string) => boolean
  parents?: boolean
}

export const copy = async (
  patterns: string | string[],
  dest: string,
  {
    cwd,
    format = defaultFormat,
    parents = true,
    exclude = defaultExclude,
  }: CopyOption = {},
) => {
  const source = typeof patterns === "string" ? [patterns] : patterns

  const sourceFiles = await glob(source, {
    cwd,
    dot: true,
    absolute: false,
  })

  dest = cwd ? path.resolve(cwd, dest) : dest

  return Promise.all(
    sourceFiles.map(async (filePath) => {
      if (exclude?.(filePath)) return

      const dirname = path.dirname(filePath)
      const basename = format(path.basename(filePath))
      const from = cwd ? path.resolve(cwd, filePath) : filePath
      const to = parents
        ? path.join(dest, dirname, basename)
        : path.join(dest, basename)

      await fs.promises.mkdir(path.dirname(to), { recursive: true })

      try {
        const stat = await fs.promises.stat(from)

        if (!stat.isDirectory()) await fs.promises.copyFile(from, to)
      } catch {}
    }),
  )
}
