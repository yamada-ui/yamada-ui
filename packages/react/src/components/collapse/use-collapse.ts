import type { MotionProps, Variants } from "motion/react"
import type { PropGetter } from "../../core"
import type { MotionTransitionVariants, WithTransitionProps } from "../motion"
import { useCallback, useEffect, useMemo, useState } from "react"
import { createdDom, isNumeric } from "../../utils"
import {
  MOTION_TRANSITION_EASINGS,
  transitionEnter,
  transitionExit,
} from "../motion"

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

export interface UseCollapseProps extends WithTransitionProps<MotionProps> {
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

export const useCollapse = ({
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
}: UseCollapseProps = {}) => {
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

  const getRootProps: PropGetter<MotionProps> = useCallback(
    ({ style, ...props } = {}) => ({
      ...rest,
      ...props,
      style: { overflow: "hidden", ...style },
      animate,
      custom,
      exit: "exit",
      initial: unmountOnExit ? "exit" : false,
      variants,
    }),
    [animate, custom, rest, unmountOnExit],
  )

  useEffect(() => {
    if (createdDom()) setMounted(true)
  }, [])

  return { custom, open, getRootProps }
}

export type UseCollapseReturn = ReturnType<typeof useCollapse>
