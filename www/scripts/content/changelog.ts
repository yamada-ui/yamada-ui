import type { Content, Data } from "../utils"
import * as p from "@clack/prompts"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { readdir } from "fs/promises"
import path from "path"
import { locales } from "utils/i18n"
import { getMDXFile, getMDXFileName, writeMDXFile } from "../utils"

config({ path: CONSTANT.PATH.ENV })

interface MDXFile {
  name: string
  content: Content
  data: Data
  version: number[]
}

const SOURCE_PATH = path.join(CONSTANT.PATH.ROOT, ".changelog")
const DIST_PATH = path.join("contents", "changelog")
const LOCALE_MENU_MAP = {
  en: "Changelog",
  ja: "変更履歴",
}

const getMDXFiles: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the Yamada UI changelogs`)

  const mdxFiles: Omit<MDXFile, "version">[] = []

  const dirents = await readdir(SOURCE_PATH, { withFileTypes: true })

  await Promise.all(
    dirents.map(async (dirent) => {
      if (dirent.isDirectory()) return

      const { name, path } = dirent

      if (name.startsWith("manifest")) return

      const { content, data } = await getMDXFile(`${path}/${name}`)

      mdxFiles.push({ name, content, data })

      return
    }),
  )

  const resolvedMDXFiles = mdxFiles
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

  return resolvedMDXFiles
}

const generateMDXFiles: p.RequiredRunner =
  (mdxFiles: MDXFile[]) => async (p, s) => {
    s.start(`Writing files "${DIST_PATH}"`)

    let wroteList: string[] = []

    await Promise.all(
      mdxFiles.map(async ({ name, content, data }, index) => {
        const outPath = path.join(DIST_PATH, name)

        data.table_of_contents_max_lv = 3
        data.order = index + 1

        await writeMDXFile(outPath, data, content)

        wroteList = [...wroteList, outPath]

        if (index !== 0) return

        data.order = 7
        data.menu_icon = "history"

        await Promise.all(
          locales.map(async (locale) => {
            data.menu = LOCALE_MENU_MAP[locale]

            await writeMDXFile(
              path.join(DIST_PATH, getMDXFileName("index", locale)),
              data,
              content,
            )
          }),
        )
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

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI document search content`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const mdxFiles = await getMDXFiles()(p, s)

    await generateMDXFiles(mdxFiles)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
