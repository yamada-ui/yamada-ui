import type { Dict } from "@yamada-ui/utils"
import {
  escape,
  merge,
  calc,
  isArray,
  isUndefined,
  isObject,
} from "@yamada-ui/utils"
import type { StyleConfig } from "../config"
import { animation, gradient } from "../config"
import { DEFAULT_VAR_PREFIX } from "../constant"
import { pseudos } from "../pseudos"
import type { StyleProperty } from "../styles"
import { styles } from "../styles"
import type { VarTokens } from "../theme"
import type { CSSMap, StyledTheme } from "../theme.types"
import { css } from "./css"
import type { CSSUIProps } from "./css.types"

type Var = {
  variable: string
  reference: string
}

export const getVar = (token: string) => (theme: StyledTheme) => {
  const prefix = theme.__config?.var?.prefix ?? DEFAULT_VAR_PREFIX

  return `var(--${prefix}-${token})`
}

const createVar = (token: string, prefix: string): Var => {
  const variable = `--${[prefix, escape(token, "-")].filter(Boolean).join("-")}`
  const reference = `var(${variable})`

  return { variable, reference }
}

const tokenToVar = (token: string, prefix: string): Var => {
  token = token.replace(/\./g, "-")

  return createVar(token, prefix)
}

export const createVars = <Y extends Dict, M extends keyof Y = keyof Y>(
  entryProps: Y,
  keys: M[] | readonly M[],
  format: (name: string) => string = (name) => name,
): [Required<CSSUIProps>["vars"], { [key in M]?: string }] => {
  const variables: CSSUIProps["vars"] = []
  const props: { [key in M]?: string } = {}

  Object.entries(entryProps).forEach(([name, value]) => {
    if (!keys.includes(name as M)) return

    const style: StyleConfig | true | undefined = styles[name as StyleProperty]

    const token = isObject(style) ? style.token : undefined

    variables.push({ name: format(name), token, value })

    props[name as M] = `$${format(name)}`
  })

  return [variables, props]
}

export const createThemeVars =
  (tokens: VarTokens, prefix: string = DEFAULT_VAR_PREFIX) =>
  ({
    baseTokens,
    cssMap = {},
    cssVars = {},
  }: {
    baseTokens?: VarTokens
    cssMap?: CSSMap
    cssVars?: Dict
  } = {}): { cssMap: CSSMap; cssVars: Dict } => {
    for (let [token, { isSemantic, value }] of Object.entries(tokens)) {
      const fetchParent = (
        value: string | number = "",
      ): [string | undefined, string | number] => {
        const [parent] = token.split(".")

        const relatedToken = [parent, value].join(".")

        const tokenValue = tokens[relatedToken] ?? baseTokens?.[relatedToken]

        if (!tokenValue) return [, value]

        const { variable, reference } = tokenToVar(relatedToken, prefix)

        return [variable, reference]
      }

      const { variable, reference } = tokenToVar(token, prefix)

      let resolvedLightValue: string | number | undefined
      let resolvedDarkValue: string | number | undefined

      const theme = { __cssMap: cssMap } as StyledTheme

      if (token.startsWith("animations.")) {
        if (isArray(value)) {
          resolvedLightValue = value
            .map((value) => animation(value, theme, css))
            .join(",")
        } else {
          resolvedLightValue = animation(value, theme, css)
        }
      } else {
        let [lightValue, darkValue] = isArray(value) ? [...value] : [value]

        if (token.startsWith("gradients.")) {
          const [lightParentVar, lightParentRef] = fetchParent(lightValue)
          const [darkParentVar, darkParentRef] = fetchParent(darkValue)

          if (lightParentVar) {
            resolvedLightValue = lightParentRef
          } else {
            resolvedLightValue = gradient(
              fetchParent(lightValue)[1],
              theme,
              css,
            )
          }

          if (darkParentVar) {
            resolvedDarkValue = darkParentRef
          } else {
            resolvedDarkValue = gradient(darkValue, theme, css)
          }
        } else {
          resolvedLightValue = lightValue
          resolvedDarkValue = darkValue
        }
      }

      if (!isSemantic) {
        if (token.startsWith("spaces") && !isUndefined(resolvedLightValue)) {
          const keys = token.split(".")
          const [firstKey, ...restKeys] = keys

          const negativeToken = `${firstKey}.-${restKeys.join(".")}`

          const negativeValue = calc.negate(resolvedLightValue)
          const negativeReference = calc.negate(reference)

          cssMap[negativeToken] = {
            value: negativeValue,
            var: variable,
            ref: negativeReference,
          }
        }

        cssVars[variable] = resolvedLightValue

        if (resolvedDarkValue)
          cssVars = merge(cssVars, {
            [pseudos._dark]: { [variable]: resolvedDarkValue },
          })

        cssMap[token] = {
          value: resolvedLightValue,
          var: variable,
          ref: reference,
        }

        continue
      }

      const [parentVar, parentRef] = fetchParent(resolvedLightValue)

      cssVars = merge(cssVars, { [variable]: parentRef })

      if (resolvedDarkValue) {
        const [, parentRef] = fetchParent(resolvedDarkValue)

        cssVars = merge(cssVars, { [pseudos._dark]: { [variable]: parentRef } })
      }

      cssMap[token] = {
        value: parentVar ?? resolvedLightValue,
        var: variable,
        ref: reference,
      }
    }

    return { cssMap, cssVars }
  }
