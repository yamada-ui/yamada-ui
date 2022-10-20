import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

const exists = promisify(fs.exists)

export const themePath = [
  'node_modules',
  '@yamada-ui',
  'styled',
  'dist',
  'generated-theme.types.d.ts',
]

const resolveThemePath = async (): Promise<string | undefined> => {
  const basePath = path.join('..', '..', '..')
  const rootPath = process.cwd()

  const paths = [
    path.resolve(basePath, '..', ...themePath),
    path.resolve(basePath, '..', '..', ...themePath),
    path.resolve(rootPath, ...themePath),
    path.resolve(rootPath, '..', ...themePath),
    path.resolve(rootPath, '..', '..', ...themePath),
  ]

  const triedPaths = await Promise.all(
    paths.map(async (possiblePath) => {
      const isExist = await exists(possiblePath)

      if (isExist) return possiblePath

      return ''
    }),
  )

  return triedPaths.find(Boolean)
}

export const resolveOutputPath = async (outPath?: string): Promise<string> => {
  if (outPath) return path.resolve(process.cwd(), outPath)

  const themePath = await resolveThemePath()

  if (!themePath)
    throw new Error(
      'Could not find @yamada-ui/styled in node_modules. Please provide `--out` parameter.',
    )

  return themePath
}
