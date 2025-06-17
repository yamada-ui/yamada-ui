import type { EmotionCache, SerializedStyles } from "@emotion/utils"
import type { FC } from "react"
import type { Dict } from "../utils"
import type { As, ShouldForwardProp, StyledComponent } from "./components"
import type { CSSModifierObject, CSSPropObject } from "./css"
import type { ColorScheme, ComponentStyle, StyledTheme } from "./theme"
import { ThemeContext, withEmotionCache } from "@emotion/react"
import { serializeStyles } from "@emotion/serialize"
import { useInsertionEffectAlwaysWithSyncFallback } from "@emotion/use-insertion-effect-with-fallbacks"
import {
  getRegisteredStyles,
  insertStyles,
  registerStyles,
} from "@emotion/utils"
import { use, useMemo, useRef } from "react"
import isEqual from "react-fast-compare"
import { Slot } from "../components/slot"
import {
  createContext,
  createdDom,
  cx,
  filterEmpty,
  filterUndefined,
  isString,
  isUndefined,
  mergeRefs,
  splitObject,
  toArray,
} from "../utils"
import {
  createShouldForwardProp,
  getClassName,
  getDisplayName,
  useComponentStyle,
} from "./components"
import { css } from "./css"

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
> extends ComponentStyle<Y, M, D> {
  name?: string
  target?: string
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
  const className = styledOptions.className ?? getClassName(styledOptions.name)
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
  const componentStyleOptions = { className, style, transferProps }

  const StyledComponent = withEmotionCache<Dict>(function (
    { as: Component = el, asChild, children, __debug, ...props },
    cache,
    forwardedRef,
  ) {
    let className = ""

    const debugRef = useRef<HTMLElement>(null)
    const registered = useRef<string[]>([])
    const htmlTag = isString(Component)
    const forwardAsChild =
      styledOptions.forwardAsChild ||
      styledOptions.forwardProps?.includes("asChild")
    const shouldDebug = __debug && process.env.NODE_ENV === "development"
    const theme = use(ThemeContext) as StyledTheme
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
        ...filterEmpty([...cssArray, styleProps].map(css(theme))),
      ],
      [cssArray, theme, styleProps],
    )

    const serialized = useMemo(
      () =>
        serializeStyles(interpolations, cache.registered, {
          theme,
          ...forwardProps,
        }),
      [interpolations, cache.registered, theme, forwardProps],
    )

    className = cx(className, `${cache.key}-${serialized.name}`)
    className = cx(className, styledOptions.target)

    if (shouldDebug) {
      // eslint-disable-next-line no-console
      console.log({
        ref: debugRef,
        as: Component,
        className,
        css: interpolations,
        el,
      })
    }

    const ref = shouldDebug ? mergeRefs(forwardedRef, debugRef) : forwardedRef
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
