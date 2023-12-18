import { writeFile } from "fs/promises"
import type { ThemeToken } from "@yamada-ui/react"
import { getConfig } from "./config"
import { layoutStyleProperties } from "./layout-props"
import { resolveTypes } from "./resolve-types"
import { shorthandProps } from "./shorthand-props"
import { tokenMap } from "./tokens"
import type { TransformOptions } from "./transform-props"
import { transformMap } from "./transform-props"
import type { UIOptions } from "./ui-props"
import { uiProps } from "./ui-props"
import { prettier, toKebabCase } from "./utils"
import { OUT_PATH } from "."
import type { CSSProperties, CSSProperty, UIProperties } from "."

const computedType = ({
  type,
  token,
  transform,
  prop,
}: {
  type: string | string[]
  token?: ThemeToken
  transform?: TransformOptions
  prop?: CSSProperties
}) => {
  const resolveType = prop ? resolveTypes[prop] : undefined

  let result = ""

  if (resolveType) {
    result = `Token<${resolveType}>`
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
      result = `Token<${type}>`
    } else {
      if (type.length) {
        result = `Token<${type.join(" | ")}>`
      } else {
        result = "Token<StringLiteral>"
      }
    }

    if (isNumber) result = result.replace(/>$/, ` | number>`)
  }

  if (token) {
    let resolvedToken: string = token

    if (resolvedToken === "transitions.property")
      resolvedToken = "transitionProperty"
    if (resolvedToken === "transitions.duration")
      resolvedToken = "transitionDuration"
    if (resolvedToken === "transitions.easing")
      resolvedToken = "transitionEasing"

    result = result.replace(/>$/, `, "${resolvedToken}">`)
  }

  return result
}

const generateDocs = ({
  properties,
  url,
  description = [],
  deprecated,
}: {
  properties: string | string[] | undefined
  url?: string
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

    if (url) description = [...description, "", `@see Docs ${url}`]
  }

  if (deprecated) description = [...description, "", `@deprecated`]

  return `/**\n${description.map((row) => `* ${row}`).join("\n")}\n*/`
}

export const generateStyles = async (
  styles: (CSSProperty & { type: string; deprecated: boolean })[],
) => {
  let standardStyles: string[] = []
  let shorthandStyles: string[] = []
  let styleProps: string[] = []
  let pickedStyles: (CSSProperty & { type: string })[] = []

  styles = styles.filter((style) => {
    const isExists = Object.keys(uiProps).includes(style.prop)

    if (isExists) pickedStyles = [...pickedStyles, style]

    return !isExists
  })

  styles.forEach(({ name, prop, url, type, deprecated }) => {
    const token: ThemeToken | undefined = tokenMap[prop]
    const shorthands = shorthandProps[prop]
    const transform = transformMap[prop]
    const config = getConfig({ properties: prop, token, transform })
    type = computedType({ type, token, transform, prop })
    const docs = generateDocs({ properties: name, url, deprecated })

    standardStyles = [...standardStyles, `${prop}: ${config}`]
    styleProps = [...styleProps, ...[docs, `${prop}?: ${type}`]]

    if (shorthands) {
      const shorthandStyle =
        config === true ? `{ properties: "${prop}" }` : `standardStyles.${prop}`

      shorthands.forEach((shorthandProp) => {
        shorthandStyles = [
          ...shorthandStyles,
          `${shorthandProp}: ${shorthandStyle}`,
        ]
        styleProps = [...styleProps, ...[docs, `${shorthandProp}?: ${type}`]]
      })
    }
  })

  Object.entries<UIOptions>(uiProps).forEach(
    ([
      prop,
      {
        properties,
        transform,
        static: css,
        type,
        isProcessResult,
        isSkip,
        description,
      },
    ]) => {
      const types = styles
        .filter(({ prop }) =>
          typeof properties === "string"
            ? prop === properties
            : properties?.includes(prop),
        )
        .map(({ type }) => type)
      const token = tokenMap[prop as UIProperties]
      const shorthands = shorthandProps[prop as UIProperties]
      transform ??= transformMap[prop as UIProperties]
      const config = getConfig({
        properties,
        token,
        transform,
        isProcessResult,
        isSkip,
        css,
      })
      type = computedType({ type: type ?? types, token, transform })
      const docs = generateDocs({ properties, description })

      standardStyles = [...standardStyles, `${prop}: ${config}`]
      styleProps = [...styleProps, ...[docs, `${prop}?: ${type}`]]

      if (shorthands) {
        const shorthandStyle =
          config === true
            ? `{ properties: "${prop}" }`
            : `standardStyles.${prop}`

        shorthands.forEach((shorthandProp) => {
          shorthandStyles = [
            ...shorthandStyles,
            `${shorthandProp}: ${shorthandStyle}`,
          ]
          styleProps = [...styleProps, ...[docs, `${shorthandProp}?: ${type}`]]
        })
      }
    },
  )

  const content = `
    import type { StringLiteral } from "@yamada-ui/utils"
    import type * as CSS from "csstype"
    import type { Configs } from "./config"
    import { transforms } from "./config"
    import type { Token } from "./css"

    export const standardStyles: Configs = {
      ${standardStyles.join(",\n")}
    }

    export const shorthandStyles: Configs = {
      ${shorthandStyles.join(",\n")}
    }

    export const styles: Configs = { ...standardStyles, ...shorthandStyles }

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
