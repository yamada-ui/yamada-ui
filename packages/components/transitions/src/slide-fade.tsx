import type { HTMLUIProps, CSSUIObject, Token } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type {
  HTMLMotionProps,
  WithTransitionProps,
  MotionTransitionVariants,
} from "@yamada-ui/motion"
import {
  motion,
  AnimatePresence,
  transitionEnter,
  transitionExit,
} from "@yamada-ui/motion"
import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"

type SlideFadeOptions = {
  /**
   * The offset on the horizontal or `x` axis.
   *
   * @default 0
   */
  offsetX?: Token<string | number>
  /**
   * The offset on the vertical or `y` axis.
   *
   * @default 8
   */
  offsetY?: Token<string | number>
  /**
   * If `true`, the element will be transitioned back to the offset when it leaves. Otherwise, it'll only fade out.
   *
   * @default true
   */
  reverse?: boolean
}

export type SlideFadeProps = WithTransitionProps<
  HTMLUIProps<"div"> & HTMLMotionProps<"div">
> &
  SlideFadeOptions

const variants: MotionTransitionVariants = {
  initial: ({
    offsetX,
    offsetY,
    transition,
    transitionEnd,
    delay,
    duration,
    initial,
  }) => ({
    opacity: 0,
    x: offsetX,
    y: offsetY,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...initial,
  }),
  enter: ({ transition, transitionEnd, delay, duration, enter } = {}) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    offsetX,
    offsetY,
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
      ? { x: offsetX, y: offsetY, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { x: offsetX, y: offsetY, ...transitionEnd?.exit } }),
    ...exit,
  }),
}

export const slideFadeProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

export const SlideFade = forwardRef<SlideFadeProps, "div">(
  (
    {
      unmountOnExit,
      isOpen,
      offsetX: _offsetX = 0,
      offsetY: _offsetY = 8,
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

    const offsetX = useValue(_offsetX)
    const offsetY = useValue(_offsetY)

    const custom = {
      offsetX,
      offsetY,
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
            className={cx("ui-slide-fade", className)}
            custom={custom}
            {...slideFadeProps}
            animate={animate}
            __css={css}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
