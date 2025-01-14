import type { Dict, FlattenObjectOptions } from "../../utils"
import type { Breakpoints, CreateThemeVars } from "../css"
import type {
  CSSMap,
  StyledTheme,
  ThemeConfig,
  ThemeValue,
} from "../theme.types"
import {
  flattenObject,
  isArray,
  objectFromEntries,
  omitObject,
  pickObject,
  TONES,
} from "../../utils"
import { createBreakpoints, createLayers, getCreateThemeVars } from "../css"

export type VariableResponsiveValue = Dict<
  [ThemeValue, ThemeValue] | ThemeValue
>

export type VariableColorModeValue = [
  Dict<ThemeValue> | ThemeValue,
  Dict<ThemeValue> | ThemeValue,
]

export type VariableValue =
  | ThemeValue
  | VariableColorModeValue
  | VariableResponsiveValue

interface VariableToken {
  semantic: boolean
  value: VariableValue
}

export interface VariableTokens {
  [key: string]: VariableToken
}

const primaryTokens = [
  "blurs",
  "borders",
  "colors",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "sizes",
  "spaces",
  "zIndices",
] as const

const secondaryTokens = ["shadows", "gradients"] as const

export type ThemeToken =
  | "animations"
  | "breakpoints"
  | "transitions.duration"
  | "transitions.easing"
  | "transitions.property"
  | (typeof primaryTokens)[number]
  | (typeof secondaryTokens)[number]

export type TransformTheme = Omit<
  StyledTheme,
  "changeThemeScheme" | "themeScheme"
>

export function transformTheme(
  theme: Dict,
  config?: ThemeConfig,
): TransformTheme {
  theme = omitTheme(theme)
  const prefix = config?.css?.varPrefix
  const breakpoints = createBreakpoints(theme.breakpoints, config?.breakpoint)
  const layers = createLayers(config?.css?.layers)
  const createThemeTokens = getCreateThemeTokens(
    breakpoints,
    config?.theme?.responsive,
  )
  const { queries = [] } = breakpoints ?? {}
  const createThemeVars = getCreateThemeVars(prefix, queries)

  const primaryTokens = createThemeTokens(theme)
  const secondaryTokens = createThemeTokens(theme, "secondary")
  const animationTokens = createThemeTokens(theme, "animation")

  let { cssMap, cssVars } = mergeVars(
    createThemeVars(primaryTokens),
    createThemeVars(secondaryTokens),
    createThemeVars(animationTokens),
  )()

  if (theme.themeSchemes) {
    for (const [themeScheme, nestedTheme] of Object.entries<Dict>(
      theme.themeSchemes,
    )) {
      const nestedPrimaryTokens = createThemeTokens(nestedTheme)
      const nestedSecondaryTokens = createThemeTokens(nestedTheme, "secondary")
      const nestedAnimationTokens = createThemeTokens(nestedTheme, "animation")

      const { cssVars: nestedCSSVars } = mergeVars(
        createThemeVars(nestedPrimaryTokens),
        createThemeVars(nestedSecondaryTokens),
        createThemeVars(nestedAnimationTokens),
      )({ ...primaryTokens, ...secondaryTokens, ...animationTokens })

      cssVars = {
        ...cssVars,
        [`[data-theme=${themeScheme}] &:not([data-theme]), &[data-theme=${themeScheme}]`]:
          nestedCSSVars,
      }
    }
  }

  Object.assign(theme, {
    __breakpoints: breakpoints,
    __config: config,
    __cssMap: cssMap,
    __cssVars: cssVars,
    __layers: layers,
  })

  return theme as TransformTheme
}

function getCreateThemeTokens(breakpoints?: Breakpoints, responsive?: boolean) {
  return function (
    theme: Dict,
    target: "animation" | "primary" | "secondary" = "primary",
  ) {
    let shouldProcess: FlattenObjectOptions["shouldProcess"] = undefined
    let defaultTokens: string[] = []
    let semanticTokens: string[] = []
    let omitKeys: string[] = []

    if (responsive)
      shouldProcess = (obj) => !breakpoints?.isResponsive(obj, true)

    switch (target) {
      case "primary":
        defaultTokens = [...primaryTokens, "transitions"]
        semanticTokens = [...primaryTokens, "transitions", "colorSchemes"]

        break

      case "secondary":
        defaultTokens = [...secondaryTokens]
        semanticTokens = [...secondaryTokens]

        break

      case "animation":
        defaultTokens = ["animations"]
        semanticTokens = ["animations"]
        omitKeys = ["keyframes"]

        break

      default:
        break
    }

    const defaultTokenMap = pickObject(theme, defaultTokens)
    const semanticTokenMap = pickObject(theme.semantics ?? {}, semanticTokens)

    const defaultTokenEntries: [string, VariableToken][] = Object.entries(
      flattenObject(defaultTokenMap, { omitKeys, shouldProcess }),
    ).map(([token, value]) => {
      const enhancedToken: VariableToken = { semantic: false, value }

      return [token, enhancedToken]
    })
    const semanticTokenEntries: [string, VariableToken][] = Object.entries(
      flattenObject(semanticTokenMap, { omitKeys, shouldProcess }),
    ).reduce<[string, VariableToken][]>((prev, [token, value]) => {
      if (token.startsWith("colorSchemes.")) {
        const [, semanticToken, tone] = token.split(".")

        if (tone) {
          const enhancedToken = { semantic: false, value }

          prev.push([`colors.${semanticToken}.${tone}`, enhancedToken])
        } else {
          TONES.forEach((tone) => {
            const enhancedToken: VariableToken = {
              semantic: true,
              value: isArray(value)
                ? [`${value[0]}.${tone}`, `${value[1]}.${tone}`]
                : `${value}.${tone}`,
            }

            prev.push([`colors.${semanticToken}.${tone}`, enhancedToken])
          })
        }

        if (isArray(value)) {
          const [lightValue, darkValue] = value

          const enhancedLightColors = semanticTokenMap.colors?.[lightValue]
          const enhancedDarkColors = semanticTokenMap.colors?.[darkValue]

          if (enhancedLightColors && enhancedDarkColors) {
            Object.entries<any>(enhancedLightColors).forEach(
              ([token, value]) => {
                const darkValue = enhancedDarkColors[token]

                if (darkValue)
                  value = [isArray(value) ? value[0] : value, darkValue]

                const enhancedToken: VariableToken = {
                  semantic: true,
                  value,
                }

                if (token === "base") {
                  prev.push([`colors.${semanticToken}`, enhancedToken])
                } else {
                  prev.push([`colors.${semanticToken}.${token}`, enhancedToken])
                }
              },
            )
          }
        } else {
          const enhancedColors = semanticTokenMap.colors?.[value]

          if (enhancedColors) {
            Object.entries<any>(enhancedColors).forEach(([token, value]) => {
              const enhancedToken: VariableToken = {
                semantic: true,
                value,
              }

              if (token === "base") {
                prev.push([`colors.${semanticToken}`, enhancedToken])
              } else {
                prev.push([`colors.${semanticToken}.${token}`, enhancedToken])
              }
            })
          }
        }
      } else {
        if (token.startsWith("colors."))
          if (token.endsWith(".base")) token = token.replace(".base", "")

        const enhancedToken: VariableToken = { semantic: true, value }

        prev.push([token, enhancedToken])
      }

      return prev
    }, [])

    return objectFromEntries<VariableTokens>([
      ...defaultTokenEntries,
      ...semanticTokenEntries,
    ])
  }
}

function mergeVars(...funcs: CreateThemeVars[]) {
  return function (prevTokens?: VariableTokens) {
    let resolvedCSSMap: CSSMap = {}
    let resolvedCSSVars: Dict = {}

    for (const func of funcs) {
      const { cssMap, cssVars } = func({
        cssMap: resolvedCSSMap,
        cssVars: resolvedCSSVars,
        prevTokens,
      })

      resolvedCSSMap = { ...resolvedCSSMap, ...cssMap }
      resolvedCSSVars = { ...resolvedCSSVars, ...cssVars }
    }

    return { cssMap: resolvedCSSMap, cssVars: resolvedCSSVars }
  }
}

function omitTheme(theme: Dict): Dict {
  return omitObject(theme, ["__cssMap", "__cssVar", "__breakpoints"])
}
