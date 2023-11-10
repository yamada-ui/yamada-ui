import {
  getMemoizedObject as get,
  runIfFunc,
  merge,
  filterUndefined,
  omitObject,
  Dict,
  isArray,
  isObject,
  keysFormObject,
} from "@yamada-ui/utils"
import { useRef } from "react"
import isEqual from "react-fast-compare"
import {
  ComponentStyle,
  CSSUIObject,
  UIStyle,
  UIStyleProps,
  useTheme,
  useColorMode,
  ResponsiveObject,
  ColorModeArray,
  ComponentSizes,
  ComponentVariants,
  ComponentMultiVariants,
  ComponentMultiSizes,
  pseudos,
} from ".."

type Styles<isMulti extends boolean = false> = isMulti extends false
  ? CSSUIObject
  : Record<string, CSSUIObject>

const getModifierStyles =
  <IsMulti extends boolean = false>(
    value: ResponsiveObject<string> | ColorModeArray<string> | string,
    singleOrMultiStyles:
      | ComponentVariants
      | ComponentSizes
      | ComponentMultiVariants
      | ComponentMultiSizes,
    props: UIStyleProps,
  ) =>
  ({ isMulti }: { isMulti: boolean }): Styles<IsMulti> => {
    let styles: Styles<IsMulti> = {}

    if (isArray(value)) {
      const [lightValue, darkValue] = value

      const lightStyles = getStyles<IsMulti>(
        singleOrMultiStyles[lightValue],
        props,
      )({ isMulti, query: pseudos._light })

      const darkStyles = getStyles<IsMulti>(
        singleOrMultiStyles[darkValue],
        props,
      )({ isMulti, query: pseudos._dark })

      styles = merge(lightStyles, darkStyles)
    } else if (isObject(value)) {
      if (keysFormObject(value).length === 1 && "base" in value) {
        styles = getStyles<IsMulti>(
          singleOrMultiStyles[value.base],
          props,
        )({ isMulti })
      } else {
        const { queries = [] } = props.theme.__breakpoints ?? {}

        const omitQueries = queries.filter(
          ({ breakpoint }) =>
            breakpoint !== "base" && keysFormObject(value).includes(breakpoint),
        )

        const minQuery = omitQueries.sort(
          (a, b) => (a.minW ?? 0) - (b.minW ?? 0),
        )[0]
        const maxQuery = omitQueries.sort(
          (a, b) => (b.minW ?? 0) - (a.minW ?? 0),
        )[0]
        const nextMaxQuery = queries
          .filter(({ minW }) => (minW ?? 0) > (maxQuery?.minW ?? 0))
          .sort((a, b) => (a.minW ?? 0) - (b.minW ?? 0))[0]

        styles = Object.entries(value).reduce(
          (styles, [breakpointKey, breakpointValue = ""]) => {
            if (breakpointKey === "base") {
              const query = nextMaxQuery.minWQuery

              const baseStyles = getStyles<IsMulti>(
                singleOrMultiStyles[breakpointValue],
                props,
              )({ isMulti, query })

              styles = merge(styles, baseStyles)
            } else {
              const isMin = breakpointKey === minQuery.breakpoint

              const query = queries?.find(
                ({ breakpoint }) => breakpoint === breakpointKey,
              )?.[isMin ? "maxWQuery" : "minMaxQuery"]

              const queryStyles = getStyles<IsMulti>(
                singleOrMultiStyles[breakpointValue],
                props,
              )({ isMulti, query })

              styles = merge(styles, queryStyles)
            }

            return styles
          },
          {} as Styles<IsMulti>,
        )
      }
    } else {
      styles = getStyles<IsMulti>(
        singleOrMultiStyles[value],
        props,
      )({ isMulti })
    }

    return styles as Styles<IsMulti>
  }

const getStyles =
  <IsMulti extends boolean = false>(
    stylesOrFunc: UIStyle | Record<string, UIStyle>,
    props: UIStyleProps,
  ) =>
  ({
    isMulti,
    query,
  }: {
    isMulti: boolean
    query?: string
  }): Styles<IsMulti> => {
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

const setStyles = <Props extends Dict = Dict, IsMulti extends boolean = false>(
  name: string,
  props: Props,
  isMulti: boolean = false,
): [styles: Styles<IsMulti>, props: Props] => {
  const { theme, themeScheme } = useTheme()
  const { colorMode } = useColorMode()

  const componentStyle = get<ComponentStyle | undefined>(
    theme,
    `components.${name}`,
  )

  const propsRef = useRef<Props>({} as Props)
  const stylesRef = useRef<Styles<IsMulti>>({})

  props = merge(componentStyle?.defaultProps ?? {}, filterUndefined(props))

  if (componentStyle) {
    const args = omitObject(props, ["children"])

    let styles = getStyles<IsMulti>(componentStyle.baseStyle ?? {}, {
      theme,
      colorMode,
      themeScheme,
      ...args,
    })({ isMulti })

    const variantStyles = getModifierStyles<IsMulti>(
      props.variant,
      componentStyle.variants ?? {},
      { theme, colorMode, themeScheme, ...args },
    )({ isMulti })
    const sizeStyles = getModifierStyles<IsMulti>(
      props.size,
      componentStyle.sizes ?? {},
      { theme, colorMode, themeScheme, ...args },
    )({ isMulti })

    styles = merge(styles, sizeStyles)
    styles = merge(styles, variantStyles)

    const isStylesEqual = isEqual(stylesRef.current, styles)

    if (!isStylesEqual) stylesRef.current = styles
  }

  const isPropsEqual = isEqual(propsRef.current, props)

  if (!isPropsEqual) propsRef.current = props

  return [stylesRef.current, propsRef.current]
}

export const useComponentStyle = <Props extends Dict = Dict>(
  name: string,
  props: Props,
) => setStyles<Props>(name, props)
export const useMultiComponentStyle = <Props extends Dict = Dict>(
  name: string,
  props: Props,
) => setStyles<Props, true>(name, props, true)
