import type { Dict } from "../../utils"
import type {
  BreakpointQueries,
  ColorModeArray,
  CreateLayersReturn,
  CSSModifierObject,
  CSSObject,
  CSSSlotObject,
  ResponsiveObject,
  StyleValue,
} from "../css"
import type {
  BreakpointDirection,
  ComponentCompound,
  ComponentSlotStyle,
  ComponentStyle,
  LayerScheme,
  ThemeProps,
  WithoutThemeProps,
} from "../theme"
import type { ComponentSlot, ComponentSlotName } from "./create-component"
import type { HTMLStyledProps } from "./index.types"
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
import { createQuery, mergeCSS } from "../css"
import { pseudos } from "../pseudos"
import { useColorSchemeContext } from "../styled"
import { isEqualProps } from "./props"

type Style<Y extends boolean = false> = Y extends false
  ? CSSObject
  : CSSSlotObject

type MergedStyle = CSSModifierObject | CSSModifierObject<CSSSlotObject>

interface GetStyleOptions {
  direction: BreakpointDirection
  queries: BreakpointQueries
  hasSlot?: boolean
  identifier?: string
  selectors?: (string | undefined)[]
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

function getStyle<Y extends boolean = false>(
  style: CSSObject | CSSSlotObject | undefined,
) {
  return function ({
    hasSlot = false,
    selectors = [],
  }: GetStyleOptions): Style<Y> | undefined {
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

function getColorModeStyle<Y extends boolean = false>(
  value: ColorModeArray<number | string>,
  mergedStyle: MergedStyle,
) {
  return function ({ selectors = [], ...rest }: GetStyleOptions) {
    const [lightValue, darkValue] = value

    const lightStyle = getModifierStyle<Y>(
      lightValue,
      mergedStyle,
    )({ ...rest, selectors: [...selectors, pseudos._light] })

    const darkStyle = getModifierStyle<Y>(
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

function getResponsiveStyle<Y extends boolean = false>(
  value: ResponsiveObject<number | string>,
  mergedStyle: MergedStyle,
) {
  return function (options: GetStyleOptions) {
    const { direction, identifier, queries, selectors = [] } = options
    const breakpoints = keysFormObject(value)

    if (breakpoints.length === 1 && "base" in value) {
      return getModifierStyle<Y>(value.base, mergedStyle)(options)
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

            const style = getModifierStyle<Y>(
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

          const style = getModifierStyle<Y>(
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

function getPropStyle<Y extends boolean = false>(
  props: Dict,
  propVariants: CSSModifierObject | CSSModifierObject<CSSSlotObject>,
  style: Style<Y> | undefined = {},
) {
  const variants = Object.entries(propVariants)

  return function (options: GetStyleOptions) {
    if (!variants.length) return style

    variants.forEach(([name, variants]) => {
      const prop = props[name as keyof typeof props]

      if (prop) {
        const propStyle = getModifierStyle<Y>(prop, variants)(options)

        if (propStyle)
          style = merge(style, wrapStyle<Y>("props", propStyle)(options))
      } else {
        const boolean = Object.keys(variants).every((key) => isBooleanish(key))

        if (boolean) {
          const propStyle = getModifierStyle<Y>("false", variants)(options)

          if (propStyle)
            style = merge(style, wrapStyle<Y>("props", propStyle)(options))
        }
      }
    })

    return style
  }
}

function getCompoundStyle<Y extends boolean = false>(
  props: Dict,
  compounds: ComponentCompound<CSSSlotObject>[] | ComponentCompound[],
  style: Style<Y> | undefined = {},
) {
  return function (options: GetStyleOptions) {
    if (!compounds.length) return style

    compounds.forEach(({ css, layer, ...rest }) => {
      const conditions = Object.entries(rest)

      if (!conditions.length) return

      const apply = conditions.every(([key, value]) =>
        isArray(value) ? value.includes(props[key]) : props[key] === value,
      )

      if (!apply) return

      style = merge(
        style,
        wrapStyle<Y>(layer ?? "compounds", css as Style<Y>)(options),
      )
    })

    return style
  }
}

function getModifierStyle<Y extends boolean = false>(
  value: StyleValue<number | string> | undefined,
  mergedStyle: MergedStyle,
) {
  return function (options: GetStyleOptions): Style<Y> | undefined {
    let style: Style<Y> | undefined = undefined

    if (!value) return style

    if (isArray(value)) {
      style = getColorModeStyle<Y>(value, mergedStyle)(options)
    } else if (isObject(value)) {
      style = getResponsiveStyle<Y>(value, mergedStyle)(options)
    } else {
      style = getStyle<Y>(mergedStyle[value])(options)
    }

    return style
  }
}

export function getSlotClassName<Y extends number | string | symbol>(
  className?: string,
  slot?: ComponentSlot<Y>,
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

function getSlotCSS<Y extends number | string | symbol>(
  slot?: ComponentSlot<Y>,
  slotCSS?: CSSSlotObject<Y>,
): CSSObject[] {
  if (!slotCSS || !slot) return []

  if (isArray(slot)) {
    return slot.map((slot) => slotCSS[slot]!)
  } else if (isObject(slot)) {
    if (isArray(slot.slot)) {
      return slot.slot.map((slot) => slotCSS[slot]!)
    } else {
      return [slotCSS[slot.slot]!]
    }
  } else {
    return [slotCSS[slot]!]
  }
}

export function mergeSlotCSS<Y extends number | string | symbol>(
  slot?: ComponentSlot<Y>,
  slotCSS?: CSSSlotObject<Y>,
  css?: CSSObject | CSSObject[],
) {
  if (!slotCSS || !slot) return css

  const result: CSSObject[] = []

  result.push(...getSlotCSS(slot, slotCSS))

  if (css) result.push(...toArray(css))

  return result
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

function wrapStyle<Y extends boolean = false>(
  layer: LayerScheme,
  style?: Style<Y>,
) {
  return function ({ hasSlot, wrap }: GetStyleOptions) {
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
  slot?: ComponentSlot<ComponentSlotName<M>>
  transferProps?: D[]
}

function useStyle<
  Y extends HTMLStyledProps & ThemeProps<{}> = Dict,
  M extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  D extends keyof Y = keyof Y,
  H extends boolean = false,
>(
  props: Y,
  {
    className: defaultClassName,
    style: componentStyle,
    hasSlot,
    slot,
    transferProps,
  }: UseStyleOptions<Y, M, D, H> = {},
): [Style<H>, WithoutThemeProps<Y, M, D>] {
  const { theme } = useTheme()
  const { getAtRule, wrap } = theme.__layers ?? {}
  const rootColorScheme = useColorSchemeContext()
  const { queries = [] } = theme.__breakpoints ?? {}
  const { direction = "down", identifier } = theme.__config?.breakpoint ?? {}
  const options = { direction, hasSlot, identifier, queries, wrap }

  const propsRef = useRef<Dict>({})
  const styleRef = useRef<Style<H>>({})

  props = filterUndefined(props)

  const hasComponentStyle =
    componentStyle && !!Object.keys(componentStyle).length

  if (hasComponentStyle) {
    const {
      className: customClassName,
      base,
      compounds,
      props: propVariants,
      sizes,
      variants,
      defaultProps = {},
    } = componentStyle

    const colorScheme = props.colorScheme ?? rootColorScheme
    const className = cx(defaultClassName ?? customClassName, props.className)
    const mergedProps = { ...defaultProps, ...props, className, colorScheme }
    const omitProps = Object.keys(propVariants ?? {})
    const { size, variant } = mergedProps

    if (variants) omitProps.push("variant")
    if (sizes) omitProps.push("size")

    const computedProps = omitThemeProps(
      mergedProps,
      omitProps,
      transferProps,
    ) as Y

    if (!isEqualProps(propsRef.current, computedProps, ["css", "children"])) {
      const { hasSize, hasVariant } = getHasAtRuleStyle(props.css)(getAtRule)

      let style: Style<H> = {}

      if (base) {
        const baseStyle = getStyle<H>(base)(options)

        style = merge(style, wrapStyle<H>("base", baseStyle)(options))
      }

      if (sizes && !hasSize) {
        const sizeStyle = getModifierStyle<H>(size, sizes)(options)

        style = merge(style, wrapStyle<H>("size", sizeStyle)(options))
      }

      if (variants && !hasVariant) {
        const variantStyle = getModifierStyle<H>(variant, variants)(options)

        style = merge(style, wrapStyle<H>("variant", variantStyle)(options))
      }

      if (propVariants)
        style = getPropStyle<H>(mergedProps, propVariants, style)(options)

      if (compounds)
        style = getCompoundStyle<H>(mergedProps, compounds, style)(options)

      if (!isEqual(styleRef.current, style)) {
        styleRef.current = style

        if (hasSlot) {
          computedProps.css = mergeSlotCSS<ComponentSlotName<M>>(
            slot,
            style as CSSSlotObject,
            computedProps.css,
          )
        } else {
          computedProps.css = mergeCSS(style, computedProps.css)
        }
      } else {
        computedProps.css = propsRef.current.css
      }
    } else {
      computedProps.css = propsRef.current.css
    }

    if (!isEqualProps(propsRef.current, computedProps))
      propsRef.current = computedProps
  } else {
    props.className = cx(defaultClassName, props.className)

    if (!isEqualProps(propsRef.current, props))
      propsRef.current = props as unknown as WithoutThemeProps<Y, M, D>
  }

  return [styleRef.current, propsRef.current as WithoutThemeProps<Y, M, D>]
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
