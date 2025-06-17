import type { Dict, FlattenObjectOptions } from "../../utils"
import type { CreateVars } from "../css"
import type {
  CSSMap,
  DefineThemeValue,
  StyledTheme,
  ThemeConfig,
} from "./index.types"
import {
  flattenObject,
  isArray,
  isObject,
  isUndefined,
  omitObject,
} from "../../utils"
import { createBreakpoints, createLayers, getCreateVars } from "../css"

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

const tokenMap: {
  [key in "primary" | "secondary" | "tertiary"]: TokenOptions
} = {
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
  const shouldProcess = config?.theme?.responsive
    ? (obj: any) => !breakpoints?.isResponsive(obj, true)
    : () => true
  const createVars = getCreateVars(prefix, breakpoints)

  const primaryTokens = {
    ...createTokens(theme, "primary", shouldProcess),
    ...createColorSchemeTokens(theme, undefined, shouldProcess),
  }
  const secondaryTokens = createTokens(theme, "secondary", shouldProcess)
  const tertiaryTokens = createTokens(theme, "tertiary", shouldProcess)

  const { cssMap, cssVars } = mergeVars(
    createVars(primaryTokens),
    createVars(secondaryTokens),
    createVars(tertiaryTokens),
  )()

  if (theme.themeSchemes) {
    const themeSchemeEntries = Object.entries<Dict>(theme.themeSchemes)

    for (const [themeScheme, nestedTheme] of themeSchemeEntries) {
      const themeCondition = `[data-theme=${themeScheme}] &:not([data-theme]), &[data-theme=${themeScheme}]`

      const nestedPrimaryTokens = {
        ...createTokens(nestedTheme, "primary", shouldProcess),
        ...createColorSchemeTokens(theme, nestedTheme, shouldProcess),
      }
      const nestedSecondaryTokens = createTokens(
        nestedTheme,
        "secondary",
        shouldProcess,
      )
      const nestedTertiaryTokens = createTokens(
        nestedTheme,
        "tertiary",
        shouldProcess,
      )

      const { cssVars: nestedCSSVars } = mergeVars(
        createVars(nestedPrimaryTokens),
        createVars(nestedSecondaryTokens),
        createVars(nestedTertiaryTokens),
      )({ ...primaryTokens, ...secondaryTokens, ...tertiaryTokens })

      cssVars[themeCondition] = nestedCSSVars
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

function createColorSchemeTokens(
  theme: Dict,
  nestedTheme: Dict | undefined,
  shouldProcess: FlattenObjectOptions["shouldProcess"],
) {
  const colors = { base: theme.colors ?? {}, nested: nestedTheme?.colors ?? {} }
  const semanticColors = {
    base: theme.semanticTokens?.colors ?? {},
    nested: nestedTheme?.semanticTokens?.colors ?? {},
  }
  const colorSchemeTokens = flattenObject(
    (nestedTheme ?? theme).semanticTokens?.colorSchemes ?? {},
    { shouldProcess },
  )

  const results: VariableTokens = {}

  function insertToken(
    primaryKey: string,
    secondaryKey: string | undefined,
    value: any,
  ) {
    if (isUndefined(value)) return

    if (!secondaryKey || secondaryKey === "base") {
      results[`colors.${primaryKey}`] = { semantic: true, value }
    } else {
      results[`colors.${primaryKey}.${secondaryKey}`] = {
        semantic: true,
        value,
      }
    }
  }

  function processValue(primaryKey: string, colors: any, keyOrValue: any) {
    const value = colors.nested[keyOrValue] ?? colors.base[keyOrValue]

    if (isObject(value)) {
      const tokens = flattenObject(value, { shouldProcess })

      Object.keys(tokens).forEach((secondaryKey) => {
        const value =
          secondaryKey === "base" ? keyOrValue : `${keyOrValue}.${secondaryKey}`

        insertToken(primaryKey, secondaryKey, value)
      })
    } else {
      insertToken(primaryKey, undefined, keyOrValue)
    }
  }

  function processColorModeValue(
    primaryKey: string,
    colors: any,
    keyOrValue: any[],
  ) {
    const [lightValue, darkValue] = keyOrValue
    const lightColors = colors.nested[lightValue] ?? colors.base[lightValue]
    const darkColors = colors.nested[darkValue] ?? colors.base[darkValue]

    if (isObject(lightColors) && isObject(darkColors)) {
      const tokens = flattenObject(lightColors, { shouldProcess })

      Object.keys(tokens).forEach((secondaryKey) => {
        const value = [
          secondaryKey === "base"
            ? lightValue
            : `${lightValue}.${secondaryKey}`,
          secondaryKey === "base" ? darkValue : `${darkValue}.${secondaryKey}`,
        ]

        insertToken(primaryKey, secondaryKey, value)
      })
    } else if (!isObject(lightValue) && !isObject(darkValue)) {
      insertToken(primaryKey, undefined, [lightValue, darkValue])
    }
  }

  Object.entries(colorSchemeTokens).forEach(([primaryKey, value]) => {
    if (isArray(value)) {
      processColorModeValue(primaryKey, colors, value)
      processColorModeValue(primaryKey, semanticColors, value)
    } else {
      processValue(primaryKey, colors, value)
      processValue(primaryKey, semanticColors, value)
    }
  })

  return results
}

function createTokens(
  theme: Dict,
  target: "primary" | "secondary" | "tertiary",
  shouldProcess: FlattenObjectOptions["shouldProcess"] = () => true,
) {
  const results: VariableTokens = {}

  Object.entries(tokenMap[target]).forEach(
    ([primaryKey, { shouldProcess: shouldProcessProp, ...rest }]) => {
      const options: FlattenObjectOptions = {
        ...rest,
        shouldProcess: (obj) =>
          shouldProcess(obj) && (!shouldProcessProp || shouldProcessProp(obj)),
      }

      const tokens = flattenObject(theme[primaryKey] ?? {}, options)
      const semanticTokens = flattenObject(
        theme.semanticTokens?.[primaryKey] ?? {},
        options,
      )

      Object.entries(tokens).forEach(([secondaryKey, value]) => {
        const token = `${primaryKey}.${secondaryKey}`

        results[token] = { semantic: false, value }
      })

      Object.entries(semanticTokens).forEach(([secondaryKey, value]) => {
        let token = `${primaryKey}.${secondaryKey}`

        if (token.endsWith(".base")) token = token.replace(".base", "")

        results[token] = { semantic: true, value }
      })
    },
  )

  return results
}

function mergeVars(...fns: CreateVars[]) {
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
