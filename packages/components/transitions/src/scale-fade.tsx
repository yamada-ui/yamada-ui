import { ui, HTMLUIProps, forwardRef, CSSUIObject } from "@yamada-ui/core"
import {
  motion,
  HTMLMotionProps,
  AnimatePresence,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionTransitionVariants,
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
  Omit<HTMLUIProps<"div">, "scale"> & HTMLMotionProps<"div">
> &
  ScaleFadeOptions

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

export const ScaleFade = forwardRef<ScaleFadeProps, "div">(
  (
    {
      unmountOnExit,
      isOpen,
      scale = 0.95,
      reverse = true,
      transition,
      transitionEnd,
      delay,
      duration,
      className,
      ...rest
    },
    ref,
  ) => {
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

    const css: CSSUIObject = {
      w: "100%",
    }

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <ui.div
            as={motion.div}
            ref={ref}
            className={cx("ui-scale-fade", className)}
            custom={custom}
            {...scaleFadeProps}
            animate={animate}
            __css={css}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
