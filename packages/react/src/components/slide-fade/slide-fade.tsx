"use client"

import type { Variants } from "motion/react"
import type { StyleValue, ThemeProps } from "../../core"
import type {
  HTMLMotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import type { SlideFadeStyle } from "./slide-fade.style"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { createTransition, motion } from "../motion"
import { slideFadeStyle } from "./slide-fade.style"

export const slideFadeVariants: Variants = {
  enter: ({ delay, duration, enter, transition, transitionEnd } = {}) => ({
    opacity: 1,
    transition: createTransition.enter(transition?.enter)(delay, duration),
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
    transition: createTransition.exit(transition?.exit)(delay, duration),
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
    transition: createTransition.exit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    x: offsetX,
    y: offsetY,
    ...initial,
  }),
} satisfies MotionTransitionVariants

export interface SlideFadeProps
  extends WithTransitionProps<HTMLMotionProps>,
    ThemeProps<SlideFadeStyle> {
  /**
   * The offset on the horizontal or `x` axis.
   *
   * @default 0
   */
  offsetX?: StyleValue<number | string>
  /**
   * The offset on the vertical or `y` axis.
   *
   * @default 8
   */
  offsetY?: StyleValue<number | string>
  /**
   * If `true`, the element will be transitioned back to the offset when it leaves. Otherwise, it'll only fade out.
   *
   * @default true
   */
  reverse?: boolean
}

const {
  PropsContext: SlideFadePropsContext,
  usePropsContext: useSlideFadePropsContext,
  withContext,
} = createComponent<SlideFadeProps, SlideFadeStyle>(
  "slide-fade",
  slideFadeStyle,
)

export { SlideFadePropsContext, useSlideFadePropsContext }

/**
 * `SlideFade` is a component that gradually shows or hides an element while moving it from a specified position.
 *
 * @see https://yamada-ui.com/components/slide-fade
 */
export const SlideFade = withContext<"div", SlideFadeProps>(
  ({
    delay,
    duration,
    offsetX: offsetXProp = 0,
    offsetY: offsetYProp = 8,
    open: openProp,
    reverse = true,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  }) => {
    const animate = openProp || unmountOnExit ? "enter" : "exit"
    const open = unmountOnExit ? openProp && unmountOnExit : true
    const offsetX = useValue(offsetXProp)
    const offsetY = useValue(offsetYProp)

    const custom = useMemo(
      () => ({
        delay,
        duration,
        offsetX,
        offsetY,
        reverse,
        transition,
        transitionEnd,
      }),
      [delay, duration, offsetX, offsetY, reverse, transition, transitionEnd],
    )

    return (
      <AnimatePresence custom={custom}>
        {open ? (
          <motion.div
            animate={animate}
            custom={custom}
            exit="exit"
            initial="exit"
            variants={slideFadeVariants}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)()
