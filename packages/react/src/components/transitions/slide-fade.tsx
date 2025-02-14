import type { Variants } from "motion/react"
import type { FC, ThemeProps, Token } from "../../core"
import type {
  MotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import { AnimatePresence } from "motion/react"
import { omitThemeProps, useComponentStyle } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cx } from "../../utils"
import { motion, transitionEnter, transitionExit } from "../motion"

const variants: Variants = {
  enter: ({ delay, duration, enter, transition, transitionEnd } = {}) => ({
    opacity: 1,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    x: 0,
    y: 0,
    ...enter,
  }),
  exit: ({
    delay,
    duration,
    exit,
    offsetX,
    offsetY,
    reverse,
    transition,
    transitionEnd,
  } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    ...(reverse
      ? { transitionEnd: transitionEnd?.exit, x: offsetX, y: offsetY }
      : { transitionEnd: { x: offsetX, y: offsetY, ...transitionEnd?.exit } }),
    ...exit,
  }),
  initial: ({
    delay,
    duration,
    initial,
    offsetX,
    offsetY,
    transition,
    transitionEnd,
  }) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    x: offsetX,
    y: offsetY,
    ...initial,
  }),
} satisfies MotionTransitionVariants

export const slideFadeProps = {
  animate: "enter",
  exit: "exit",
  initial: "exit",
  variants,
}

interface SlideFadeOptions {
  /**
   * The offset on the horizontal or `x` axis.
   *
   * @default 0
   */
  offsetX?: Token<number | string>
  /**
   * The offset on the vertical or `y` axis.
   *
   * @default 8
   */
  offsetY?: Token<number | string>
  /**
   * If `true`, the element will be transitioned back to the offset when it leaves. Otherwise, it'll only fade out.
   *
   * @default true
   */
  reverse?: boolean
}

export interface SlideFadeProps
  extends WithTransitionProps<MotionProps>,
    SlideFadeOptions,
    ThemeProps<"SlideFade"> {}

/**
 * `SlideFade` is a component that gradually shows or hides an element while moving it from a specified position.
 *
 * @see Docs https://yamada-ui.com/components/transitions/slide-fade
 */
export const SlideFade: FC<SlideFadeProps> = (props) => {
  const [style, mergedProps] = useComponentStyle("SlideFade", props)
  const {
    className,
    delay,
    duration,
    offsetX: _offsetX,
    offsetY: _offsetY,
    open,
    reverse,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  } = omitThemeProps(mergedProps)
  const animate = open || unmountOnExit ? "enter" : "exit"
  const offsetX = useValue(_offsetX)
  const offsetY = useValue(_offsetY)
  const custom = {
    delay,
    duration,
    offsetX,
    offsetY,
    reverse,
    transition,
    transitionEnd,
  }
  const resolvedOpen = unmountOnExit ? open && unmountOnExit : true

  return (
    <AnimatePresence custom={custom}>
      {resolvedOpen ? (
        <motion.div
          className={cx("ui-slide-fade", className)}
          custom={custom}
          {...slideFadeProps}
          animate={animate}
          __css={style}
          {...rest}
        />
      ) : null}
    </AnimatePresence>
  )
}

SlideFade.__ui__ = "SlideFade"
