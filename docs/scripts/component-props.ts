import { readdir, readFile, writeFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import { Octokit } from "@octokit/rest"
import c from "chalk"
import { config } from "dotenv"
import type { GrayMatterFile } from "gray-matter"
import matter from "gray-matter"
// import type { ChatCompletionMessageParam } from "openai/resources"
import { CONSTANT } from "constant"
// import { openai } from "libs/openai"
import { prettier } from "libs/prettier"
import { toCamelCase } from "utils/assertion"
import { omitObject } from "utils/object"
// import { wait } from "utils/async"

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
const OVERRIDE_PATHS: Record<
  string,
  (string | { parent: string; children: string[] })[]
> = {
  layouts: [
    "aspect-ratio",
    "box",
    "center",
    "container",
    "divider",
    "flex",
    { parent: "grid", children: ["grid-item"] },
    "spacer",
    "stack",
  ],
  select: ["multi-select"],
  calendar: ["date-picker", "month-picker"],
  slider: ["range-slider"],
  table: ["paging-table"],
  autocomplete: ["multi-autocomplete"],
  modal: [
    {
      parent: "dialog",
      children: [
        "dialog-header",
        "dialog-body",
        "dialog-footer",
        "dialog-overlay",
        "dialog-close-button",
      ],
    },
    {
      parent: "drawer",
      children: [
        "drawer-header",
        "drawer-body",
        "drawer-footer",
        "drawer-overlay",
        "drawer-close-button",
      ],
    },
  ],
  typography: ["heading", "text"],
  transitions: ["collapse", "fade", "scale-fade", "slide-fade", "slide"],
  progress: ["circle-progress"],
  "color-picker": [
    "color-selector",
    "hue-slider",
    "alpha-slider",
    "saturation-slider",
    "color-swatch",
  ],
  button: ["icon-button"],
  link: [{ parent: "link-box", children: ["link-overlay"] }],
}
const REPO_REQUEST_PARAMETERS = {
  owner: "yamada-ui",
  repo: "yamada-ui",
  path: SOURCE_PATH,
  ref: "main",
}

export const getDocs: p.RequiredRunner = () => async (p, s) => {
  s.start(`Getting the Yamada UI docs`)

  const { data } = await octokit.repos.getContent(REPO_REQUEST_PARAMETERS)

  const docs: Record<string, Doc> = {}

  let notDocsList: string[] = []

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

            let doc = JSON.parse(content)

            if (Object.keys(OVERRIDE_PATHS).includes(name)) {
              const names = OVERRIDE_PATHS[name]

              names.forEach((name) => {
                if (typeof name === "string") {
                  const displayName = toCamelCase(name)
                  const nestedDoc = doc[displayName]

                  if (nestedDoc) docs[name] = { [displayName]: nestedDoc }

                  doc = omitObject(doc, [displayName])
                } else {
                  const { parent, children } = name

                  const displayName = toCamelCase(parent)
                  const nestedDoc = doc[displayName]

                  if (nestedDoc) docs[parent] = { [displayName]: nestedDoc }

                  children.forEach((child) => {
                    const displayName = toCamelCase(child)
                    const nestedDoc = doc[displayName]

                    if (nestedDoc)
                      docs[parent] = {
                        ...docs[parent],
                        [displayName]: nestedDoc,
                      }

                    doc = omitObject(doc, [displayName])
                  })

                  doc = omitObject(doc, [displayName])
                }
              })
            }

            if (Object.keys(doc).length) docs[name] = doc
          }
        } catch (e) {
          notDocsList = [...notDocsList, name]
        }
      }),
    )
  }

  s.stop(`Got the Yamada UI docs`)

  if (notDocsList.length) {
    const message = notDocsList
      .map((item) => `- ${item}`)
      .join("\n")
      .trim()

    p.note(message, `Not found package docs`)
  }

  return docs
}

const getDirs = async (path: string) => {
  let dirents = await readdir(path, { withFileTypes: true })

  dirents = dirents.filter((dirent) => dirent.isDirectory())

  return dirents
}

const getPaths: p.RequiredRunner = () => async (p, s) => {
  s.start(`Getting the content paths`)

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

  s.stop(`Got the content paths`)

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
    content.push(`\n### ${title}Props\n`)

    Object.entries(props).map(
      async ([name, { type, required, description, defaultValue, see }]) => {
        if (typeof type === "string") {
          type = type.replace(/<\s+/g, "<").replace(/\s+>/g, ">")
        }

        if (typeof defaultValue === "string") {
          description = description.replace(/\n/g, "\\n")
        }

        const props = [
          `id="${title.toLowerCase()}-${name.toLowerCase()}"`,
          `name="${name}"`,
        ]

        if (required) props.push("required")

        if (type !== undefined) props.push(`type='${type}'`)

        if (description !== undefined) {
          if (typeof description === "string")
            description = description.replace(/\n/g, "\\n")

          props.push(`description={"${description}"}`)
        }

        if (defaultValue !== undefined) {
          if (typeof defaultValue === "string")
            defaultValue = defaultValue.replace(/"/g, '\\"')

          props.push(`defaultValue={"${defaultValue}"}`)
        }

        if (see !== undefined) props.push(`docs="${see}"`)

        content.push(`<PropsCard ${props.join("\n")} />\n`)
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

const generateMdxFiles: p.RequiredRunner =
  (docs: Record<string, Doc>, paths: Record<string, string>) =>
  async (p, s) => {
    s.start(`Writing files "${DIST_PATH}"`)

    let notPathsList: string[] = []
    let notPropsList: string[] = []
    let wroteList: string[] = []

    await Promise.all(
      Object.entries(docs).map(async ([name, doc]) => {
        const dirPath = paths[name]

        if (!dirPath) {
          notPathsList = [...notPathsList, toCamelCase(name)]

          return
        }

        if (
          !Object.values(doc).some((content) => Object.keys(content).length)
        ) {
          notPropsList = [...notPropsList, toCamelCase(name)]

          return
        }

        await Promise.all(
          LOCALES.map(async (locale) => {
            const data = await generateData(
              path.join(dirPath, getMdxFileName("index", locale)),
              { tab: LOCALE_TAB_MAP[locale] },
            )

            const resolvedContent = await generateContent({ doc, locale })

            const outPath = path.join(dirPath, getMdxFileName("props", locale))

            await writeMdxFile(outPath, data, resolvedContent)

            wroteList = [...wroteList, `${toCamelCase(name)} ${outPath}`]
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

      p.note(message, `Not found component paths`)
    }

    if (notPropsList.length) {
      const message = notPropsList
        .map((item) => `- ${item}`)
        .join("\n")
        .trim()

      p.note(message, `Not found component props`)
    }

    if (wroteList.length) {
      const message = wroteList
        .map((item) => `- ${item}`)
        .join("\n")
        .trim()

      p.note(message, `Generated component props`)
    }
  }

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI component props`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const docs = await getDocs()(p, s)
    const paths = await getPaths()(p, s)

    await generateMdxFiles(docs, paths)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
