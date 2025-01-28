import type { Variants } from "motion/react"
import type {
  MotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../../components/motion"
import type { FC, ThemeProps } from "../../core"
import { AnimatePresence } from "motion/react"
import {
  motion,
  transitionEnter,
  transitionExit,
} from "../../components/motion"
import { omitThemeProps, useComponentStyle } from "../../core"
import { cx } from "../../utils"

const variants: Variants = {
  enter: ({ delay, duration, enter, transition, transitionEnd } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    delay,
    duration,
    exit,
    reverse,
    scale,
    transition,
    transitionEnd,
  } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    ...(reverse
      ? { scale, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { scale, ...transitionEnd?.exit } }),
    ...exit,
  }),
} satisfies MotionTransitionVariants

export const scaleFadeProps = {
  animate: "enter",
  exit: "exit",
  initial: "exit",
  variants,
}

interface ScaleFadeOptions {
  /**
   * If `true`, the element will transition back to exit state.
   *
   * @default true
   */
  reverse?: boolean
  /**
   * The initial scale of the element.
   *
   * @default 0.95
   */
  scale?: number
}

export interface ScaleFadeProps
  extends WithTransitionProps<Omit<MotionProps, "scale">>,
    ScaleFadeOptions,
    ThemeProps<"ScaleFade"> {}

/**
 * `ScaleFade` is a component that gradually scales up to reveal or scales down to hide an element.
 *
 * @see Docs https://yamada-ui.com/components/transitions/scale-fade
 */
export const ScaleFade: FC<ScaleFadeProps> = (props) => {
  const [style, mergedProps] = useComponentStyle("ScaleFade", props)
  const {
    className,
    delay,
    duration,
    open,
    reverse,
    scale,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  } = omitThemeProps(mergedProps)
  const animate = open || unmountOnExit ? "enter" : "exit"
  const custom = {
    delay,
    duration,
    reverse,
    scale,
    transition,
    transitionEnd,
  }
  const resolvedOpen = unmountOnExit ? open && unmountOnExit : true

  return (
    <AnimatePresence custom={custom}>
      {resolvedOpen ? (
        <motion.div
          className={cx("ui-scale-fade", className)}
          custom={custom}
          {...scaleFadeProps}
          animate={animate}
          __css={style}
          {...rest}
        />
      ) : null}
    </AnimatePresence>
  )
}

ScaleFade.__ui__ = "ScaleFade"
