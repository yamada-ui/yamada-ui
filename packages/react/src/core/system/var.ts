import type { Dict } from "../../utils"
import type { CSSProperties, StyleValueWithCondition } from "../css"
import type {
  CSSMap,
  DefineThemeValue,
  System,
  ThemeToken,
  UsageTheme,
  VariableTokens,
  VariableValue,
} from "../system"
import type { Breakpoints } from "./breakpoint"
import {
  calc,
  escape,
  isArray,
  isNull,
  isObject,
  isString,
  isUndefined,
  merge,
  replaceObject,
} from "../../utils"
import { DEFAULT_VAR_PREFIX } from "../constant"
import {
  animation,
  colorMix,
  conditions,
  css,
  getStyle,
  gradient,
  injectKeyframes,
} from "../css"
import { defaultSystem } from "../system"

type ParsedValue = number | string | undefined

interface Variable {
  reference: string
  variable: string
}

export function transformInterpolation(
  value: any,
  callback: (value: string, fallbackValue?: string) => string,
) {
  if (isString(value)) {
    return value.replace(/\{(.*?)\}/g, (_, value) => {
      const [token, fallbackValue] = value.split(/,(.+)/)

      return callback(token.trim(), fallbackValue?.trim())
    })
  } else {
    return value
  }
}

export function getVar(token: string, fallback?: string) {
  if (!token.startsWith("--")) token = `--${token}`

  token = token.replace(/[^-_a-zA-Z0-9]/g, "")

  return fallback ? `var(${token}, ${fallback})` : `var(${token})`
}

export function getVarName(system: System) {
  return function (token: string) {
    const prefix = system.config.css?.varPrefix ?? DEFAULT_VAR_PREFIX

    return `--${prefix}-${token}`
  }
}

export function getColorSchemeVar(system: System) {
  return function (value: any, fallback?: string) {
    if (!isString(value)) return value

    const prefix = system.config.css?.varPrefix ?? DEFAULT_VAR_PREFIX

    const [, token] = value.split(".")

    return getVar(`${prefix}-colorScheme-${token}`, fallback)
  }
}

const isGradient = (token: string) => token.startsWith("gradients.")
const isKeyframes = (token: string) => token.startsWith("keyframes.")
const isAnimation = (token: string) => token.startsWith("animations.")
const isSpace = (token: string) => token.startsWith("spaces.")
const isColor = (token: string) => token.startsWith("colors.")
export const isColorScheme = (token: any) =>
  isString(token) && token.startsWith("colorScheme.") && !token.includes("/")

export function createVars(
  prefix: string = DEFAULT_VAR_PREFIX,
  theme: UsageTheme,
  breakpoints: Breakpoints,
) {
  return function (tokens: VariableTokens) {
    const { getQuery, isResponsive } = breakpoints

    function tokenToVar(token: string): Variable {
      token = token.replace(/\./g, "-")

      const variable = `--${[prefix, escape(token, "-")].filter(Boolean).join("-")}`
      const reference = `var(${variable})`

      return { reference, variable }
    }

    return function (
      cssMap: CSSMap = {},
      cssVars: Dict = {},
      prevTokens?: VariableTokens,
    ): { cssMap: CSSMap; cssVars: Dict } {
      const system: System = { ...defaultSystem, cssMap }
      const options = { css, system, theme }

      function getRelatedReference(
        token: string,
        value: ParsedValue = "",
      ): [ParsedValue, Exclude<ParsedValue, undefined>] {
        const relatedToken = [token.split(".")[0], value].join(".")

        if (token === relatedToken) return [, value]

        const targetToken = tokens[relatedToken] ?? prevTokens?.[relatedToken]

        if (!targetToken) return [, value]

        const { reference, variable } = tokenToVar(relatedToken)

        return [variable, reference]
      }

      function valueToVar(value: any) {
        return transformInterpolation(value, (value, fallbackValue) => {
          if (value.includes("colors.") || value.includes("colorScheme.")) {
            if (isColorScheme(value)) return getColorSchemeVar(system)(value)

            return colorMix(value, { fallback: fallbackValue, system })
          } else {
            const token = tokens[value] ?? prevTokens?.[value]

            if (token) {
              return tokenToVar(value).reference
            } else if (value in cssMap && cssMap[value]?.ref) {
              return cssMap[value].ref
            } else if (fallbackValue) {
              fallbackValue =
                fallbackValue in cssMap && cssMap[fallbackValue]?.ref
                  ? cssMap[fallbackValue]?.ref
                  : fallbackValue

              return `var(--${prefix}-${value}, ${fallbackValue})`
            } else {
              return `var(--${prefix}-${value})`
            }
          }
        })
      }

      function createNegativeVar(token: string, reference: string) {
        const paths = token.split(".")
        const [start, ...rest] = paths

        const negativeToken = `${start}.-${rest.join(".")}`

        const negativeReference = calc.negate(reference)

        return { negativeReference, negativeToken }
      }

      function createAnimationVar(value: VariableValue) {
        if (isArray(value)) {
          return value.map((value) => animation(value, options)).join(",")
        } else {
          return animation(value, options)
        }
      }

      function createGradientVar(token: string, value: DefineThemeValue) {
        return function (semantic: boolean) {
          if (!semantic) {
            return gradient(value, options)
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable ? reference : gradient(value, options)
          }
        }
      }

      function createKeyframesVar(token: string, value: any) {
        return function (semantic: boolean) {
          if (!semantic) {
            return injectKeyframes(css(system, theme)(value))
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable
              ? reference
              : injectKeyframes(css(system, theme)(value))
          }
        }
      }

      function createColorVar(
        token: string,
        properties: string[],
        value: DefineThemeValue,
      ) {
        return function (semantic: boolean) {
          if (!semantic) {
            return colorMix(value, { ...options, properties })
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable
              ? reference
              : colorMix(value, { ...options, properties })
          }
        }
      }

      function createVar(
        token: string,
        value: VariableValue,
        variable: string,
      ) {
        return function (semantic: boolean, queries: string[] = []) {
          if (isAnimation(token)) value = createAnimationVar(value)

          if (isArray(value)) {
            const [lightValue, darkValue] = value

            createVar(token, lightValue, variable)(semantic, queries)
            createVar(
              token,
              darkValue,
              variable,
            )(semantic, [...queries, conditions._dark])
          } else if (isResponsive(value, true)) {
            Object.entries(value).forEach(([key, value]) => {
              if (key === "base") {
                createVar(token, value, variable)(semantic, queries)
              } else {
                const query = getQuery(key)

                if (!query) return

                createVar(token, value, variable)(semantic, [...queries, query])
              }
            })
          } else {
            const computedValue: DefineThemeValue = valueToVar(value)

            let resolvedValue: DefineThemeValue | Dict = computedValue

            if (isKeyframes(token)) {
              resolvedValue = createKeyframesVar(token, computedValue)(semantic)
            } else if (isGradient(token)) {
              resolvedValue = createGradientVar(token, computedValue)(semantic)
            } else if (isColor(token)) {
              resolvedValue = createColorVar(
                token,
                [variable],
                computedValue,
              )(semantic)
            } else if (semantic) {
              const [, reference] = getRelatedReference(token, computedValue)

              resolvedValue = reference
            }

            if (!isObject(resolvedValue))
              resolvedValue = { [variable]: resolvedValue }

            const resolvedCssVars = queries.reduceRight<Dict>(
              (prev, key) => ({ [key]: prev }),
              resolvedValue,
            )

            cssVars = merge(cssVars, resolvedCssVars)
          }
        }
      }

      for (let [token, { semantic, value }] of Object.entries(tokens)) {
        const { reference, variable } = tokenToVar(token)

        createVar(token, value, variable)(semantic)

        if (isSpace(token)) {
          const { negativeReference, negativeToken } = createNegativeVar(
            token,
            reference,
          )

          cssMap[negativeToken] = { ref: negativeReference, var: variable }
        }

        cssMap[token] = { ref: reference, var: variable }
      }

      return { cssMap, cssVars }
    }
  }
}

export type CreateVars = ReturnType<ReturnType<typeof createVars>>

export function mergeVars(...fns: CreateVars[]) {
  return function (prevTokens?: VariableTokens) {
    let cssMap: CSSMap = {}
    let cssVars: Dict = {}

    for (const fn of fns) {
      const result = fn(cssMap, cssVars, prevTokens)

      cssMap = { ...cssMap, ...result.cssMap }
      cssVars = { ...cssVars, ...result.cssVars }
    }

    return { cssMap, cssVars }
  }
}

export function varAttr(
  value: StyleValueWithCondition<number | string> | undefined,
  token?: ThemeToken,
): StyleValueWithCondition<number | string> | undefined {
  if (isUndefined(value) || isNull(value)) return value

  if (isObject(value) || isArray(value)) {
    return replaceObject(value, (value) => varAttr(value, token))
  } else {
    return token ? `{${token}.${value}, ${value}}` : value
  }
}

export function injectVars<Y extends Dict | Dict[] | undefined>(
  objOrArray: Y,
  targets: { [key in CSSProperties]?: string },
  isInvalidProp?: (prop: string) => boolean,
): Y {
  if (!objOrArray) return objOrArray

  function callback(objOrArray: Dict) {
    return Object.fromEntries(
      Object.entries(objOrArray).flatMap(function ([prop, value]) {
        if (isInvalidProp?.(prop)) return [[prop, value]]

        const target = targets[prop]
        const result: [string, any][] = []

        if (target) {
          const { token } = getStyle(prop) ?? {}

          result.push([
            `--${target}`,
            token ? `{${token}.${value}, ${value}}` : value,
          ])
        } else if (isObject(value)) {
          result.push([prop, injectVars(value, targets)])
        } else {
          result.push([prop, value])
        }

        return result
      }),
    )
  }

  if (isArray(objOrArray)) {
    return objOrArray.map(callback) as Y
  } else {
    return callback(objOrArray) as Y
  }
}
