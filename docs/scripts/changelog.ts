import { readFile, readdir, writeFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
import { prettier } from "libs/prettier"

config({ path: CONSTANT.PATH.ENV })

type Input = string | Buffer
type MdxFile = { name: string; version: number[]; data: Data; content: Content }
type Data = GrayMatterFile<Input>["data"]
type Content = GrayMatterFile<Input>["content"]
type Locale = (typeof LOCALES)[number]

const SOURCE_PATH = path.join(CONSTANT.PATH.ROOT, ".changelog")
const DIST_PATH = path.join("contents", "changelog")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const LOCALE_MENU_MAP = {
  en: "Changelog",
  ja: "変更履歴",
}

const getMdxFiles: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the Yamada UI changelogs`)

  const mdxFiles: Omit<MdxFile, "version">[] = []

  const dirents = await readdir(SOURCE_PATH, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      if (dirent.isDirectory()) return

      const { name, path } = dirent

      if (name.startsWith("manifest")) return

      const file = await readFile(`${path}/${name}`, "utf-8")

      const { data, content } = matter(file)

      mdxFiles.push({ name, data, content })

      return
    }),
  )

  const resolvedMdxFiles = mdxFiles
    .map((item) => ({
      ...item,
      version: item.name
        .replace("v", "")
        .replace(".mdx", "")
        .split(".")
        .map((n) => parseInt(n)),
    }))
    .filter(Boolean)
    .sort((a, b) => {
      for (let i = 0; i < Math.max(a.version.length, b.version.length); i++) {
        if ((a.version[i] || 0) > (b.version[i] || 0)) return -1
        if ((a.version[i] || 0) < (b.version[i] || 0)) return 1
      }

      return 0
    })

  s.stop(`got the Yamada UI changelogs`)

  return resolvedMdxFiles
}

const generateMdxFiles: p.RequiredRunner =
  (mdxFiles: MdxFile[]) => async (p, s) => {
    s.start(`Writing files "${DIST_PATH}"`)

    let wroteList: string[] = []

    await Promise.all(
      mdxFiles.map(async ({ name, data, content }, index) => {
        const outPath = path.join(DIST_PATH, name)

        data.table_of_contents_max_lv = 3
        data.order = index + 1

        await writeMdxFile(outPath, data, content)

        wroteList = [...wroteList, outPath]

        if (index !== 0) return

        await writeMdxIndexFiles(data, content)
      }),
    )

    s.stop(`Wrote files "${DIST_PATH}"`)

    if (wroteList.length) {
      const message = wroteList
        .map((item) => `- ${item}`)
        .join("\n")
        .trim()

      p.note(message, `Generated changelogs`)
    }
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
  data.menu_icon = "history"

  await Promise.all(
    LOCALES.map(async (locale) => {
      data.menu = LOCALE_MENU_MAP[locale]

      await writeMdxFile(
        path.join(DIST_PATH, getMdxFileName("index", locale)),
        data,
        content,
      )
    }),
  )
}

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI document search content`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const mdxFiles = await getMdxFiles()(p, s)

    await generateMdxFiles(mdxFiles)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
