import type {
  JSDoc,
  Node,
  PropertyAssignment,
  SourceFile,
  TypeAliasDeclaration,
} from "typescript"
import type { Locale } from "utils/i18n"
import * as p from "@clack/prompts"
import { toKebabCase } from "@yamada-ui/utils"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { readFile } from "fs/promises"
import path from "path"
import {
  createSourceFile,
  isExpression,
  isIdentifier,
  isObjectLiteralExpression,
  isPropertyAssignment,
  isPropertySignature,
  isTypeAliasDeclaration,
  isTypeLiteralNode,
  isVariableStatement,
  ScriptTarget,
  transpileModule,
} from "typescript"
import { locales } from "utils/i18n"
import { getMDXFile, writeMDXFile } from "../utils"

config({ path: CONSTANT.PATH.ENV })

type Type = "pseudo" | "style"
type TableType = "description" | "property"
interface Props {
  [key: string]: {
    properties: string[]
    deprecated?: boolean
    description?: string
    shorthands?: string[]
    token?: string
    urls?: string[]
  }
}
interface JSDocs {
  [key: string]: {
    deprecated?: boolean
    description?: string
    urls?: string[]
  }
}

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

const isStringFunction = (value: string) => /^\s*(\w+)\s*\([^)]*\)/.test(value)

const hasJSDoc = (node: any): node is { jsDoc: JSDoc[] } => "jsDoc" in node

const sortObject = (obj: { [key: string]: any }) =>
  Object.keys(obj)
    .sort()
    .reduce<{ [key: string]: any }>(
      (prev, key) => ({ ...prev, [key]: obj[key] }),
      {},
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

    member.jsDoc.forEach(({ comment, tags }) => {
      data.description =
        typeof comment === "string" ? comment : comment?.join("\n")

      tags?.forEach(({ comment, tagName }) => {
        const tag = tagName.getText(sourceFile)

        if (tag === "deprecated") data.deprecated = true
        if (tag === "see") data.urls = [...(data.urls ?? []), comment as string]
      })
    })

    props[prop] = data
  })

  return props
}

const getProp =
  (sourceFile: SourceFile, sourceCode = "") =>
  (property: PropertyAssignment) => {
    const { name, initializer } = property

    const prop = name.getText(sourceFile)
    let value = initializer.getText(sourceFile)

    if (isStringFunction(value)) {
      value = eval(`${sourceCode}\n ${value}`)
    } else {
      value = value.replace(/(\w+):/g, '"$1":')
    }
    return { prop, value }
  }

const getConfig = (prop: string, value: string) => {
  if (isStringObject(value)) {
    value = value.replace(/\s*"transform":.*(?=,|\})/s, "")
    value = value.replace(/,\s*\n?\}/g, "}")

    const data = JSON.parse(value)

    let { properties, token } = data

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

const getRelatedProp = (value: string) => {
  if (isStringObject(value)) {
    value = JSON.parse(value).properties
  } else {
    value = value.split(".")[1] ?? ""
  }

  return value
}

const parseProps: p.RequiredRunner =
  (type: Type, source: string, targetStatements: string[]) => (_, s) => {
    s.start(`Parsing the ${type} props`)

    const isPseudo = type === "pseudo"
    const sourceFile = createSourceFile("props.ts", source, ScriptTarget.Latest)
    let sourceCode: string | undefined

    if (isPseudo) {
      const result = transpileModule(source, {
        compilerOptions: { target: ScriptTarget.Latest },
      })

      sourceCode = result.outputText.replace(/export const/g, "const")
    }

    const props: Props = {}
    let jsDocs: JSDocs = {}

    const getRecursiveProps = (isShorthand: boolean) => (node: Node) => {
      const hasChildren = node.getChildCount(sourceFile) > 0

      if (isPropertyAssignment(node)) {
        const { prop, value } = getProp(sourceFile, sourceCode)(node)

        if (isPseudo) {
          props[prop] = { properties: [value.replace(/^"|"$/g, "")] }
        } else if (!isShorthand) {
          const config = getConfig(prop, value)

          props[prop] = { ...props[prop], ...config }
        } else {
          const relatedProp = getRelatedProp(value)

          const shorthands = props[relatedProp]?.shorthands ?? []

          if (props[relatedProp])
            props[relatedProp] = {
              ...props[relatedProp],
              shorthands: [...shorthands, prop],
            }
        }
      } else if (hasChildren) {
        node.forEachChild(getRecursiveProps(isShorthand))
      }
    }

    sourceFile.forEachChild((node) => {
      if (isTypeAliasDeclaration(node)) jsDocs = getJSDocs(node)(sourceFile)

      if (isVariableStatement(node)) {
        const declarations = node.declarationList.declarations

        for (const { name, initializer } of declarations) {
          if (!isIdentifier(name)) continue

          if (!targetStatements.includes(name.text)) continue

          if (!initializer) continue

          const isShorthand = name.text === "shorthandStyles"

          if (!isExpression(initializer)) continue

          if (isObjectLiteralExpression(initializer)) {
            initializer.properties.forEach(getRecursiveProps(isShorthand))
          } else {
            initializer.forEachChild(getRecursiveProps(isShorthand))
          }
        }
      }
    })

    Object.entries(jsDocs).forEach(
      ([prop, { deprecated, description, urls }]) => {
        if (!props[prop]) return

        props[prop].description = description
        props[prop].urls = urls
        props[prop].deprecated = deprecated
      },
    )

    s.stop(`Parsing the ${type} props`)

    return props
  }

const generateTableHeader = (type: TableType) => (locale: Locale) => {
  if (locale === "ja") {
    return type === "property"
      ? [
          "| Prop | CSSプロパティ | テーマのトークン |",
          "| ---- | ----------- | ------------ |",
        ]
      : ["| Prop | 説明 |", "| ---- | --- |"]
  } else {
    return type === "property"
      ? [
          "| Prop | CSS Property | Theme Tokens |",
          "| ---- | ------------ | ------------ |",
        ]
      : ["| Prop | Description |", "| ---- | ----------- |"]
  }
}

const generateTable = (props: Props, type: TableType) => (locale: Locale) => {
  const table: string[] = generateTableHeader(type)(locale)

  props = sortObject(props)

  const rows = Object.entries(props).map(
    ([prop, { description, properties, shorthands, token, urls }]) => {
      const columns: string[] = []

      const props = [prop, ...(shorthands ?? [])]

      columns.push(props.map((property) => `\`${property}\``).join(", "))

      if (type === "property") {
        columns.push(
          properties
            .map((property) => {
              const url = urls?.find((url) => url.endsWith(property))

              const chunks = property.split(",")

              if (chunks.length === 1) {
                return !url ? `\`${property}\`` : `[${property}](${url})`
              } else {
                return chunks
                  .map((chunk) => `\`${chunk.trim()}\``)
                  .join("<br />")
              }
            })
            .join("<br />"),
        )

        columns.push(
          token
            ? `[${token}](/styled-system/theming/default-theme#${
                token.split(".")[0]
              })`
            : "none",
        )
      } else {
        columns.push(description ?? "")
      }

      return `| ${columns.join(" | ")} |`
    },
  )

  table.push(...rows)

  return table
}

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI style props`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const _styleProps = await getProps("style")(p, s)
    const _pseudoProps = await getProps("pseudo")(p, s)

    const styleProps = await parseProps("style", _styleProps, [
      "standardStyles",
      "shorthandStyles",
    ])(p, s)

    const atRuleProps = await parseProps("at-rule", _styleProps, [
      "atRuleStyles",
    ])(p, s)

    const aiProps = await parseProps("ui", _styleProps, ["uiStyles"])(p, s)
    const pseudoProps = await parseProps("pseudo", _pseudoProps, [
      "pseudoElements",
      "attributes",
      "pseudoClasses",
      "atRules",
      "groupAttributes",
      "peerAttributes",
    ])(p, s)

    s.start(`Writing files`)

    await Promise.all(
      locales.map(async (locale) => {
        const fileName = `style-props${locale !== "en" ? `.${locale}` : ""}.mdx`
        const outPath = path.join(DIST_PATH, fileName)

        const { data } = await getMDXFile(outPath)

        const content: string[] = [
          ...CONTENT_HEADER[locale],
          "```tsx",
          `<Box w="full" p="md" bg="warning" color="white">This is Box</Box>`,
          "```",
          ...generateTable(styleProps, "property")(locale),
          ...CONTENT_FOOTER[locale],
          locale === "ja"
            ? "## 擬似要素とセレクター"
            : "## Pseudo Elements and Selectors",
          ...generateTable(pseudoProps, "property")(locale),
          locale === "ja" ? "## アットルール" : "## At-Rules",
          ...generateTable(atRuleProps, "description")(locale),
          locale === "ja" ? "## その他のProps" : "## Other Props",
          ...generateTable(aiProps, "description")(locale),
        ]

        await writeMDXFile(outPath, data, content.join("\n"))
      }),
    )

    s.stop(`Wrote files`)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
