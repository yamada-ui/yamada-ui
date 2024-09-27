import type { ThemeProps, Token } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type {
  WithTransitionProps,
  MotionTransitionVariants,
  MotionProps,
  MotionVariants,
} from "@yamada-ui/motion"
import {
  AnimatePresence,
  transitionEnter,
  transitionExit,
  motion,
  motionForwardRef,
} from "@yamada-ui/motion"
import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"

const variants: MotionVariants = {
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
} satisfies MotionTransitionVariants

export const slideFadeProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

interface SlideFadeOptions {
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

export interface SlideFadeProps
  extends WithTransitionProps<MotionProps>,
    SlideFadeOptions,
    ThemeProps<"SlideFade"> {}

/**
 * `SlideFade` is a component that gradually shows or hides an element while moving it from a specified position.
 *
 * @see Docs https://yamada-ui.com/components/transitions/slide-fade
 */
export const SlideFade = motionForwardRef<SlideFadeProps, "div">(
  (props, ref) => {
    const [style, mergedProps] = useComponentStyle("SlideFade", props)
    let {
      unmountOnExit,
      isOpen,
      offsetX: _offsetX,
      offsetY: _offsetY,
      reverse,
      transition,
      transitionEnd,
      delay,
      duration,
      className,
      ...rest
    } = omitThemeProps(mergedProps)

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

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <motion.div
            ref={ref}
            className={cx("ui-slide-fade", className)}
            custom={custom}
            {...slideFadeProps}
            animate={animate}
            __css={style}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)

SlideFade.displayName = "SlideFade"
SlideFade.__ui__ = "SlideFade"
