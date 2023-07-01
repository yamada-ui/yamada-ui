import { ui, HTMLUIProps, forwardRef, CSSUIObject, Token } from '@yamada-ui/core'
import {
  motion,
  HTMLMotionProps,
  AnimatePresence,
  transitionEnter,
  transitionExit,
  WithTransitionProps,
  MotionTransitionVariants,
  MOTION_TRANSITION_VARIANTS,
} from '@yamada-ui/motion'
import { useValue } from '@yamada-ui/use-value'
import { cx } from '@yamada-ui/utils'

export const getSlideProps = (placement: 'top' | 'left' | 'bottom' | 'right' = 'right') => {
  switch (placement) {
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
  /**
   * The placement of the slide.
   *
   * @default 'right'
   */
  placement?: Token<'top' | 'left' | 'bottom' | 'right'>
}

export type SlideProps = WithTransitionProps<HTMLUIProps<'div'> & HTMLMotionProps<'div'>> &
  SlideOptions

const variants: MotionTransitionVariants = {
  enter: ({ placement, transition, transitionEnd, delay, duration, enter } = {}) => ({
    ...getSlideProps(placement).enter,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({ placement, transition, transitionEnd, delay, duration, exit } = {}) => ({
    ...getSlideProps(placement).exit,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
}

export const slideProps = {
  initial: 'exit',
  animate: 'enter',
  exit: 'exit',
  variants,
}

export const Slide = forwardRef<SlideProps, 'div'>(
  (
    {
      unmountOnExit,
      isOpen,
      placement: _placement = 'right',
      transition,
      transitionEnd,
      delay,
      duration = { enter: 0.4, exit: 0.3 },
      className,
      __css,
      ...rest
    },
    ref,
  ) => {
    const animate = isOpen || unmountOnExit ? 'enter' : 'exit'

    const placement = useValue(_placement)

    const custom = { placement, transition, transitionEnd, delay, duration }

    isOpen = unmountOnExit ? isOpen && unmountOnExit : true

    const { position } = getSlideProps(placement)

    const css: CSSUIObject = {
      position: 'fixed',
      ...__css,
      ...position,
    }

    return (
      <AnimatePresence custom={custom}>
        {isOpen ? (
          <ui.div
            as={motion.div}
            ref={ref}
            className={cx('ui-slide', className)}
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
