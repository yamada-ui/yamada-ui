import type { Dict } from "../../utils"
import type { VariableTokens, VariableValue } from "../theme"
import type { CSSMap, StyledTheme, ThemeValue } from "../theme.types"
import type { BreakpointQueries } from "./breakpoint"
import { calc, escape, isArray, isObject, isString, merge } from "../../utils"
import { animation, colorMix, gradient } from "../config"
import { DEFAULT_VAR_PREFIX } from "../constant"
import { pseudos } from "../pseudos"
import { css } from "./css"

type ParsedValue = number | string | undefined

interface Variable {
  reference: string
  variable: string
}

export function transformInterpolation(
  value: any,
  callback: (value: string) => string,
) {
  if (isString(value)) {
    return value.replace(/\{(.*?)\}/g, (_, value) => callback(value))
  } else {
    return value
  }
}

export function getVar(token: string) {
  return function (theme: StyledTheme) {
    const prefix = theme.__config?.css?.varPrefix ?? DEFAULT_VAR_PREFIX

    return `var(--${prefix}-${token})`
  }
}

export function getVarName(token: string) {
  return function (theme: StyledTheme) {
    const prefix = theme.__config?.css?.varPrefix ?? DEFAULT_VAR_PREFIX

    return `--${prefix}-${token}`
  }
}

export function getColorSchemeVar(value: any) {
  return function (theme: StyledTheme) {
    if (!isString(value)) return value

    const [, token] = value.split(".")

    return getVar(`colorScheme-${token}`)(theme)
  }
}

const isGradient = (token: string) => token.startsWith("gradients.")
const isAnimation = (token: string) => token.startsWith("animations.")
const isSpace = (token: string) => token.startsWith("spaces.")
const isColor = (token: string) => token.startsWith("colors.")
export const isColorScheme = (token: any) =>
  isString(token) && token.startsWith("colorScheme.") && !token.includes("/")

interface CreateThemeVarsOptions {
  cssMap?: CSSMap
  cssVars?: Dict
  prevTokens?: VariableTokens
}

export function getCreateThemeVars(
  prefix: string = DEFAULT_VAR_PREFIX,
  queries: BreakpointQueries,
) {
  function tokenToVar(token: string): Variable {
    token = token.replace(/\./g, "-")

    const variable = `--${[prefix, escape(token, "-")].filter(Boolean).join("-")}`
    const reference = `var(${variable})`

    return { reference, variable }
  }

  return function (tokens: VariableTokens) {
    return function ({
      cssMap = {},
      cssVars = {},
      prevTokens,
    }: CreateThemeVarsOptions = {}): { cssMap: CSSMap; cssVars: Dict } {
      const theme = { __cssMap: cssMap } as StyledTheme

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

      function getQuery(key: string) {
        return queries.find(({ breakpoint }) => breakpoint === key)?.query
      }

      function valueToVar<Y extends ParsedValue>(value: Y) {
        return transformInterpolation(value, (value) => {
          if (value.includes("colors.") || value.includes("colorScheme.")) {
            if (isColorScheme(value)) return getColorSchemeVar(value)(theme)

            return colorMix(value, { theme })
          } else {
            const token = tokens[value] ?? prevTokens?.[value]

            if (token) {
              return tokenToVar(value).reference
            } else if (value in cssMap && cssMap[value]?.ref) {
              return cssMap[value].ref
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
          return value
            .map((value) => animation(value, { css, theme }))
            .join(",")
        } else {
          return animation(value, { css, theme })
        }
      }

      function createGradientVar(token: string, value: ThemeValue) {
        return function (semantic: boolean) {
          if (!semantic) {
            return gradient(value, { css, theme })
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable ? reference : gradient(value, { css, theme })
          }
        }
      }

      function createColorVar(
        token: string,
        properties: string,
        value: ThemeValue,
      ) {
        return function (semantic: boolean) {
          if (!semantic) {
            return colorMix(value, { properties, theme })
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable ? reference : colorMix(value, { properties, theme })
          }
        }
      }

      function createVar(
        token: string,
        value: VariableValue,
        variable: string,
      ) {
        return function (semantic: boolean, queries: string[] = []) {
          if (isArray(value)) {
            const [lightValue, darkValue] = value

            createVar(token, lightValue, variable)(semantic, queries)
            createVar(
              token,
              darkValue,
              variable,
            )(semantic, [...queries, pseudos._dark])
          } else if (isObject(value)) {
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
            const computedValue: ThemeValue = valueToVar(value)

            let resolvedValue: Dict | ThemeValue = computedValue

            if (isGradient(token)) {
              resolvedValue = createGradientVar(token, computedValue)(semantic)
            } else if (isColor(token)) {
              resolvedValue = createColorVar(
                token,
                variable,
                computedValue,
              )(semantic)
            } else if (semantic) {
              const [, reference] = getRelatedReference(token, computedValue)

              resolvedValue = reference
            }

            if (!isObject(resolvedValue))
              resolvedValue = { [variable]: resolvedValue }

            cssVars = merge(
              cssVars,
              queries.reduceRight<Dict>(
                (prev, key) => ({ [key]: prev }),
                resolvedValue,
              ),
            )
          }
        }
      }

      for (let [token, { semantic, value }] of Object.entries(tokens)) {
        const { reference, variable } = tokenToVar(token)

        if (isAnimation(token)) value = createAnimationVar(value)

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

export type CreateThemeVars = ReturnType<ReturnType<typeof getCreateThemeVars>>
