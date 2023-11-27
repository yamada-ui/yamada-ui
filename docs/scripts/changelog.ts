import { readFile, readdir, writeFile } from "fs/promises"
import path from "path"
import matter, { GrayMatterFile } from "gray-matter"
import { prettier } from "libs/prettier"

type Input = string | Buffer

const DIR_PATH = path.join("contents", "changelog")

const getVersion = (fileNames: string[]) =>
  fileNames
    .map((fileName) => {
      if (fileName.startsWith("index")) return

      return fileName
        .replace("v", "")
        .replace(".mdx", "")
        .split(".")
        .map((n) => parseInt(n))
    })
    .filter(Boolean)
    .sort((a, b) => {
      for (let i = 0; i < Math.max(a.length, b.length); i++) {
        if ((a[i] || 0) > (b[i] || 0)) return -1
        if ((a[i] || 0) < (b[i] || 0)) return 1
      }

      return 0
    })

const versionToFileName = (version: number[]) => `v${version.join(".")}.mdx`

const generateMdxFiles = (fileNames: string[]) =>
  Promise.all(
    fileNames.map(async (fileName, index) => {
      const filePath = path.join(DIR_PATH, fileName)
      const { data, content } = await getMdxFile(filePath)

      data.table_of_contents_max_lv = 2
      data.order = index + 1

      await writeMdxFile(filePath, data, content)

      console.log(`[changelog]: formatted ${fileName}`)

      if (index !== 0) return

      await writeMdxIndexFile(data, content)
    }),
  )

const getMdxFile = async (path: string) => {
  const file = await readFile(path, "utf8")

  return matter(file)
}

const writeMdxFile = async (
  path: string,
  data: GrayMatterFile<Input>["data"],
  content: GrayMatterFile<Input>["content"],
) => {
  let file = matter.stringify(content, data)

  file = await prettier(file)

  await writeFile(path, file)
}

const writeMdxIndexFile = async (
  data: GrayMatterFile<Input>["data"],
  content: GrayMatterFile<Input>["content"],
) => {
  data.menu = "Changelog"
  data.order = 7

  await writeMdxFile(path.join(DIR_PATH, "index.mdx"), data, content)

  data.menu = "変更履歴"

  await writeMdxFile(path.join(DIR_PATH, "index.ja.mdx"), data, content)
}

const main = async () => {
  const fileNames = await readdir(DIR_PATH)
  const versions = getVersion(fileNames)
  const resolvedFileNames = versions.map(versionToFileName)

  await generateMdxFiles(resolvedFileNames)
}

main()
