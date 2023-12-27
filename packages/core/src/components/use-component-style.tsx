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
} from "../css"
import { useTheme, useColorMode } from "../providers"
import { pseudos } from "../pseudos"
import type {
  ComponentMultiSizes,
  ComponentMultiVariants,
  ComponentSizes,
  ComponentStyle,
  ComponentVariants,
} from "../theme.types"

type Styles<isMulti extends boolean = false> = isMulti extends false
  ? CSSUIObject
  : Record<string, CSSUIObject>

type ModifierStyles =
  | ComponentVariants
  | ComponentSizes
  | ComponentMultiVariants
  | ComponentMultiSizes

type GetStylesOptions = { isMulti: boolean; query?: string }

const getColorModeStyles =
  <IsMulti extends boolean = false>(
    value: ColorModeArray<string>,
    modifierStyles: ModifierStyles,
    props: UIStyleProps,
  ) =>
  ({ isMulti }: GetStylesOptions) => {
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
  ({ isMulti }: GetStylesOptions) => {
    const providedKeys = keysFormObject(value)

    if (providedKeys.length === 1 && "base" in value) {
      return getStyles<IsMulti>(modifierStyles[value.base], props)({ isMulti })
    } else {
      const { queries = [] } = props.theme.__breakpoints ?? {}
      const { breakpoint } = props.theme.__config ?? {}
      const isDown = breakpoint === "down"

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
            const baseModifier = value["base"]
            const prevQuery = queries[index - 1]
            const query = prevQuery?.[isDown ? "minWQuery" : "maxWQuery"]

            const baseStyles = getStyles<IsMulti>(
              modifierStyles[baseModifier],
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

            query = createQuery(minW, maxW)
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
    value: ResponsiveObject<string> | ColorModeArray<string> | string,
    modifierStyles: ModifierStyles,
    props: UIStyleProps,
  ) =>
  ({ isMulti }: GetStylesOptions): Styles<IsMulti> => {
    let styles: Styles<IsMulti> = {}

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
  ({ isMulti, query }: GetStylesOptions): Styles<IsMulti> => {
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
