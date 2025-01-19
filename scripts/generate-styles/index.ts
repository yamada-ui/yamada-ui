import type * as CSS from "csstype"
import type { additionalProps, atRuleProps, uiProps } from "./ui-props"
import * as p from "@clack/prompts"
import bcd from "@mdn/browser-compat-data"
import { isArray, isUndefined, toCamelCase } from "@yamada-ui/utils"
import c from "chalk"
import { writeFile } from "fs/promises"
import { glob } from "glob"
import ListIt from "list-it"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"
import { excludeProps } from "./exclude-props"
import { generateStyles } from "./styles"

export const OUT_PATH = "packages/react/src/core/styles.ts"

export interface CSSProperty {
  name: string
  prop: CSSProperties
  property_type: string
  url: string
  features?: ({
    deprecated: boolean
  } & Omit<CSSProperty, "features" | "isSkip">)[]
  isSkip?: boolean
}

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

const getCSSProperties = (): CSSProperty[] => {
  const { css, svg } = bcd
  const cssProperties = Object.keys(css.properties as object)
  const atRuleProperties = Object.keys(css["at-rules"] as object)
  const svgAttributes = Object.keys(svg.global_attributes as object)

  const cssData = cssProperties
    .filter((property) => !/^(-moz|-webkit)/.test(property))
    .map((property) => {
      const prop = property.includes("-") ? toCamelCase(property) : property
      const { mdn_url, spec_url } = css.properties?.[property]?.__compat ?? {}
      const url = mdn_url ?? (isArray(spec_url) ? spec_url[0] : spec_url) ?? ""

      return {
        name: property,
        prop: prop as CSSProperties,
        property_type: "css",
        url,
      }
    })

  const svgData = svgAttributes.map((attribute) => {
    const prop = attribute.includes("-") ? toCamelCase(attribute) : attribute
    const { mdn_url, spec_url } =
      svg.global_attributes?.[attribute]?.__compat ?? {}
    const url = mdn_url ?? (isArray(spec_url) ? spec_url[0] : spec_url) ?? ""

    return {
      name: attribute,
      prop: prop as CSSProperties,
      property_type: "svg",
      url,
    }
  })

  const atRuleData = atRuleProperties.map((atRule) => {
    const prop = atRule.includes("-") ? toCamelCase(atRule) : atRule
    const { mdn_url, spec_url } = css["at-rules"]?.[atRule]?.__compat ?? {}
    const url = mdn_url ?? (isArray(spec_url) ? spec_url[0] : spec_url) ?? ""

    const features = Object.keys(css["at-rules"]?.[atRule] as object).map(
      (key) => {
        const prop = key.includes("-") ? toCamelCase(key) : key
        const { mdn_url, spec_url, status } =
          css["at-rules"]?.[atRule]?.[key]?.__compat ?? {}
        const url =
          mdn_url ?? (isArray(spec_url) ? spec_url[0] : spec_url) ?? ""

        return {
          name: key,
          deprecated: status?.deprecated ?? false,
          prop,
          property_type: "feature",
          url,
        }
      },
    )

    return {
      name: atRule,
      features,
      isSkip: true,
      prop: ("_" + prop) as CSSProperties,
      property_type: "at-rule",
      url,
    }
  })

  return [
    ...cssData,
    ...svgData.filter((attr) => !cssProperties.includes(attr.name)),
    ...atRuleData,
  ]
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

    if (!hasType && !property.isSkip)
      pickedProperties = [...pickedProperties, property]

    return hasType || property.isSkip
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

    const properties = getCSSProperties()

    const typeProperties = Object.keys(cssTypes)
    const omittedProperties = omitProperties(
      properties,
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
        const isAtRule = property.property_type === "at-rule"
        const { type, deprecated = false } = cssTypes[property.prop] ?? {}

        if (!type && !isAtRule) return
        if (isAtRule) return { ...property, type: "", deprecated }

        return { ...property, type: type as string, deprecated }
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
