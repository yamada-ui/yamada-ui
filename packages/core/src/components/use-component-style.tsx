import type { Dict } from "@yamada-ui/utils"
import {
  getMemoizedObject as get,
  runIfFunc,
  merge,
  filterUndefined,
  omitObject,
  isArray,
  isObject,
  keysFormObject,
} from "@yamada-ui/utils"
import { useRef } from "react"
import isEqual from "react-fast-compare"
import { createQuery } from "../css"
import type {
  BreakpointQueries,
  CSSUIObject,
  ColorModeArray,
  ResponsiveObject,
  UIStyle,
  UIStyleProps,
  UIValue,
} from "../css"
import { useTheme, useColorMode } from "../providers"
import { pseudos } from "../pseudos"
import type {
  ComponentDefaultProps,
  ComponentMultiSizes,
  ComponentMultiVariants,
  ComponentOverrideProps,
  ComponentSizes,
  ComponentStyle,
  ComponentVariants,
} from "../theme.types"

type Styles<Y extends boolean = false> = Y extends false
  ? CSSUIObject
  : Record<string, CSSUIObject>

type ModifierStyles =
  | ComponentVariants
  | ComponentSizes
  | ComponentMultiVariants
  | ComponentMultiSizes

type GetStylesOptions = {
  isMulti?: boolean
  selectors?: (string | undefined)[]
}

export type SetStylesOptions<Y extends boolean = false> = {
  isMulti?: Y
  isProcessSkip?: boolean
  styles?: Styles<Y>
}

const getColorModeStyles =
  <Y extends Dict = Dict, M extends boolean = false>(
    value: ColorModeArray<string>,
    modifierStyles: ModifierStyles,
    props: UIStyleProps<Y>,
  ) =>
  ({ isMulti = false, selectors = [] }: GetStylesOptions) => {
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

const getResponsiveFinalQuery = (
  queries: BreakpointQueries,
  breakpoints: string[],
  isDown: boolean,
) => {
  const filteredQueries = queries.filter(
    ({ breakpoint }) =>
      breakpoint !== "base" && breakpoints.includes(breakpoint),
  )

  const finalQuery = filteredQueries.sort((a, b) =>
    isDown ? (a.maxW ?? 0) - (b.maxW ?? 0) : (b.minW ?? 0) - (a.minW ?? 0),
  )[0]

  return finalQuery
}

const getResponsiveNextQuery = (
  value: ResponsiveObject<string>,
  queries: BreakpointQueries,
  index: number,
) => {
  let nextIndex = index + 1
  let nextQuery: BreakpointQueries[number] | undefined

  while (nextIndex < queries.length) {
    const query = queries[nextIndex] ?? {}

    if (value[query.breakpoint]) {
      const targetIndex = nextIndex - 1

      nextQuery = queries[targetIndex]

      break
    }

    nextIndex += 1
  }

  return nextQuery
}

const getResponsiveStyles =
  <Y extends Dict = Dict, M extends boolean = false>(
    value: ResponsiveObject<string>,
    modifierStyles: ModifierStyles,
    props: UIStyleProps<Y>,
  ) =>
  ({ isMulti = false, selectors = [] }: GetStylesOptions) => {
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
        (prev, { breakpoint, minW, maxW, maxWQuery, minWQuery }, index) => {
          const modifier = value[breakpoint]
          const isFinal = breakpoint === finalQuery.breakpoint

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

const getModifierStyles =
  <Y extends Dict = Dict, M extends boolean = false>(
    value: UIValue<string> | undefined,
    modifierStyles: ModifierStyles,
    props: UIStyleProps<Y>,
  ) =>
  ({ isMulti = false, selectors = [] }: GetStylesOptions): Styles<M> => {
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

const getSelectorStyles = <Y extends Dict = Dict>(
  selectors: (string | undefined)[],
  style: Y,
) =>
  selectors.reduceRight<Dict>(
    (prev, key) => (key ? { [key]: prev } : prev),
    style,
  ) as Y

const getStyles =
  <Y extends Dict = Dict, M extends boolean = false>(
    stylesOrFunc: UIStyle<Y> | Record<string, UIStyle<Y>>,
    props: UIStyleProps<Y>,
  ) =>
  ({ isMulti = false, selectors = [] }: GetStylesOptions): Styles<M> => {
    const styles = runIfFunc(stylesOrFunc, props)

    if (isMulti) {
      return Object.fromEntries(
        Object.entries((styles ?? {}) as Record<string, UIStyle>).map(
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

const mergeProps = <Y extends Dict = Dict>(
  props: Y,
  defaultProps: ComponentDefaultProps | undefined,
  overrideProps: ComponentOverrideProps | undefined,
): Y => {
  if (defaultProps) props = merge(defaultProps, props)

  if (overrideProps) props = runIfFunc(overrideProps, props) as Y

  return props
}

const setStyles = <Y extends Dict = Dict, M extends boolean = false>(
  name: string,
  props: Y,
  { isMulti, isProcessSkip, styles = {} }: SetStylesOptions<M> = {},
): [styles: Styles<M>, props: Y] => {
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
      const { defaultProps, overrideProps, baseStyle, variants, sizes } =
        componentStyle

      props = mergeProps<Y>(props, defaultProps, overrideProps)

      const { variant, size } = props
      const resolvedProps = omitObject(props, ["children"]) as Y

      let styles: Styles<M> = {}

      if (baseStyle) {
        styles = getStyles<Y, M>(baseStyle, {
          theme,
          colorMode,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })
      }

      if (sizes) {
        const sizeStyles = getModifierStyles<Y, M>(size, sizes, {
          theme,
          colorMode,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })

        styles = merge(styles, sizeStyles)
      }

      if (variants) {
        const variantStyles = getModifierStyles<Y, M>(variant, variants, {
          theme,
          colorMode,
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
  SetStylesOptions<Y>,
  "isMulti"
>

export const useComponentStyle = <Y extends Dict = Dict>(
  name: string,
  props: Y,
  options?: UseComponentStyleOptions,
) => setStyles<Y>(name, props, options)

export const useMultiComponentStyle = <Y extends Dict = Dict>(
  name: string,
  props: Y,
  options?: UseComponentStyleOptions<true>,
) => {
  return setStyles<Y, true>(name, props, { isMulti: true, ...options })
}
