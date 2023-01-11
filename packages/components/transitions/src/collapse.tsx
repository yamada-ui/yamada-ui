import { ui, HTMLUIProps, forwardRef, CSSUIObject } from '@yamada-ui/core'
import {
  motion,
  HTMLMotionProps,
  AnimatePresence,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionTransitionVariants,
  MOTION_TRANSITION_EASINGS,
} from '@yamada-ui/motion'
import { createdDom, cx } from '@yamada-ui/utils'
import { useEffect, useState } from 'react'

const isNumeric = (value?: string | number) => value != null && parseFloat(value.toString()) > 0

type CollapseOptions = {
  animationOpacity?: boolean
  startingHeight?: number | string
  endingHeight?: number | string
}

export type CollapseProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  CollapseOptions

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
      style,
      __css,
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
      ? transitionEnd
      : {
          ...transitionEnd,
          exit: {
            ...transitionEnd?.exit,
            display: hasStartingHeight ? 'block' : 'none',
          },
        }

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
      w: '100%',
      ...__css,
    }

    return (
      <AnimatePresence initial={false} custom={custom}>
        {isOpen ? (
          <ui.div
            as={motion.div}
            ref={ref}
            className={cx('ui-collapse', className)}
            {...rest}
            {...collapseProps}
            custom={custom}
            animate={animate}
            initial={unmountOnExit ? 'exit' : false}
            __css={css}
            style={{
              overflow: 'hidden',
              display: 'block',
              ...style,
            }}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
