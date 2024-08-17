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

type GetStylesOptions = { isMulti?: boolean; query?: string }

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
  ({ isMulti = false }: GetStylesOptions) => {
    const [lightValue, darkValue] = value

    const lightStyles = getStyles<Y, M>(
      modifierStyles[lightValue],
      props,
    )({ isMulti, query: pseudos._light })

    const darkStyles = getStyles<Y, M>(
      modifierStyles[darkValue],
      props,
    )({ isMulti, query: pseudos._dark })

    return [lightStyles, darkStyles]
  }

const getResponsiveStyles =
  <Y extends Dict = Dict, M extends boolean = false>(
    value: ResponsiveObject<string>,
    modifierStyles: ModifierStyles,
    props: UIStyleProps<Y>,
  ) =>
  ({ isMulti = false }: GetStylesOptions) => {
    const providedKeys = keysFormObject(value)

    if (providedKeys.length === 1 && "base" in value) {
      return getStyles<Y, M>(
        modifierStyles[value.base as string],
        props,
      )({ isMulti })
    } else {
      const { queries = [] } = props.theme.__breakpoints ?? {}
      const { direction = "down", identifier } =
        props.theme.__config?.breakpoint ?? {}
      const isDown = direction !== "up"

      const finalQuery = queries
        .filter(
          ({ breakpoint }) =>
            breakpoint !== "base" && providedKeys.includes(breakpoint),
        )
        .sort((a, b) =>
          isDown
            ? (a.maxW ?? 0) - (b.maxW ?? 0)
            : (b.minW ?? 0) - (a.minW ?? 0),
        )[0]

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

            const baseStyles = getStyles<Y, M>(
              baseModifier ? modifierStyles[baseModifier] : {},
              props,
            )({ isMulti, query })

            prev = merge(prev, baseStyles)

            hasBaseStyles = true
          }

          let query = isDown ? maxWQuery : minWQuery

          if (!isFinal) {
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

            minW = isDown ? nextQuery?.minW : minW
            maxW = isDown ? maxW : nextQuery?.maxW

            query = createQuery(minW, maxW, identifier)
          }

          const queryStyles = getStyles<Y, M>(
            modifierStyles[modifier],
            props,
          )({ isMulti, query })

          prev = merge(prev, queryStyles)

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
  ({ isMulti = false }: GetStylesOptions): Styles<M> => {
    let styles: Styles<M> = {}

    if (!value) return styles

    if (isArray(value)) {
      const [lightStyles, darkStyles] = getColorModeStyles<Y, M>(
        value,
        modifierStyles,
        props,
      )({ isMulti })

      styles = merge(lightStyles, darkStyles)
    } else if (isObject(value)) {
      styles = getResponsiveStyles<Y, M>(
        value,
        modifierStyles,
        props,
      )({ isMulti })
    } else {
      styles = getStyles<Y, M>(modifierStyles[value], props)({ isMulti })
    }

    return styles as Styles<M>
  }

const getStyles =
  <Y extends Dict = Dict, M extends boolean = false>(
    stylesOrFunc: UIStyle<Y> | Record<string, UIStyle<Y>>,
    props: UIStyleProps<Y>,
  ) =>
  ({ isMulti = false, query }: GetStylesOptions): Styles<M> => {
    let styles = runIfFunc(stylesOrFunc, props)

    if (isMulti) {
      for (const [key, styleOrFunc] of Object.entries(
        (styles ?? {}) as Record<string, UIStyle>,
      )) {
        const style = runIfFunc(styleOrFunc, props)

        if (query) {
          styles = merge(styles, { [key]: { [query]: style } })
        } else {
          styles = merge(styles, { [key]: style })
        }
      }
    } else if (query) {
      return { [query]: styles } as Styles<M>
    }

    return styles as Styles<M>
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
