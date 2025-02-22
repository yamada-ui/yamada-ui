import type { CompatData, CompatStatement } from "@mdn/browser-compat-data"
import type * as CSS from "csstype"
import type { additionalProps, atRuleProps, uiProps } from "./ui-props"
import * as p from "@clack/prompts"
import bcd from "@mdn/browser-compat-data"
import {
  getMemoizedObject as get,
  isUndefined,
  toArray,
  toCamelCase,
} from "@yamada-ui/utils"
import c from "chalk"
import { writeFile } from "fs/promises"
import { glob } from "glob"
import ListIt from "list-it"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"
import { features } from "web-features"
import { excludeProps } from "./exclude-props"
import { generateStyles } from "./styles"

export const OUT_PATH = "packages/react/src/core/styles.ts"

export type Properties = CSSProperties | UIProperties
export type CSSProperties =
  | keyof CSS.ObsoleteProperties
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
export type UIProperties =
  | keyof typeof additionalProps
  | keyof typeof atRuleProps
  | keyof typeof uiProps

export type FeatureData = (typeof features)[number]
export type BrowserIdentifier = keyof FeatureData["status"]["support"]

export interface CSSCompatStatement extends CompatStatement {
  name: string
  type?: string
  feature?: FeatureData
}

export interface CSSCompatData {
  [key: string]: CSSCompatStatement
}

const deprecatedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const notFoundList = new ListIt({
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

const transformCompatData = (
  path: string,
  omitProps: string[] = [],
): CSSCompatData => {
  const data = get<CompatData>(bcd, path)

  return Object.fromEntries(
    Object.entries(data)
      .map(([name, value]) => {
        if (!("__compat" in value) || !value.__compat) return

        if (/^(-moz|-webkit|xml_)/.test(name)) return

        const prop = /(-|_)/.test(name) ? toCamelCase(name) : name

        if (omitProps.includes(prop)) return

        const feature = Object.values(features).find(({ compat_features }) =>
          compat_features?.includes(`${path}.${name}`),
        )

        return [prop, { ...value.__compat, name, feature }]
      })
      .filter((data) => !isUndefined(data)),
  )
}

const getCSSCompatData = () => {
  const { html } = bcd

  const htmlAttributes = Object.keys(html.global_attributes!).map((name) =>
    toCamelCase(name),
  )
  const omitAttributes = [
    ...htmlAttributes,
    "alt",
    "dataAttributes",
    "customProperty",
    "requiredExtensions",
  ]

  const cssCompatData = transformCompatData("css.properties", omitAttributes)
  const svgCompatData = transformCompatData(
    "svg.global_attributes",
    omitAttributes,
  )
  const atRuleCompatData = transformCompatData("css.at-rules", omitAttributes)

  return {
    atRuleCompatData,
    cssCompatData: { ...svgCompatData, ...cssCompatData },
  }
}

const getCSSTypes = async () => {
  const data: { [key: string]: { type: string; deprecated: boolean } } = {}

  const paths = await glob("node_modules/**/csstype/index.d.ts")

  const path = paths[0]

  if (!path) return data

  const { getSourceFile, getTypeChecker } = createProgram([path], {})

  const sourceFile = getSourceFile(path)
  const typeChecker = getTypeChecker()

  if (!sourceFile) return data

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

      data[name] = { type: resolvedValue, deprecated }
    }
  }

  return data
}

const checkProperties = (
  cssCompatData: CSSCompatData,
  typeProperties: string[],
  callback?: (message: string, isDeprecated: boolean) => void,
) => {
  const deprecatedProperties: { name: string; url?: string }[] = []
  const notFoundProperties: { name: string; url?: string }[] = []

  Object.entries(cssCompatData).forEach(([name, data]) => {
    const url = data.mdn_url ?? toArray(data.spec_url)[0]

    if (!typeProperties.includes(name)) notFoundProperties.push({ name, url })

    if (data.status?.deprecated) deprecatedProperties.push({ name, url })
  })

  if (notFoundProperties.length) {
    const table = notFoundProperties.map(({ name, url }, index) => ({
      row: index + 1,
      // eslint-disable-next-line perfectionist/sort-objects
      name,
      url,
    }))

    const message = notFoundList.d(table).toString()

    callback?.(message, false)
  }

  if (deprecatedProperties.length) {
    const table = deprecatedProperties.map(({ name, url }, index) => ({
      row: index + 1,
      // eslint-disable-next-line perfectionist/sort-objects
      name,
      url,
    }))

    const message = deprecatedList.d(table).toString()

    callback?.(message, true)
  }
}

const excludeProperties = (
  cssCompatData: CSSCompatData,
  callback?: (message: string) => void,
) => {
  const excludedProperties: { name: string; url?: string }[] = []

  const computedCSSCompatData = Object.fromEntries(
    Object.entries(cssCompatData).filter(([name, data]) => {
      if (excludeProps.includes(name as CSSProperties)) {
        const url = data.mdn_url ?? toArray(data.spec_url)[0]

        excludedProperties.push({ name, url })

        return false
      } else {
        return true
      }
    }),
  )

  if (excludedProperties.length) {
    const table = excludedProperties.map(({ name, url }, index) => ({
      row: index + 1,
      // eslint-disable-next-line perfectionist/sort-objects
      name,
      url,
    }))

    const message = excludedList.d(table).toString()

    callback?.(message)
  }

  return computedCSSCompatData
}

const main = async () => {
  await writeFile("test.json", JSON.stringify(features, null, 2))

  p.intro(c.magenta(`Generating Yamada UI styles`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Getting the "csstype" module`)

    const cssTypes = await getCSSTypes()
    const typeProperties = Object.keys(cssTypes)

    s.stop(`Got the "csstype" module`)

    const { atRuleCompatData, cssCompatData } = getCSSCompatData()

    checkProperties(cssCompatData, typeProperties, (message, isDeprecated) => {
      p.note(
        message,
        isDeprecated
          ? `Deprecated properties`
          : `Properties that are not present in "csstype"`,
      )
    })

    const excludedCSSCompatData = excludeProperties(
      cssCompatData,
      (message) => {
        p.note(message, `Excluded properties`)
      },
    )

    const computedCSSCompatData = Object.fromEntries(
      Object.entries(excludedCSSCompatData).map(([name, data]) => {
        const { type = "string & {}" } = cssTypes[name] ?? {}

        const computedData = { ...data, type }

        return [name, computedData]
      }),
    )

    s.start(`Writing file "${OUT_PATH}"`)

    const { data, excludedProperties } = await generateStyles(
      computedCSSCompatData,
      atRuleCompatData,
    )

    await writeFile(OUT_PATH, data)

    s.stop(`Wrote file "${OUT_PATH}"`)

    if (excludedProperties.length) {
      const table = excludedProperties.map(({ name, url }, index) => ({
        row: index + 1,
        // eslint-disable-next-line perfectionist/sort-objects
        name,
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
