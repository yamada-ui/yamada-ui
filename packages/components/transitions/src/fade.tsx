import type { ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type {
  WithTransitionProps,
  MotionTransitionVariants,
  MotionProps,
} from "@yamada-ui/motion"
import {
  AnimatePresence,
  transitionEnter,
  transitionExit,
  motion,
  motionForwardRef,
} from "@yamada-ui/motion"
import { cx } from "@yamada-ui/utils"

export type FadeProps = WithTransitionProps<MotionProps> & ThemeProps<"Fade">

const variants: MotionTransitionVariants = {
  enter: ({ transition, transitionEnd, delay, duration, enter } = {}) => ({
    opacity: 1,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({ transition, transitionEnd, delay, duration, exit } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
}

export const fadeProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

/**
 * `Fade` is a component that gradually shows or hides an element.
 *
 * @see Docs https://yamada-ui.com/components/transitions/fade
 */
export const Fade = motionForwardRef<FadeProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Fade", props)
  let {
    unmountOnExit,
    isOpen,
    transition,
    transitionEnd,
    delay,
    duration,
    className,
    ...rest
  } = omitThemeProps(mergedProps)

  const animate = isOpen || unmountOnExit ? "enter" : "exit"

  const custom = { transition, transitionEnd, delay, duration }

  isOpen = unmountOnExit ? isOpen && unmountOnExit : true

  return (
    <AnimatePresence custom={custom}>
      {isOpen ? (
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
