import type { CSSProps, HTMLUIProps, ThemeProps } from "../../core"
import type { SkeletonStyle } from "./skeleton.style"
import { createComponent, mergeCSS, ui } from "../../core"
import { useAnimation } from "../../hooks/use-animation"
import { useMounted } from "../../hooks/use-mounted"
import { usePrevious } from "../../hooks/use-previous"
import { useValue } from "../../hooks/use-value"
import { cx, getValidChildren } from "../../utils"
import { skeletonStyle } from "./skeleton.style"

export interface SkeletonProps extends HTMLUIProps, ThemeProps<SkeletonStyle> {
  /**
   * The color at the animation end.
   */
  endColor?: CSSProps["color"]
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
  startColor?: CSSProps["color"]
}

export const {
  PropsContext: SkeletonPropsContext,
  usePropsContext: useSkeletonPropsContext,
  withContext,
} = createComponent<SkeletonProps, SkeletonStyle>("skeleton", skeletonStyle)

/**
 * `Skeleton` is a component that acts as a placeholder until content is loaded.
 *
 * @see Docs https://yamada-ui.com/components/feedback/skeleton
 */
export const Skeleton = withContext<"div", SkeletonProps>(
  ({
    className,
    css: cssProp,
    children,
    endColor: _endColor = ["rgba(0, 0, 0, 0.24)", "rgba(255, 255, 255, 0.24)"],
    fadeDuration = 0.4,
    fitContent,
    loaded,
    speed = 0.8,
    startColor: _startColor = [
      "rgba(0, 0, 0, 0.16)",
      "rgba(255, 255, 255, 0.16)",
    ],
    ...rest
  }) => {
    const validChildren = getValidChildren(children)
    const hasChildren = !!validChildren.length

    fitContent ??= hasChildren

    const [mounted] = useMounted()
    const prevIsLoaded = usePrevious(loaded)
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

    const css = mergeCSS(cssProp, {
      "&::before, &::after, *": {
        visibility: "hidden",
      },
      boxShadow: "none",
      color: "transparent",
      cursor: "default",
      h: fitContent ? "fit-content" : "{4, 1rem}",
      maxW: "100%",
      pointerEvents: "none",
      userSelect: "none",
      w: fitContent ? "fit-content" : "100%",
    })

    if (loaded) {
      const animation = !mounted() || prevIsLoaded ? "none" : fadeIn

      return (
        <ui.div
          className={cx("ui-skeleton--loaded", className)}
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
          className={className}
          css={css}
          {...rest}
          aria-busy="true"
          animation={animation}
        >
          {validChildren}
        </ui.div>
      )
    }
  },
)()
