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

type ScaleFadeOptions = {
  /**
   * The initial scale of the element.
   *
   * @default 0.95
   */
  scale?: number
  /**
   * If `true`, the element will transition back to exit state.
   *
   * @default true
   */
  reverse?: boolean
}

export type ScaleFadeProps = WithTransitionProps<
  Omit<MotionProps<"div">, "scale">
> &
  ScaleFadeOptions &
  ThemeProps<"ScaleFade">

const variants: MotionTransitionVariants = {
  enter: ({ transition, transitionEnd, delay, duration, enter } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    scale,
    reverse,
    transition,
    transitionEnd,
    delay,
    duration,
    exit,
  } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    ...(reverse
      ? { scale, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { scale, ...transitionEnd?.exit } }),
    ...exit,
  }),
}

export const scaleFadeProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

/**
 * `ScaleFade` is a component that gradually scales up to reveal or scales down to hide an element.
 *
 * @see Docs https://yamada-ui.com/components/transitions/scale-fade
 */

export const ScaleFade = motionForwardRef<ScaleFadeProps, "div">(
  (props, ref) => {
    const [style, mergedProps] = useComponentStyle("ScaleFade", props)
    let {
      unmountOnExit,
      isOpen,
      scale,
      reverse,
      transition,
      transitionEnd,
      delay,
      duration,
      className,
      ...rest
    } = omitThemeProps(mergedProps)
    const animate = isOpen || unmountOnExit ? "enter" : "exit"

    const custom = {
      scale,
      reverse,
      transition,
      transitionEnd,
      delay,
      duration,
    }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <motion.div
            ref={ref}
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
  },
)
