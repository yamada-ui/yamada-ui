import type { Dict } from "@yamada-ui/utils"
import { escape, merge, calc, isArray, isUndefined } from "@yamada-ui/utils"
import { generateAnimation, generateGradient, pseudos } from "../styles"
import type { VarTokens } from "../theme"
import type { CSSMap, StyledTheme } from "../theme.types"

type Var = {
  variable: string
  reference: string
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

export const createVars =
  (tokens: VarTokens, prefix: string = "ui") =>
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
      let resplvedDarkValue: string | number | undefined

      if (token.startsWith("animations.")) {
        if (isArray(value)) {
          resolvedLightValue = value
            .map((value) =>
              generateAnimation(value, {
                __cssMap: cssMap,
              } as StyledTheme),
            )
            .join(",")
        } else {
          resolvedLightValue = generateAnimation(value, {
            __cssMap: cssMap,
          } as StyledTheme)
        }
      } else {
        let [lightValue, darkValue] = isArray(value) ? [...value] : [value]

        if (token.startsWith("gradients.")) {
          const [lightParentVar, lightParentRef] = fetchParent(lightValue)
          const [darkParentVar, darkParentRef] = fetchParent(darkValue)

          if (lightParentVar) {
            resolvedLightValue = lightParentRef
          } else {
            resolvedLightValue = generateGradient(fetchParent(lightValue)[1], {
              __cssMap: cssMap,
            } as StyledTheme)
          }

          if (darkParentVar) {
            resplvedDarkValue = darkParentRef
          } else {
            resplvedDarkValue = generateGradient(darkValue, {
              __cssMap: cssMap,
            } as StyledTheme)
          }
        } else {
          resolvedLightValue = lightValue
          resplvedDarkValue = darkValue
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

        if (resplvedDarkValue)
          cssVars = merge(cssVars, {
            [pseudos._dark]: { [variable]: resplvedDarkValue },
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

      if (resplvedDarkValue) {
        const [, parentRef] = fetchParent(resplvedDarkValue)

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
