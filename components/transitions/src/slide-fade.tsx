import {
  ui,
  HTMLUIProps,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionVariants,
  forwardRef,
  CSSUIObject,
  Token,
  useValue,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'

type SlideFadeOptions = {
  offsetX?: Token<string | number>
  offsetY?: Token<string | number>
  reverse?: boolean
}

export type SlideFadeProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  SlideFadeOptions

const variants: MotionVariants = {
  initial: ({ offsetX, offsetY, transition, transitionEnd, delay, duration, initial }) => ({
    opacity: 0,
    x: offsetX,
    y: offsetY,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...initial,
  }),
  enter: ({ transition, transitionEnd, delay, duration, enter } = {}) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({ offsetX, offsetY, reverse, transition, transitionEnd, delay, duration, exit } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    ...(reverse
      ? { x: offsetX, y: offsetY, transitionEnd: transitionEnd?.exit }
      : { transitionEnd: { x: offsetX, y: offsetY, ...transitionEnd?.exit } }),
    ...exit,
  }),
}

export const slideFadeProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

const MotionDiv = ui(motion.div)

export const SlideFade = forwardRef<SlideFadeProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
      offsetX: _offsetX = 0,
      offsetY: _offsetY = 8,
      reverse = true,
      transition,
      transitionEnd,
      delay,
      duration,
      className,
      ...rest
    },
    ref,
  ) => {
    const animate = isOpen || unmountOnExit ? 'enter' : 'exit'

    const offsetX = useValue(_offsetX)
    const offsetY = useValue(_offsetY)

    const custom = { offsetX, offsetY, reverse, transition, transitionEnd, delay, duration }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    const css: CSSUIObject = {
      w: '100%',
    }

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <MotionDiv
            ref={ref}
            className={cx('ui-slide-fade', className)}
            custom={custom}
            {...slideFadeProps}
            animate={animate}
            __css={css}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
