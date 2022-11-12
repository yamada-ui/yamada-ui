import {
  ui,
  HTMLUIProps,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionVariants,
  forwardRef,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'

type ScaleFadeOptions = {
  scale?: number
  reverse?: boolean
}

export type ScaleFadeProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  ScaleFadeOptions

const variants: MotionVariants = {
  enter: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: transitionEnter(transition?.enter)(delay),
    transitionEnd: transitionEnd?.enter,
  }),
  exit: ({ reverse, scale, transition, transitionEnd, delay } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay),
    ...(reverse
      ? { scale, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { scale, ...transitionEnd?.exit } }),
  }),
}

export const scaleFadeProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

const MotionDiv = ui(motion.div)

export const ScaleFade = forwardRef<ScaleFadeProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
      scale = 0.95,
      reverse = true,
      transition,
      transitionEnd,
      delay,
      className,
      ...rest
    },
    ref,
  ) => {
    const animate = isOpen || unmountOnExit ? 'enter' : 'exit'

    const custom = { scale, reverse, transition, transitionEnd, delay }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <MotionDiv
            ref={ref}
            className={cx('ui-scale-fade', className)}
            custom={custom}
            {...scaleFadeProps}
            animate={animate}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
