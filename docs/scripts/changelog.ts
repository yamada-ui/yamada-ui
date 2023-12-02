import { readFile, readdir, writeFile } from "fs/promises"
import path from "path"
import chalk from "chalk"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
import { CONSTANT } from "constant"
import { prettier } from "libs/prettier"

type Input = string | Buffer
type Data = GrayMatterFile<Input>["data"]
type Content = GrayMatterFile<Input>["content"]
type Locale = (typeof LOCALES)[number]

const DIR_PATH = path.join("contents", "changelog")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const LOCALE_MENU_MAP = {
  en: "Changelog",
  ja: "変更履歴",
}

const getVersions = (fileNames: string[]) =>
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

      console.log(`[changelog]: Generated ${fileName}`)

      if (index !== 0) return

      await writeMdxIndexFiles(data, content)
    }),
  )

const getMdxFile = async (path: string) => {
  const file = await readFile(path, "utf8")

  return matter(file)
}

const writeMdxFile = async (path: string, data: Data, content: Content) => {
  let file = matter.stringify(content, data)

  file = await prettier(file)

  await writeFile(path, file)
}

const getMdxFileName = (fileName: string, locale: Locale) => {
  if (locale !== CONSTANT.I18N.DEFAULT_LOCALE) fileName += `.${locale}`

  return fileName + ".mdx"
}

const writeMdxIndexFiles = async (data: Data, content: Content) => {
  data.order = 7

  await Promise.all(
    LOCALES.map(async (locale) => {
      data.menu = LOCALE_MENU_MAP[locale]

      await writeMdxFile(
        path.join(DIR_PATH, getMdxFileName("index", locale)),
        data,
        content,
      )

      console.log(
        chalk.green(
          `[changelog]: Generated ${getMdxFileName("index", locale)}`,
        ),
      )
    }),
  )
}

const main = async () => {
  const fileNames = await readdir(DIR_PATH)
  const versions = getVersions(fileNames)
  const resolvedFileNames = versions.map(versionToFileName)

  await generateMdxFiles(resolvedFileNames)
}

main()
