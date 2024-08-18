import { writeFile } from "fs/promises"
import { pseudosSelectors, type ThemeToken } from "@yamada-ui/react"
import { prettier, toKebabCase } from "../utils"
import { checkProps } from "./check"
import { getConfig } from "./config"
import { layoutStyleProperties } from "./layout-props"
import { resolveTypes } from "./resolve-types"
import { shorthandProps } from "./shorthand-props"
import { tokenMap } from "./tokens"
import type { TransformOptions } from "./transform-props"
import { transformMap } from "./transform-props"
import type { UIOptions } from "./ui-props"
import { additionalProps, atRuleProps, uiProps } from "./ui-props"
import { OUT_PATH } from "."
import type { CSSProperties, CSSProperty, UIProperties } from "."

const addType = (result: string, value: string) =>
  />$/.test(result) ? result.replace(/>$/, `${value}>`) : result + value

const computedType = ({
  type,
  hasToken = true,
  token,
  transform,
  prop,
}: {
  type: string | string[]
  hasToken?: boolean
  token?: ThemeToken
  transform?: TransformOptions
  prop?: CSSProperties
}) => {
  const resolveType = prop ? resolveTypes[prop] : undefined

  let result = hasToken ? "Token<>" : ""

  if (resolveType) {
    result = addType(result, resolveType)
  } else {
    const isPx =
      transform === "px" ||
      (typeof transform !== "string" &&
        (transform?.transform === "px" ||
          transform?.additionalTransform === "px"))
    const isFraction =
      transform === "fraction" ||
      (typeof transform !== "string" &&
        (transform?.transform === "fraction" ||
          transform?.additionalTransform === "fraction"))
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

  if (token) {
    let resolvedToken: string = token

    if (resolvedToken === "transitions.property")
      resolvedToken = "transitionProperty"
    if (resolvedToken === "transitions.duration")
      resolvedToken = "transitionDuration"
    if (resolvedToken === "transitions.easing")
      resolvedToken = "transitionEasing"

    result = addType(result, `, "${resolvedToken}"`)
  }

  return result
}

const generateDocs = ({
  properties,
  urls = [],
  description = [],
  deprecated,
}: {
  properties: string | string[] | undefined
  urls?: string[]
  description?: string[]
  deprecated?: boolean
}) => {
  if (!description.length) {
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
        ...urls.map((url) => `@see Docs ${url}`),
      ]
  }

  if (deprecated) description = [...description, "", `@deprecated`]

  return `/**\n${description.map((row) => `* ${row}`).join("\n")}\n*/`
}

export const generateStyles = async (
  styles: (CSSProperty & { type: string; deprecated: boolean })[],
) => {
  const standardStyles: string[] = []
  const shorthandStyles: string[] = []
  const pseudoStyles: string[] = []
  const uiStyles: string[] = []
  const atRuleStyles: string[] = []
  const styleProps: string[] = []
  const processSkipProperties: string[] = []
  const pickedStyles: (CSSProperty & { type: string })[] = []

  checkProps(styles)

  pseudosSelectors.forEach((selector) => {
    const transform = transformMap[selector]

    if (!transform) return

    const config = getConfig({ properties: selector, transform })()

    pseudoStyles.push(`"${selector}": ${config}`)
  })

  styles = styles.filter((style) => {
    const isExists = [
      ...Object.keys(additionalProps),
      ...Object.keys(uiProps),
      ...Object.keys(atRuleProps),
    ].includes(style.prop)

    if (isExists) pickedStyles.push(style)

    return !isExists
  })

  styles.forEach(({ name, prop, url, type, deprecated }) => {
    const token: ThemeToken | undefined = tokenMap[prop]
    const shorthands = shorthandProps[prop]
    const transform = transformMap[prop]
    const config = getConfig({ properties: prop, token, transform })()
    const docs = generateDocs({ properties: name, urls: [url], deprecated })

    type = computedType({ type, token, transform, prop })
    standardStyles.push(`${prop}: ${config}`)
    styleProps.push(...[docs, `${prop}?: ${type}`])

    if (shorthands) {
      const shorthandStyle =
        config === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        shorthandStyles.push(`${shorthandProp}: ${shorthandStyle}`)
        styleProps.push(docs, `${shorthandProp}?: ${type}`)
      })
    }
  })

  const addStyles = (
    [
      prop,
      {
        properties,
        transform,
        static: css,
        type,
        hasToken,
        isProcessResult,
        isProcessSkip,
        description,
      },
    ]: [string, UIOptions],
    targetStyles: string[],
  ) => {
    if (isProcessSkip) processSkipProperties.push(prop)

    const relatedStyles = styles.filter(({ prop }) =>
      typeof properties === "string"
        ? prop === properties
        : properties?.includes(prop),
    )
    const deprecated = relatedStyles.some(({ deprecated }) => deprecated)
    const urls = relatedStyles.map(({ url }) => url)
    const types = relatedStyles.map(({ type }) => type)
    const token = tokenMap[prop as UIProperties]
    const shorthands = shorthandProps[prop as UIProperties]

    transform ??= transformMap[prop as UIProperties]
    type = computedType({ type: type ?? types, hasToken, token, transform })

    const config = getConfig({
      properties,
      token,
      transform,
      isProcessResult,
      isProcessSkip,
      css,
    })(true)

    const docs = generateDocs({ properties, description, urls, deprecated })

    targetStyles.push(`${prop}: ${config}`)
    styleProps.push(...[docs, `${prop}?: ${type}`])

    if (shorthands) {
      const shorthandStyle =
        config === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        shorthandStyles.push(`${shorthandProp}: ${shorthandStyle}`)
        styleProps.push(docs, `${shorthandProp}?: ${type}`)
      })
    }
  }

  Object.entries<UIOptions>(additionalProps).forEach((entry) =>
    addStyles(entry, standardStyles),
  )
  Object.entries<UIOptions>(uiProps).forEach((entry) =>
    addStyles(entry, uiStyles),
  )
  Object.entries<UIOptions>(atRuleProps).forEach((entry) =>
    addStyles(entry, atRuleStyles),
  )

  const content = `
    import type { StringLiteral } from "@yamada-ui/utils"
    import type * as CSS from "csstype"
    import type { StyleConfigs } from "./config"
    import { transforms } from "./config"
    import type { CSSUIObject, Token } from "./css"
    import type { Theme } from "./theme.types"

    export const standardStyles: StyleConfigs = {
      ${standardStyles.join(",\n")}
    }

    export const shorthandStyles: StyleConfigs = {
      ${shorthandStyles.join(",\n")}
    }

    export const pseudoStyles: StyleConfigs = {
      ${pseudoStyles.join(",\n")}
    }

    export const uiStyles: StyleConfigs = {
      ${uiStyles.join(",\n")}
    }

    export const atRuleStyles: StyleConfigs = {
      ${atRuleStyles.join(",\n")}
    }

    export const styles: StyleConfigs = { ...standardStyles, ...shorthandStyles, ...pseudoStyles, ...uiStyles, ...atRuleStyles }

    export const processSkipProperties: string[] = [${processSkipProperties.map(
      (property) => `"${property}"`,
    )}]

    export const styleProperties: any[] = Object.keys(styles)

    export const layoutStyleProperties: any[] = [${layoutStyleProperties}]

    export type StyleProps = {
      ${styleProps.join("\n")}
    }
  `

  const data = await prettier(content)

  await writeFile(OUT_PATH, data)

  return pickedStyles
}
