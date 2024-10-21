import type { Data } from "scripts/utils"
import type { Locale } from "utils/i18n"
import * as p from "@clack/prompts"
import { toKebabCase, toPascalCase } from "@yamada-ui/utils"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { readdir, readFile } from "fs/promises"
import path from "path"
import { getMDXFileName, writeMDXFile } from "scripts/utils"
import { locales } from "utils/i18n"
import { generateFrontMatter, getDirectoryPaths } from "./utils"

config({ path: CONSTANT.PATH.ENV })

interface Options {
  componentName: string
  isMulti: boolean
  baseComponents?: {
    name: string
    path: string
  }[]
}

const SOURCE_PATH = path.join(
  CONSTANT.PATH.ROOT,
  "packages",
  "theme",
  "src",
  "components",
)
const DIST_PATH = path.join("contents", "components")
const LOCALE_TAB_MAP = {
  en: "Theming",
  ja: "テーマ",
}
const LOCALE_DESC_MAP = {
  en: ({ baseComponents, componentName, isMulti }: Options) => {
    let content = [
      "## Theming",
      `The \`${componentName}\` is a [${
        isMulti ? "multi" : "single"
      } part component](/styled-system/theming/component-styles#${
        isMulti ? "multi" : "single"
      }-part-components).`,
    ]

    if (baseComponents) {
      content = [
        ...content,
        `\n:::note`,
        `\`${componentName}\` inherits the style from ${baseComponents
          .map(({ name, path }) => `[${name}](${path})`)
          .join(" and ")}.`,
        `:::\n`,
      ]
    }

    content = [
      ...content,
      `\n:::note`,
      `If you want to change the style of the component, please check [here](/styled-system/theming/customize-theme#changing-the-style-of-components).`,
      `:::\n`,
    ]

    return content.join("\n")
  },
  ja: ({ baseComponents, componentName, isMulti }: Options) => {
    let content = [
      "## テーマ",
      `\`${componentName}\`は、[${
        isMulti ? "複数" : "単一"
      }パーツのコンポーネント](/styled-system/theming/component-styles#${
        isMulti ? "複数" : "単一"
      }パーツのコンポーネント)です。`,
    ]

    if (baseComponents) {
      content = [
        ...content,
        `\n:::note`,
        `\`${componentName}\`は、${baseComponents
          .map(({ name, path }) => `[${name}](${path})`)
          .join("と")}のスタイルを継承しています。`,
        `:::\n`,
      ]
    }

    content = [
      ...content,
      `\n:::note`,
      `コンポーネントのスタイルを変更したい場合は、[こちら](/styled-system/theming/customize-theme#コンポーネントのスタイルを変更する)をご覧ください。`,
      `:::\n`,
    ]

    return content.join("\n")
  },
}

const getThemes: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the Yamada UI component themes`)

  const dirents = await readdir(SOURCE_PATH, { withFileTypes: true })

  const themes: { [key: string]: string } = {}

  await Promise.all(
    dirents.map(async (dirent) => {
      if (dirent.isDirectory()) return

      let { name, path } = dirent

      const content = await readFile(`${path}/${name}`, "utf-8")

      name = name.replace(".ts", "")

      if (name !== "index") themes[name] = content
    }),
  )

  s.stop(`Got the Yamada UI component themes`)

  return themes
}

const getPaths: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the component theme paths`)

  const paths = getDirectoryPaths(DIST_PATH)

  s.stop(`Got the component theme paths`)

  return paths
}

const getIsMulti = (theme: string) => {
  const reg =
    /import[\s\S]*{[\s\S]*(type\s+)?(ComponentMultiStyle)[\s\S]*?}\s*from/g

  return !![...theme.matchAll(reg)].length
}

const getBaseComponents = (theme: string, paths: { [key: string]: string }) => {
  const componentNames =
    theme
      .match(/(mergeStyle|mergeMultiStyle)\(\s*([^{)]+)/)?.[2]
      ?.trim()
      .replace(/,$/, "")
      .split(",")
      .map((value) => value.replace(/pickStyle\(/, "").trim())
      .filter((value) => /^[A-Z]/.test(value)) ?? []

  if (!componentNames.length) return

  return componentNames.map((name) => {
    let path: string = paths[toKebabCase(name)] ?? ""

    path = "/" + path.replace(/^contents\//, "")

    return { name, path }
  })
}

const generateContent = ({
  data,
  locale,
  paths,
  theme,
}: {
  data: Data
  locale: Locale
  paths: { [key: string]: string }
  theme: string
}) => {
  const componentName = data.title
  const isMulti = getIsMulti(theme)
  const baseComponents = getBaseComponents(theme, paths)

  theme = theme.replace(
    /import(\s+type)?\s+{[^}]*}\s+from\s+['"][^'"]+['"]\s*/g,
    "",
  )

  let content = "```ts\n" + theme + "\n```"

  content =
    LOCALE_DESC_MAP[locale]({
      baseComponents,
      componentName,
      isMulti,
    }) + content

  return content
}

const generateMDXFiles: p.RequiredRunner =
  (themes: { [key: string]: string }, paths: { [key: string]: string }) =>
  async (p, s) => {
    s.start(`Writing files "${DIST_PATH}"`)

    let notPathsList: string[] = []
    let wroteList: string[] = []

    await Promise.all(
      Object.entries(themes).map(async ([name, theme]) => {
        const dirPath = paths[name]

        if (!dirPath) {
          notPathsList = [...notPathsList, toPascalCase(name)]

          return
        }

        await Promise.all(
          locales.map(async (locale) => {
            let data = await generateFrontMatter(
              path.join(dirPath, getMDXFileName("index", locale)),
              path.join(dirPath, getMDXFileName("theming", locale)),
            )

            data = { ...data, order: 2, tab: LOCALE_TAB_MAP[locale] }

            const content = generateContent({
              data,
              locale,
              paths,
              theme,
            })

            const outPath = path.join(
              dirPath,
              getMDXFileName("theming", locale),
            )

            await writeMDXFile(outPath, data, content)

            wroteList = [...wroteList, `${toPascalCase(name)} ${outPath}`]
          }),
        )
      }),
    )

    s.stop(`Wrote files "${DIST_PATH}"`)

    if (notPathsList.length) {
      const message = notPathsList
        .map((item) => `- ${item}`)
        .join("\n")
        .trim()

      p.note(message, `Not found component theme paths`)
    }

    if (wroteList.length) {
      const message = wroteList
        .map((item) => `- ${item}`)
        .join("\n")
        .trim()

      p.note(message, `Generated component themes`)
    }
  }

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI component themes`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const themes = await getThemes()(p, s)
    const paths = await getPaths()(p, s)

    await generateMDXFiles(themes, paths)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
