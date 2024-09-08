import type { Dict } from "@yamada-ui/utils"
import {
  escape,
  merge,
  calc,
  isArray,
  isUndefined,
  isString,
} from "@yamada-ui/utils"
import { animation, gradient } from "../config"
import { DEFAULT_VAR_PREFIX } from "../constant"
import { pseudos } from "../pseudos"
import type { VariableTokens } from "../theme"
import type { CSSMap, StyledTheme } from "../theme.types"
import { css } from "./css"

type ParsedValue = string | number | undefined

type Variable = {
  variable: string
  reference: string
}

export const getVar = (token: string) => (theme: StyledTheme) => {
  const prefix = theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

  return `var(--${prefix}-${token})`
}

const createVar = (token: string, prefix: string): Variable => {
  const variable = `--${[prefix, escape(token, "-")].filter(Boolean).join("-")}`
  const reference = `var(${variable})`

  return { variable, reference }
}

const tokenToVar = (token: string, prefix: string): Variable => {
  token = token.replace(/\./g, "-")

  return createVar(token, prefix)
}

const getParseVar =
  (
    tokens: VariableTokens,
    prevTokens: VariableTokens | undefined,
    cssMap: CSSMap,
    prefix: string = DEFAULT_VAR_PREFIX,
  ) =>
  <Y extends ParsedValue>(value: Y) => {
    if (isString(value)) {
      return value.replace(/\$([^,)/\s]+)/g, (_, value) => {
        const token = tokens[value] ?? prevTokens?.[value]

        if (token) {
          return tokenToVar(value, prefix).reference
        } else if (value in cssMap) {
          return cssMap[value].ref
        } else {
          return `var(--${prefix}-${value})`
        }
      })
    } else {
      return value
    }
  }

const getRelatedVar =
  (
    tokens: VariableTokens,
    prevTokens: VariableTokens | undefined,
    prefix: string = DEFAULT_VAR_PREFIX,
  ) =>
  (
    token: string,
    value: ParsedValue = "",
  ): [Exclude<ParsedValue, number>, Exclude<ParsedValue, undefined>] => {
    const [parent] = token.split(".")

    const relatedToken = [parent, value].join(".")

    const targetToken = tokens[relatedToken] ?? prevTokens?.[relatedToken]

    if (!targetToken) return [, value]

    const { variable, reference } = tokenToVar(relatedToken, prefix)

    return [variable, reference]
  }

export const createVars =
  (tokens: VariableTokens, prefix: string = DEFAULT_VAR_PREFIX) =>
  ({
    prevTokens,
    cssMap = {},
    cssVars = {},
  }: {
    prevTokens?: VariableTokens
    cssMap?: CSSMap
    cssVars?: Dict
  } = {}): { cssMap: CSSMap; cssVars: Dict } => {
    const theme = { __cssMap: cssMap } as StyledTheme

    const parseVar = getParseVar(tokens, prevTokens, cssMap, prefix)
    const relatedVar = getRelatedVar(tokens, prevTokens, prefix)

    for (let [token, { isSemantic, value }] of Object.entries(tokens)) {
      const { variable, reference } = tokenToVar(token, prefix)

      let lightValue: ParsedValue
      let darkValue: ParsedValue

      if (token.startsWith("animations.")) {
        if (isArray(value)) {
          lightValue = value
            .map((value) => animation(value, theme, css))
            .join(",")
        } else {
          lightValue = animation(value, theme, css)
        }
      } else {
        let [_lightValue, _darkValue] = isArray(value) ? [...value] : [value]

        _lightValue = parseVar(_lightValue)
        _darkValue = parseVar(_darkValue)

        if (token.startsWith("gradients.")) {
          const [lightParentVar, lightParentRef] = relatedVar(
            token,
            _lightValue,
          )
          const [darkParentVar, darkParentRef] = relatedVar(token, _darkValue)

          if (lightParentVar) {
            lightValue = lightParentRef
          } else {
            lightValue = gradient(_lightValue, theme, css)
          }

          if (darkParentVar) {
            darkValue = darkParentRef
          } else {
            darkValue = gradient(_darkValue, theme, css)
          }
        } else {
          lightValue = _lightValue
          darkValue = _darkValue
        }
      }

      if (!isSemantic) {
        if (token.startsWith("spaces") && !isUndefined(lightValue)) {
          const keys = token.split(".")
          const [firstKey, ...restKeys] = keys

          const negativeToken = `${firstKey}.-${restKeys.join(".")}`

          const negativeValue = calc.negate(lightValue)
          const negativeReference = calc.negate(reference)

          cssMap[negativeToken] = {
            value: negativeValue,
            var: variable,
            ref: negativeReference,
          }
        }

        cssVars[variable] = lightValue

        if (darkValue)
          cssVars = merge(cssVars, {
            [pseudos._dark]: { [variable]: darkValue },
          })

        cssMap[token] = {
          value: lightValue,
          var: variable,
          ref: reference,
        }

        continue
      }

      const [parentVar, parentRef] = relatedVar(token, lightValue)

      cssVars = merge(cssVars, { [variable]: parentRef })

      if (darkValue) {
        const [, parentRef] = relatedVar(token, darkValue)

        cssVars = merge(cssVars, { [pseudos._dark]: { [variable]: parentRef } })
      }

      cssMap[token] = {
        value: parentVar ?? lightValue,
        var: variable,
        ref: reference,
      }
    }

    return { cssMap, cssVars }
  }

export type CreateVars = ReturnType<typeof createVars>
