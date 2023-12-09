import { readFile, readdir, writeFile } from "fs/promises"
import path from "path"
import { Octokit } from "@octokit/rest"
import chalk from "chalk"
import { config } from "dotenv"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
import { CONSTANT } from "constant"
import { prettier } from "libs/prettier"
import { toKebabCase } from "utils/assertion"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type Input = string | Buffer
type Data = GrayMatterFile<Input>["data"]
type Content = GrayMatterFile<Input>["content"]
type Locale = (typeof LOCALES)[number]
type Options = {
  isMulti: boolean
  componentName: string
  baseComponents?: {
    name: string
    path: string
  }[]
}

const SOURCE_PATH = path.join("packages", "theme", "src", "components")
const DIST_PATH = path.join("contents", "components")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const LOCALE_TAB_MAP = {
  en: "Theming",
  ja: "テーマ",
}
const LOCALE_DESC_MAP = {
  en: ({ isMulti, componentName, baseComponents }: Options) => {
    let content = [
      "## Theming",
      `The \`${componentName}\` is a [${
        isMulti ? "multi" : "single"
      } part component](/styled-system/theming/component-style#${
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
  ja: ({ isMulti, componentName, baseComponents }: Options) => {
    let content = [
      "## テーマ",
      `\`${componentName}\`は、[${
        isMulti ? "複数" : "単一"
      }パーツのコンポーネント](/styled-system/theming/component-style#${
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
const REPO_REQUEST_PARAMETERS = {
  owner: "hirotomoyamada",
  repo: "yamada-ui",
  path: SOURCE_PATH,
  ref: "main",
}

const getThemes = async () => {
  const { data } = await octokit.repos.getContent(REPO_REQUEST_PARAMETERS)

  const themes: Record<string, string> = {}

  if (Array.isArray(data)) {
    await Promise.all(
      data.map(async ({ name, path }) => {
        const { data } = await octokit.repos.getContent({
          ...REPO_REQUEST_PARAMETERS,
          path,
        })

        if ("content" in data) {
          const content = Buffer.from(data.content, "base64").toString("utf-8")

          name = name.replace(".ts", "")

          if (name !== "index") themes[name] = content
        }
      }),
    )
  }

  return themes
}

const getDirs = async (path: string) => {
  let dirents = await readdir(path, { withFileTypes: true })

  dirents = dirents.filter((dirent) => dirent.isDirectory())

  return dirents
}

const getPaths = async () => {
  const categoryDirs = await getDirs(DIST_PATH)
  const componentDirs = await Promise.all(
    categoryDirs.map(
      async ({ name, path }) => await getDirs(`${path}/${name}`),
    ),
  )

  const paths = componentDirs
    .flat()
    .reduce<Record<string, string>>((prev, { name, path }) => {
      prev[name] = `${path}/${name}`

      return prev
    }, {})

  return paths
}

const getMdxFile = async (path: string) => {
  const file = await readFile(path, "utf8")

  return matter(file)
}

const generateData = async (path: string, overrideData?: Data) => {
  let { data } = await getMdxFile(path)

  delete data.is_tabs

  data = { ...data, ...overrideData }

  return data
}

const getIsMulti = (content: string) => {
  const reg = /import(\s+type)?\s+{\s*(ComponentMultiStyle)\s*}\s+from/g

  return !![...content.matchAll(reg)].length
}

const getBaseComponents = (content: string, paths: Record<string, string>) => {
  const componentNames =
    content
      .match(/(mergeStyle|mergeMultiStyle)\(\s*([^{)]+)/)?.[2]
      .trim()
      .replace(/,$/, "")
      .split(",")
      .map((value) => value.replace(/pickStyle\(/, "").trim())
      .filter((value) => /^[A-Z]/.test(value)) ?? []

  if (!componentNames.length) return

  return componentNames.map((name) => {
    let path: string | undefined = paths[toKebabCase(name ?? "")]

    if (path) path = "/" + path.replace(/^contents\//, "")

    return { name, path }
  })
}

const generateContent = async ({
  data,
  content,
  locale,
  paths,
}: {
  data: Data
  content: string
  locale: Locale
  paths: Record<string, string>
}) => {
  const componentName = data.title
  const isMulti = getIsMulti(content)
  const baseComponents = getBaseComponents(content, paths)

  content = content.replace(
    /import(\s+type)?\s+{[^}]*}\s+from\s+['"][^'"]+['"]\s*/g,
    "",
  )

  content = "```ts\n" + content + "\n```"

  content =
    LOCALE_DESC_MAP[locale]({
      isMulti,
      componentName,
      baseComponents,
    }) + content

  return content
}

const getMdxFileName = (fileName: string, locale: Locale) => {
  if (locale !== CONSTANT.I18N.DEFAULT_LOCALE) fileName += `.${locale}`

  return fileName + ".mdx"
}

const writeMdxFile = async (path: string, data: Data, content: Content) => {
  let file = matter.stringify(content, data)

  file = await prettier(file)

  await writeFile(path, file)
}

const generateMdxFiles = (
  themes: Record<string, string>,
  paths: Record<string, string>,
) =>
  Promise.all(
    Object.entries(themes).map(async ([name, content]) => {
      const dirPath = paths[name]

      if (!dirPath) return

      await Promise.all(
        LOCALES.map(async (locale) => {
          const data = await generateData(
            path.join(dirPath, getMdxFileName("index", locale)),
            { tab: LOCALE_TAB_MAP[locale] },
          )
          const resolvedContent = await generateContent({
            data,
            content,
            locale,
            paths,
          })

          const outPath = path.join(dirPath, getMdxFileName("theming", locale))

          await writeMdxFile(outPath, data, resolvedContent)

          console.log(chalk.green(`[theming]: Generated ${outPath}`))
        }),
      )
    }),
  )

const main = async () => {
  const themes = await getThemes()
  const paths = await getPaths()

  await generateMdxFiles(themes, paths)
}

main()
