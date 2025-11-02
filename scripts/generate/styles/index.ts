import type { CSSObject } from "@emotion/react"
import type { CompatData, CompatStatement } from "@mdn/browser-compat-data"
import type { AnyString, ThemeToken, Transforms } from "@yamada-ui/react"
import type * as CSS from "csstype"
import type { StyleConfig } from "./styled-props"
import type { TransformOptions } from "./transform-props"
import bcd from "@mdn/browser-compat-data"
import { conditionSelectors } from "@yamada-ui/react"
import {
  getMemoizedObject as get,
  isUndefined,
  toArray,
  toCamelCase,
} from "@yamada-ui/utils"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { Command } from "commander"
import { execa } from "execa"
import { glob } from "glob"
import ora from "ora"
import path from "path"
import c from "picocolors"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"
import { features } from "web-features"
import { checkProps } from "./check"
import { excludeProps } from "./exclude-props"
import { overrideTypes } from "./override-types"
import { shorthandProps } from "./shorthand-props"
import { additionalProps, atRuleProps, styledProps } from "./styled-props"
import { generateStyles } from "./styles"
import { tokenMap } from "./tokens"
import { transformMap } from "./transform-props"

export const STYLES_PATH = path.resolve(
  process.cwd(),
  "packages",
  "react",
  "src",
  "core",
  "css",
  "styles.ts",
)
export const STYLES_PUBLISH_PATH = path.resolve(
  process.cwd(),
  "www",
  "data",
  "styles.json",
)

export type Properties = CSSProperties | StyledProperties
export type CSSProperties = keyof CSS.PropertiesFallback
export type StyledProperties =
  | keyof typeof additionalProps
  | keyof typeof atRuleProps
  | keyof typeof styledProps

export type FeatureData = Extract<
  (typeof features)["features"],
  { kind: "feature" }
>
export type BrowserIdentifier = FeatureData["status"]["support"]

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

        const feature = Object.values(features).find(
          (feature) =>
            "compat_features" in feature &&
            feature.compat_features?.includes(`${path}.${name}`),
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

function hasTransform(
  targetTransform: Transforms,
  transforms: TransformOptions[] | undefined,
) {
  return !!transforms?.some(({ transform }) => transform === targetTransform)
}

function addType(result: string, value: string) {
  return result.endsWith(">")
    ? result.replace(/>$/, `${value}>`)
    : result + value
}

function generateType({
  type,
  prop,
  token,
  transforms,
  variableLength = false,
}: {
  type?: string | string[]
  prop?: Properties
  token?: ThemeToken
  transforms?: TransformOptions[]
  variableLength?: boolean
}) {
  const overrideType = prop ? overrideTypes[prop] : undefined

  let result = !variableLength || token ? "StyleValueWithCondition<>" : ""

  if (overrideType) {
    result = addType(result, overrideType)
  } else {
    const isPx = hasTransform("px", transforms)
    const isFraction = hasTransform("fraction", transforms)
    const isNumber = isPx || isFraction

    if (typeof type === "string") {
      result = addType(result, type)
    } else {
      if (type?.length) {
        result = addType(result, type.join(" | "))
      } else {
        result = addType(result, "AnyString")
      }
    }

    if (isNumber) result = addType(result, ` | number`)
  }

  if (token) result = addType(result, `, "${token}"`)

  return result
}

export interface Doc {
  deprecated: boolean
  description: string
  experimental: boolean
  baseline?: Baseline
  see?: string
}

export interface Docs {
  [key: string]: Doc
}

export interface Config {
  as?: boolean
  type?: string
  css?: CSSObject
  docs?: Docs | string
  important?: boolean
  properties?: (AnyString | CSSProperties | StyledProperties)[]
  shorthands?: string[]
  token?: ThemeToken
  transforms?: TransformOptions[]
}

interface GetConfigOptions {
  css?: CSSObject
  important?: boolean
  properties?: (AnyString | CSSProperties | StyledProperties)[]
  token?: ThemeToken
  transforms?: TransformOptions[]
}

export function generateConfig({
  css,
  important,
  properties,
  token,
  transforms,
}: GetConfigOptions) {
  return function (skip?: boolean) {
    if (!skip && !token && !transforms && !css) return { as: true }

    const config: Config = {}

    if (properties) config.properties = properties
    if (token) config.token = token
    if (css) config.css = css
    if (important) config.important = important

    if (transforms || token) {
      transforms ??= []

      if (token) transforms.unshift({ args: [token], transform: "token" })

      config.transforms = transforms
    }

    return config
  }
}

export interface Baseline {
  newly_available_date?: string
  status?: string
  widely_available_date?: string
}

function getBaseline(feature?: FeatureData) {
  if (!feature) return

  let baseline: Baseline | undefined

  switch (feature.status.baseline) {
    case "high": {
      baseline ??= {}
      baseline.status = "Widely available"
      break
    }

    case "low":
      baseline ??= {}
      baseline.status = "Newly available"
      break

    default:
      if (!feature.discouraged) {
        baseline ??= {}
        baseline.status = "Limited available"
      }
  }

  if (feature.status.baseline_high_date) {
    baseline ??= {}
    baseline.widely_available_date = feature.status.baseline_high_date
  }

  if (feature.status.baseline_low_date) {
    baseline ??= {}
    baseline.newly_available_date = feature.status.baseline_low_date
  }

  return baseline
}

function generateDocs(...data: CSSCompatStatement[]) {
  return function (rows: string[] = []): Docs | string {
    if (rows.length) return rows.join("\n")

    const deprecated = data.some(({ status }) => status?.deprecated)
    const experimental = data.some(({ status }) => status?.experimental)

    return Object.fromEntries(
      data.map(({ name, feature, mdn_url, spec_url, ...data }) => {
        let description = feature?.description_html ?? data.description

        if (!description) description = `The CSS \`${name}\` property.`

        const see = mdn_url ?? toArray(spec_url)[0]
        const baseline = getBaseline(feature)

        return [name, { baseline, deprecated, description, experimental, see }]
      }),
    )
  }
}

function generateData(
  cssCompatData: CSSCompatData,
  atRuleCompatData: CSSCompatData,
) {
  const tokenProps: { [key in ThemeToken]?: string[] } = {}
  const variableLengthProps: string[] = []
  const duplicatedProps: { name: string; url?: string }[] = []

  checkProps(cssCompatData)

  const pseudo = Object.fromEntries(
    conditionSelectors
      .map((selector) => {
        const transforms = transformMap[selector]

        if (!transforms) return

        const config = generateConfig({ properties: [selector], transforms })()

        return [selector, config]
      })
      .filter((data) => !isUndefined(data)),
  ) as { [key: string]: Config }

  const excludedCSSCompatData = Object.fromEntries(
    Object.entries(cssCompatData).filter(([name, data]) => {
      const isExists = [
        ...Object.keys(additionalProps),
        ...Object.keys(styledProps),
      ].includes(name)

      if (isExists) {
        const url = data.mdn_url ?? toArray(data.spec_url)[0]

        duplicatedProps.push({ name, url })

        return false
      } else {
        return true
      }
    }),
  )

  const standard = Object.fromEntries(
    Object.entries(excludedCSSCompatData).map(([name, data]) => {
      const prop = name as CSSProperties | StyledProperties
      const token = tokenMap[prop]
      const shorthands = shorthandProps[prop]
      const transforms = transformMap[prop]
      const config = generateConfig({ properties: [prop], token, transforms })()
      const docs = generateDocs(data)()
      const type = generateType({
        type: data.type,
        prop,
        token,
        transforms,
      })

      if (token) {
        tokenProps[token] ??= []
        tokenProps[token].push(prop)
      }

      if (shorthands) {
        shorthands.forEach((shorthandProp) => {
          if (token) tokenProps[token]?.push(shorthandProp)
        })
      }

      return [name, { ...config, type, docs, shorthands }]
    }),
  ) as { [key: string]: Config }

  function getRelatedCompatData(
    properties: string | string[] | undefined,
    prop: string,
    isAtRule = false,
  ) {
    if (isAtRule) {
      const computedProp = prop.replace(/^_/, "")
      const computedName = toArray(properties)[0]
        ?.replace(/^@/, "")
        .split(" ")[0]

      return Object.entries(atRuleCompatData).filter(
        ([relatedProp, { name }]) =>
          relatedProp === computedProp || name === computedName,
      )
    } else {
      return Object.entries(cssCompatData).filter(
        ([relatedProp]) =>
          (typeof properties === "string"
            ? relatedProp === properties
            : properties?.includes(relatedProp)) || relatedProp === prop,
      )
    }
  }

  function generateDate(isAtRule = false) {
    return function ([
      prop,
      { type, description, important, properties, static: css, variableLength },
    ]: [string, StyleConfig]) {
      if (variableLength) variableLengthProps.push(prop)

      const relatedCompatData = getRelatedCompatData(properties, prop, isAtRule)
      const relatedData = relatedCompatData.map(([_, data]) => data)
      const types = relatedCompatData
        .map(([_, { type }]) => type)
        .filter((type) => !isUndefined(type))
      const token = tokenMap[prop as Properties]
      const shorthands = shorthandProps[prop as Properties]
      const transforms = transformMap[prop as Properties]

      type = generateType({
        type: type ?? types,
        token,
        transforms,
        variableLength,
      })

      const config = generateConfig({
        css,
        important,
        properties,
        token,
        transforms,
      })(true)
      const docs = generateDocs(...relatedData)(description)

      if (token) {
        tokenProps[token] ??= []
        tokenProps[token].push(prop)
      }

      if (shorthands) {
        shorthands.forEach((shorthandProp) => {
          if (token) tokenProps[token]?.push(shorthandProp)
        })
      }

      return [prop, { ...config, type, docs, shorthands }]
    }
  }

  const additional = Object.fromEntries(
    Object.entries<StyleConfig>(additionalProps).map(generateDate()),
  ) as { [key: string]: Config }
  const styled = Object.fromEntries(
    Object.entries<StyleConfig>(styledProps).map(generateDate()),
  ) as { [key: string]: Config }
  const atRule = Object.fromEntries(
    Object.entries<StyleConfig>(atRuleProps).map(generateDate(true)),
  ) as { [key: string]: Config }

  return {
    data: { additional, atRule, pseudo, standard, styled },
    duplicatedProps,
    tokenProps,
    variableLengthProps,
  }
}

function main() {
  const program = new Command()
  const spinner = ora()

  program
    .option("-p, --publish", "publish the styles")
    .action(async ({ publish = false }) => {
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

      spinner.start(`Writing file`)

      const { data, duplicatedProps, tokenProps, variableLengthProps } =
        generateData(cssCompatData, atRuleCompatData)
      const content = generateStyles(data, tokenProps, variableLengthProps)

      if (duplicatedProps.length) {
        spinner.info(`Duplicated props that are present in "StyledProps"`)

        duplicatedProps.forEach(({ name, url }) => {
          console.log("  -", c.blue(name), `(${url})`)
        })
      }

      if (!publish) {
        await writeFileWithFormat(STYLES_PATH, content)
      } else {
        const omittedData = Object.fromEntries(
          Object.entries(data).map(([key, value]) => {
            const data = Object.fromEntries(
              Object.entries(value).map(
                ([key, { transforms: _transforms, ...config }]) => [
                  key,
                  config,
                ],
              ),
            )

            return [key, data]
          }),
        )

        await writeFileWithFormat(STYLES_PUBLISH_PATH, omittedData, {
          parser: "json",
        })
      }

      spinner.succeed(`Wrote file`)

      spinner.start(`Fixing eslint`)

      if (!publish) await execa("eslint", [STYLES_PATH, "--fix"])

      spinner.succeed(`Fixed eslint`)

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    })

  program.parse()
}

main()
