import type { ThemeToken, Transforms } from "@yamada-ui/react"
import type {
  CSSCompatData,
  CSSCompatStatement,
  CSSProperties,
  FeatureData,
  Properties,
  UIProperties,
} from "."
import type { TransformOptions } from "./transform-props"
import type { StyleConfig } from "./ui-props"
import { isUndefined, pseudoSelectors, toArray } from "@yamada-ui/react"
import { prettier } from "../utils"
import { checkProps } from "./check"
import { generateConfig } from "./config"
import { overrideTypes } from "./override-types"
import { shorthandProps } from "./shorthand-props"
import { tokenMap, tokenPropertyMap } from "./tokens"
import { transformMap } from "./transform-props"
import { additionalProps, atRuleProps, uiProps } from "./ui-props"

const hasTransform = (
  targetTransform: Transforms,
  transforms: TransformOptions[] | undefined,
) => !!transforms?.some(({ transform }) => transform === targetTransform)

const addType = (result: string, value: string) =>
  result.endsWith(">") ? result.replace(/>$/, `${value}>`) : result + value

const generateType = ({
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
}) => {
  const overrideType = prop ? overrideTypes[prop] : undefined

  let result = !variableLength || token ? "CSSToken<>" : ""

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
        result = addType(result, "StringLiteral")
      }
    }

    if (isNumber) result = addType(result, ` | number`)
  }

  if (token) result = addType(result, `, "${token}"`)

  return result
}

const getBaseline = (feature?: FeatureData) => {
  if (!feature) return

  const rows: string[] = []

  switch (feature.status.baseline) {
    case "high":
      rows.push("@baseline `Widely available`")
      break

    case "low":
      rows.push("@baseline `Newly available`")
      break

    default:
      if (!feature.discouraged) rows.push("@baseline `Limited available`")
  }

  if (feature.status.baseline_high_date)
    rows.push(`@widely_available_date ${feature.status.baseline_high_date}`)

  if (feature.status.baseline_low_date)
    rows.push(`@newly_available_date ${feature.status.baseline_low_date}`)

  return rows
}

const generateDoc =
  (...data: CSSCompatStatement[]) =>
  (rows: string[] = []) => {
    const deprecated = data.some(({ status }) => status?.deprecated)
    const experimental = data.some(({ status }) => status?.experimental)

    data.forEach(({ name, feature, mdn_url, spec_url, ...data }, index) => {
      if (!!index) {
        rows.push("", "------------------------------------", "")
      }
      let description = feature?.description_html ?? data.description

      if (description) {
        // description = description.replace(/(@\w+)/g, "`$1`")
      } else {
        description = `The CSS \`${name}\` property.`
      }

      const url = mdn_url ?? toArray(spec_url)[0]
      const baseline = getBaseline(feature)

      rows.push(`### ${name}`, "", description)

      if (baseline) rows.push("", ...baseline)

      if (url) rows.push("", `@see ${url}`)
    })

    if (experimental && deprecated) {
      rows.push("", `@experimental`, `@deprecated`)
    } else if (experimental) {
      rows.push("", `@experimental`)
    } else if (deprecated) {
      rows.push("", `@deprecated`)
    }

    return `/**\n${rows.map((row) => `* ${row}`).join("\n")}\n*/`
  }

export const generateStyles = async (
  cssCompatData: CSSCompatData,
  atRuleCompatData: CSSCompatData,
) => {
  const standardStyles: string[] = []
  const shorthandStyles: string[] = []
  const pseudoStyles: string[] = []
  const uiStyles: string[] = []
  const atRuleStyles: string[] = []
  const styleProps: string[] = []
  const variableLengthProps: string[] = []
  const tokenProps: { [key in ThemeToken]?: string[] } = {}
  const excludedProperties: { name: string; url?: string }[] = []

  checkProps(cssCompatData)

  pseudoSelectors.forEach((selector) => {
    const transforms = transformMap[selector]

    if (!transforms) return

    const config = generateConfig({ properties: selector, transforms })()

    pseudoStyles.push(`"${selector}": ${config}`)
  })

  const omittedCssCompatData = Object.fromEntries(
    Object.entries(cssCompatData).filter(([name, data]) => {
      const isExists = [
        ...Object.keys(additionalProps),
        ...Object.keys(uiProps),
      ].includes(name)

      if (isExists) {
        const url = data.mdn_url ?? toArray(data.spec_url)[0]

        excludedProperties.push({ name, url })

        return false
      } else {
        return true
      }
    }),
  )

  Object.entries(omittedCssCompatData).forEach(([_prop, data]) => {
    const prop = _prop as CSSProperties | UIProperties
    const type = data.type
    const token = tokenMap[prop]
    const shorthands = shorthandProps[prop]
    const transforms = transformMap[prop]
    const config = generateConfig({ properties: prop, token, transforms })()
    const doc = generateDoc(data)()
    const computedType = generateType({ type, prop, token, transforms })

    standardStyles.push(`${prop}: ${config}`)
    styleProps.push(...[doc, `${prop}?: ${computedType}`])

    if (token) {
      tokenProps[token] ??= []

      tokenProps[token].push(prop)
    }

    if (shorthands) {
      const shorthandStyle =
        config === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        if (token) tokenProps[token]?.push(shorthandProp)

        shorthandStyles.push(`${shorthandProp}: ${shorthandStyle}`)
        styleProps.push(doc, `${shorthandProp}?: ${computedType}`)
      })
    }
  })

  const getRelatedCompatData = (
    properties: string | string[] | undefined,
    prop: string,
    isAtRule = false,
  ) => {
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

  const addStyles = (
    [prop, { type, description, properties, static: css, variableLength }]: [
      string,
      StyleConfig,
    ],
    targetStyles: string[],
    isAtRule = false,
  ) => {
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
      properties,
      token,
      transforms,
    })(true)

    const doc = generateDoc(...relatedData)(description)

    targetStyles.push(`${prop}: ${config}`)
    styleProps.push(...[doc, `${prop}?: ${type}`])

    if (token) {
      tokenProps[token] ??= []

      tokenProps[token].push(prop)
    }

    if (shorthands) {
      const shorthandStyle =
        config === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        if (token) tokenProps[token]?.push(shorthandProp)

        shorthandStyles.push(`${shorthandProp}: ${shorthandStyle}`)
        styleProps.push(doc, `${shorthandProp}?: ${type}`)
      })
    }
  }

  Object.entries<StyleConfig>(additionalProps).forEach((entry) =>
    addStyles(entry, standardStyles),
  )
  Object.entries<StyleConfig>(uiProps).forEach((entry) =>
    addStyles(entry, uiStyles),
  )
  Object.entries<StyleConfig>(atRuleProps).forEach((entry) =>
    addStyles(entry, atRuleStyles, true),
  )

  const variableLengthProperties = variableLengthProps.map(
    (property) => `"${property}"`,
  )
  const tokenProperties = Object.entries(tokenPropertyMap).map(
    ([name, tokens]) => {
      const properties = tokens
        .flatMap((token) => tokenProps[token] ?? [])
        .map((property) => `"${property}"`)
      const typeName = name.charAt(0).toUpperCase() + name.slice(1)

      return [
        `export type ${typeName}Property = typeof ${name}Properties[number]`,
        `export const ${name}Properties = [${properties.join(", ")}] as const`,
      ].join("\n\n")
    },
  )

  const content = `
    import type { StringLiteral } from "@yamada-ui/utils"
    import type * as CSS from "csstype"
    import type { StyleConfigs } from "./config"
    import type { CSSObject, CSSToken } from "./css"
    import type { ColorScheme, ThemeToken, ThemeTokens } from "./theme"
    import { transforms } from "./config"
    import { pipe } from "./config/utils"

    export type StandardStyleProperty = keyof typeof standardStyles

    export const standardStyles = {
      ${standardStyles.join(",\n")}
    } as const satisfies StyleConfigs

    export type ShorthandStyleProperty = keyof typeof shorthandStyles

    export const shorthandStyles = {
      ${shorthandStyles.join(",\n")}
    } as const satisfies StyleConfigs

    export type PseudoStyleProperty = keyof typeof pseudoStyles

    export const pseudoStyles = {
      ${pseudoStyles.join(",\n")}
    } as const satisfies StyleConfigs

    export type UIStyleProperty = keyof typeof uiStyles

    export const uiStyles = {
      ${uiStyles.join(",\n")}
    } as const satisfies StyleConfigs

    export type AtRuleStyleProperty = keyof typeof atRuleStyles

    export const atRuleStyles = {
      ${atRuleStyles.join(",\n")}
    } as const satisfies StyleConfigs

    export type Styles = typeof styles

    export const styles = { ...standardStyles, ...shorthandStyles, ...pseudoStyles, ...uiStyles, ...atRuleStyles } as const satisfies StyleConfigs

    export type StyleProperty = keyof typeof styles

    export const styleProperties = Object.keys(styles) as StyleProperty[]

    export type VariableLengthProperty = typeof variableLengthProperties[number]

    export const variableLengthProperties = [${variableLengthProperties.join(", ")}] as const

    ${tokenProperties.join("\n\n")}

    export interface StyleProps {
      ${styleProps.join("\n")}
    }
  `

  const data = await prettier(content)

  return { data, excludedProperties }
}
