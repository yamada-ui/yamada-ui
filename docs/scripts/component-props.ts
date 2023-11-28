import { readdir, readFile, writeFile } from "fs/promises"
import path from "path"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
import { CONSTANT } from "constant"
import { prettier } from "libs/prettier"

type Input = string | Buffer
type Data = GrayMatterFile<Input>["data"]
type Content = GrayMatterFile<Input>["content"]
type Locale = (typeof LOCALES)[number]
type Doc = Record<string, Record<string, Props>>
type Props = {
  type?: string
  required?: boolean
  description?: string
  defaultValue?: string
}

const DOCS_DIR_PATH = path.join(".docs")
const COMPONENT_DIR_PATH = path.join("contents", "components")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const LOCALE_TAB_MAP = {
  en: "Props",
  ja: "Props",
}
const LOCALE_TITLE_MAP = {
  en: "Props",
  ja: "Props",
}

const getDocs = async () => {
  const fileNames = await readdir(DOCS_DIR_PATH)

  const docMap = await Promise.all(
    fileNames.map(async (fileName) => {
      const content = await readFile(path.join(DOCS_DIR_PATH, fileName), "utf8")
      const doc = JSON.parse(content) as Doc

      const name = fileName.replace(".json", "")

      return { name, doc }
    }),
  )

  const docs = docMap.reduce<Record<string, Doc>>(
    (prev, { name, doc }) => ({ ...prev, [name]: doc }),
    {},
  )

  return docs
}

const getDirs = async (path: string) => {
  let dirents = await readdir(path, { withFileTypes: true })

  dirents = dirents.filter((dirent) => dirent.isDirectory())

  return dirents
}

const getPaths = async () => {
  const categoryDirs = await getDirs(COMPONENT_DIR_PATH)
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

const generateContent = async ({
  doc,
  locale,
}: {
  doc: Doc
  locale: Locale
}) => {
  const content = [`## ${LOCALE_TITLE_MAP[locale]}`]

  Object.entries(doc).forEach(([name, props]) => {
    content.push(`\n### ${name} Props\n`)

    Object.entries(props).forEach(
      ([name, { type, required, description, defaultValue }]) => {
        if (typeof type === "string") {
          type = type.replace(/<\s+/g, "<").replace(/\s+>/g, ">")
        }

        if (typeof defaultValue === "string") {
          defaultValue = defaultValue
            .replace(/<\s+/g, "<")
            .replace(/\s+>/g, ">")
        }

        const props = [`name="${name}"`]

        if (required) props.push("required")
        if (type) props.push(`type='${type}'`)
        if (description) props.push(`description='${description}'`)

        content.push(`<PropsCard ${props.join("\n")} />`)
      },
    )
  })

  return content.join("\n")
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
  docs: Record<string, Doc>,
  paths: Record<string, string>,
) =>
  Promise.all(
    Object.entries(docs).map(async ([name, doc]) => {
      const dirPath = paths[name]

      if (!dirPath) return

      await Promise.all(
        LOCALES.map(async (locale) => {
          const data = await generateData(
            path.join(dirPath, getMdxFileName("index", locale)),
            { tab: LOCALE_TAB_MAP[locale] },
          )
          const resolvedContent = await generateContent({ doc, locale })

          const outPath = path.join(dirPath, getMdxFileName("props", locale))

          await writeMdxFile(outPath, data, resolvedContent)

          console.log(`[props]: Generated ${outPath}`)
        }),
      )
    }),
  )

const main = async () => {
  const docs = await getDocs()
  const paths = await getPaths()

  await generateMdxFiles(docs, paths)
}

main()
