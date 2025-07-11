"use client"

import type { Variants } from "motion/react"
import type { ThemeProps } from "../../core"
import type {
  HTMLMotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import type { SlideStyle } from "./slide.style"
import { AnimatePresence } from "motion/react"
import { useMemo } from "react"
import { createComponent } from "../../core"
import { useValue } from "../../hooks/use-value"
import { createTransition, motion } from "../motion"
import { slideStyle } from "./slide.style"

const getAnimationProps = (placement: SlideProps["placement"]) => {
  switch (placement) {
    case "block-start":
      return { enter: { x: 0, y: 0 }, exit: { x: 0, y: "-100%" } }
    case "inline-end":
      return { enter: { x: 0, y: 0 }, exit: { x: "100%", y: 0 } }
    case "block-end":
      return { enter: { x: 0, y: 0 }, exit: { x: 0, y: "100%" } }
    case "inline-start":
      return { enter: { x: 0, y: 0 }, exit: { x: "-100%", y: 0 } }
    default:
      return {}
  }
}
export const slideVariants: Variants = {
  enter: ({
    delay,
    duration,
    enter,
    placement,
    transition,
    transitionEnd,
  } = {}) => ({
    ...getAnimationProps(placement).enter,
    transition: createTransition.enter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    delay,
    duration,
    exit,
    placement,
    transition,
    transitionEnd,
  } = {}) => ({
    ...getAnimationProps(placement).exit,
    transition: createTransition.exit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export interface SlideProps
  extends WithTransitionProps<HTMLMotionProps>,
    ThemeProps<SlideStyle> {}

const {
  PropsContext: SlidePropsContext,
  usePropsContext: useSlidePropsContext,
  withContext,
} = createComponent<SlideProps, SlideStyle>("slide", slideStyle)

export { SlidePropsContext, useSlidePropsContext }

/**
 * `Slide` is a component that shows or hides an element from the corners of the page.
 *
 * @see https://yamada-ui.com/components/slide
 */
export const Slide = withContext(
  ({
    delay,
    duration = { enter: 0.4, exit: 0.3 },
    open: openProp,
    placement: placementProp,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  }) => {
    const animate = openProp || unmountOnExit ? "enter" : "exit"
    const open = unmountOnExit ? openProp && unmountOnExit : true
    const placement = useValue(placementProp)

    const custom = useMemo(
      () => ({
        delay,
        duration,
        placement,
        transition,
        transitionEnd,
      }),
      [delay, duration, placement, transition, transitionEnd],
    )

    return (
      <AnimatePresence custom={custom}>
        {open ? (
          <motion.div
            animate={animate}
            custom={custom}
            exit="exit"
            initial="exit"
            variants={slideVariants}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
  { transferProps: ["placement"] },
)()
