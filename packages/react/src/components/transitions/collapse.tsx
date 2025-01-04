import type { Variants } from "motion/react"
import type { CSSUIObject, FC, ThemeProps } from "../../core"
import type {
  MotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import { AnimatePresence } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import { omitThemeProps, useComponentStyle } from "../../core"
import { createdDom, cx } from "../../utils"
import {
  motion,
  MOTION_TRANSITION_EASINGS,
  transitionEnter,
  transitionExit,
} from "../motion"

const isNumeric = (value?: number | string) =>
  value != null && parseFloat(value.toString()) > 0

const variants: Variants = {
  enter: ({
    animationOpacity,
    delay,
    duration,
    endingHeight: height,
    enter,
    transition,
    transitionEnd,
  } = {}) => ({
    ...(animationOpacity ? { opacity: 1 } : {}),
    height,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    animationOpacity,
    delay,
    duration,
    exit,
    startingHeight: height,
    transition,
    transitionEnd,
  } = {}) => ({
    ...(animationOpacity ? { opacity: isNumeric(height) ? 1 : 0 } : {}),
    height,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export const collapseProps = {
  animate: "enter",
  exit: "exit",
  initial: "exit",
  variants,
}

interface CollapseOptions {
  /**
   * If `true`, the opacity of the content will be animated.
   *
   * @default true
   */
  animationOpacity?: boolean
  /**
   * The height you want the content in its expanded state.
   *
   * @default "auto"
   */
  endingHeight?: number | string
  /**
   * The height you want the content in its collapsed state.
   *
   * @default 0
   */
  startingHeight?: number | string
}

export interface CollapseProps
  extends WithTransitionProps<MotionProps>,
    CollapseOptions,
    ThemeProps<"Collapse"> {}

/**
 * `Collapse` is a component that allows you to expand or collapse an element for display.
 *
 * @see Docs https://yamada-ui.com/components/transitions/collapse
 */
export const Collapse: FC<CollapseProps> = (props) => {
  const [style, mergedProps] = useComponentStyle("Collapse", props)
  const {
    className,
    animationOpacity,
    delay,
    duration,
    endingHeight,
    open,
    startingHeight,
    transition: transitionProp,
    transitionEnd,
    unmountOnExit,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)
  const [mounted, setMounted] = useState(false)
  const animate = open || unmountOnExit ? "enter" : "exit"
  const resolvedOpen = unmountOnExit ? open : true
  const transition = useMemo(() => {
    if (!mounted) {
      return { enter: { duration: 0 } }
    } else if (transitionProp) {
      return transitionProp
    } else {
      return {
        enter: {
          height: {
            duration: duration ?? 0.3,
            ease: MOTION_TRANSITION_EASINGS.ease,
          },
          opacity: {
            duration: duration ?? 0.4,
            ease: MOTION_TRANSITION_EASINGS.ease,
          },
        },
        exit: {
          height: {
            duration: duration ?? 0.3,
            ease: MOTION_TRANSITION_EASINGS.ease,
          },
          opacity: {
            duration: duration ?? 0.4,
            ease: MOTION_TRANSITION_EASINGS.ease,
          },
        },
      }
    }
  }, [mounted, duration, transitionProp])
  const custom = {
    animationOpacity,
    delay,
    duration,
    endingHeight,
    startingHeight,
    transition,
    transitionEnd,
  }
  const css: CSSUIObject = {
    ...style,
    ...__css,
  }

  useEffect(() => {
    if (createdDom()) setMounted(true)
  }, [])

  return (
    <AnimatePresence custom={custom} initial={false}>
      {resolvedOpen ? (
        <motion.div
          className={cx("ui-collapse", className)}
          {...rest}
          {...collapseProps}
          style={{ overflow: "hidden", ...rest.style }}
          animate={animate}
          custom={custom}
          initial={unmountOnExit ? "exit" : false}
          __css={css}
        />
      ) : null}
    </AnimatePresence>
  )
}

Collapse.__ui__ = "Collapse"
