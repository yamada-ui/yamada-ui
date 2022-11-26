import {
  ui,
  HTMLUIProps,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionVariants,
  forwardRef,
  MOTION_TRANSITION_EASINGS,
  CSSUIObject,
} from '@yamada-ui/system'
import { createdDom, cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const isNumeric = (value?: string | number) => value != null && parseFloat(value.toString()) > 0

type CollapseOptions = {
  animationOpacity?: boolean
  startingHeight?: number | string
  endingHeight?: number | string
}

export type CollapseProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  CollapseOptions

const variants: MotionVariants = {
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
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

export const Collapse = forwardRef<CollapseProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
      animationOpacity = true,
      startingHeight = 0,
      endingHeight = 'auto',
      transition,
      transitionEnd,
      delay,
      duration,
      className,
      ...rest
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      const isBrowser = createdDom()

      if (isBrowser) setMounted(true)
    }, [])

    const hasStartingHeight = parseFloat(startingHeight.toString()) > 0
    const animate = isOpen || unmountOnExit ? 'enter' : 'exit'

    isOpen = unmountOnExit ? isOpen : true
    transition = !mounted
      ? { enter: { duration: 0 } }
      : transition ?? {
          enter: {
            height: { duration: duration ?? 0.3, ease: MOTION_TRANSITION_EASINGS.ease },
            opacity: { duration: duration ?? 0.4, ease: MOTION_TRANSITION_EASINGS.ease },
          },
          exit: {
            height: { duration: duration ?? 0.2, ease: MOTION_TRANSITION_EASINGS.ease },
            opacity: { duration: duration ?? 0.3, ease: MOTION_TRANSITION_EASINGS.ease },
          },
        }
    transitionEnd = unmountOnExit
      ? {
          ...transitionEnd,
          exit: {
            ...transitionEnd?.exit,
            display: hasStartingHeight ? 'block' : 'none',
          },
        }
      : transitionEnd

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
      display: 'block',
      w: '100%',
      overflow: 'hidden',
    }

    return (
      <AnimatePresence initial={false} custom={custom}>
        {isOpen ? (
          <ui.div
            as={motion.div}
            ref={ref}
            className={cx('ui-collapse', className)}
            custom={custom}
            {...collapseProps}
            initial={unmountOnExit ? 'exit' : false}
            animate={animate}
            __css={css}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
