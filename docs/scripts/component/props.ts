import type { Locale } from "utils/i18n"
import * as p from "@clack/prompts"
import { omitObject, toPascalCase } from "@yamada-ui/utils"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { readdir, readFile } from "fs/promises"
import path from "path"
import { getMDXFileName, writeMDXFile } from "scripts/utils"
import { locales } from "utils/i18n"
import { generateFrontMatter, getDirectoryPaths } from "./utils"

config({ path: CONSTANT.PATH.ENV })

interface Doc {
  [key: string]: { [key: string]: Props }
}
interface Props {
  type?: string
  defaultValue?: string
  deprecated?: string
  description?: string
  required?: boolean
  see?: string
}

const SOURCE_PATH = path
  .join(CONSTANT.PATH.ROOT, "packages", "components")
  .replaceAll(/\\/g, "/")
const DIST_PATH = path.join("contents", "components").replaceAll(/\\/g, "/")
const LOCALE_TAB_MAP = {
  en: "Props",
  ja: "Props",
}
const LOCALE_TITLE_MAP = {
  en: "Props",
  ja: "Props",
}
const OVERRIDE_PATHS: {
  [key: string]: ({ children: string[]; parent: string } | string)[]
} = {
  autocomplete: ["autocomplete", "multi-autocomplete"],
  button: [{ children: ["button-group"], parent: "button" }, "icon-button"],
  calendar: [
    "calendar",
    "date-picker",
    "multi-date-picker",
    "range-date-picker",
    "month-picker",
    "year-picker",
  ],
  charts: [
    { children: ["bar"], parent: "bar-chart" },
    { children: ["area"], parent: "area-chart" },
    { children: ["line", "dot"], parent: "line-chart" },
    { children: ["radar"], parent: "radar-chart" },
    { children: ["cell"], parent: "pie-chart" },
    { children: ["chart-label"], parent: "radial-chart" },
    "donut-chart",
  ],
  checkbox: [
    {
      children: [
        "checkbox-group",
        "checkbox-icon",
        "use-checkbox",
        "use-checkbox-group",
      ],
      parent: "checkbox",
    },
    {
      children: [
        "checkbox-card-group",
        "checkbox-card-label",
        "checkbox-card-description",
        "checkbox-card-addon",
      ],
      parent: "checkbox-card",
    },
  ],
  "color-picker": [
    "color-picker",
    "color-selector",
    "hue-slider",
    "alpha-slider",
    "saturation-slider",
    "color-swatch",
  ],
  "form-control": [
    {
      children: ["label", "helper-message", "error-message"],
      parent: "form-control",
    },
    {
      children: ["legend"],
      parent: "fieldset",
    },
  ],
  format: ["format-number", "format-byte"],
  image: ["image", "native-image", "picture"],
  layouts: [
    "aspect-ratio",
    "box",
    "center",
    "container",
    "divider",
    "flex",
    { children: ["grid-item"], parent: "grid" },
    "spacer",
    "stack",
    "bleed",
    "float",
    "separator",
  ],
  link: ["link", { children: ["link-overlay"], parent: "link-box" }],
  modal: [
    {
      children: [
        "modal-header",
        "modal-body",
        "modal-footer",
        "modal-overlay",
        "modal-close-button",
      ],
      parent: "modal",
    },
    {
      children: [
        "dialog-header",
        "dialog-body",
        "dialog-footer",
        "dialog-overlay",
        "dialog-close-button",
      ],
      parent: "dialog",
    },
    {
      children: [
        "drawer-header",
        "drawer-body",
        "drawer-footer",
        "drawer-overlay",
        "drawer-close-button",
      ],
      parent: "drawer",
    },
  ],
  progress: ["progress", "circle-progress"],
  radio: [
    {
      children: ["radio-group", "use-radio", "use-radio-group"],
      parent: "radio",
    },
    {
      children: [
        "radio-card-group",
        "radio-card-label",
        "radio-card-description",
        "radio-card-addon",
      ],
      parent: "radio-card",
    },
  ],
  select: ["select", "multi-select"],
  slider: ["slider", "range-slider"],
  table: ["table", "paging-table"],
  transitions: [
    "collapse",
    "fade",
    "scale-fade",
    "slide-fade",
    "slide",
    "airy",
    "rotate",
    "flip",
  ],
  typography: [
    "heading",
    "text",
    "code",
    "em",
    {
      children: ["blockquote-content", "blockquote-caption", "blockquote-cite"],
      parent: "blockquote",
    },
  ],
}

export const getDocs: p.RequiredRunner = () => async (p, s) => {
  s.start(`Getting the Yamada UI docs`)

  const dirents = await readdir(SOURCE_PATH, { withFileTypes: true })

  const docs: { [key: string]: Doc } = {}

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

          names?.forEach((name) => {
            if (typeof name === "string") {
              const displayName = toPascalCase(name)
              const nestedDoc = doc[displayName]

              if (nestedDoc) docs[name] = { [displayName]: nestedDoc }

              doc = omitObject(doc, [displayName])
            } else {
              const { children, parent } = name

              const displayName = toPascalCase(parent)
              const nestedDoc = doc[displayName]

              if (nestedDoc) docs[parent] = { [displayName]: nestedDoc }

              children.forEach((child) => {
                const displayName = toPascalCase(child)
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

const generateContent = ({ doc, locale }: { doc: Doc; locale: Locale }) => {
  const content = [`## ${LOCALE_TITLE_MAP[locale]}`]

  Object.entries(doc).map(([title, props]) => {
    content.push(`\n### ${title}Props\n`)

    Object.entries(props).map(
      ([
        name,
        { type, defaultValue, deprecated, description, required, see },
      ]) => {
        const props = [
          `id="${title.toLowerCase()}-${name.toLowerCase()}"`,
          `name="${name}"`,
        ]

        if (required) props.push("required")

        if (type !== undefined) {
          if (typeof type === "string") {
            type = type.replace(/<\s+/g, "<").replace(/\s+>/g, ">")
          }

          props.push(`type='${type}'`)
        }

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
          if (typeof defaultValue === "string") {
            defaultValue = defaultValue.replace(/"/g, '\\"')
          }

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
  (docs: { [key: string]: Doc }, paths: { [key: string]: string }) =>
  async (p, s) => {
    s.start(`Writing files "${DIST_PATH}"`)

    let notPathsList: string[] = []
    let notPropsList: string[] = []
    let wroteList: string[] = []

    await Promise.all(
      Object.entries(docs).map(async ([name, doc]) => {
        const dirPath = paths[name]

        if (!dirPath) {
          notPathsList = [...notPathsList, toPascalCase(name)]

          return
        }

        if (
          !Object.values(doc).some((content) => Object.keys(content).length)
        ) {
          notPropsList = [...notPropsList, toPascalCase(name)]

          return
        }

        await Promise.all(
          locales.map(async (locale) => {
            let data = await generateFrontMatter(
              path.join(dirPath, getMDXFileName("index", locale)),
              path.join(dirPath, getMDXFileName("props", locale)),
            )

            data = { ...data, order: 1, tab: LOCALE_TAB_MAP[locale] }

            const content = generateContent({ doc, locale })

            const outPath = path.join(dirPath, getMDXFileName("props", locale))

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
