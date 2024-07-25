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
  ThemeProps,
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
import type { UIBaseProps } from "./component.types"

type ComponentProps = ThemeProps & UIBaseProps

type Styles<isMulti extends boolean = false> = isMulti extends false
  ? CSSUIObject
  : Record<string, CSSUIObject>

type ModifierStyles =
  | ComponentVariants
  | ComponentSizes
  | ComponentMultiVariants
  | ComponentMultiSizes

type GetStylesOptions = { isMulti?: boolean; query?: string }

export type SetStylesOptions<IsMulti extends boolean = false> = {
  isMulti?: IsMulti
  isProcessSkip?: boolean
  styles?: Styles<IsMulti>
}

const getColorModeStyles =
  <IsMulti extends boolean = false>(
    value: ColorModeArray<string>,
    modifierStyles: ModifierStyles,
    props: UIStyleProps,
  ) =>
  ({ isMulti = false }: GetStylesOptions) => {
    const [lightValue, darkValue] = value

    const lightStyles = getStyles<IsMulti>(
      modifierStyles[lightValue],
      props,
    )({ isMulti, query: pseudos._light })

    const darkStyles = getStyles<IsMulti>(
      modifierStyles[darkValue],
      props,
    )({ isMulti, query: pseudos._dark })

    return [lightStyles, darkStyles]
  }

const getResponsiveStyles =
  <IsMulti extends boolean = false>(
    value: ResponsiveObject<string>,
    modifierStyles: ModifierStyles,
    props: UIStyleProps,
  ) =>
  ({ isMulti = false }: GetStylesOptions) => {
    const providedKeys = keysFormObject(value)

    if (providedKeys.length === 1 && "base" in value) {
      return getStyles<IsMulti>(
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

      return queries.reduce<Styles<IsMulti>>(
        (prev, { breakpoint, minW, maxW, maxWQuery, minWQuery }, index) => {
          const modifier = value[breakpoint]
          const isFinal = breakpoint === finalQuery.breakpoint

          if (breakpoint === "base") return prev
          if (!modifier) return prev

          if (!hasBaseStyles) {
            const baseModifier = value.base
            const prevQuery = queries[index - 1]
            const query = prevQuery?.[isDown ? "minWQuery" : "maxWQuery"]

            const baseStyles = getStyles<IsMulti>(
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

          const queryStyles = getStyles<IsMulti>(
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
  <IsMulti extends boolean = false>(
    value: UIValue<string> | undefined,
    modifierStyles: ModifierStyles,
    props: UIStyleProps,
  ) =>
  ({ isMulti = false }: GetStylesOptions): Styles<IsMulti> => {
    let styles: Styles<IsMulti> = {}

    if (!value) return styles

    if (isArray(value)) {
      const [lightStyles, darkStyles] = getColorModeStyles<IsMulti>(
        value,
        modifierStyles,
        props,
      )({ isMulti })

      styles = merge(lightStyles, darkStyles)
    } else if (isObject(value)) {
      styles = getResponsiveStyles<IsMulti>(
        value,
        modifierStyles,
        props,
      )({ isMulti })
    } else {
      styles = getStyles<IsMulti>(modifierStyles[value], props)({ isMulti })
    }

    return styles as Styles<IsMulti>
  }

const getStyles =
  <IsMulti extends boolean = false>(
    stylesOrFunc: UIStyle | Record<string, UIStyle>,
    props: UIStyleProps,
  ) =>
  ({ isMulti = false, query }: GetStylesOptions): Styles<IsMulti> => {
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
      return { [query]: styles } as Styles<IsMulti>
    }

    return styles as Styles<IsMulti>
  }

const mergeProps = <Props extends ComponentProps = ComponentProps>(
  props: Props,
  defaultProps: ComponentDefaultProps | undefined,
  overrideProps: ComponentOverrideProps | undefined,
): Props => {
  if (defaultProps) props = merge(defaultProps, props)

  if (overrideProps) props = runIfFunc(overrideProps, props) as Props

  return props
}

const setStyles = <
  Props extends ComponentProps = ComponentProps,
  IsMulti extends boolean = false,
>(
  name: string,
  props: Props,
  { isMulti, isProcessSkip, styles = {} }: SetStylesOptions<IsMulti> = {},
): [styles: Styles<IsMulti>, props: Props] => {
  const { theme, themeScheme } = useTheme()
  const { colorMode } = useColorMode()

  const propsRef = useRef<Props>({} as Props)
  const stylesRef = useRef<Styles<IsMulti>>(isProcessSkip ? styles : {})

  if (!isProcessSkip) {
    const componentStyle = get<ComponentStyle | undefined>(
      theme,
      `components.${name}`,
    )

    props = filterUndefined(props)

    if (componentStyle) {
      const { defaultProps, overrideProps, baseStyle, variants, sizes } =
        componentStyle

      props = mergeProps<Props>(props, defaultProps, overrideProps)

      const { variant, size } = props
      const resolvedProps = omitObject(props, ["children"])

      let styles: Styles<IsMulti> = {}

      if (baseStyle) {
        styles = getStyles<IsMulti>(baseStyle, {
          theme,
          colorMode,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })
      }

      if (sizes) {
        const sizeStyles = getModifierStyles<IsMulti>(size, sizes, {
          theme,
          colorMode,
          themeScheme,
          ...resolvedProps,
        })({ isMulti })

        styles = merge(styles, sizeStyles)
      }

      if (variants) {
        const variantStyles = getModifierStyles<IsMulti>(variant, variants, {
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

export type UseComponentStyleOptions<IsMulti extends boolean = false> = Omit<
  SetStylesOptions<IsMulti>,
  "isMulti"
>

export const useComponentStyle = <Props extends Dict = Dict>(
  name: string,
  props: Props,
  options?: UseComponentStyleOptions,
) => setStyles<Props>(name, props, options)

export const useMultiComponentStyle = <Props extends Dict = Dict>(
  name: string,
  props: Props,
  options?: UseComponentStyleOptions<true>,
) => {
  return setStyles<Props, true>(name, props, { isMulti: true, ...options })
}
