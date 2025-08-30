import type { ThemeToken } from "@yamada-ui/react"
import type { Baseline, Config, Docs } from "."
import type { TransformOptions } from "./transform-props"
import { isString } from "@yamada-ui/react"
import { tokenPropertyMap } from "./tokens"

function generateBaseline({
  newly_available_date,
  status,
  widely_available_date,
}: Baseline) {
  const rows: string[] = []

  if (status) rows.push(`@baseline \`${status}\``)

  if (widely_available_date)
    rows.push(`@widely_available_date ${widely_available_date}`)

  if (newly_available_date)
    rows.push(`@newly_available_date ${newly_available_date}`)

  return rows
}

function generateDoc(docs?: Docs | string) {
  if (!docs) return

  if (isString(docs)) {
    return `/**\n${docs
      .split("\n")
      .map((row) => `* ${row}`)
      .join("\n")}\n*/`
  } else {
    const rows: string[] = []

    Object.entries(docs).forEach(
      (
        [name, { baseline, deprecated, description, experimental, see }],
        index,
      ) => {
        if (!!index) rows.push("", "------------------------------------", "")

        rows.push(`### ${name}`, "", description)

        if (baseline) rows.push("", ...generateBaseline(baseline))

        if (see) rows.push("", `@see ${see}`)

        if (experimental && deprecated) {
          rows.push("", `@experimental`, `@deprecated`)
        } else if (experimental) {
          rows.push("", `@experimental`)
        } else if (deprecated) {
          rows.push("", `@deprecated`)
        }
      },
    )

    return `/**\n${rows.map((row) => `* ${row}`).join("\n")}\n*/`
  }
}

function generateTransform(...transforms: TransformOptions[]) {
  let transform = transforms
    .map(({ args, transform }) => {
      let fn = `transforms.${transform}`

      if (args) fn += `(${args.map((arg) => `"${arg}"`).join(", ")})`

      return fn
    })
    .join(", ")

  transform = transforms.length > 1 ? `pipe(${transform})` : transform

  return `transform: ${transform}`
}

function generateConfig({ as, css, properties, token, transforms }: Config) {
  if (as) return true

  if (!properties && !token && !css && !transforms) return true

  const result: string[] = []

  if (properties)
    result.push(`properties: [${properties.map((p) => `"${p}"`).join(", ")}]`)
  if (token) result.push(`token: "${token}"`)
  if (css) result.push(`static: ${JSON.stringify(css)}`)
  if (transforms) result.push(generateTransform(...transforms))

  return `{ ${result.join(", ")} }`
}

interface Data {
  additional: { [key: string]: Config }
  atRule: { [key: string]: Config }
  pseudo: { [key: string]: Config }
  standard: { [key: string]: Config }
  styled: { [key: string]: Config }
}

export function generateStyles(
  { additional, atRule, pseudo, standard, styled }: Data,
  tokenProps: { [key in ThemeToken]?: string[] },
  variableLengthProps: string[],
) {
  const shorthandStyles: string[] = []
  const styleProps: string[] = []

  function generateStyles([prop, config]: [string, Config]) {
    const doc = generateDoc(config.docs)

    if (doc) styleProps.push(doc)

    styleProps.push(`${prop}?: ${config.type}`)

    config.shorthands?.forEach((shorthandProp) => {
      shorthandStyles.push(
        `${shorthandProp}: ${config.as ? `{ properties: ["${prop}"] }` : `standardStyles.${prop}`}`,
      )

      if (doc) styleProps.push(doc)

      styleProps.push(`${shorthandProp}?: ${config.type}`)
    })

    return `${prop}: ${generateConfig(config)}`
  }

  const pseudoStyles = Object.entries(pseudo).map(
    ([prop, config]) => `"${prop}": ${generateConfig(config)}`,
  )
  const standardStyles = Object.entries({ ...standard, ...additional }).map(
    generateStyles,
  )
  const styledStyles = Object.entries(styled).map(generateStyles)
  const atRuleStyles = Object.entries(atRule).map(generateStyles)

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

  return [
    `import type * as CSS from "csstype"`,
    `import type { AnyString } from "../../utils"`,
    `import type { ColorScheme, ThemeTokens } from "../system"`,
    `import type { StyleConfigs } from "./config"`,
    `import type { CSSObject, StyleValueWithCondition } from "./index.types"`,
    `import { transforms } from "./config"`,
    `import { pipe } from "./utils"`,
    ``,
    `export type StandardStyleProperty = keyof typeof standardStyles`,
    ``,
    `export const standardStyles = {`,
    standardStyles.join(",\n"),
    `} as const satisfies StyleConfigs`,
    ``,
    `export type ShorthandStyleProperty = keyof typeof shorthandStyles`,
    ``,
    `export const shorthandStyles = {`,
    shorthandStyles.join(",\n"),
    `} as const satisfies StyleConfigs`,
    ``,
    `export type PseudoStyleProperty = keyof typeof pseudoStyles`,
    ``,
    `export const pseudoStyles = {`,
    pseudoStyles.join(",\n"),
    `} as const satisfies StyleConfigs`,
    ``,
    `export type StyledStyleProperty = keyof typeof styledStyles`,
    ``,
    `export const styledStyles = {`,
    styledStyles.join(",\n"),
    `} as const satisfies StyleConfigs`,
    ``,
    `export type AtRuleStyleProperty = keyof typeof atRuleStyles`,
    ``,
    `export const atRuleStyles = {`,
    atRuleStyles.join(",\n"),
    `} as const satisfies StyleConfigs`,
    ``,
    `export type Styles = typeof styles`,
    ``,
    `export const styles = {`,
    `  ...standardStyles,`,
    `  ...shorthandStyles,`,
    `  ...pseudoStyles,`,
    `  ...styledStyles,`,
    `  ...atRuleStyles,`,
    `} as const satisfies StyleConfigs`,
    ``,
    `export type StyleProperty = keyof typeof styles`,
    ``,
    `export const styleProperties = Object.keys(styles) as StyleProperty[]`,
    ``,
    `export type VariableLengthProperty = typeof variableLengthProperties[number]`,
    ``,
    `export const variableLengthProperties = [${variableLengthProperties.join(", ")}] as const`,
    ``,
    tokenProperties.join("\n\n"),
    ``,
    `export interface StyleProps {`,
    styleProps.join("\n"),
    `}`,
  ].join("\n")
}
