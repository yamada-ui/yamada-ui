import { readdir } from "fs/promises"
import { getMDXFile } from "scripts/utils"

const getDirectories = async (path: string) => {
  let dirents = await readdir(path, { withFileTypes: true })

  dirents = dirents.filter((dirent) => dirent.isDirectory())

  return dirents
}

export const getDirectoryPaths = async (path: string) => {
  const categoryDirs = await getDirectories(path)
  const componentDirs = await Promise.all(
    categoryDirs.map(
      async ({ name, path }) => await getDirectories(`${path}/${name}`),
    ),
  )

  const paths = componentDirs
    .flat()
    .reduce<{ [key: string]: string }>((prev, { name, path }) => {
      prev[name] = `${path}/${name}`

      return prev
    }, {})

  return paths
}

export const generateFrontMatter = async (
  path: string,
  overridePath: string,
) => {
  let { data } = await getMDXFile(path)

  delete data.is_tabs

  try {
    const { data: overrideData } = await getMDXFile(overridePath)

    return { ...data, ...overrideData }
  } catch {
    return data
  }
}
