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
    scale: 1,
    transition: transitionEnter(transition?.enter)(delay, duration),
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
    transition: transitionExit(transition?.exit)(delay, duration),
    ...(reverse
      ? { scale, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { scale, ...transitionEnd?.exit } }),
    ...exit,
  }),
} satisfies MotionTransitionVariants

export const scaleFadeProps = {
  animate: "enter",
  exit: "exit",
  initial: "exit",
  variants,
}

interface ScaleFadeOptions {
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

export interface ScaleFadeProps
  extends WithTransitionProps<Omit<MotionProps, "scale">>,
    ScaleFadeOptions,
    ThemeProps<"ScaleFade"> {}

/**
 * `ScaleFade` is a component that gradually scales up to reveal or scales down to hide an element.
 *
 * @see Docs https://yamada-ui.com/components/transitions/scale-fade
 */
export const ScaleFade = motionForwardRef<ScaleFadeProps, "div">(
  (props, ref) => {
    const [style, mergedProps] = useComponentStyle("ScaleFade", props)
    const {
      className,
      delay,
      duration,
      isOpen,
      open = isOpen,
      reverse,
      scale,
      transition,
      transitionEnd,
      unmountOnExit,
      ...rest
    } = omitThemeProps(mergedProps)
    const animate = open || unmountOnExit ? "enter" : "exit"
    const custom = {
      delay,
      duration,
      reverse,
      scale,
      transition,
      transitionEnd,
    }
    const resolvedOpen = unmountOnExit ? open && unmountOnExit : true

    return (
      <AnimatePresence custom={custom}>
        {resolvedOpen ? (
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

ScaleFade.displayName = "ScaleFade"
ScaleFade.__ui__ = "ScaleFade"
