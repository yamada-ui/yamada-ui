import { ui, HTMLUIProps, forwardRef, CSSUIObject } from '@yamada-ui/core'
import {
  motion,
  HTMLMotionProps,
  AnimatePresence,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionTransitionVariants,
} from '@yamada-ui/motion'
import { cx } from '@yamada-ui/utils'

export type FadeProps = WithTransitionProps<
  HTMLUIProps<'div'> & HTMLMotionProps<'div'>
>

const variants: MotionTransitionVariants = {
  enter: ({ transition, transitionEnd, delay, duration, enter } = {}) => ({
    opacity: 1,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({ transition, transitionEnd, delay, duration, exit } = {}) => ({
    opacity: 0,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
}

export const fadeProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

export const Fade = forwardRef<FadeProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
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

    const custom = { transition, transitionEnd, delay, duration }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    const css: CSSUIObject = {
      w: '100%',
    }

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <ui.div
            as={motion.div}
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
