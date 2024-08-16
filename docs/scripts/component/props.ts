import { readdir, readFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { omitObject } from "utils/object"
import { toCamelCase } from "utils/string"
import { getMDXFileName, writeMDXFile } from "scripts/utils"
import { locales, type Locale } from "utils/i18n"
import { generateFrontMatter, getDirectoryPaths } from "./utils"

config({ path: CONSTANT.PATH.ENV })

type Doc = Record<string, Record<string, Props>>
type Props = {
  type?: string
  required?: boolean
  description?: string
  deprecated?: string
  defaultValue?: string
  see?: string
}

const SOURCE_PATH = path.join(CONSTANT.PATH.ROOT, "packages", "components")
const DIST_PATH = path.join("contents", "components")
const LOCALE_TAB_MAP = {
  en: "Props",
  ja: "Props",
}
const LOCALE_TITLE_MAP = {
  en: "Props",
  ja: "Props",
}
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
  calendar: [
    "date-picker",
    "multi-date-picker",
    "range-date-picker",
    "month-picker",
    "year-picker",
  ],
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
  "form-control": [
    {
      parent: "form-control",
      children: ["label", "helper-message", "error-message"],
    },
    {
      parent: "fieldset",
      children: ["legend"],
    },
  ],
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
  charts: [
    { parent: "bar-chart", children: ["bar"] },
    { parent: "area-chart", children: ["area"] },
    { parent: "line-chart", children: ["line", "dot"] },
    { parent: "radar-chart", children: ["radar"] },
    { parent: "pie-chart", children: ["cell"] },
    "donut-chart",
  ],
}

export const getDocs: p.RequiredRunner = () => async (p, s) => {
  s.start(`Getting the Yamada UI docs`)

  const dirents = await readdir(SOURCE_PATH, { withFileTypes: true })

  const docs: Record<string, Doc> = {}

  let notDocsList: string[] = []

  await Promise.all(
    dirents.map(async (dirent) => {
      try {
        if (!dirent.isDirectory()) throw new Error("Not component folder")

        let { name, path } = dirent

        const content = await readFile(`${path}/${name}/DOCS.json`, "utf-8")

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
        } else {
          if (Object.keys(doc).length) docs[name] = doc
        }
      } catch {
        notDocsList = [...notDocsList, dirent.name]
      }
    }),
  )

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

const getPaths: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the content paths`)

  const paths = getDirectoryPaths(DIST_PATH)

  s.stop(`Got the content paths`)

  return paths
}

const generateContent = async ({
  doc,
  locale,
}: {
  doc: Doc
  locale: Locale
}) => {
  const content = [`## ${LOCALE_TITLE_MAP[locale]}`]

  Object.entries(doc).map(([title, props]) => {
    content.push(`\n### ${title}Props\n`)

    Object.entries(props).map(
      async ([
        name,
        { type, required, description, deprecated, defaultValue, see },
      ]) => {
        if (typeof type === "string") {
          type = type.replace(/<\s+/g, "<").replace(/\s+>/g, ">")
        }

        if (typeof defaultValue === "string" && description) {
          description = description.replace(/\n/g, "\\n")
        }

        const props = [
          `id="${title.toLowerCase()}-${name.toLowerCase()}"`,
          `name="${name}"`,
        ]

        if (required) props.push("required")

        if (type !== undefined) props.push(`type='${type}'`)

        if (description !== undefined) {
          if (typeof description === "string") {
            description = description.replace(/\n/g, "\\n")
            description = description.replace(/"/g, '\\"')
          }

          props.push(`description={"${description}"}`)
        }

        if (deprecated !== undefined) {
          if (typeof deprecated === "string") {
            deprecated = deprecated.replace(/\n/g, "\\n")
            deprecated = deprecated.replace(/"/g, '\\"')
          }

          props.push(`deprecated={"${deprecated}"}`)
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

const generateMDXFiles: p.RequiredRunner =
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
          locales.map(async (locale) => {
            let data = await generateFrontMatter(
              path.join(dirPath, getMDXFileName("index", locale)),
              path.join(dirPath, getMDXFileName("props", locale)),
            )

            data = { ...data, tab: LOCALE_TAB_MAP[locale] }

            const content = await generateContent({ doc, locale })

            const outPath = path.join(dirPath, getMDXFileName("props", locale))

            await writeMDXFile(outPath, data, content)

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

    await generateMDXFiles(docs, paths)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
