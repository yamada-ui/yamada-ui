import { readFile, writeFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import matter from "gray-matter"
import type { GrayMatterFile } from "gray-matter"
import { prettier } from "libs/prettier"
import type { JSDoc, SourceFile, TypeAliasDeclaration } from "typescript"
import {
  ScriptTarget,
  createSourceFile,
  isIdentifier,
  isObjectLiteralExpression,
  isPropertyAssignment,
  isPropertySignature,
  isTypeAliasDeclaration,
  isTypeLiteralNode,
  isVariableStatement,
} from "typescript"
import { toKebabCase } from "utils/string"

config({ path: CONSTANT.PATH.ENV })

type Input = string | Buffer
type Data = GrayMatterFile<Input>["data"]
type Content = GrayMatterFile<Input>["content"]
type Locale = (typeof LOCALES)[number]
type Type = "style" | "pseudo"
type Props = Record<
  string,
  {
    shorthands?: string[]
    properties: string[]
    token?: string
    urls?: string[]
    deprecated?: boolean
  }
>
type JSDocs = Record<string, { urls?: string[]; deprecated?: boolean }>

const SOURCE_STYLE_PROPS_PATH = path.join(
  CONSTANT.PATH.ROOT,
  "packages",
  "core",
  "src",
  "styles.ts",
)
const SOURCE_PSEUDO_PROPS_PATH = path.join(
  CONSTANT.PATH.ROOT,
  "packages",
  "core",
  "src",
  "pseudos.ts",
)
const DIST_PATH = path.join("contents", "styled-system")
const LOCALES = CONSTANT.I18N.LOCALES.map(({ value }) => value)
const CONTENT_HEADER = {
  en: [
    "`Style props` is a method to change the style of a component just by passing `props` to the component. It also provides many useful shorthands, improving development efficiency.",
  ],
  ja: [
    "`Style props`は、コンポーネントに`props`を渡すだけでコンポーネントのスタイルを変更する方法です。また、多くの便利なショートハンドを提供しており、開発効率を向上させています。",
  ],
}
const CONTENT_FOOTER = {
  en: [
    ":::note status=warning",
    "When using `blur`, `brightness`, `backdropBlur`, `backdropBrightness`, etc., you need to set `filter` and `backdropFilter` to `auto`.",
    ":::",
    "",
    ":::note status=warning",
    "When using `translateX`, `scale`, `skewX`, etc., you need to set `auto` or `auto-3d` to `transform`.",
    ":::",
  ],
  ja: [
    ":::note status=warning",
    "`blur`・`brightness`・`backdropBlur`・`backdropBrightness`などを使用する場合は、`filter`・`backdropFilter`に`auto`を設定する必要があります。",
    ":::",
    "",
    ":::note status=warning",
    "`translateX`・`scale`・`skewX`などを使用する場合は、`transform`に`auto`または`auto-3d`を設定する必要があります。",
    ":::",
  ],
}

const isStringObject = (value: string) => /^{|}$/.test(value)

const hasJSDoc = (node: any): node is { jsDoc: JSDoc[] } => "jsDoc" in node

const sortObject = (obj: Record<string, any>) =>
  Object.keys(obj)
    .sort()
    .reduce(
      (prev, key) => ({ ...prev, [key]: obj[key] }),
      {} as Record<string, any>,
    )

const getProps: p.RequiredRunner = (type: Type) => async (_, s) => {
  s.start(`Getting the Yamada UI ${type} props`)

  try {
    const path =
      type === "style" ? SOURCE_STYLE_PROPS_PATH : SOURCE_PSEUDO_PROPS_PATH

    const data = await readFile(path, "utf-8")

    s.stop(`Got the Yamada UI ${type} props`)

    return data
  } catch {
    throw new Error(`Failed get the ${type} props`)
  }
}

const getJSDocs = (node: TypeAliasDeclaration) => (sourceFile: SourceFile) => {
  const type = node.type

  const props: JSDocs = {}

  if (node.name.escapedText !== "StyleProps") return props
  if (!isTypeLiteralNode(type)) return props

  type.members.forEach((member) => {
    if (!isPropertySignature(member)) return

    const data: JSDocs[number] = {}

    const prop = member.name.getText(sourceFile)

    if (!hasJSDoc(member)) return

    member.jsDoc.forEach(({ tags }) =>
      tags?.forEach(({ tagName, comment }) => {
        const tag = tagName.getText(sourceFile)

        if (tag === "deprecated") data.deprecated = true
        if (tag === "see") data.urls = [...(data.urls ?? []), comment as string]
      }),
    )

    props[prop] = data
  })

  return props
}

const getData = (prop: string, value: string) => {
  if (isStringObject(value)) {
    value = value.replace(/\s*"transform":.*(?=,|\})/s, "")
    value = value.replace(/,\s*\n?\}/g, "}")

    const data = JSON.parse(value)

    let { properties, token, isSkip } = data

    if (isSkip) return

    if (properties) {
      if (Array.isArray(properties)) {
        properties = properties.map((property) => toKebabCase(property))
      } else {
        properties = [toKebabCase(properties)]
      }

      return { properties, token }
    } else {
      return { properties: [toKebabCase(prop)], token }
    }
  } else {
    return { properties: [toKebabCase(prop)] }
  }
}

const parseProps: p.RequiredRunner =
  (type: Type, source: string) => async (_, s) => {
    s.start(`Parsing the ${type} props`)

    const targetStatements = ["standardStyles", "shorthandStyles", "pseudos"]
    const sourceFile = createSourceFile("props.ts", source, ScriptTarget.Latest)

    const props: Props = {}
    let jsDocs: JSDocs = {}

    sourceFile.forEachChild((node) => {
      if (isTypeAliasDeclaration(node)) {
        jsDocs = getJSDocs(node)(sourceFile)
      }

      if (isVariableStatement(node)) {
        const declarations = node.declarationList.declarations

        for (const { name, initializer } of declarations) {
          if (!isIdentifier(name)) continue

          if (!targetStatements.includes(name.text)) continue

          const isShorthand = name.text === "shorthandStyles"

          if (initializer && isObjectLiteralExpression(initializer)) {
            initializer.properties.forEach((property) => {
              if (!isPropertyAssignment(property)) return

              const { name, initializer } = property

              const prop = name.getText(sourceFile)
              let value = initializer.getText(sourceFile)

              if (type === "style") {
                value = value.replace(/(\w+):/g, '"$1":')

                if (!isShorthand) {
                  const data = getData(prop, value)

                  if (data) props[prop] = { ...props[prop], ...data }
                } else {
                  if (isStringObject(value)) {
                    value = JSON.parse(value).properties
                  } else {
                    value = value.split(".")[1]
                  }

                  props[value] = {
                    ...(props[value] ?? {}),
                    shorthands: [...(props[value].shorthands ?? []), prop],
                  }
                }
              } else {
                value = value.replace(/^"|"$/g, "")

                props[prop] = { properties: [value] }
              }
            })
          }
        }
      }
    })

    Object.entries(jsDocs).forEach(([prop, { urls, deprecated }]) => {
      if (!props[prop]) return

      props[prop].urls = urls
      props[prop].deprecated = deprecated
    })

    s.stop(`Parsing the ${type} props`)

    return props
  }

const getMdxFile = async (path: string) => {
  const data = await readFile(path, "utf8")

  return matter(data)
}

const writeMdxFile = async (path: string, data: Data, content: Content) => {
  let file = matter.stringify(content, data)

  file = await prettier(file)

  await writeFile(path, file)
}

const generateTable = (props: Props) => (locale: Locale) => {
  let table: string[] = []

  if (locale === "ja") {
    table = [
      ...table,
      "| Prop | CSSプロパティ | テーマのトークン |",
      "| ---- | ----------  | ------------ |",
    ]
  } else {
    table = [
      ...table,
      "| Prop | CSS Property | Theme Tokens |",
      "| ---- | ------------ | ------------ |",
    ]
  }

  props = sortObject(props)

  const rows = Object.entries(props).map(
    ([prop, { properties, shorthands, token, urls }]) => {
      let columns: string[] = []

      const props = [prop, ...(shorthands ?? [])]

      columns = [
        ...columns,
        props.map((property) => `\`${property}\``).join(", "),
      ]

      columns = [
        ...columns,
        properties
          .map((property) => {
            const url = urls?.find((url) => url.endsWith(property))

            return !url ? `\`${property}\`` : `[${property}](${url})`
          })
          .join(" + "),
      ]

      columns = [
        ...columns,
        token
          ? `[${token}](/styled-system/theming/default-theme#${
              token.split(".")[0]
            })`
          : "none",
      ]

      return `| ${columns.join(" | ")} |`
    },
  )

  table = [...table, ...rows]

  return table
}

const generateProps: p.RequiredRunner =
  (styleProps: Props, pseudoProps: Props) => async (_, s) => {
    s.start(`Writing files`)

    await Promise.all(
      LOCALES.map(async (locale) => {
        const fileName = `style-props${locale !== "en" ? `.${locale}` : ""}.mdx`
        const outPath = path.join(DIST_PATH, fileName)

        const { data } = await getMdxFile(outPath)

        const content: string[] = [
          ...CONTENT_HEADER[locale],
          "```tsx",
          `<Box w="full" p="md" bg="warning" color="white">This is Box</Box>`,
          "```",
          ...generateTable(styleProps)(locale),
          ...CONTENT_FOOTER[locale],
          locale === "ja"
            ? "## 擬似要素とセレクター"
            : "## Pseudo Elements and Selectors",
          ...generateTable(pseudoProps)(locale),
        ]

        await writeMdxFile(outPath, data, content.join("\n"))
      }),
    )

    s.stop(`Wrote files`)
  }

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI style props`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const styleProps = await getProps("style")(p, s)
    const pseudoProps = await getProps("pseudo")(p, s)

    const resolvedStyleProps = await parseProps("style", styleProps)(p, s)
    const resolvedPseudoProps = await parseProps("pseudo", pseudoProps)(p, s)

    await generateProps(resolvedStyleProps, resolvedPseudoProps)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
