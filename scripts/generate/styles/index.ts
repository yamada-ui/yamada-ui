import type { CompatData, CompatStatement } from "@mdn/browser-compat-data"
import type * as CSS from "csstype"
import type { additionalProps, atRuleProps, styledProps } from "./styled-props"
import bcd from "@mdn/browser-compat-data"
import {
  getMemoizedObject as get,
  isUndefined,
  toArray,
  toCamelCase,
} from "@yamada-ui/utils"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { execa } from "execa"
import { glob } from "glob"
import ora from "ora"
import c from "picocolors"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"
import { features } from "web-features"
import { excludeProps } from "./exclude-props"
import { generateStyles } from "./styles"

export const OUT_PATH = "packages/react/src/core/css/styles.ts"

export type Properties = CSSProperties | StyledProperties
export type CSSProperties = keyof CSS.PropertiesFallback
export type StyledProperties =
  | keyof typeof additionalProps
  | keyof typeof atRuleProps
  | keyof typeof styledProps

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

function transformCompatData(
  path: string,
  omitProps: string[] = [],
): CSSCompatData {
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

function getCSSCompatData(cssTypes: Awaited<ReturnType<typeof getCSSTypes>>) {
  const typeProperties = Object.keys(cssTypes)

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

  const excludedProperties: { name: string; url?: string }[] = []
  const deprecatedProperties: { name: string; url?: string }[] = []
  const notHasTypeProperties: { name: string; url?: string }[] = []

  const excludedCSSCompatData = Object.fromEntries(
    Object.entries({ ...svgCompatData, ...cssCompatData })
      .filter(([name, data]) => {
        const url = data.mdn_url ?? toArray(data.spec_url)[0]

        if (excludeProps.includes(name as CSSProperties)) {
          excludedProperties.push({ name, url })

          return false
        } else {
          if (!typeProperties.includes(name))
            notHasTypeProperties.push({ name, url })

          if (data.status?.deprecated) deprecatedProperties.push({ name, url })

          return true
        }
      })
      .map(([name, data]) => {
        const { type = "AnyString" } = cssTypes[name] ?? {}

        const computedData = { ...data, type }

        return [name, computedData]
      }),
  )

  return {
    atRuleCompatData,
    cssCompatData: excludedCSSCompatData,
    deprecatedProperties,
    excludedProperties,
    notHasTypeProperties,
  }
}

async function getCSSTypes() {
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

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Getting the "csstype" module`)

  const cssTypes = await getCSSTypes()

  spinner.succeed(`Got the "csstype" module`)

  const {
    atRuleCompatData,
    cssCompatData,
    deprecatedProperties,
    excludedProperties,
    notHasTypeProperties,
  } = getCSSCompatData(cssTypes)

  if (deprecatedProperties.length) {
    spinner.warn(`Deprecated properties`)

    deprecatedProperties.forEach(({ name, url }) => {
      console.log("  -", c.yellow(name), `(${url})`)
    })
  }

  if (notHasTypeProperties.length) {
    spinner.warn(`Properties that are not present in "csstype"`)

    notHasTypeProperties.forEach(({ name, url }) => {
      console.log("  -", c.yellow(name), `(${url})`)
    })
  }

  if (excludedProperties.length) {
    spinner.info(`Excluded properties`)

    excludedProperties.forEach(({ name, url }) => {
      console.log("  -", c.blue(name), `(${url})`)
    })
  }

  spinner.start(`Writing file "${OUT_PATH}"`)

  const { data, duplicatedProperties } = generateStyles(
    cssCompatData,
    atRuleCompatData,
  )

  if (duplicatedProperties.length) {
    spinner.info(`Duplicated properties that are present in "StyledProps"`)

    duplicatedProperties.forEach(({ name, url }) => {
      console.log("  -", c.blue(name), `(${url})`)
    })
  }

  await writeFileWithFormat(OUT_PATH, data)

  spinner.succeed(`Wrote file "${OUT_PATH}"`)

  spinner.start(`Fixing eslint`)

  await execa("eslint", [OUT_PATH, "--fix"])

  spinner.succeed(`Fixed eslint`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
