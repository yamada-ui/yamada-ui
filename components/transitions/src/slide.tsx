import {
  ui,
  HTMLUIProps,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionVariants,
  forwardRef,
  MOTION_TRANSITION_EASINGS,
  MOTION_TRANSITION_VARIANTS,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'

const MOTION_TRANSITION_DEFAULTS = {
  exit: {
    duration: 0.15,
    ease: MOTION_TRANSITION_EASINGS.easeInOut,
  },
  enter: {
    type: 'spring',
    damping: 25,
    stiffness: 180,
  },
} as const

export type SlideDirection = 'top' | 'left' | 'bottom' | 'right'

export const getSlideProps = (direction: SlideDirection = 'right') => {
  switch (direction) {
    case 'right':
      return MOTION_TRANSITION_VARIANTS.slideRight
    case 'left':
      return MOTION_TRANSITION_VARIANTS.slideLeft
    case 'bottom':
      return MOTION_TRANSITION_VARIANTS.slideDown
    case 'top':
      return MOTION_TRANSITION_VARIANTS.slideUp
  }
}

type SlideOptions = {
  direction?: SlideDirection
}

export type SlideProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  SlideOptions

const variants: MotionVariants = {
  enter: ({ direction, transition, transitionEnd, delay } = {}) => ({
    ...getSlideProps(direction).enter,
    transition: transitionEnter(transition?.enter ?? MOTION_TRANSITION_DEFAULTS.enter)(delay),
    transitionEnd: transitionEnd?.enter,
  }),
  exit: ({ direction, transition, transitionEnd, delay } = {}) => ({
    ...getSlideProps(direction).exit,
    transition: transitionExit(transition?.exit ?? MOTION_TRANSITION_DEFAULTS.exit)(delay),
    transitionEnd: transitionEnd?.exit,
  }),
}

export const slideProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

const MotionDiv = ui(motion.div)

export const Slide = forwardRef<SlideProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
      direction = 'right',
      transition,
      transitionEnd,
      delay,
      className,
      ...rest
    },
    ref,
  ) => {
    const animate = isOpen || unmountOnExit ? 'enter' : 'exit'

    const custom = { direction, transition, transitionEnd, delay }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    const { position } = getSlideProps(direction)

    const css: CSSUIObject = {
      position: 'fixed',
      ...position,
    }

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <MotionDiv
            ref={ref}
            className={cx('ui-slide-fade', className)}
            custom={custom}
            {...slideProps}
            animate={animate}
            __css={css}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
