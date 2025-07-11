"use client"

import type { Dict } from "../../utils"
import type {
  ColorModeArray,
  CSSModifierObject,
  CSSObject,
  CSSPropObject,
  CSSSlotObject,
  ResponsiveWithConditionObject,
  StyleValueWithCondition,
} from "../css"
import type {
  Breakpoints,
  ComponentCompound,
  ComponentSlotStyle,
  ComponentStyle,
  Layers,
  LayerScheme,
  ThemeProps,
  WithoutThemeProps,
} from "../system"
import type { ComponentSlot, ComponentSlotName } from "./create-component"
import type { HTMLStyledProps } from "./index.types"
import { useRef } from "react"
import isEqual from "react-fast-compare"
import {
  bem,
  cx,
  isArray,
  isBooleanish,
  isEmptyObject,
  isObject,
  isRegExp,
  isUndefined,
  merge,
  omitObject,
  toArray,
  toKebabCase,
} from "../../utils"
import { conditions, getCondition, mergeCSS } from "../css"
import { useColorSchemeContext, useSystem } from "../system"
import { isEqualProps } from "./props"

type Style<Y extends boolean = false> = Y extends false
  ? CSSObject
  : CSSSlotObject

type MergedStyle = CSSModifierObject | CSSModifierObject<CSSSlotObject>

interface GetStyleOptions
  extends Partial<Breakpoints>,
    Pick<Partial<Layers>, "wrap"> {
  hasSlot?: boolean
  selectors?: (string | undefined)[]
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
      ) as Style<Y>
    } else if (selectors.length) {
      return getSelectorStyle(selectors, style) as Style<Y>
    } else {
      return style as Style<Y>
    }
  }
}

function getColorModeStyle<Y extends boolean = false>(
  value: ColorModeArray<string>,
  mergedStyle: MergedStyle,
) {
  return function ({ selectors = [], ...rest }: GetStyleOptions) {
    const [lightValue, darkValue] = value

    const lightStyle = getModifierStyle<Y>(
      lightValue,
      mergedStyle,
    )({ ...rest, selectors })

    const darkStyle = getModifierStyle<Y>(
      darkValue,
      mergedStyle,
    )({ ...rest, selectors: [...selectors, conditions._dark] })

    return merge(lightStyle, darkStyle)
  }
}

function getConditionStyle<Y extends boolean = false>(
  value: ResponsiveWithConditionObject<string>,
  mergedStyle: MergedStyle,
) {
  return function (options: GetStyleOptions) {
    const { isResponsiveKey, queries = [], selectors = [] } = options
    const conditionalKeys = Object.keys(value).filter(
      (key) => !isResponsiveKey?.(key),
    )

    const breakpointObj = queries.reduce<Style<Y>>(
      (prev, { breakpoint, query }) => {
        if (!isUndefined(value[breakpoint])) {
          prev = merge(
            prev,
            getModifierStyle<Y>(
              value[breakpoint],
              mergedStyle,
            )({ ...options, selectors: [...selectors, query] }),
          )
        }

        return prev
      },
      {},
    )

    const additionalObj = conditionalKeys.reduce<Style<Y>>((prev, key) => {
      prev = merge(
        prev,
        getModifierStyle<Y>(
          value[key as keyof typeof value],
          mergedStyle,
        )({ ...options, selectors: [...selectors, getCondition(key)] }),
      )

      return prev
    }, {})

    return merge(breakpointObj, additionalObj)
  }
}

function getModifierStyle<Y extends boolean = false>(
  value: StyleValueWithCondition<string> | undefined,
  mergedStyle: MergedStyle,
) {
  return function (options: GetStyleOptions): Style<Y> | undefined {
    let style: Style<Y> | undefined = undefined

    if (!value) return style

    if (isArray(value)) {
      style = getColorModeStyle<Y>(value, mergedStyle)(options)
    } else if (isObject(value)) {
      style = getConditionStyle<Y>(value, mergedStyle)(options)
    } else {
      style = getStyle<Y>(mergedStyle[value])(options)
    }

    return style
  }
}

function getPropStyle<Y extends boolean = false>(
  props: Dict,
  propVariants: CSSPropObject | CSSPropObject<CSSSlotObject>,
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
        isArray(value)
          ? value.includes(props[key])
          : isRegExp(value)
            ? value.test(props[key])
            : props[key] === value,
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

export function getSlotClassName<Y extends string>(
  className?: string,
  slot?: ComponentSlot<Y>,
) {
  if (!className || !slot) return className

  if (isArray(slot)) {
    const [element, modifier] = slot.map((value) =>
      toKebabCase(value as string),
    )

    return cx(bem(className, element), bem(className, element, modifier))
  } else if (isObject(slot)) {
    const slotArray = toArray(slot.slot)
    const [element, modifier] = slotArray.map((value) =>
      toKebabCase(value as string),
    )

    return cx(bem(className, element), bem(className, element, modifier))
  } else {
    return bem(className, toKebabCase(slot as string))
  }
}

function getSlotCSS<Y extends string>(
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

export function mergeSlotCSS<Y extends string>(
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
  return (getAtRule?: Layers["getAtRule"]) => {
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

function mergeDefaultProps<
  Y extends ComponentSlotStyle | ComponentStyle = ComponentStyle,
  M extends Dict = Dict,
>(defaultProps: Y["defaultProps"], props: M) {
  return Object.entries(defaultProps ?? {}).reduce<Dict>(
    (prev, [key, value]) => {
      prev[key] ??= value

      return prev
    },
    props,
  ) as M
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
  const system = useSystem()
  const { getAtRule, wrap } = system.layers
  const rootColorScheme = useColorSchemeContext()
  const options = { ...system.breakpoints, hasSlot, wrap }

  const propsRef = useRef<Dict>({})
  const styleRef = useRef<Style<H> | undefined>(undefined)

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
    const mergedProps = {
      ...mergeDefaultProps(defaultProps, props),
      className,
      colorScheme,
    }
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
        const sizeStyle = merge(
          sizes.base,
          getModifierStyle<H>(size, sizes)(options),
        )

        style = merge(style, wrapStyle<H>("size", sizeStyle)(options))
      }

      if (variants && !hasVariant) {
        const variantStyle = merge(
          variants.base,
          getModifierStyle<H>(variant, variants)(options),
        )

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
          computedProps.css = mergeCSS(style as CSSObject, computedProps.css)
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

  return [
    styleRef.current ?? {},
    propsRef.current as WithoutThemeProps<Y, M, D>,
  ]
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
