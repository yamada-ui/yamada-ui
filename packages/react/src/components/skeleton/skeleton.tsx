"use client"

import type { CSSProps, HTMLStyledProps, ThemeProps } from "../../core"
import type { SkeletonStyle } from "./skeleton.style"
import { createComponent, varAttr } from "../../core"
import { dataAttr, isNumber, useValidChildren } from "../../utils"
import { skeletonStyle } from "./skeleton.style"

export interface SkeletonProps
  extends HTMLStyledProps, ThemeProps<SkeletonStyle> {
  /**
   * The animation duration in seconds.
   */
  duration?: number | string
  /**
   * The color at the animation end.
   */
  endColor?: CSSProps["color"]
  /**
   * The fade in duration in seconds. Requires `loaded` toggled to `true` in order to see the transition.
   */
  fadeDuration?: number | string
  /**
   * If `true`, the skeleton will take the width of it's children.
   *
   * @default false
   */
  fitContent?: boolean
  /**
   * The color at the animation start.
   */
  startColor?: CSSProps["color"]
}

const {
  PropsContext: SkeletonPropsContext,
  usePropsContext: useSkeletonPropsContext,
  withContext,
} = createComponent<SkeletonProps, SkeletonStyle>("skeleton", skeletonStyle)

export { SkeletonPropsContext, useSkeletonPropsContext }

/**
 * `Skeleton` is a component that acts as a placeholder until content is loaded.
 *
 * @see https://yamada-ui.com/docs/components/skeleton
 */
export const Skeleton = withContext("div", { transferProps: ["loading"] })(
  undefined,
  ({
    children,
    duration,
    endColor,
    fadeDuration,
    fitContent,
    loading,
    startColor,
    ...rest
  }) => {
    const validChildren = useValidChildren(children)
    const hasChildren = !!validChildren.length

    fitContent ??= hasChildren

    return {
      "aria-busy": loading,
      "data-loaded": dataAttr(!loading),
      "data-loading": dataAttr(loading),
      "--duration": isNumber(duration) ? `${duration}s` : duration,
      "--end-color": varAttr(endColor, "colors"),
      "--fade-duration": isNumber(fadeDuration)
        ? `${fadeDuration}s`
        : fadeDuration,
      "--height": fitContent ? "fit-content" : undefined,
      "--start-color": varAttr(startColor, "colors"),
      "--width": fitContent ? "fit-content" : undefined,
      children,
      ...rest,
    }
  },
)
