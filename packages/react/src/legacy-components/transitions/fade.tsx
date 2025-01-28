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
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({ delay, duration, exit, transition, transitionEnd } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export const fadeProps = {
  animate: "enter",
  exit: "exit",
  initial: "exit",
  variants,
}

export interface FadeProps
  extends WithTransitionProps<MotionProps>,
    ThemeProps<"Fade"> {}

/**
 * `Fade` is a component that gradually shows or hides an element.
 *
 * @see Docs https://yamada-ui.com/components/transitions/fade
 */
export const Fade: FC<FadeProps> = (props) => {
  const [style, mergedProps] = useComponentStyle("Fade", props)
  const {
    className,
    delay,
    duration,
    open,
    transition,
    transitionEnd,
    unmountOnExit,
    ...rest
  } = omitThemeProps(mergedProps)
  const animate = open || unmountOnExit ? "enter" : "exit"
  const custom = { delay, duration, transition, transitionEnd }
  const resolvedOpen = unmountOnExit ? open && unmountOnExit : true

  return (
    <AnimatePresence custom={custom}>
      {resolvedOpen ? (
        <motion.div
          className={cx("ui-fade", className)}
          custom={custom}
          {...fadeProps}
          animate={animate}
          __css={style}
          {...rest}
        />
      ) : null}
    </AnimatePresence>
  )
}

Fade.__ui__ = "Fade"
