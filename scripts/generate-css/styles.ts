import { writeFile } from "fs/promises"
import type { Transforms, ThemeToken } from "@yamada-ui/react"
import { pseudosSelectors } from "@yamada-ui/react"
import { prettier, toKebabCase } from "../utils"
import { checkProps } from "./check"
import { generateConfig } from "./config"
import { layoutStyleProperties } from "./layout-props"
import { overrideTypes } from "./override-types"
import { shorthandProps } from "./shorthand-props"
import { tokenMap } from "./tokens"
import type { TransformOptions } from "./transform-props"
import { transformMap } from "./transform-props"
import type { UIOptions } from "./ui-props"
import { additionalProps, atRuleProps, uiProps } from "./ui-props"
import { OUT_PATH } from "."
import type { CSSProperty, Properties } from "."

const hasTransform = (
  targetTransform: Transforms,
  transforms: TransformOptions[] | undefined,
) => !!transforms?.some(({ transform }) => transform === targetTransform)

const addType = (result: string, value: string) =>
  />$/.test(result) ? result.replace(/>$/, `${value}>`) : result + value

const generateType = ({
  type,
  isProcessSkip = false,
  token,
  transforms,
  prop,
}: {
  type: string | string[]
  isProcessSkip?: boolean
  token?: ThemeToken
  transforms?: TransformOptions[]
  prop?: Properties
}) => {
  const overrideType = prop ? overrideTypes[prop] : undefined

  let result = !isProcessSkip ? "Token<>" : ""

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
    const transforms = transformMap[selector]

    if (!transforms) return

    const config = generateConfig({ properties: selector, transforms })()

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
    const transforms = transformMap[prop]
    const config = generateConfig({ properties: prop, token, transforms })()
    const docs = generateDocs({ properties: name, urls: [url], deprecated })

    type = generateType({ type, token, transforms, prop })
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
        static: css,
        type,
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
    const token = tokenMap[prop as Properties]
    const shorthands = shorthandProps[prop as Properties]
    const transforms = transformMap[prop as Properties]

    type = generateType({
      type: type ?? types,
      token,
      isProcessSkip,
      transforms,
    })

    const config = generateConfig({
      properties,
      token,
      transforms,
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
    import { pipe } from "./config/utils"
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
