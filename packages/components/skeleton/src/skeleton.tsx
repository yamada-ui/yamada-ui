import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentStyle,
} from "@yamada-ui/core"
import { useAnimation } from "@yamada-ui/use-animation"
import { usePrevious } from "@yamada-ui/use-previous"
import { useValue } from "@yamada-ui/use-value"
import { cx, getValidChildren, useMounted } from "@yamada-ui/utils"

interface SkeletonOptions {
  /**
   * The color at the animation end.
   */
  endColor?: CSSUIProps["color"]
  /**
   * The fadeIn duration in seconds. Requires `isLoaded` toggled to `true` in order to see the transition.
   *
   * @default 0.4
   */
  fadeDuration?: number | string
  /**
   * If `true`, the skeleton will take the width of it's children.
   *
   * @default false
   */
  fitContent?: boolean
  /**
   * If `true`, the skeleton will take the width of it's children.
   *
   * @default false
   *
   * @deprecated Use `fitContent` instead.
   */
  isFitContent?: boolean
  /**
   * If `true`, it'll render its children with a nice fade transition.
   *
   * @default false
   *
   * @deprecated Use `loaded` instead.
   */
  isLoaded?: boolean
  /**
   * If `true`, it'll render its children with a nice fade transition.
   *
   * @default false
   */
  loaded?: boolean
  /**
   * The animation speed in seconds.
   *
   * @default 0.8
   */
  speed?: number | string
  /**
   * The color at the animation start.
   */
  startColor?: CSSUIProps["color"]
}

export interface SkeletonProps
  extends HTMLUIProps,
    ThemeProps<"Skeleton">,
    SkeletonOptions {}

/**
 * `Skeleton` is a component that acts as a placeholder until content is loaded.
 *
 * @see Docs https://yamada-ui.com/components/feedback/skeleton
 */
export const Skeleton = forwardRef<SkeletonProps, "div">((props, ref) => {
  const [styles, { children, ...mergedProps }] = useComponentStyle(
    "Skeleton",
    props,
  )
  const validChildren = getValidChildren(children)
  const hasChildren = !!validChildren.length
  const {
    className,
    endColor: _endColor,
    fadeDuration = 0.4,
    isFitContent = hasChildren,
    fitContent = isFitContent,
    isLoaded,
    loaded = isLoaded,
    speed = 0.8,
    startColor: _startColor,
    ...rest
  } = omitThemeProps(mergedProps)
  const [mounted] = useMounted()
  const prevIsLoaded = usePrevious(isLoaded)
  const startColor = useValue(_startColor)
  const endColor = useValue(_endColor)

  const fadeIn = useAnimation({
    duration:
      typeof fadeDuration === "string" ? fadeDuration : `${fadeDuration}s`,
    keyframes: {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
      },
    },
  })

  const animation = useAnimation({
    direction: "alternate",
    duration: typeof speed === "string" ? speed : `${speed}s`,
    iterationCount: "infinite",
    keyframes: {
      "0%": {
        background: startColor,
        borderColor: startColor,
      },
      "100%": {
        background: endColor,
        borderColor: endColor,
      },
    },
    timingFunction: "linear",
  })

  const css: CSSUIObject = {
    "&::before, &::after, *": {
      visibility: "hidden",
    },
    backgroundClip: "padding-box",
    boxShadow: "none",
    color: "transparent",
    cursor: "default",
    h: fitContent ? "fit-content" : "fallback(4, 1rem)",
    maxW: "100%",
    pointerEvents: "none",
    userSelect: "none",
    w: fitContent ? "fit-content" : "100%",
    ...styles,
  }

  if (loaded) {
    const animation = !mounted() || prevIsLoaded ? "none" : fadeIn

    return (
      <ui.div
        ref={ref}
        className={cx("ui-skeleton", "ui-skeleton--loaded", className)}
        {...rest}
        aria-busy="false"
        animation={animation}
      >
        {validChildren}
      </ui.div>
    )
  } else {
    return (
      <ui.div
        ref={ref}
        className={cx("ui-skeleton", className)}
        __css={css}
        {...rest}
        aria-busy="true"
        animation={animation}
      >
        {validChildren}
      </ui.div>
    )
  }
})

Skeleton.displayName = "Skeleton"
Skeleton.__ui__ = "Skeleton"
