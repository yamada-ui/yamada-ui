import type { ThemeProps } from "@yamada-ui/core"
import type {
  MotionProps,
  MotionTransitionVariants,
  MotionVariants,
  WithTransitionProps,
} from "@yamada-ui/motion"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import {
  AnimatePresence,
  motion,
  motionForwardRef,
  transitionEnter,
  transitionExit,
} from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"

const variants: MotionVariants = {
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
export const Fade = motionForwardRef<FadeProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Fade", props)
  const {
    className,
    delay,
    duration,
    isOpen,
    open = isOpen,
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
          ref={ref}
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
})

Fade.displayName = "Fade"
Fade.__ui__ = "Fade"
