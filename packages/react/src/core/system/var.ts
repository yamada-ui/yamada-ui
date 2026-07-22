import type { Dict } from "../../utils"
import type { CSSProperties, StyleValueWithCondition } from "../css"
import type {
  ColorMode,
  CSSMap,
  CSSVars,
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
  filterEmpty,
  isArray,
  isEmptyObject,
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
  css,
  getStyle,
  gradient,
  injectKeyframes,
  isCSSFunction,
  isCSSVar,
} from "../css"
import { isInterpolation } from "../css/utils"
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
  if (isString(value))
    return value.replace(/\{(.*?)\}/g, (_, value) => {
      const [token, fallbackValue] = value.split(/,(.+)/)

      return callback(token.trim(), fallbackValue?.trim())
    })
  else return value
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
  rootNode?: System["rootNode"],
) {
  return function (tokens: VariableTokens) {
    function tokenToVar(token: string): Variable {
      token = token.replace(/\./g, "-")
      token = token.replace(/\//g, "\\/")

      const variable = `--${[prefix, escape(token, "-")].filter(Boolean).join("-")}`
      const reference = `var(${variable})`

      return { reference, variable }
    }

    return function (
      cssMap: CSSMap = {},
      cssVars: CSSVars = { light: {}, dark: {} },
      prevTokens?: VariableTokens,
    ): { cssMap: CSSMap; cssVars: CSSVars } {
      const system: System = { ...defaultSystem, cssMap, rootNode }
      const options = { css, system, theme }

      function getRelatedReference(
        token: string,
        value: ParsedValue = "",
      ): [ParsedValue, Exclude<ParsedValue, undefined>] {
        const relatedToken = [token.split(".")[0], value].join(".")

        if (token === relatedToken) return [undefined, value]

        const targetToken = tokens[relatedToken] ?? prevTokens?.[relatedToken]

        if (!targetToken) return [undefined, value]

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
        if (isArray(value))
          return value.map((value) => animation(value, options)).join(",")
        else return animation(value, options)
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
            return injectKeyframes(css(system, theme)(value), rootNode)
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable
              ? reference
              : injectKeyframes(css(system, theme)(value), rootNode)
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
        return function (
          semantic: boolean,
          colorMode: ColorMode = "light",
          breakpoint: string = "base",
        ) {
          if (isAnimation(token)) value = createAnimationVar(value)

          if (isArray(value)) {
            value.forEach((value, index) =>
              createVar(token, value, variable)(
                semantic,
                !index ? "light" : "dark",
                breakpoint,
              ),
            )
          } else if (breakpoints.isResponsive(value, true)) {
            Object.entries(value).forEach(([breakpoint, value]) =>
              createVar(token, value, variable)(
                semantic,
                colorMode,
                breakpoint,
              ),
            )
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

            const query = breakpoints.getQuery(breakpoint)

            if (query)
              resolvedValue = { [colorMode]: { [query]: resolvedValue } }
            else resolvedValue = { [colorMode]: resolvedValue }

            cssVars = merge(cssVars, resolvedValue)
          }
        }
      }

      for (const [token, { semantic, value }] of Object.entries(tokens)) {
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
    let cssVars: CSSVars = { light: {}, dark: {} }

    for (const fn of fns) {
      const result = fn(cssMap, cssVars, prevTokens)

      cssMap = { ...cssMap, ...result.cssMap }
      cssVars = { ...cssVars, ...result.cssVars }
    }

    return { cssMap, cssVars }
  }
}

function createSelector(selectors: string, attr?: string): string {
  return selectors
    .split(",")
    .map((selector) => {
      selector = selector.trim()

      if (!attr) return selector
      else if (selector === ":host") return `${selector}(${attr})`
      else return `${selector}${attr}`
    })
    .join(", ")
}

export function createVarRules(varRoot: string, cssVars: CSSVars): Dict {
  return Object.fromEntries(
    Object.entries(cssVars).flatMap(([colorMode, cssVars]) => {
      if (isEmptyObject(cssVars)) return []

      if (colorMode === "light" || colorMode === "dark") {
        const dark = colorMode === "dark"
        const attr = `[data-mode=${colorMode}]`
        const selector = createSelector(varRoot, dark ? attr : undefined)

        return [[[selector, attr].join(", "), cssVars]]
      } else {
        return Object.entries<Dict>(cssVars).flatMap(([themeScheme, cssVars]) =>
          Object.entries(cssVars).flatMap(([colorMode, cssVars]) => {
            if (isEmptyObject(cssVars)) return []

            const dark = colorMode === "dark"
            const attrs = {
              colorMode: `[data-mode=${colorMode}]`,
              themeScheme: `[data-theme=${themeScheme}]`,
            }
            const attr = !dark
              ? attrs.themeScheme
              : `${attrs.themeScheme}${attrs.colorMode}`
            const selector = createSelector(varRoot, attr)

            return [
              [
                filterEmpty([
                  selector,
                  attr,
                  `${attrs.themeScheme} ${attrs.colorMode}`,
                  dark ? `${attrs.colorMode} ${attrs.themeScheme}` : undefined,
                  `:host(${attrs.themeScheme}) ${attrs.colorMode}`,
                  dark
                    ? `:host(${attrs.colorMode}) ${attrs.themeScheme}`
                    : undefined,
                ]).join(", "),
                cssVars,
              ],
            ]
          }),
        )
      }
    }),
  )
}

export function varAttr<Y = StyleValueWithCondition<number | string>>(
  value: undefined | Y,
  token?: ThemeToken,
  fallbackValue?: string,
): undefined | Y {
  if (isUndefined(value) || isNull(value) || isCSSFunction(value)) return value

  if (isObject(value) || isArray(value))
    return replaceObject(value, (value) => varAttr(value, token, fallbackValue))
  else
    return token
      ? (`{${token}.${value as number | string}, ${fallbackValue ?? (value as number | string)}}` as Y)
      : value
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

          if (isCSSVar(value) || isInterpolation(value))
            result.push([`--${target}`, value])
          else
            result.push([
              `--${target}`,
              replaceObject(value, (value) =>
                token ? `{${token}.${value}, ${value}}` : value,
              ),
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

  if (isArray(objOrArray)) return objOrArray.map(callback) as Y
  else return callback(objOrArray) as Y
}
