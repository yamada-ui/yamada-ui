import type { Dict } from "@yamada-ui/utils"
import type {
  BreakpointQueries,
  ColorModeArray,
  CSSUIObject,
  ResponsiveObject,
  UIStyle,
  UIStyleProps,
  UIValue,
} from "../css"
import type {
  ComponentDefaultProps,
  ComponentMultiSizes,
  ComponentMultiVariants,
  ComponentOverrideProps,
  ComponentSizes,
  ComponentStyle,
  ComponentVariants,
} from "../theme.types"
import {
  filterUndefined,
  getMemoizedObject as get,
  isArray,
  isObject,
  keysFormObject,
  merge,
  omitObject,
  runIfFunc,
} from "@yamada-ui/utils"
import { useRef } from "react"
import isEqual from "react-fast-compare"
import { createQuery } from "../css"
import { getColorModeValue, useColorMode, useTheme } from "../providers"
import { pseudos } from "../pseudos"

type Styles<Y extends boolean = false> = Y extends false
  ? CSSUIObject
  : { [key: string]: CSSUIObject | undefined }

type ModifierStyles =
  | ComponentMultiSizes
  | ComponentMultiVariants
  | ComponentSizes
  | ComponentVariants

interface GetStylesOptions {
  isMulti?: boolean
  selectors?: (string | undefined)[]
}

interface UseStylesOptions<Y extends boolean = false> {
  isMulti?: Y
  isProcessSkip?: boolean
  styles?: Styles<Y>
}

function getColorModeStyles<Y extends Dict = Dict, M extends boolean = false>(
  value: ColorModeArray<string>,
  modifierStyles: ModifierStyles,
  props: UIStyleProps<Y>,
) {
  return function ({ isMulti = false, selectors = [] }: GetStylesOptions) {
    const [lightValue, darkValue] = value

    const lightStyles = getModifierStyles<Y, M>(
      lightValue,
      modifierStyles,
      props,
    )({ isMulti, selectors: [...selectors, pseudos._light] })

    const darkStyles = getModifierStyles<Y, M>(
      darkValue,
      modifierStyles,
      props,
    )({ isMulti, selectors: [...selectors, pseudos._dark] })

    return merge(lightStyles, darkStyles)
  }
}

function getResponsiveFinalQuery(
  queries: BreakpointQueries,
  breakpoints: string[],
  isDown: boolean,
) {
  const filteredQueries = queries.filter(
    ({ breakpoint }) =>
      breakpoint !== "base" && breakpoints.includes(breakpoint),
  )

  const finalQuery = filteredQueries.sort((a, b) =>
    isDown ? (a.maxW ?? 0) - (b.maxW ?? 0) : (b.minW ?? 0) - (a.minW ?? 0),
  )[0]

  return finalQuery
}

function getResponsiveNextQuery(
  value: ResponsiveObject<string>,
  queries: BreakpointQueries,
  index: number,
) {
  let nextIndex = index + 1
  let nextQuery: BreakpointQueries[number] | undefined

  while (nextIndex < queries.length) {
    const query = queries[nextIndex]!

    if (value[query.breakpoint]) {
      const targetIndex = nextIndex - 1

      nextQuery = queries[targetIndex]

      break
    }

    nextIndex += 1
  }

  return nextQuery
}

function getResponsiveStyles<Y extends Dict = Dict, M extends boolean = false>(
  value: ResponsiveObject<string>,
  modifierStyles: ModifierStyles,
  props: UIStyleProps<Y>,
) {
  return function ({ isMulti = false, selectors = [] }: GetStylesOptions) {
    const breakpoints = keysFormObject(value)

    if (breakpoints.length === 1 && "base" in value) {
      return getStyles<Y, M>(
        modifierStyles[value.base as string],
        props,
      )({ isMulti })
    } else {
      const { queries = [] } = props.theme.__breakpoints ?? {}
      const { direction = "down", identifier } =
        props.theme.__config?.breakpoint ?? {}
      const isDown = direction !== "up"

      const finalQuery = getResponsiveFinalQuery(queries, breakpoints, isDown)

      let hasBaseStyles = false

      return queries.reduce<Styles<M>>(
        (prev, { breakpoint, maxW, maxWQuery, minW, minWQuery }, index) => {
          const modifier = value[breakpoint]
          const isFinal = breakpoint === finalQuery?.breakpoint

          if (breakpoint === "base") return prev
          if (!modifier) return prev

          if (!hasBaseStyles) {
            const baseModifier = value.base
            const prevQuery = queries[index - 1]
            const query = prevQuery?.[isDown ? "minWQuery" : "maxWQuery"]

            const styles = getModifierStyles<Y, M>(
              baseModifier,
              modifierStyles,
              props,
            )({ isMulti, selectors: [...selectors, query] })

            prev = merge(prev, styles)

            hasBaseStyles = true
          }

          let query = isDown ? maxWQuery : minWQuery

          if (!isFinal) {
            const nextQuery = getResponsiveNextQuery(value, queries, index)

            minW = isDown ? nextQuery?.minW : minW
            maxW = isDown ? maxW : nextQuery?.maxW

            query = createQuery(minW, maxW, identifier)
          }

          const styles = getModifierStyles<Y, M>(
            modifier,
            modifierStyles,
            props,
          )({ isMulti, selectors: [...selectors, query] })

          prev = merge(prev, styles)

          return prev
        },
        {},
      )
    }
  }
}

function getModifierStyles<Y extends Dict = Dict, M extends boolean = false>(
  value: UIValue<string> | undefined,
  modifierStyles: ModifierStyles,
  props: UIStyleProps<Y>,
) {
  return function ({
    isMulti = false,
    selectors = [],
  }: GetStylesOptions): Styles<M> {
    let styles: Styles<M> = {}

    if (!value) return styles

    if (isArray(value)) {
      styles = getColorModeStyles<Y, M>(
        value,
        modifierStyles,
        props,
      )({ isMulti, selectors })
    } else if (isObject(value)) {
      styles = getResponsiveStyles<Y, M>(
        value,
        modifierStyles,
        props,
      )({ isMulti, selectors })
    } else {
      styles = getStyles<Y, M>(
        modifierStyles[value],
        props,
      )({ isMulti, selectors })
    }

    return styles as Styles<M>
  }
}

function getSelectorStyles<Y extends Dict = Dict>(
  selectors: (string | undefined)[],
  style: Y,
) {
  return selectors.reduceRight<Dict>(
    (prev, key) => (key ? { [key]: prev } : prev),
    style,
  ) as Y
}

function getStyles<Y extends Dict = Dict, M extends boolean = false>(
  stylesOrFunc: { [key: string]: UIStyle<Y> } | UIStyle<Y> | undefined,
  props: UIStyleProps<Y>,
) {
  return function ({
    isMulti = false,
    selectors = [],
  }: GetStylesOptions): Styles<M> {
    const styles = runIfFunc(stylesOrFunc, props)

    if (isMulti) {
      return Object.fromEntries(
        Object.entries(styles as { [key: string]: UIStyle }).map(
          ([name, styleOrFunc]) => {
            const style = runIfFunc(styleOrFunc, props)

            if (selectors.length) {
              return [name, getSelectorStyles(selectors, style)]
            } else {
              return [name, style]
            }
          },
        ),
      ) as Styles<M>
    } else if (selectors.length) {
      return getSelectorStyles(selectors, styles as Styles<M>)
    } else {
      return styles as Styles<M>
    }
  }
}

function mergeProps<Y extends Dict = Dict>(
  props: Y,
  defaultProps: ComponentDefaultProps | undefined,
  overrideProps: ComponentOverrideProps | undefined,
): Y {
  if (defaultProps) props = merge(defaultProps, props)

  if (overrideProps) props = runIfFunc(overrideProps, props) as Y

  return props
}

function useStyles<Y extends Dict = Dict, M extends boolean = false>(
  name: string,
  props: Y,
  { isMulti, isProcessSkip, styles = {} }: UseStylesOptions<M> = {},
): [styles: Styles<M>, props: Y] {
  const { theme, themeScheme } = useTheme()
  const { colorMode } = useColorMode()

  const propsRef = useRef<Y>({} as Y)
  const stylesRef = useRef<Styles<M>>(isProcessSkip ? styles : {})

  if (!isProcessSkip) {
    const componentStyle = get<ComponentStyle | undefined>(
      theme,
      `components.${name}`,
    )

    props = filterUndefined(props)

    if (componentStyle) {
      const { baseStyle, sizes, variants, defaultProps, overrideProps } =
        componentStyle

      props = mergeProps<Y>(props, defaultProps, overrideProps)

      const { colorScheme: _colorScheme, size, variant } = props
      const colorScheme = isArray(_colorScheme)
        ? getColorModeValue(_colorScheme[0], _colorScheme[1])(colorMode)
        : _colorScheme
      const computedProps = { ...props, colorScheme }
      const resolvedProps = omitObject(computedProps, ["children"]) as Y

      let styles: Styles<M> = {}

      if (baseStyle) {
        styles = getStyles<Y, M>(baseStyle, {
          colorMode,
          theme,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })
      }

      if (sizes) {
        const sizeStyles = getModifierStyles<Y, M>(size, sizes, {
          colorMode,
          theme,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })

        styles = merge(styles, sizeStyles)
      }

      if (variants) {
        const variantStyles = getModifierStyles<Y, M>(variant, variants, {
          colorMode,
          theme,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })

        styles = merge(styles, variantStyles)
      }

      const isStylesEqual = isEqual(stylesRef.current, styles)

      if (!isStylesEqual) stylesRef.current = styles
    }
  }

  const isPropsEqual = isEqual(propsRef.current, props)

  if (!isPropsEqual) propsRef.current = props

  return [stylesRef.current, propsRef.current]
}

export type UseComponentStyleOptions<Y extends boolean = false> = Omit<
  UseStylesOptions<Y>,
  "isMulti"
>

export function useComponentStyle<Y extends Dict = Dict>(
  name: string,
  props: Y,
  options?: UseComponentStyleOptions,
) {
  return useStyles<Y>(name, props, options)
}

export function useComponentMultiStyle<Y extends Dict = Dict>(
  name: string,
  props: Y,
  options?: UseComponentStyleOptions<true>,
) {
  return useStyles<Y, true>(name, props, { isMulti: true, ...options })
}
