import type { Dict } from "../../utils"
import type {
  BreakpointQueries,
  ColorModeArray,
  CreateLayersReturn,
  CSSModifierObject,
  CSSObject,
  CSSSlotObject,
  ResponsiveObject,
  UIValue,
} from "../css"
import type {
  BreakpointDirection,
  ComponentSlotStyle,
  ComponentStyle,
  LayerScheme,
  ThemeProps,
  WithoutThemeProps,
} from "../theme"
import type { HTMLUIProps } from "./component.types"
import type { Slot, SlotName } from "./create-component"
import { useRef } from "react"
import isEqual from "react-fast-compare"
import { useTheme } from "../../providers/theme-provider"
import {
  cx,
  filterUndefined,
  isArray,
  isBooleanish,
  isEmptyObject,
  isObject,
  keysFormObject,
  merge,
  omitObject,
  toArray,
  toKebabCase,
} from "../../utils"
import { createQuery } from "../css"
import { pseudos } from "../pseudos"
import { useColorSchemeContext } from "../styled"

type Style<Y extends boolean = false> = Y extends false
  ? CSSObject
  : CSSSlotObject

type MergedStyle = CSSModifierObject | CSSModifierObject<CSSSlotObject>

interface GetStyleOptions<
  Y extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
> {
  direction: BreakpointDirection
  queries: BreakpointQueries
  hasSlot?: boolean
  identifier?: string
  selectors?: (string | undefined)[]
  slot?: Slot<SlotName<Y>>
  wrap?: CreateLayersReturn["wrap"]
}

function getSelectorStyle<Y extends Dict = Dict>(
  selectors: (string | undefined)[],
  style: Y,
) {
  return selectors.reduceRight<Dict>(
    (prev, key) => (key ? { [key]: prev } : prev),
    style,
  ) as Y
}

function getStyle<
  Y extends boolean = false,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
>(style: CSSObject | CSSSlotObject | undefined) {
  return function ({
    hasSlot = false,
    selectors = [],
  }: GetStyleOptions<M>): Style<Y> | undefined {
    if (!style || isEmptyObject(style)) return

    if (hasSlot) {
      return Object.fromEntries(
        Object.entries(style as CSSSlotObject).map(([name, style]) => {
          if (selectors.length) {
            return [name, getSelectorStyle(selectors, style ?? {})]
          } else {
            return [name, style]
          }
        }),
      )
    } else if (selectors.length) {
      return getSelectorStyle(selectors, style) as Style<Y>
    } else {
      return style as Style<Y>
    }
  }
}

function getColorModeStyle<
  Y extends boolean = false,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
>(value: ColorModeArray<number | string>, mergedStyle: MergedStyle) {
  return function ({ selectors = [], ...rest }: GetStyleOptions<M>) {
    const [lightValue, darkValue] = value

    const lightStyle = getModifierStyle<Y, M>(
      lightValue,
      mergedStyle,
    )({ ...rest, selectors: [...selectors, pseudos._light] })

    const darkStyle = getModifierStyle<Y, M>(
      darkValue,
      mergedStyle,
    )({ ...rest, selectors: [...selectors, pseudos._dark] })

    return merge(lightStyle, darkStyle)
  }
}

function getResponsiveFinalQuery(
  queries: BreakpointQueries,
  breakpoints: string[],
  down: boolean,
) {
  const filteredQueries = queries.filter(
    ({ breakpoint }) =>
      breakpoint !== "base" && breakpoints.includes(breakpoint),
  )

  const finalQuery = filteredQueries.sort((a, b) =>
    down ? (a.maxW ?? 0) - (b.maxW ?? 0) : (b.minW ?? 0) - (a.minW ?? 0),
  )[0]

  return finalQuery
}

function getResponsiveNextQuery(
  value: ResponsiveObject<number | string>,
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

function getResponsiveStyle<
  Y extends boolean = false,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
>(value: ResponsiveObject<number | string>, mergedStyle: MergedStyle) {
  return function (options: GetStyleOptions<M>) {
    const { direction, identifier, queries, selectors = [] } = options
    const breakpoints = keysFormObject(value)

    if (breakpoints.length === 1 && "base" in value) {
      return getModifierStyle<Y, M>(value.base, mergedStyle)(options)
    } else {
      const down = direction !== "up"

      const finalQuery = getResponsiveFinalQuery(queries, breakpoints, down)

      let hasBase = false

      return queries.reduce<Style<Y>>(
        (prev, { breakpoint, maxW, maxWQuery, minW, minWQuery }, index) => {
          const final = breakpoint === finalQuery?.breakpoint

          if (breakpoint === "base") return prev
          if (!value[breakpoint]) return prev

          if (!hasBase) {
            const prevQuery = queries[index - 1]
            const query = prevQuery?.[down ? "minWQuery" : "maxWQuery"]

            const style = getModifierStyle<Y, M>(
              value.base,
              mergedStyle,
            )({ ...options, selectors: [...selectors, query] })

            prev = merge(prev, style)

            hasBase = true
          }

          let query = down ? maxWQuery : minWQuery

          if (!final) {
            const nextQuery = getResponsiveNextQuery(value, queries, index)

            minW = down ? nextQuery?.minW : minW
            maxW = down ? maxW : nextQuery?.maxW

            query = createQuery(minW, maxW, identifier)
          }

          const style = getModifierStyle<Y, M>(
            value[breakpoint],
            mergedStyle,
          )({ ...options, selectors: [...selectors, query] })

          prev = merge(prev, style)

          return prev
        },
        {},
      )
    }
  }
}

function getPropStyle<
  Y extends boolean = false,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
>(
  props: Dict,
  propVariants: CSSModifierObject | CSSModifierObject<CSSSlotObject>,
  style: Style<Y> | undefined = {},
) {
  return function (options: GetStyleOptions<M>) {
    const variants = Object.entries(propVariants)

    if (!variants.length) return

    variants.forEach(([name, variants]) => {
      const prop = props[name as keyof typeof props]

      if (prop) {
        const propStyle = getModifierStyle<Y, M>(prop, variants)(options)

        style = merge(style, wrapStyle<Y, M>("props", propStyle)(options))
      } else {
        const boolean = Object.keys(variants).every((key) => isBooleanish(key))

        if (boolean) {
          const propStyle = getModifierStyle<Y, M>("false", variants)(options)

          style = merge(style, wrapStyle<Y, M>("props", propStyle)(options))
        }
      }
    })

    return style
  }
}

function getModifierStyle<
  Y extends boolean = false,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
>(value: UIValue<number | string> | undefined, mergedStyle: MergedStyle) {
  return function (options: GetStyleOptions<M>): Style<Y> | undefined {
    let style: Style<Y> | undefined = undefined

    if (!value) return style

    if (isArray(value)) {
      style = getColorModeStyle<Y, M>(value, mergedStyle)(options)
    } else if (isObject(value)) {
      style = getResponsiveStyle<Y, M>(value, mergedStyle)(options)
    } else {
      style = getStyle<Y, M>(mergedStyle[value])(options)
    }

    return style
  }
}

export function getSlotClassName<Y extends number | string | symbol>(
  className?: string,
  slot?: Slot<Y>,
) {
  if (!className || !slot) return className

  if (isArray(slot)) {
    return `${className}__${toKebabCase(slot[0] as string)} ${className}__${slot.map((value) => toKebabCase(value as string)).join("--")}`
  } else if (isObject(slot)) {
    return `${className}__${toKebabCase(slot.name)}`
  } else {
    return `${className}__${toKebabCase(slot as string)}`
  }
}

function omitThemeProps<
  Y extends Dict = Dict,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
>(props: Y, omitKeys: string[] = [], transferProps?: D[]) {
  if (transferProps)
    omitKeys = omitKeys.filter((key) => !transferProps.includes(key as D))

  return omitObject(props, omitKeys) as unknown as WithoutThemeProps<Y, M, D>
}

function wrapStyle<
  Y extends boolean = false,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
>(layer: LayerScheme, style?: Style<Y>) {
  return function ({ hasSlot, wrap }: GetStyleOptions<M>) {
    if (hasSlot) {
      if (!style) return undefined

      return Object.fromEntries(
        Object.entries(style).map(([slot, style]) => [
          slot,
          wrap?.(layer, style) ?? style,
        ]),
      )
    } else {
      return wrap?.(layer, style) ?? style
    }
  }
}

function getHasAtRuleStyle(css?: CSSObject | CSSObject[]) {
  return (getAtRule?: CreateLayersReturn["getAtRule"]) => {
    let hasVariant = false
    let hasSize = false

    if (!css || !getAtRule) return { hasSize, hasVariant }

    const variantAtRule = getAtRule("variant")
    const sizeAtRule = getAtRule("size")

    css = toArray(css)

    css.forEach((css) => {
      const keys = Object.keys(css)

      if (keys.includes(variantAtRule)) hasVariant = true
      if (keys.includes(sizeAtRule)) hasSize = true
    })

    return { hasSize, hasVariant }
  }
}

interface UseStyleOptions<
  Y extends Dict = Dict,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
  H extends boolean = false,
> {
  className?: string
  style?: M
  hasSlot?: H
  slot?: Slot<SlotName<M>>
  transferProps?: D[]
}

function useStyle<
  Y extends HTMLUIProps & ThemeProps<{}> = Dict,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
  H extends boolean = false,
>(
  props: Y,
  {
    className,
    style: componentStyle,
    hasSlot,
    slot,
    transferProps,
  }: UseStyleOptions<Y, M, D, H> = {},
) {
  const { theme } = useTheme()
  const { getAtRule, wrap } = theme.__layers ?? {}
  const rootColorScheme = useColorSchemeContext()
  const { queries = [] } = theme.__breakpoints ?? {}
  const { direction = "down", identifier } = theme.__config?.breakpoint ?? {}
  const options = { direction, hasSlot, identifier, queries, slot, wrap }

  const propsRef = useRef({} as WithoutThemeProps<Y, M, D>)
  const styleRef = useRef<Style<H>>({})

  props = filterUndefined(props)

  const hasComponentStyle =
    componentStyle && !!Object.keys(componentStyle).length

  if (hasComponentStyle) {
    const {
      className: customClassName,
      base,
      props: propVariants,
      sizes,
      variants,
      defaultProps: {
        colorScheme: defaultColorScheme,
        props: additionalProps,
        ...otherProps
      } = {},
    } = componentStyle

    const { size, variant, ...rest } = {
      ...otherProps,
      ...additionalProps,
      ...props,
    }

    props.variant ??= variant
    props.size ??= size
    props.colorScheme ??= rootColorScheme ?? defaultColorScheme

    const omitProps = Object.keys(propVariants ?? {})
    const { hasSize, hasVariant } = getHasAtRuleStyle(props.css)(getAtRule)

    if (variants) omitProps.push("variant")
    if (sizes) omitProps.push("size")

    const computedProps = omitThemeProps(props, omitProps, transferProps) as Y

    computedProps.className = cx(
      getSlotClassName(className ?? customClassName, slot),
      computedProps.className,
    )

    let style: Style<H> | undefined = {}

    if (base) {
      const baseStyle = getStyle<H, M>(base)(options)

      style = merge(style, wrapStyle<H, M>("base", baseStyle)(options))
    }

    if (sizes && !hasSize) {
      const sizeStyle = getModifierStyle<H, M>(size, sizes)(options)

      style = merge(style, wrapStyle<H, M>("size", sizeStyle)(options))
    }

    if (variants && !hasVariant) {
      const variantStyle = getModifierStyle<H, M>(variant, variants)(options)

      style = merge(style, wrapStyle<H, M>("variant", variantStyle)(options))
    }

    if (propVariants) {
      style = getPropStyle<H, M>(rest, propVariants, style)(options)
    }

    const styleEqual = isEqual(styleRef.current, style)

    if (!styleEqual) styleRef.current = style ?? {}

    const propsEqual = isEqual(propsRef.current, computedProps)

    if (!propsEqual)
      propsRef.current = computedProps as unknown as WithoutThemeProps<Y, M, D>
  } else {
    props.className = cx(getSlotClassName(className, slot), props.className)

    const propsEqual = isEqual(propsRef.current, props)

    if (!propsEqual)
      propsRef.current = props as unknown as WithoutThemeProps<Y, M, D>
  }

  return {
    ...propsRef.current,
    css: styleRef.current,
  }
}

export interface UseComponentStyleOptions<
  Y extends Dict = Dict,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
> extends Omit<UseStyleOptions<Y, M, D>, "hasSlot" | "slot"> {}

export function useComponentStyle<
  Y extends Dict = Dict,
  M extends ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
>(props: Y, options: UseComponentStyleOptions<Y, M, D> = {}) {
  return useStyle<Y, M, D>(props, options)
}

export interface UseComponentSlotStyleOptions<
  Y extends Dict = Dict,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
> extends Omit<UseStyleOptions<Y, M, D, true>, "hasSlot"> {}

export function useComponentSlotStyle<
  Y extends Dict = Dict,
  M extends ComponentSlotStyle = ComponentSlotStyle,
  D extends keyof Y = keyof Y,
>(props: Y, options: UseComponentSlotStyleOptions<Y, M, D> = {}) {
  return useStyle<Y, M, D, true>(props, { ...options, hasSlot: true })
}

/**
 * @deprecated
 */
export function useComponentMultiStyle<
  Y extends Dict = Dict,
  M extends ComponentSlotStyle = ComponentSlotStyle,
  D extends keyof Y = keyof Y,
>(props: Y, options: UseComponentSlotStyleOptions<Y, M, D> = {}) {
  return useStyle<Y, M, D, true>(props, { ...options, hasSlot: true })
}
