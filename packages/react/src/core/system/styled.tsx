"use client"

import type { EmotionCache, SerializedStyles } from "@emotion/utils"
import type { FC } from "react"
import type { Dict } from "../../utils"
import type { As, ShouldForwardProp, StyledComponent } from "../components"
import type { CSSModifierObject, CSSPropObject } from "../css"
import type {
  ColorScheme,
  ComponentStyle,
  System,
  UsageTheme,
} from "./index.types"
import { withEmotionCache } from "@emotion/react"
import { serializeStyles } from "@emotion/serialize"
import { useInsertionEffectAlwaysWithSyncFallback } from "@emotion/use-insertion-effect-with-fallbacks"
import {
  getRegisteredStyles,
  insertStyles,
  registerStyles,
} from "@emotion/utils"
import { useMemo, useRef } from "react"
import isEqual from "react-fast-compare"
import { Slot } from "../../components/slot"
import {
  createContext,
  createdDom,
  cx,
  filterEmpty,
  filterUndefined,
  isString,
  isUndefined,
  runIfFn,
  splitObject,
  toArray,
  toKebabCase,
} from "../../utils"
import {
  createShouldForwardProp,
  getDisplayName,
  useComponentStyle,
} from "../components"
import { css } from "../css"
import { useSystem } from "./system-provider"
import { useTheme } from "./theme-provider"

interface InsertionProps {
  cache: EmotionCache
  htmlTag: boolean
  serialized: SerializedStyles
}

const Insertion: FC<InsertionProps> = ({ cache, htmlTag, serialized }) => {
  registerStyles(cache, serialized, htmlTag)

  const style = useInsertionEffectAlwaysWithSyncFallback(() =>
    insertStyles(cache, serialized, htmlTag),
  )

  if (!createdDom() && !isUndefined(style)) {
    let className = serialized.name
    let next = serialized.next

    while (next !== undefined) {
      className = cx(className, next.name)
      next = next.next
    }

    return (
      <style
        data-emotion={cx(cache.key, className)}
        dangerouslySetInnerHTML={{ __html: style }}
        nonce={cache.sheet.nonce}
      />
    )
  } else {
    return null
  }
}

const useSplitProps = <Y extends Dict, M extends Dict>(
  props: Dict,
  shouldForwardProp?: ShouldForwardProp,
) => {
  const propsRef = useRef(props)

  if (!isEqual(propsRef.current, props)) propsRef.current = props

  const computedProps = propsRef.current

  return useMemo(
    () => splitObject<Y, M>(computedProps, shouldForwardProp),
    [computedProps, shouldForwardProp],
  )
}

export const [ColorSchemeContext, useColorSchemeContext] =
  createContext<ColorScheme>({
    name: "ColorSchemeContext",
    strict: false,
  })

export interface StyledOptions<
  Y extends CSSPropObject = CSSPropObject,
  M extends CSSModifierObject = CSSModifierObject,
  D extends CSSModifierObject = CSSModifierObject,
  H extends number | string | symbol = string,
> extends Omit<ComponentStyle<Y, M, D>, "className"> {
  name?: string
  target?: string
  className?: ((system: System) => string) | string
  displayName?: string
  forwardAsChild?: boolean
  shouldForwardProp?: boolean | ShouldForwardProp
  forwardProps?: string[]
  transferProps?: H[]
}

export function createStyled<
  Y extends As,
  M extends object = {},
  D extends CSSPropObject = CSSPropObject,
  H extends CSSModifierObject = CSSModifierObject,
  R extends CSSModifierObject = CSSModifierObject,
>(
  el: Y,
  {
    base,
    compounds,
    props,
    sizes,
    variants,
    defaultProps,
    transferProps,
    ...styledOptions
  }: StyledOptions<D, H, R, keyof M> = {},
): StyledComponent<Y, M> {
  const displayName =
    styledOptions.displayName ?? getDisplayName(styledOptions.name, "")
  const shouldForwardProp = !styledOptions.shouldForwardProp
    ? createShouldForwardProp(styledOptions.forwardProps)
    : undefined
  const style = filterUndefined({
    base,
    compounds,
    props,
    sizes,
    variants,
    defaultProps,
  })

  const StyledComponent = withEmotionCache<Dict>(function (
    { as: Component = el, asChild, children, ...props },
    cache,
    ref,
  ) {
    let className = ""

    const system = useSystem()
    const { theme } = useTheme<UsageTheme>()
    const componentStyleOptions = {
      className: system.utils.getClassName(
        runIfFn(styledOptions.className, system) ??
          toKebabCase(styledOptions.name ?? ""),
      ),
      style,
      transferProps,
    }
    const registered = useRef<string[]>([])
    const htmlTag = isString(Component)
    const forwardAsChild =
      styledOptions.forwardAsChild ||
      styledOptions.forwardProps?.includes("asChild")
    const [omittedProps, styleProps] = useSplitProps(props, shouldForwardProp)
    const [, rest] = useComponentStyle<any, {}>(
      omittedProps,
      componentStyleOptions,
    )
    const [cssArray, colorScheme, forwardProps] = useMemo(() => {
      const { css, colorScheme, ...forwardProps } = rest

      return [toArray(css), colorScheme, forwardProps]
    }, [rest])

    styleProps.colorScheme ??= colorScheme

    if (forwardProps.className)
      className = getRegisteredStyles(
        cache.registered,
        registered.current,
        forwardProps.className,
      ).trim()

    const interpolations = useMemo(
      () => [
        ...registered.current,
        ...filterEmpty([...cssArray, styleProps].map(css(system, theme))),
      ],
      [cssArray, system, styleProps, theme],
    )

    const serialized = useMemo(
      () => serializeStyles(interpolations, cache.registered),
      [interpolations, cache.registered],
    )

    className = cx(className, `${cache.key}-${serialized.name}`)
    className = cx(className, styledOptions.target)

    const mergedProps = { ...forwardProps, className, children }

    return (
      <ColorSchemeContext value={styleProps.colorScheme}>
        <Insertion cache={cache} htmlTag={htmlTag} serialized={serialized} />

        {asChild && !forwardAsChild ? (
          <Slot ref={ref} {...mergedProps} />
        ) : (
          <Component ref={ref} {...mergedProps} />
        )}
      </ColorSchemeContext>
    )
  }) as StyledComponent<Y, M>

  StyledComponent.displayName = displayName || "StyledComponent"

  return StyledComponent
}
