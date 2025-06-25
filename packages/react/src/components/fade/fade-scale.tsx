"use client"

import type { Variants } from "motion/react"
import type { ThemeProps } from "../../core"
import type {
  HTMLMotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import type { FadeScaleStyle } from "./fade-scale.style"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createComponent } from "../../core"
import { createTransition, motion } from "../motion"
import { fadeScaleStyle } from "./fade-scale.style"

export const fadeScaleVariants: Variants = {
  enter: ({ delay, duration, enter, transition, transitionEnd } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: createTransition.enter(transition?.enter)(delay, duration),
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
    transition: createTransition.exit(transition?.exit)(delay, duration),
    ...(reverse
      ? { scale, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { scale, ...transitionEnd?.exit } }),
    ...exit,
  }),
} satisfies MotionTransitionVariants

export interface FadeScaleProps
  extends WithTransitionProps<HTMLMotionProps>,
    ThemeProps<FadeScaleStyle> {
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

export const {
  PropsContext: FadeScalePropsContext,
  usePropsContext: useFadeScalePropsContext,
  withContext,
} = createComponent<FadeScaleProps, FadeScaleStyle>(
  "fade-scale",
  fadeScaleStyle,
)

/**
 * `FadeScale` is a component that gradually scales up to reveal or scales down to hide an element.
 *
 * @see https://yamada-ui.com/components/fade-scale
 */
export const FadeScale = withContext(
  ({
    delay,
    duration,
    open: openProp,
    reverse = true,
    scale = 0.95,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  }) => {
    const animate = openProp || unmountOnExit ? "enter" : "exit"
    const open = unmountOnExit ? openProp && unmountOnExit : true

    const custom = useMemo(
      () => ({
        delay,
        duration,
        reverse,
        scale,
        transition,
        transitionEnd,
      }),
      [delay, duration, reverse, scale, transition, transitionEnd],
    )

    return (
      <AnimatePresence custom={custom}>
        {open ? (
          <motion.div
            animate={animate}
            custom={custom}
            exit="exit"
            initial="exit"
            variants={fadeScaleVariants}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)()
