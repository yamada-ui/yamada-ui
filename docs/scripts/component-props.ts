import { readdir, readFile, writeFile } from "fs/promises"
import path from "path"
import { Octokit } from "@octokit/rest"
import chalk from "chalk"
import { config } from "dotenv"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
// import type { ChatCompletionMessageParam } from "openai/resources"
import { CONSTANT } from "constant"
// import { openai } from "libs/openai"
import { prettier } from "libs/prettier"
// import { wait } from "utils/assertion"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

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
  see?: string
}

const SOURCE_PATH = path.join("packages", "components")
const DIST_PATH = path.join("contents", "components")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const LOCALE_TAB_MAP = {
  en: "Props",
  ja: "Props",
}
const LOCALE_TITLE_MAP = {
  en: "Props",
  ja: "Props",
}
// const LOCALE_MAP = {
//   ja: "Japanese",
//   en: "English",
// }
const REPO_REQUEST_PARAMETERS = {
  owner: "hirotomoyamada",
  repo: "yamada-ui",
  path: SOURCE_PATH,
  ref: "main",
}

export const getDocs = async () => {
  const { data } = await octokit.repos.getContent(REPO_REQUEST_PARAMETERS)

  const docs: Record<string, Doc> = {}

  if (Array.isArray(data)) {
    await Promise.all(
      data.map(async ({ name, path }) => {
        try {
          path += "/DOCS.json"

          const { data } = await octokit.repos.getContent({
            ...REPO_REQUEST_PARAMETERS,
            path,
          })

          if ("content" in data) {
            const content = Buffer.from(data.content, "base64").toString(
              "utf-8",
            )

            docs[name] = JSON.parse(content)
          }
        } catch (e) {
          console.log(`[props]: Not found ${name}`)
        }
      }),
    )
  }

  return docs
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

// const translateDescription = async (
//   locale: Locale,
//   content: string,
//   retry: number = 1,
// ) => {
//   try {
//     const from = `from ${LOCALE_MAP[locale === "en" ? "ja" : "en"]}`
//     const to = `to ${LOCALE_MAP[locale]}`

//     const messages: ChatCompletionMessageParam[] = [
//       {
//         role: "system",
//         content: [
//           `Please translate the text of the a JSDoc description that I will send you ${from} ${to}. Please note the following points:`,
//           `The text you send will be saved as a JSDoc description. Therefore, please output only the translated text.`,
//         ].join("\n"),
//       },
//       { role: "user", content },
//     ]

//     const { choices } = await openai.chat.completions.create({
//       model: "gpt-4-1106-preview",
//       messages,
//       temperature: 0,
//     })

//     return choices[0].message?.content
//   } catch (e) {
//     await wait(3000)

//     retry += 1

//     return await translateDescription(locale, content, retry)
//   }
// }

const generateContent = async ({
  doc,
  locale,
}: {
  doc: Doc
  locale: Locale
}) => {
  const content = [`## ${LOCALE_TITLE_MAP[locale]}`]

  // if (locale !== "en") {
  //   await Promise.all(
  //     Object.entries(doc).map(async ([title, props]) => {
  //       await Promise.all(
  //         Object.entries(props).map(async ([name, { description }]) => {
  //           if (!description) return

  //           description = await translateDescription(locale, description)

  //           doc[title][name]["description"] = description
  //         }),
  //       )
  //     }),
  //   )
  // }

  Object.entries(doc).map(([title, props]) => {
    content.push(`\n### ${title} Props\n`)

    Object.entries(props).map(
      async ([name, { type, required, description, defaultValue, see }]) => {
        if (typeof type === "string") {
          type = type.replace(/<\s+/g, "<").replace(/\s+>/g, ">")
        }

        if (typeof description === "string") {
          description = description.replace(/\n/g, "\\n")
        }

        const props = [`name="${name}"`]

        if (required) props.push("required")
        if (type !== undefined) props.push(`type='${type}'`)
        if (description !== undefined)
          props.push(`description={"${description}"}`)
        if (defaultValue !== undefined)
          props.push(`defaultValue="${defaultValue}"`)
        if (see !== undefined) props.push(`docs="${see}"`)

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

          console.log(chalk.green(`[props]: Generated ${outPath}`))
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
