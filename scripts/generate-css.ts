import { writeFile } from "fs/promises"
import * as p from "@clack/prompts"
import c from "chalk"
import type * as CSS from "csstype"
import { glob } from "glob"
import { JSDOM } from "jsdom"
import ListIt from "list-it"
import { format, resolveConfig } from "prettier"
import type { Options } from "prettier"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"

const SOURCE_URL = "https://developer.mozilla.org"
const OUT_PATH = "styles.ts"

type CSSProperty = ReturnType<typeof getCSSProperties>[number]
type CSSProp = keyof CSS.StandardProperties
type FuncProp = { prop: CSSProp; func: string }

type Tokens = Record<string, CSSProp[]>
type ShorthandProps = Partial<Record<CSSProp, string[]>>
type TransformProps = Partial<Record<string, (CSSProp | FuncProp)[]>>
type UIProps = Partial<Record<string, any>>

const list = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const tokens: Tokens = {
  animations: [],
  blurs: [],
  borders: [],
  breakpoints: [],
  colors: ["background", "backgroundColor"],
  fontSizes: [],
  fontWeights: [],
  fonts: [],
  gradients: ["backgroundImage"],
  letterSpacings: [],
  lineHeights: [],
  radii: [],
  shadows: [],
  sizes: [
    "width",
    "inlineSize",
    "height",
    "backfaceVisibility",
    "blockSize",
    "minWidth",
    "minInlineSize",
    "minHeight",
    "minBlockSize",
    "maxWidth",
    "maxInlineSize",
    "maxHeight",
    "maxBlockSize",
  ],
  spaces: [],
  transitions: [],
  zIndices: [],
}

const shorthandProps: ShorthandProps = {
  background: ["bg"],
  backgroundColor: ["bgColor"],
  backgroundImage: ["bgImage", "bgImg", "bgGradient"],
  backgroundClip: ["bgClip"],
  width: ["w"],
  height: ["h"],
  minWidth: ["minW"],
  minHeight: ["minH"],
  maxWidth: ["maxW"],
  maxHeight: ["maxH"],
  overscrollBehavior: ["overscroll"],
  overscrollBehaviorX: ["overscrollX"],
  overscrollBehaviorY: ["overscrollY"],
}

const transformProps: TransformProps = {
  px: [],
  fraction: [
    { prop: "width", func: "transforms.px" },
    { prop: "inlineSize", func: "transforms.px" },
    { prop: "height", func: "transforms.px" },
    { prop: "backfaceVisibility", func: "transforms.px" },
    { prop: "blockSize", func: "transforms.px" },
    { prop: "minWidth", func: "transforms.px" },
    { prop: "minInlineSize", func: "transforms.px" },
    { prop: "minHeight", func: "transforms.px" },
    { prop: "minBlockSize", func: "transforms.px" },
    { prop: "maxWidth", func: "transforms.px" },
    { prop: "maxInlineSize", func: "transforms.px" },
    { prop: "maxHeight", func: "transforms.px" },
    { prop: "maxBlockSize", func: "transforms.px" },
  ],
  bgClip: ["backgroundClip"],
  gradient: ["backgroundImage"],
}

const uiProps: UIProps = {
  boxSize: {},
}

const prettier = async (content: string, options?: Options) => {
  const prettierConfig = await resolveConfig(process.cwd())

  try {
    return format(content, {
      ...prettierConfig,
      parser: "typescript",
      ...options,
    })
  } catch {
    return content
  }
}

const toCamelCase = (value: string & {}) =>
  value.toLowerCase().replace(/-(.)/g, (_, group1) => group1.toUpperCase())

const createMap = (obj: Partial<Record<string, (CSSProp | FuncProp)[]>>) =>
  Object.entries(obj).reduce<Record<string, any>>((prev, [key, list]) => {
    list?.forEach((item) => {
      if (typeof item === "string") {
        prev[item] = key
      } else {
        prev[item.prop] = { transform: key, func: item.func }
      }
    })

    return prev
  }, {})

const getDoc = async () => {
  const res = await fetch(SOURCE_URL + "/docs/Web/CSS")
  const data = await res.text()

  const dom = new JSDOM(data)

  return dom.window.document
}

const getCSSProperties = (doc: Document) => {
  const list = doc.querySelectorAll(".sidebar-body details")

  const item = Array.from(list).find((item) => {
    const summary = item.querySelector("summary")

    return summary?.textContent?.trim() === "Properties"
  })

  const els = item?.querySelectorAll("li a") as HTMLAnchorElement[] | undefined

  if (!els) return []

  return Array.from(els)
    .filter(
      ({ textContent }) => textContent && !/^(-moz|-webkit)/.test(textContent),
    )
    .map((el) => ({
      name: el.textContent ?? "",
      prop: toCamelCase(el.textContent ?? "") as CSSProp,
      url: SOURCE_URL + el.href,
    }))
}

const getCSSTypes = async () => {
  const typeInfo: Record<string, string> = {}

  const paths = await glob("node_modules/**/csstype/index.d.ts")

  const path = paths[0]

  if (!path) return typeInfo

  const { getSourceFile, getTypeChecker } = createProgram([path], {})

  const sourceFile = getSourceFile(path)
  const typeChecker = getTypeChecker()

  if (!sourceFile) return typeInfo

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      isInterfaceDeclaration(statement) || isTypeAliasDeclaration(statement),
  )

  for (const typeStatement of typeStatements) {
    const type = typeChecker.getTypeAtLocation(typeStatement)
    const symbol = type.getSymbol()
    const name = symbol?.getName()

    if (name !== "StandardProperties") continue

    for (const property of type.getProperties()) {
      const name = property.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)
      const nonNullableType = type.getNonNullableType()
      const value = typeChecker.typeToString(nonNullableType)

      typeInfo[name] =
        name === "all"
          ? `CSS.Globals`
          : `CSS.Property.${value.replace(/<.*?>$/, "")}`
    }

    break
  }

  return typeInfo
}

const omitProperties = (
  cssProperties: CSSProperty[],
  typeProperties: string[],
  callback?: (message: string) => void,
) => {
  let pickedProperties: CSSProperty[] = []

  const omittedProperties = cssProperties.filter((property) => {
    const hasType = typeProperties.includes(property.prop)

    if (!hasType) pickedProperties = [...pickedProperties, property]

    return hasType
  })

  if (pickedProperties.length) {
    const table = pickedProperties.map(({ name, url }, index) => ({
      row: index + 1,
      name,
      url,
    }))

    const message = list.d(table).toString()

    callback?.(message)
  }

  return omittedProperties
}

const tokenMap = createMap(tokens)
const transformMap = createMap(transformProps)

const generateStyles = async (styles: (CSSProperty & { type: string })[]) => {
  let standardStyles: string[] = []
  let shorthandStyles: string[] = []
  let styleProps: string[] = []

  styles.forEach(({ name, prop, url, type }) => {
    const token: string | undefined = tokenMap[prop]
    const shorthands = shorthandProps[prop]
    const style = getStyle(prop)

    type = `Token<${type}${token ? `, "${token}"` : ""}>`
    standardStyles = [...standardStyles, `${prop}: ${style}`]

    const description = `The CSS \`${name}\` property.`
    const docs = `/**\n* ${description}\n* \n* @see Docs ${url}\n*/`

    styleProps = [...styleProps, ...[docs, `${prop}: ${type}`]]

    if (shorthands) {
      const shorthandStyle =
        style === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        shorthandStyles = [
          ...shorthandStyles,
          `${shorthandProp}: ${shorthandStyle}`,
        ]
        styleProps = [...styleProps, ...[docs, `${shorthandProp}: ${type}`]]
      })
    }
  })

  Object.entries(uiProps).forEach(([prop, {}]) => {})

  const content = `
    import type * as CSS from "csstype"
    import type { Token } from "../css"
    import type { Configs } from "./config"
    import { configs, transforms } from "./config"

    export const standardStyles: Configs = {
      ${standardStyles.join(",\n")}
    }

    export const shorthandStyles: Configs = {
      ${shorthandStyles.join(",\n")}
    }

    export const styles: Configs = { ...standardStyles, ...shorthandStyles }

    export type StyleProps = {
      ${styleProps.join("\n")}
    }
  `

  const data = await prettier(content)

  await writeFile(OUT_PATH, data)
}

const getStyle = (prop: CSSProp) => {
  const token: string | undefined = tokenMap[prop]
  const transform: string | { transform: string; func: string } | undefined =
    transformMap[prop]

  let style: any = true

  if (token) {
    style = `configs.prop("${prop}", "${token}")`
  }

  if (transform) {
    const value = `transforms.${
      typeof transform === "string"
        ? transform
        : `${transform.transform}(${transform.func})`
    }`

    style =
      typeof style === "string"
        ? style.replace(/\)$/, `, ${value})`)
        : `{ transform: ${value} }`
  }

  return style
}

const main = async () => {
  p.intro(`Generating Yamada UI styles`)

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Getting the "csstype" module`)

    const cssTypes = await getCSSTypes()

    s.stop(`Got the "csstype" module`)

    s.start(`Getting the "MDN Web Docs" document`)

    const doc = await getDoc()

    s.stop(`Got the "MDN Web Docs" document`)

    const cssProperties = getCSSProperties(doc)
    const typeProperties = Object.keys(cssTypes)
    const omittedProperties = omitProperties(
      cssProperties,
      typeProperties,
      (message) => {
        p.note(message, `Omitted properties`)
      },
    )

    const styles = omittedProperties.map((property) => ({
      ...property,
      type: cssTypes[property.prop],
    }))

    s.start(`Writing file "${OUT_PATH}"`)

    await generateStyles(styles)

    s.stop(`Wrote file "${OUT_PATH}"`)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
