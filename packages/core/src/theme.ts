import type { Dict, Union } from "@yamada-ui/utils"
import {
  flattenObject,
  objectFromEntries,
  pickObject,
  omitObject,
  hues,
  isObject,
  runIfFunc,
  isFunction,
} from "@yamada-ui/utils"
import type { CSSUIObject, ThemeProps, UIStyle, UIStyleProps } from "./css"
import { analyzeBreakpoints, createVars } from "./css"
import type {
  CSSMap,
  ComponentMultiSizes,
  ComponentMultiStyle,
  ComponentMultiVariants,
  ComponentStyle,
  ThemeConfig,
} from "./theme.types"

type VarToken = {
  isSemantic: boolean
  value: string | number | [string | number, string | number]
}

export type VarTokens = Record<string, VarToken>

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

export const transformTheme = (theme: Dict, config?: ThemeConfig): Dict => {
  theme = omitTheme(theme)
  const { breakpoints, themeSchemes } = theme ?? {}
  const prefix = config?.var?.prefix

  const primaryTokens = createTokens(theme)
  const secondaryTokens = createTokens(theme, "secondary")
  const animationTokens = createTokens(theme, "animation")

  let { cssMap, cssVars } = mergeVars(
    createVars(primaryTokens, prefix),
    createVars(secondaryTokens, prefix),
    createVars(animationTokens, prefix),
  )()

  if (themeSchemes) {
    for (const [themeScheme, nestedTheme] of Object.entries<Dict>(
      themeSchemes,
    )) {
      const nestedPrimaryTokens = createTokens(nestedTheme)
      const nestedSecondaryTokens = createTokens(nestedTheme, "secondary")
      const nestedAnimationTokens = createTokens(nestedTheme, "animation")

      let { cssVars: nestedCSSVars } = mergeVars(
        createVars(nestedPrimaryTokens, prefix),
        createVars(nestedSecondaryTokens, prefix),
        createVars(nestedAnimationTokens, prefix),
      )({ ...primaryTokens, ...secondaryTokens, ...animationTokens })

      cssVars = {
        ...cssVars,
        [`[data-theme=${themeScheme}] &:not([data-theme]), &[data-theme=${themeScheme}]`]:
          nestedCSSVars,
      }
    }
  }

  const defaultCSSVars: Dict = {}

  Object.assign(theme, {
    __config: config,
    __cssVars: { ...defaultCSSVars, ...cssVars },
    __cssMap: cssMap,
    __breakpoints: analyzeBreakpoints(breakpoints),
  })

  return theme
}

const createTokens = (
  theme: Dict,
  target: "primary" | "secondary" | "animation" = "primary",
): VarTokens => {
  let defaultTokens: string[] = []
  let semanticTokens: string[] = []
  let omitKeys: string[] = []

  switch (target) {
    case "primary":
      defaultTokens = [...primaryTokens]
      semanticTokens = [...primaryTokens, "colorSchemes"]

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

  const defaultTokenEntries: [string, VarToken][] = Object.entries(
    flattenObject(defaultTokenMap, Infinity, omitKeys),
  ).map(([token, value]) => {
    const enhancedToken = { isSemantic: false, value }

    return [token, enhancedToken]
  })
  const semanticTokenEntries: [string, VarToken][] = Object.entries(
    flattenObject(semanticTokenMap, Infinity, omitKeys),
  ).reduce(
    (prev, [token, value]) => {
      if (token.startsWith("colorSchemes.")) {
        const [, semanticToken] = token.split(".")

        hues.forEach((hue) => {
          const enhancedToken = { isSemantic: true, value: `${value}.${hue}` }

          prev.push([`colors.${semanticToken}.${hue}`, enhancedToken])
        })
      } else {
        const enhancedToken = { isSemantic: true, value }

        prev.push([token, enhancedToken])
      }

      return prev
    },
    [] as [string, VarToken][],
  )

  return objectFromEntries<VarTokens>([
    ...defaultTokenEntries,
    ...semanticTokenEntries,
  ])
}

const mergeVars =
  (
    ...funcs: ((arg: {
      baseTokens?: VarTokens
      cssMap?: CSSMap
      cssVars?: Dict
    }) => { cssMap: CSSMap; cssVars: Dict })[]
  ) =>
  (baseTokens?: VarTokens) => {
    let resolvedCSSMap: CSSMap = {}
    let resolvedCSSVars: Dict = {}

    for (const func of funcs) {
      const { cssMap, cssVars } = func({
        baseTokens,
        cssMap: resolvedCSSMap,
        cssVars: resolvedCSSVars,
      })

      resolvedCSSMap = { ...resolvedCSSMap, ...cssMap }
      resolvedCSSVars = { ...resolvedCSSVars, ...cssVars }
    }

    return { cssMap: resolvedCSSMap, cssVars: resolvedCSSVars }
  }

const omitTheme = (theme: Dict): Dict =>
  omitObject(theme, ["__cssMap", "__cssVar", "__breakpoints"])

export const omitThemeProps = <T extends ThemeProps>(props: T) =>
  omitObject(props, ["size", "variant", "colorScheme"])

type MergeStyleOptions = Omit<Partial<FilterStyleOptions>, "isMulti">

export const mergeStyle =
  (target: ComponentStyle, ...sources: ComponentStyle[]) =>
  ({ omit = [], pick = [] }: MergeStyleOptions = {}): ComponentStyle =>
    sources.reduce(
      (prev, source) =>
        recursiveMergeStyle(filterStyle(prev)({ omit, pick }), source),
      target,
    )

export const mergeMultiStyle =
  (target: ComponentMultiStyle, ...sources: ComponentMultiStyle[]) =>
  ({ omit = [], pick = [] }: MergeStyleOptions = {}): ComponentMultiStyle =>
    sources.reduce(
      (prev, source) =>
        recursiveMergeStyle(
          filterStyle(prev)({ omit, pick, isMulti: true }),
          source,
        ),
      target,
    )

const recursiveMergeStyle = <T extends ComponentStyle | ComponentMultiStyle>(
  target: T,
  source: T,
): T => {
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

type FilterStyleOptions = {
  omit: Union<keyof (ComponentStyle | ComponentMultiStyle)>[]
  pick: Union<keyof (ComponentStyle | ComponentMultiStyle)>[]
  isMulti?: boolean
}

const filterStyle =
  <T extends ComponentStyle | ComponentMultiStyle>(target: T) =>
  ({ omit, pick, isMulti = false }: FilterStyleOptions): T => {
    if (!isObject(target)) return target

    if (omit.length)
      target = internalFilterStyle(target, omit, isMulti)(omitObject) as T
    if (pick.length)
      target = internalFilterStyle(target, pick, isMulti)(pickObject) as T

    return target
  }

const internalFilterStyle =
  (
    target: Dict<Dict | ((props: any) => Dict)>,
    keys: string[],
    isMulti: boolean,
    refs: string[] = [],
  ) =>
  (func: typeof omitObject | typeof pickObject) => {
    if (!isObject(target)) return target

    target = func(target, keys)

    Object.entries(target ?? {}).forEach(([nestedKey, value]) => {
      const newKeys = keys.filter((key) => key !== nestedKey)
      const newRefs = [...refs, nestedKey]

      if (!onValidFilterStyleKey(newRefs, isMulti)) return

      if (isFunction(value)) {
        target[nestedKey] = (props) =>
          internalFilterStyle(value(props), newKeys, isMulti, newRefs)(func)
      } else {
        target[nestedKey] = internalFilterStyle(
          value,
          newKeys,
          isMulti,
          newRefs,
        )(func)
      }
    })

    return target
  }

const onValidFilterStyleKey = (keys: string[], isMulti: boolean): boolean => {
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

export const pickStyle = (
  target: ComponentMultiStyle,
  targetKey: string,
  withProps: boolean = true,
): ComponentStyle => {
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
        ).reduce<Record<string, UIStyle>>((prev, [key, value]) => {
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
