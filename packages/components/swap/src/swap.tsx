import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import { motionForwardRef } from "@yamada-ui/motion"
import type {
  WithTransitionProps,
  MotionProps,
  MotionTransition,
} from "@yamada-ui/motion"
import type { ReactElement } from "react"
import { Airy } from "./airy"
import { Flip } from "./flip"
import { Rotate } from "./rotate"

type AnimationType = "airy" | "rotate" | "horizontalFlip" | "verticalFlip"

export type SwapElements = {
  from: ReactElement
  to: ReactElement
}

type SwapOptions = {
  /**
   * Motion transition settings.
   */
  motionTransition?: MotionTransition

  animation: AnimationType
} & WithTransitionProps<MotionProps> &
  SwapElements

export type SwapProps = HTMLUIProps<"div"> & ThemeProps<"Swap"> & SwapOptions

/**
 * `Swap` is an animation component that swaps two elements.
 *
 * @see Docs https://yamada-ui.com/components/motion/swap
 */
export const Swap = motionForwardRef<SwapProps, "div">((props, ref) => {
  const [, mergedProps] = useComponentStyle("Swap", props)
  const { from, to, animation, ...rest } = omitThemeProps(mergedProps)

  return (
    <>
      {animation === "airy" ? (
        <Airy ref={ref} from={from} to={to} {...rest} />
      ) : animation === "rotate" ? (
        <Rotate ref={ref} from={from} to={to} {...rest} />
      ) : animation === "horizontalFlip" ? (
        <Flip
          ref={ref}
          from={from}
          to={to}
          flipDirection="horizontal"
          {...rest}
        />
      ) : animation === "verticalFlip" ? (
        <Flip
          ref={ref}
          from={from}
          to={to}
          flipDirection="vertical"
          {...rest}
        />
      ) : null}
    </>
  )
})
