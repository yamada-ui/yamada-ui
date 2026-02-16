"use client"

import type { Variants } from "motion/react"
import type { ThemeProps } from "../../core"
import type {
  HTMLMotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../motion"
import type { CollapseStyle } from "./collapse.style"
import { AnimatePresence } from "motion/react"
import { useEffect, useMemo, useState } from "react"
import { createComponent } from "../../core"
import { createdDom, isNumeric } from "../../utils"
import { createTransition, motion } from "../motion"
import { collapseStyle } from "./collapse.style"

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
    transition: createTransition.enter(transition?.enter)(delay, duration),
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
    transition: createTransition.exit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export interface CollapseProps
  extends WithTransitionProps<HTMLMotionProps>, ThemeProps<CollapseStyle> {
  /**
   * If `true`, the opacity of the content will be animated.
   *
   * @default true
   */
  animationOpacity?: boolean
  /**
   * The height you want the content in its expanded state.
   *
   * @default 'auto'
   */
  endingHeight?: number | string
  /**
   * The height you want the content in its collapsed state.
   *
   * @default 0
   */
  startingHeight?: number | string
}

const {
  PropsContext: CollapsePropsContext,
  usePropsContext: useCollapsePropsContext,
  withContext,
} = createComponent<CollapseProps, CollapseStyle>("collapse", collapseStyle)

export { CollapsePropsContext, useCollapsePropsContext }

/**
 * `Collapse` is a component that allows you to expand or collapse an element for display.
 *
 * @see https://yamada-ui.com/docs/components/collapse
 */
export const Collapse = withContext<"div", CollapseProps>(
  ({
    style,
    animationOpacity = true,
    delay,
    duration,
    endingHeight = "auto",
    open: openProp,
    startingHeight = 0,
    transition: transitionProp,
    transitionEnd,
    unmountOnExit,
    ...rest
  }) => {
    const [mounted, setMounted] = useState(false)
    const animate = openProp || unmountOnExit ? "enter" : "exit"
    const open = unmountOnExit ? openProp : true

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
              ease: [0.25, 0.1, 0.25, 1],
            },
            opacity: {
              duration: duration ?? 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
          exit: {
            height: {
              duration: duration ?? 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            },
            opacity: {
              duration: duration ?? 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            },
          },
        }
      }
    }, [mounted, duration, transitionProp])

    const custom = useMemo(
      () => ({
        animationOpacity,
        delay,
        duration,
        endingHeight,
        startingHeight,
        transition,
        transitionEnd,
      }),
      [
        animationOpacity,
        delay,
        duration,
        endingHeight,
        startingHeight,
        transition,
        transitionEnd,
      ],
    )

    useEffect(() => {
      if (createdDom()) setMounted(true)
    }, [])

    return (
      <AnimatePresence custom={custom} initial={false}>
        {open ? (
          <motion.div
            style={{ overflow: "hidden", ...style }}
            animate={animate}
            custom={custom}
            exit="exit"
            initial={unmountOnExit ? "exit" : false}
            variants={variants}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)()
