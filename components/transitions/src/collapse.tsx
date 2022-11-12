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

const MOTION_TRANSITION_DEFAULTS = {
  enter: {
    height: { duration: 0.3, ease: MOTION_TRANSITION_EASINGS.ease },
    opacity: { duration: 0.4, ease: MOTION_TRANSITION_EASINGS.ease },
  },
  exit: {
    height: { duration: 0.2, ease: MOTION_TRANSITION_EASINGS.ease },
    opacity: { duration: 0.3, ease: MOTION_TRANSITION_EASINGS.ease },
  },
} as const

type CollapseOptions = {
  animateOpacity?: boolean
  startingHeight?: number | string
  endingHeight?: number | string
}

export type CollapseProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  CollapseOptions

const variants: MotionVariants = {
  enter: ({ animateOpacity, endingHeight: height, transition, transitionEnd, delay } = {}) => ({
    ...(animateOpacity ? { opacity: 1 } : {}),
    height,
    transition: transitionEnter(transition?.enter ?? MOTION_TRANSITION_DEFAULTS.enter)(delay),
    transitionEnd: transitionEnd?.enter,
  }),
  exit: ({ animateOpacity, startingHeight: height, transition, transitionEnd, delay } = {}) => ({
    ...(animateOpacity ? { opacity: isNumeric(height) ? 1 : 0 } : {}),
    height,
    transition: transitionExit(transition?.exit ?? MOTION_TRANSITION_DEFAULTS.exit)(delay),
    transitionEnd: transitionEnd?.exit,
  }),
}

export const collapseProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

const MotionDiv = ui(motion.div)

export const Collapse = forwardRef<CollapseProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
      animateOpacity = true,
      startingHeight = 0,
      endingHeight = 'auto',
      transition,
      transitionEnd,
      delay,
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
    transition = !mounted ? { enter: { duration: 0 } } : transition
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
      animateOpacity,
      startingHeight,
      endingHeight,
      transition,
      transitionEnd,
      delay,
    }

    const css: CSSUIObject = {
      display: 'block',
      w: '100%',
      overflow: 'hidden',
    }

    return (
      <AnimatePresence initial={false} custom={custom}>
        {isOpen ? (
          <MotionDiv
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
