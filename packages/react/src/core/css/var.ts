import type { Dict } from "../../utils"
import type { VariableTokens, VariableValue } from "../theme"
import type { CSSMap, StyledTheme, ThemeValue } from "../theme.types"
import type { BreakpointQueries } from "./breakpoint"
import { calc, escape, isArray, isObject, isString, merge } from "../../utils"
import { animation, gradient } from "../config"
import { DEFAULT_VAR_PREFIX } from "../constant"
import { pseudos } from "../pseudos"
import { css } from "./css"

type ParsedValue = number | string | undefined

interface Variable {
  reference: string
  variable: string
}

export function getVar(token: string, prefix?: string) {
  return function (theme: StyledTheme) {
    prefix ??= theme.__config?.css?.varPrefix ?? DEFAULT_VAR_PREFIX

    return `var(--${prefix}-${token})`
  }
}

export function getVarName(token: string, prefix?: string) {
  return function (theme: StyledTheme) {
    prefix ??= theme.__config?.css?.varPrefix ?? DEFAULT_VAR_PREFIX

    return `--${prefix}-${token}`
  }
}

const isGradient = (token: string) => token.startsWith("gradients.")
const isAnimation = (token: string) => token.startsWith("animations.")
const isSpace = (token: string) => token.startsWith("spaces.")

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
        const targetToken = tokens[relatedToken] ?? prevTokens?.[relatedToken]

        if (!targetToken) return [, value]

        const { reference, variable } = tokenToVar(relatedToken)

        return [variable, reference]
      }

      function getQuery(key: string) {
        return queries.find(({ breakpoint }) => breakpoint === key)?.query
      }

      function valueToVar<Y extends ParsedValue>(value: Y) {
        if (isString(value)) {
          return value.replace(/\$([^,)/\s]+)/g, (_, value) => {
            const token = tokens[value] ?? prevTokens?.[value]

            if (token) {
              return tokenToVar(value).reference
            } else if (value in cssMap && cssMap[value]?.ref) {
              return cssMap[value].ref
            } else {
              return `var(--${prefix}-${value})`
            }
          })
        } else {
          return value
        }
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
          return value.map((value) => animation(value, theme, css)).join(",")
        } else {
          return animation(value, theme, css)
        }
      }

      function createGradientVar(token: string, value: ThemeValue) {
        return function (semantic: boolean) {
          if (!semantic) {
            return gradient(value, theme, css)
          } else {
            const [variable, reference] = getRelatedReference(token, value)

            return variable ? reference : gradient(value, theme, css)
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
            let computedValue = valueToVar(value)

            if (isGradient(token)) {
              computedValue = createGradientVar(token, computedValue)(semantic)
            } else if (semantic) {
              const [, reference] = getRelatedReference(token, computedValue)

              computedValue = reference
            }

            cssVars = merge(
              cssVars,
              queries.reduceRight<Dict>((prev, key) => ({ [key]: prev }), {
                [variable]: computedValue,
              }),
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
