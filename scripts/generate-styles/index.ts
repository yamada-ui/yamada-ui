import type * as CSS from "csstype"
import type { additionalProps, atRuleProps, uiProps } from "./ui-props"
import * as p from "@clack/prompts"
import { isUndefined, toCamelCase } from "@yamada-ui/utils"
import c from "chalk"
import { writeFile } from "fs/promises"
import { glob } from "glob"
import { JSDOM } from "jsdom"
import ListIt from "list-it"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"
import { excludeProps } from "./exclude-props"
import { generateStyles } from "./styles"

const SOURCE_URL = "https://developer.mozilla.org"
export const OUT_PATH = "packages/react/src/core/styles.ts"

export type CSSProperty = ReturnType<typeof getCSSProperties>[number]
export type Properties = CSSProperties | UIProperties
export type CSSProperties =
  | keyof CSS.ObsoleteProperties
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
export type UIProperties =
  | keyof typeof additionalProps
  | keyof typeof atRuleProps
  | keyof typeof uiProps

const omittedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const excludedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const duplicatedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const getDoc = async (type: "CSS" | "SVG") => {
  const res = await fetch(SOURCE_URL + `/docs/Web/${type}`)
  const data = await res.text()

  const dom = new JSDOM(data)

  return dom.window.document
}

const getCSSProperties = (doc: Document) => {
  const list = doc.querySelectorAll(".sidebar-body details")

  const item = Array.from(list).find((item) => {
    const summary = item.querySelector("summary")
    const title = summary?.textContent?.trim()

    return title === "Properties" || title === "Attributes"
  })

  const els = item?.querySelectorAll("li a") as HTMLAnchorElement[] | undefined

  if (!els) return []

  return Array.from(els)
    .filter(
      ({ textContent }) => textContent && !/^(-moz|-webkit)/.test(textContent),
    )
    .map(({ href, textContent }) => {
      const prop = textContent?.includes("-")
        ? toCamelCase(textContent)
        : (textContent ?? "")

      return {
        name: textContent ?? "",
        prop: prop as CSSProperties,
        url: SOURCE_URL + href,
      }
    })
}

const getCSSTypes = async () => {
  const typeInfo: { [key: string]: { type: string; deprecated: boolean } } = {}

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
    const deprecated = name === "ObsoleteProperties"

    if (
      name !== "StandardProperties" &&
      name !== "SvgProperties" &&
      name !== "ObsoleteProperties"
    )
      continue

    for (const property of type.getProperties()) {
      const name = property.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)
      const nonNullableType = type.getNonNullableType()
      const value = typeChecker.typeToString(nonNullableType)
      const resolvedValue =
        name === "all"
          ? `CSS.Globals`
          : `CSS.Property.${value.replace(/<.*?>$/, "")}`

      typeInfo[name] = { type: resolvedValue, deprecated }
    }
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
      name,
      row: index + 1,
      url,
    }))

    const message = omittedList.d(table).toString()

    callback?.(message)
  }

  return omittedProperties
}

const excludeProperties = (
  cssProperties: CSSProperty[],
  callback?: (message: string) => void,
) => {
  let pickedProperties: CSSProperty[] = []

  const excludedProperties = cssProperties.filter((property) => {
    const isExclude = excludeProps.includes(property.prop)

    if (isExclude) pickedProperties = [...pickedProperties, property]

    return !isExclude
  })

  if (pickedProperties.length) {
    const table = pickedProperties.map(({ name, url }, index) => ({
      name,
      row: index + 1,
      url,
    }))

    const message = excludedList.d(table).toString()

    callback?.(message)
  }

  return excludedProperties
}

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI styles`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Getting the "csstype" module`)

    const cssTypes = await getCSSTypes()

    s.stop(`Got the "csstype" module`)

    s.start(`Getting the "MDN Web Docs" document`)

    const cssDoc = await getDoc("CSS")
    const svgDoc = await getDoc("SVG")

    s.stop(`Got the "MDN Web Docs" document`)

    const cssProperties = getCSSProperties(cssDoc)
    const svgProperties = getCSSProperties(svgDoc)
    const exitsProperties = cssProperties.map(({ name }) => name)
    const resolvedProperties = [
      ...cssProperties,
      ...svgProperties.filter(({ name }) => !exitsProperties.includes(name)),
    ]

    const typeProperties = Object.keys(cssTypes)
    const omittedProperties = omitProperties(
      resolvedProperties,
      typeProperties,
      (message) => {
        p.note(message, `Omitted properties that are not present in "csstype"`)
      },
    )

    const excludedProperties = excludeProperties(
      omittedProperties,
      (message) => {
        p.note(message, `Excluded properties`)
      },
    )

    const styles = excludedProperties
      .map((property) => {
        const { type, deprecated = false } = cssTypes[property.prop] ?? {}

        if (!type) return

        return { ...property, type, deprecated }
      })
      .filter((style) => !isUndefined(style))

    s.start(`Writing file "${OUT_PATH}"`)

    const { data, pickedStyles } = await generateStyles(styles)

    await writeFile(OUT_PATH, data)

    s.stop(`Wrote file "${OUT_PATH}"`)

    if (pickedStyles.length) {
      const table = pickedStyles.map(({ name, url }, index) => ({
        name,
        row: index + 1,
        url,
      }))

      const message = duplicatedList.d(table).toString()

      p.note(message, `Duplicated properties that are present in "UIProps"`)
    }

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
