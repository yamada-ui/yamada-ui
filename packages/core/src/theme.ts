import type { Dict, FlattenObjectOptions, Union } from "@yamada-ui/utils"
import {
  flattenObject,
  objectFromEntries,
  pickObject,
  omitObject,
  TONES,
  isObject,
  runIfFunc,
  isFunction,
  merge,
  isArray,
} from "@yamada-ui/utils"
import type {
  Breakpoints,
  CreateThemeVars,
  CSSUIObject,
  ThemeProps,
  UIStyle,
  UIStyleProps,
} from "./css"
import { analyzeBreakpoints, getCreateThemeVars } from "./css"
import type {
  CSSMap,
  ComponentMultiSizes,
  ComponentMultiStyle,
  ComponentMultiVariants,
  ComponentStyle,
  StyledTheme,
  ThemeConfig,
  ThemeValue,
} from "./theme.types"

export type VariableResponsiveValue = Dict<
  ThemeValue | [ThemeValue, ThemeValue]
>

export type VariableColorModeValue = [
  ThemeValue | Dict<ThemeValue>,
  ThemeValue | Dict<ThemeValue>,
]

export type VariableValue =
  | ThemeValue
  | VariableColorModeValue
  | VariableResponsiveValue

interface VariableToken {
  isSemantic: boolean
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
  "shadows",
  "sizes",
  "spaces",
  "zIndices",
] as const

const secondaryTokens = ["gradients"] as const

export type ThemeToken =
  | (typeof primaryTokens)[number]
  | (typeof secondaryTokens)[number]
  | "animations"
  | "breakpoints"
  | "transitions.duration"
  | "transitions.property"
  | "transitions.easing"

export type TransformTheme = Omit<
  StyledTheme,
  "themeScheme" | "changeThemeScheme"
>

export function transformTheme(
  theme: Dict,
  config?: ThemeConfig,
): TransformTheme {
  theme = omitTheme(theme)
  const prefix = config?.var?.prefix
  const breakpoints = analyzeBreakpoints(theme.breakpoints, config?.breakpoint)
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

      let { cssVars: nestedCSSVars } = mergeVars(
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
    __config: config,
    __cssVars: cssVars,
    __cssMap: cssMap,
    __breakpoints: breakpoints,
  })

  return theme as TransformTheme
}

function getCreateThemeTokens(breakpoints?: Breakpoints, responsive?: boolean) {
  return function (
    theme: Dict,
    target: "primary" | "secondary" | "animation" = "primary",
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
      const enhancedToken: VariableToken = { isSemantic: false, value }

      return [token, enhancedToken]
    })
    const semanticTokenEntries: [string, VariableToken][] = Object.entries(
      flattenObject(semanticTokenMap, { omitKeys, shouldProcess }),
    ).reduce(
      (prev, [token, value]) => {
        if (token.startsWith("colorSchemes.")) {
          const [, semanticToken, tone] = token.split(".")

          if (tone) {
            const enhancedToken = { isSemantic: false, value }

            prev.push([`colors.${semanticToken}.${tone}`, enhancedToken])
          } else {
            TONES.forEach((tone) => {
              const enhancedToken: VariableToken = {
                isSemantic: true,
                value: isArray(value)
                  ? [`${value[0]}.${tone}`, `${value[1]}.${tone}`]
                  : `${value}.${tone}`,
              }

              prev.push([`colors.${semanticToken}.${tone}`, enhancedToken])
            })
          }
        } else {
          const enhancedToken: VariableToken = { isSemantic: true, value }

          prev.push([token, enhancedToken])
        }

        return prev
      },
      [] as [string, VariableToken][],
    )

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
        prevTokens,
        cssMap: resolvedCSSMap,
        cssVars: resolvedCSSVars,
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

export function omitThemeProps<
  T extends ThemeProps,
  K extends Exclude<keyof T, "fontSize" | "variant" | "colorScheme"> = never,
>(props: T, keys: K[] = []) {
  return omitObject(props, ["fontSize", "variant", "colorScheme", ...keys])
}

type MergeStyleOptions = Omit<Partial<FilterStyleOptions>, "isMulti">

export function mergeStyle(
  target: ComponentStyle,
  ...sources: ComponentStyle[]
) {
  return function ({
    omit = [],
    pick = [],
  }: MergeStyleOptions = {}): ComponentStyle {
    return sources.reduce(
      (prev, source) =>
        recursiveMergeStyle(filterStyle(prev)({ omit, pick }), source),
      target,
    )
  }
}

export function mergeMultiStyle(
  target: ComponentMultiStyle,
  ...sources: ComponentMultiStyle[]
) {
  return function ({
    omit = [],
    pick = [],
  }: MergeStyleOptions = {}): ComponentMultiStyle {
    return sources.reduce(
      (prev, source) =>
        recursiveMergeStyle(
          filterStyle(prev)({ omit, pick, isMulti: true }),
          source,
        ),
      target,
    )
  }
}

function recursiveMergeStyle<T extends ComponentStyle | ComponentMultiStyle>(
  target: T,
  source: T,
): T {
  let result = Object.assign({}, target) as T

  if (isObject(source) && isObject(target)) {
    for (const [sourceKey, sourceValue] of Object.entries(source)) {
      const targetValue = target[sourceKey as keyof T]

      if (target.hasOwnProperty(sourceKey)) {
        if (!isFunction(targetValue) && !isFunction(sourceValue)) {
          result[sourceKey as keyof T] = recursiveMergeStyle(
            targetValue,
            sourceValue,
          ) as T[keyof T]
        } else {
          result[sourceKey as keyof T] = ((props: UIStyleProps) =>
            recursiveMergeStyle(
              runIfFunc(targetValue, props) as T,
              runIfFunc(sourceValue, props) as T,
            )) as T[keyof T]
        }
      } else {
        Object.assign(result, { [sourceKey]: sourceValue })
      }
    }
  } else {
    result = source
  }

  return result as T
}

interface FilterStyleOptions {
  omit: Union<keyof (ComponentStyle | ComponentMultiStyle)>[]
  pick: Union<keyof (ComponentStyle | ComponentMultiStyle)>[]
  isMulti?: boolean
}

function filterStyle<T extends ComponentStyle | ComponentMultiStyle>(
  target: T,
) {
  return function ({ omit, pick, isMulti = false }: FilterStyleOptions): T {
    if (!isObject(target)) return target

    if (omit.length)
      target = internalFilterStyle(target, omit, isMulti)(omitObject)
    if (pick.length)
      target = internalFilterStyle(target, pick, isMulti)(pickObject)

    return target
  }
}

function internalFilterStyle(
  target: any,
  keys: string[],
  isMulti: boolean,
  refs: string[] = [],
) {
  return function (func: typeof omitObject | typeof pickObject) {
    if (!isObject(target)) return target

    let result = Object.assign({}, target)

    result = func(result, keys)

    Object.entries(result ?? {}).forEach(([nestedKey, style]) => {
      const newKeys = keys.filter((key) => key !== nestedKey)
      const newRefs = [...refs, nestedKey]

      if (!onValidFilterStyleKey(newRefs, isMulti)) return

      if (isFunction(style)) {
        result[nestedKey] = (props: any) =>
          internalFilterStyle(style(props), newKeys, isMulti, newRefs)(func)
      } else {
        if (
          func === omitObject ||
          Object.keys(style).some((key) => newKeys.includes(key))
        ) {
          result[nestedKey] = internalFilterStyle(
            style,
            newKeys,
            isMulti,
            newRefs,
          )(func)
        } else {
          result[nestedKey] = merge(
            result[nestedKey],
            internalFilterStyle(style, newKeys, isMulti, newRefs)(func),
          )
        }
      }
    })

    return result
  }
}

function onValidFilterStyleKey(keys: string[], isMulti: boolean): boolean {
  const rootKey = keys[0]

  switch (rootKey) {
    case "baseStyle":
      return keys.length < (isMulti ? 2 : 1)

    case "variants":
    case "sizes":
      return keys.length < (isMulti ? 3 : 2)

    default:
      return false
  }
}

export function pickStyle(
  target: ComponentMultiStyle,
  targetKey: string,
  withProps: boolean = true,
): ComponentStyle {
  const result = {} as ComponentStyle

  Object.entries(target).forEach(([key, value]) => {
    switch (key) {
      case "baseStyle":
        if (isFunction(value)) {
          result[key] = (props) => value(props)[targetKey] as CSSUIObject
        } else {
          result[key] = value[targetKey]
        }

        break

      case "variants":
      case "sizes":
        result[key] = Object.entries(
          value as ComponentMultiVariants | ComponentMultiSizes,
        ).reduce<{ [key: string]: UIStyle }>((prev, [key, value]) => {
          if (isFunction(value)) {
            prev[key] = (props) => value(props)[targetKey] as CSSUIObject
          } else {
            prev[key] = value[targetKey]
          }

          return prev
        }, {})

        break

      case "defaultProps":
        if (withProps) result[key] = value

        break

      default:
        break
    }
  })

  return result
}
