import type { ThemeToken, Transforms } from "@yamada-ui/react"
import type { CSSProperty, Properties } from "."
import type { TransformOptions } from "./transform-props"
import type { StyleConfig } from "./ui-props"
import {
  isArray,
  isString,
  pseudoSelectors,
  toKebabCase,
} from "@yamada-ui/react"
import { computeBaseline } from "compute-baseline"
import { prettier } from "../utils"
import { checkProps } from "./check"
import { generateConfig } from "./config"
import { layoutStyleProperties } from "./layout-props"
import { overrideTypes } from "./override-types"
import { shorthandProps } from "./shorthand-props"
import { tokenMap, tokenPropertyMap } from "./tokens"
import { transformMap } from "./transform-props"
import { additionalProps, atRuleProps, uiProps } from "./ui-props"

export type BaselineData = {
  baseline: string
} & Omit<ReturnType<typeof computeBaseline>, "baseline">

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
  type: string | string[]
  prop?: Properties
  token?: ThemeToken
  transforms?: TransformOptions[]
  variableLength?: boolean
}) => {
  const overrideType = prop ? overrideTypes[prop] : undefined

  let result = !variableLength ? "Token<>" : ""

  if (overrideType) {
    result = addType(result, overrideType)
  } else {
    const isPx = hasTransform("px", transforms)
    const isFraction = hasTransform("fraction", transforms)
    const isNumber = isPx || isFraction

    if (typeof type === "string") {
      result = addType(result, type)
    } else {
      if (type.length) {
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

const generateDocs = ({
  baselineData,
  deprecated,
  description: defaultDescription = [],
  isAtRule = false,
  properties,
  urls = [],
}: {
  baselineData: BaselineData | null
  properties: string | string[] | undefined
  deprecated?: boolean
  description?: string[]
  isAtRule?: boolean
  urls?: string[]
}) => {
  let description = defaultDescription
  if (!defaultDescription.length) {
    if (!properties) return ""

    if (typeof properties === "string") {
      properties = `\`${properties}\``
    } else {
      properties = properties
        .map((property) => `\`${toKebabCase(property)}\``)
        .join(" and ")
    }

    description = [...description, `The CSS ${properties} property.`]

    if (urls.length)
      description = [
        ...description,
        "",
        ...urls.map((url) => (url !== "" ? `@see Docs ${url}` : "")),
      ]
  }

  if ((isAtRule || !defaultDescription.length) && baselineData) {
    const { baseline, baseline_high_date, baseline_low_date, support } =
      baselineData
    const lowDate = baseline_low_date ?? "-"
    const highDate = baseline_high_date ?? "-"
    const basicInfo = [
      `@scope \`${baseline}\``,
      `@widely_available_date \`${highDate}\``,
      `@newly_available_date \`${lowDate}\``,
    ]
    const browsersData: string[] = []
    support.forEach((value, key) => {
      browsersData.push(`- ${key.id}${value ? `: ${value.version}` : ""}`)
    })
    description = [
      ...description,
      "",
      "@Baseline",
      ...basicInfo,
      "@support_browsers",
      ...browsersData,
    ]
  }

  if (deprecated) description = [...description, "", `@deprecated`]

  return `/**\n${description.map((row) => `* ${row}`).join("\n")}\n*/`
}

const generateCompatKeys = (properties: CSSProperty[], atRuleProp?: string) => {
  return properties.map(({ name, property_type: type }) => {
    switch (type) {
      case "css":
        return `css.properties.${name}`
      case "at-rule":
        return `css.at-rules.${name}`
      case "svg":
        return `svg.global_attributes.${name}`
      case "feature":
        return `css.at-rules.${atRuleProp?.split("_")[1]}.${name}`
      default:
        return null
    }
  })
}

const formatBaseline = (
  data: ReturnType<typeof computeBaseline>,
): BaselineData => {
  switch (data.baseline) {
    case "high":
      return { ...data, baseline: "Widely available" }
    case "low":
      return { ...data, baseline: "Newly available" }
    case false:
      return { ...data, baseline: "Limited available" }
    default:
      return { ...data, baseline: "" }
  }
}

export const generateBaseline = (
  style: CSSProperty[],
  atRuleProp?: string,
): BaselineData | null => {
  if (!style.length) return null
  const [firstKey, ...restKeys] = generateCompatKeys(style, atRuleProp).filter(
    isString,
  )
  const data = firstKey
    ? computeBaseline({
        compatKeys: [firstKey, ...restKeys],
      })
    : null

  if (!data) return null
  return formatBaseline(data)
}

export const generateFeaturesInfo = (
  type: StyleConfig["type"],
  features: CSSProperty["features"],
  prop: string,
) => {
  if (!type || !isArray(type)) return undefined
  if (!features) return undefined
  const result: string[] = []

  type.forEach((row) => {
    const key = row.split(/\?:/)[0] as string
    const [originalKey] = Object.entries(shorthandProps).map(
      ([prop, shorthands]) => {
        if (shorthands.includes(key)) return prop
      },
    )

    const existIndex = features.findIndex(
      ({ prop }) => prop === key || prop === originalKey,
    )

    if (existIndex === -1) {
      result.push(row + ";")
      return
    }
    if (features[existIndex]) {
      const baselineData = generateBaseline([features[existIndex]], prop)

      const description = [`The feature ${key} of ${prop.split("_")[1]}.`]
      const { name, deprecated } = features[existIndex]
      const docs = generateDocs({
        baselineData,
        deprecated: deprecated,
        description,
        isAtRule: true,
        properties: name,
      })

      result.push(docs, row + ";")
    }
  })

  return `{${result.join("\n")}}[]`
}

export const generateStyles = async (
  styles: ({
    type: string
    deprecated: boolean
  } & CSSProperty)[],
) => {
  const standardStyles: string[] = []
  const shorthandStyles: string[] = []
  const pseudoStyles: string[] = []
  const uiStyles: string[] = []
  const atRuleStyles: string[] = []
  const styleProps: string[] = []
  const variableLengthProps: string[] = []
  const tokenProps: { [key in ThemeToken]?: string[] } = {}
  const pickedStyles: ({ type: string } & CSSProperty)[] = []

  checkProps(styles)

  pseudoSelectors.forEach((selector) => {
    const transforms = transformMap[selector]

    if (!transforms) return

    const config = generateConfig({ properties: selector, transforms })()

    pseudoStyles.push(`"${selector}": ${config}`)
  })

  styles = styles.filter((style) => {
    const isExists = [
      ...Object.keys(additionalProps),
      ...Object.keys(uiProps),
    ].includes(style.prop)

    if (isExists) pickedStyles.push(style)

    return !isExists
  })

  styles.forEach((style) => {
    let { type, name, deprecated, isSkip, prop, url } = style
    if (isSkip) return

    const token = tokenMap[prop]
    const shorthands = shorthandProps[prop]
    const transforms = transformMap[prop]
    const config = generateConfig({ properties: prop, token, transforms })()
    const baselineData = generateBaseline([style])
    const docs = generateDocs({
      baselineData,
      deprecated,
      properties: name,
      urls: [url],
    })

    type = generateType({ type, prop, token, transforms })
    standardStyles.push(`${prop}: ${config}`)
    styleProps.push(...[docs, `${prop}?: ${type}`])

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
        styleProps.push(docs, `${shorthandProp}?: ${type}`)
      })
    }
  })

  const addStyles = (
    [
      prop,
      {
        type,
        description,
        processResult,
        processSkip,
        properties,
        static: css,
        variableLength,
      },
    ]: [string, StyleConfig],
    targetStyles: string[],
  ) => {
    if (variableLength) variableLengthProps.push(prop)

    const isAtRule = prop.startsWith("_")
    const relatedStyles = styles.filter(({ prop: propName }) =>
      !isAtRule
        ? typeof properties === "string"
          ? propName === properties
          : properties?.includes(propName)
        : propName === prop,
    )

    const deprecated = relatedStyles.some(({ deprecated }) => deprecated)
    const urls = relatedStyles.map(({ url }) => url)
    const types = relatedStyles.map(({ type }) => type)
    const token = tokenMap[prop as Properties]
    const shorthands = shorthandProps[prop as Properties]
    const transforms = transformMap[prop as Properties]
    const baselineData = generateBaseline(relatedStyles)

    if (isAtRule && isArray(type)) {
      type = generateFeaturesInfo(type, relatedStyles[0]?.features, prop)
    }

    type = generateType({
      type: type ?? types,
      token,
      transforms,
      variableLength,
    })

    const config = generateConfig({
      css,
      processResult,
      processSkip,
      properties,
      token,
      transforms,
    })(true)

    const docs = generateDocs({
      baselineData,
      deprecated,
      description,
      isAtRule,
      properties,
      urls,
    })

    targetStyles.push(`${prop}: ${config}`)
    styleProps.push(...[docs, `${prop}?: ${type}`])

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
        styleProps.push(docs, `${shorthandProp}?: ${type}`)
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
    addStyles(entry, atRuleStyles),
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
    import type { CSSObject, Token } from "./css"
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

    export type LayoutStyleProperty = typeof layoutStyleProperties[number]

    export const layoutStyleProperties = [${layoutStyleProperties.join(", ")}] as const

    export interface StyleProps {
      ${styleProps.join("\n")}
    }
  `

  const data = await prettier(content)

  return { data, pickedStyles }
}
