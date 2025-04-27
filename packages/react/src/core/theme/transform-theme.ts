import type { Dict, FlattenObjectOptions } from "../../utils"
import type { Breakpoints, CreateThemeVars } from "../css"
import type {
  CSSMap,
  DefineThemeValue,
  StyledTheme,
  ThemeConfig,
} from "./index.types"
import {
  flattenObject,
  isArray,
  isEmptyObject,
  objectFromEntries,
  omitObject,
  TONES,
} from "../../utils"
import { createBreakpoints, createLayers, getCreateThemeVars } from "../css"

export type VariableResponsiveValue = Dict<
  [DefineThemeValue, DefineThemeValue] | DefineThemeValue
>

export type VariableColorModeValue = [
  DefineThemeValue | Dict<DefineThemeValue>,
  DefineThemeValue | Dict<DefineThemeValue>,
]

export type VariableValue =
  | DefineThemeValue
  | VariableColorModeValue
  | VariableResponsiveValue

interface VariableToken {
  semantic: boolean
  value: VariableValue
}

export interface VariableTokens {
  [key: string]: VariableToken
}

interface TokenOptions {
  [key: string]: FlattenObjectOptions
}

const primaryTokens = {
  aspectRatios: {},
  blurs: {},
  borders: {},
  colors: {},
  durations: {},
  easings: {},
  fonts: {},
  fontSizes: {},
  fontWeights: {},
  letterSpacings: {},
  lineHeights: {},
  radii: {},
  sizes: {},
  spaces: {},
  zIndices: {},
} satisfies TokenOptions

type PrimaryToken = keyof typeof primaryTokens

const secondaryTokens = {
  gradients: {},
  keyframes: { maxDepth: 1 },
  shadows: {},
} satisfies TokenOptions

type SecondaryToken = keyof typeof secondaryTokens

const tertiaryTokens = {
  animations: { shouldProcess: (obj) => !obj.keyframes },
} satisfies TokenOptions

type TertiaryToken = keyof typeof tertiaryTokens

const tokens: { [key: string]: TokenOptions } = {
  primary: primaryTokens,
  secondary: secondaryTokens,
  tertiary: tertiaryTokens,
}

export type ThemeToken =
  | "breakpoints"
  | PrimaryToken
  | SecondaryToken
  | TertiaryToken

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

  const createThemeVars = getCreateThemeVars(prefix, breakpoints)

  const primaryTokens = createThemeTokens(theme)
  const secondaryTokens = createThemeTokens(theme, "secondary")
  const tertiaryTokens = createThemeTokens(theme, "tertiary")

  let { cssMap, cssVars } = mergeVars(
    createThemeVars(primaryTokens),
    createThemeVars(secondaryTokens),
    createThemeVars(tertiaryTokens),
  )()

  if (theme.themeSchemes) {
    for (const [themeScheme, nestedTheme] of Object.entries<Dict>(
      theme.themeSchemes,
    )) {
      const nestedPrimaryTokens = createThemeTokens(nestedTheme)
      const nestedSecondaryTokens = createThemeTokens(nestedTheme, "secondary")
      const nestedTertiaryTokens = createThemeTokens(nestedTheme, "tertiary")

      const { cssVars: nestedCSSVars } = mergeVars(
        createThemeVars(nestedPrimaryTokens),
        createThemeVars(nestedSecondaryTokens),
        createThemeVars(nestedTertiaryTokens),
      )({ ...primaryTokens, ...secondaryTokens, ...tertiaryTokens })

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

function createColorToneTokens(token: string, value: any) {
  const result: [string, VariableToken][] = []
  const [semanticToken, tone] = token.split(".")

  if (tone) {
    const enhancedToken = { semantic: false, value }

    result.push([`colors.${semanticToken}.${tone}`, enhancedToken])
  } else {
    TONES.forEach((tone) => {
      const enhancedToken: VariableToken = {
        semantic: true,
        value: isArray(value)
          ? [`${value[0]}.${tone}`, `${value[1]}.${tone}`]
          : `${value}.${tone}`,
      }

      result.push([`colors.${semanticToken}.${tone}`, enhancedToken])
    })
  }

  return result
}

function createColorSchemeTokens(
  token: string,
  value: any,
  colors: Dict,
  shouldProcess: FlattenObjectOptions["shouldProcess"],
) {
  const result: [string, VariableToken][] = []
  const [semanticToken] = token.split(".")

  result.push(...createColorToneTokens(token, value))

  if (isArray(value)) {
    const [lightValue, darkValue] = value

    const enhancedLightColors = flattenObject(colors[lightValue] ?? {}, {
      shouldProcess,
    })
    const enhancedDarkColors = flattenObject(colors[darkValue] ?? {}, {
      shouldProcess,
    })

    if (
      !isEmptyObject(enhancedLightColors) &&
      !isEmptyObject(enhancedDarkColors)
    ) {
      Object.entries<any>(enhancedLightColors).forEach(([token, value]) => {
        const darkValue = enhancedDarkColors[token]

        if (darkValue) value = [isArray(value) ? value[0] : value, darkValue]

        const enhancedToken: VariableToken = {
          semantic: true,
          value,
        }

        if (token === "base") {
          result.push([`colors.${semanticToken}`, enhancedToken])
        } else {
          result.push([`colors.${semanticToken}.${token}`, enhancedToken])
        }
      })
    }
  } else {
    const enhancedColors = flattenObject(colors[value] ?? {}, {
      shouldProcess,
    })

    if (!isEmptyObject(enhancedColors)) {
      Object.entries<any>(enhancedColors).forEach(([token, value]) => {
        const enhancedToken: VariableToken = {
          semantic: true,
          value,
        }

        if (token === "base") {
          result.push([`colors.${semanticToken}`, enhancedToken])
        } else {
          result.push([`colors.${semanticToken}.${token}`, enhancedToken])
        }
      })
    }
  }

  return result
}

function replaceColorToken(token: string) {
  if (token.endsWith(".base")) {
    return token.replace(".base", "")
  } else {
    return token
  }
}

function getCreateThemeTokens(breakpoints?: Breakpoints, responsive?: boolean) {
  return function (
    theme: Dict,
    target: "primary" | "secondary" | "tertiary" = "primary",
  ) {
    let shouldProcess: Required<FlattenObjectOptions>["shouldProcess"] = () =>
      true
    const tokenEntries: [string, VariableToken][] = []
    const semanticTokenEntries: [string, VariableToken][] = []

    if (responsive)
      shouldProcess = (obj) => !breakpoints?.isResponsive(obj, true)

    Object.entries(tokens[target] ?? {}).forEach(([primaryKey, options]) => {
      const resolvedOptions: FlattenObjectOptions = {
        ...options,
        shouldProcess: (obj) =>
          shouldProcess(obj) &&
          (!options.shouldProcess || options.shouldProcess(obj)),
      }

      const tokens = flattenObject(theme[primaryKey] ?? {}, resolvedOptions)
      const semanticTokens = flattenObject(
        theme.semanticTokens?.[primaryKey] ?? {},
        resolvedOptions,
      )

      Object.entries(tokens).forEach(([secondaryKey, value]) => {
        const token = `${primaryKey}.${secondaryKey}`

        const enhancedToken: VariableToken = { semantic: false, value }

        tokenEntries.push([token, enhancedToken])
      })

      Object.entries(semanticTokens).forEach(([secondaryKey, value]) => {
        let token = `${primaryKey}.${secondaryKey}`

        if (token.startsWith("colors.")) token = replaceColorToken(token)

        const enhancedToken: VariableToken = { semantic: true, value }

        semanticTokenEntries.push([token, enhancedToken])
      })
    })

    if (target === "primary") {
      const colors = theme.semanticTokens?.colors ?? {}
      const colorSchemes = theme.semanticTokens?.colorSchemes ?? {}
      const colorSchemeMap = flattenObject(colorSchemes, { shouldProcess })

      Object.entries(colorSchemeMap).forEach(([token, value]) => {
        semanticTokenEntries.push(
          ...createColorSchemeTokens(token, value, colors, shouldProcess),
        )
      })
    }

    return objectFromEntries<VariableTokens>([
      ...tokenEntries,
      ...semanticTokenEntries,
    ])
  }
}

function mergeVars(...fns: CreateThemeVars[]) {
  return function (prevTokens?: VariableTokens) {
    let resolvedCSSMap: CSSMap = {}
    let resolvedCSSVars: Dict = {}

    for (const fn of fns) {
      const { cssMap, cssVars } = fn({
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
  return omitObject(theme, [
    "__cssMap",
    "__cssVar",
    "__breakpoints",
    "__layers",
  ])
}
