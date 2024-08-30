import type { CSSUIObject, ThemeProps } from "@yamada-ui/core"
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
  MOTION_TRANSITION_EASINGS,
  motion,
  motionForwardRef,
} from "@yamada-ui/motion"
import { createdDom, cx } from "@yamada-ui/utils"
import { useEffect, useMemo, useState } from "react"

const isNumeric = (value?: string | number) =>
  value != null && parseFloat(value.toString()) > 0

type CollapseOptions = {
  /**
   * If `true`, the opacity of the content will be animated.
   *
   * @default true
   */
  animationOpacity?: boolean
  /**
   * The height you want the content in its collapsed state.
   *
   * @default 0
   */
  startingHeight?: number | string
  /**
   * The height you want the content in its expanded state.
   *
   * @default "auto"
   */
  endingHeight?: number | string
}

export type CollapseProps = WithTransitionProps<MotionProps> &
  CollapseOptions &
  ThemeProps<"Collapse">

const variants: MotionTransitionVariants = {
  enter: ({
    animationOpacity,
    endingHeight: height,
    transition,
    transitionEnd,
    delay,
    duration,
    enter,
  } = {}) => ({
    ...(animationOpacity ? { opacity: 1 } : {}),
    height,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    animationOpacity,
    startingHeight: height,
    transition,
    transitionEnd,
    delay,
    duration,
    exit,
  } = {}) => ({
    ...(animationOpacity ? { opacity: isNumeric(height) ? 1 : 0 } : {}),
    height,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
}

export const collapseProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

/**
 * `Collapse` is a component that allows you to expand or collapse an element for display.
 *
 * @see Docs https://yamada-ui.com/components/transitions/collapse
 */
export const Collapse = motionForwardRef<CollapseProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Collapse", props)
  let {
    unmountOnExit,
    isOpen,
    animationOpacity,
    startingHeight,
    endingHeight,
    transition: transitionProp,
    transitionEnd,
    delay,
    duration,
    className,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const isBrowser = createdDom()

    if (isBrowser) setMounted(true)
  }, [])

  const animate = isOpen || unmountOnExit ? "enter" : "exit"

  isOpen = unmountOnExit ? isOpen : true

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
    startingHeight,
    endingHeight,
    transition,
    transitionEnd,
    delay,
    duration,
  }

  const css: CSSUIObject = {
    ...style,
    ...__css,
  }

  return (
    <AnimatePresence initial={false} custom={custom}>
      {isOpen ? (
        <motion.div
          ref={ref}
          className={cx("ui-collapse", className)}
          {...rest}
          {...collapseProps}
          custom={custom}
          animate={animate}
          initial={unmountOnExit ? "exit" : false}
          __css={css}
          style={{ overflow: "hidden", ...rest.style }}
        />
      ) : null}
    </AnimatePresence>
  )
})
