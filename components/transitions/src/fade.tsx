import {
  ui,
  HTMLUIProps,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionVariants,
  forwardRef,
  CSSUIObject,
} from '@yamada-ui/system'
import { cx } from '@yamada-ui/utils'
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion'

export type FadeProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>>

const variants: MotionVariants = {
  enter: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 1,
    transition: transitionEnter(transition?.enter)(delay),
    transitionEnd: transitionEnd?.enter,
  }),
  exit: ({ transition, transitionEnd, delay } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay),
    transitionEnd: transitionEnd?.exit,
  }),
}

export const fadeProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

const MotionDiv = ui(motion.div)

export const Fade = forwardRef<FadeProps, 'div'>(
  ({ unmountOnExit, isOpen, transition, transitionEnd, delay, className, ...rest }, ref) => {
    const animate = isOpen || unmountOnExit ? 'enter' : 'exit'

    const custom = { transition, transitionEnd, delay }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    const css: CSSUIObject = {
      w: '100%',
    }

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <MotionDiv
            ref={ref}
            className={cx('ui-fade', className)}
            custom={custom}
            {...fadeProps}
            animate={animate}
            __css={css}
            {...rest}
          />
        ) : null}
      </AnimatePresence>
    )
  },
)
