import type { CSSUIObject, ThemeProps, Token } from "@yamada-ui/core"
import { omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type {
  WithTransitionProps,
  MotionTransitionVariants,
  MotionProps,
  MotionVariants,
} from "@yamada-ui/motion"
import {
  AnimatePresence,
  transitionEnter,
  transitionExit,
  MOTION_TRANSITION_VARIANTS,
  motion,
  motionForwardRef,
} from "@yamada-ui/motion"
import { useValue } from "@yamada-ui/use-value"
import { cx } from "@yamada-ui/utils"

export const getSlideProps = (
  placement: "top" | "left" | "bottom" | "right" = "right",
) => {
  switch (placement) {
    case "right":
      return MOTION_TRANSITION_VARIANTS.slideRight
    case "left":
      return MOTION_TRANSITION_VARIANTS.slideLeft
    case "bottom":
      return MOTION_TRANSITION_VARIANTS.slideDown
    case "top":
      return MOTION_TRANSITION_VARIANTS.slideUp
  }
}

const variants: MotionVariants = {
  enter: ({
    placement,
    transition,
    transitionEnd,
    delay,
    duration,
    enter,
  } = {}) => ({
    ...getSlideProps(placement).enter,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    placement,
    transition,
    transitionEnd,
    delay,
    duration,
    exit,
  } = {}) => ({
    ...getSlideProps(placement).exit,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export const slideProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

interface SlideOptions {
  /**
   * The placement of the slide.
   *
   * @default 'right'
   */
  placement?: Token<"top" | "left" | "bottom" | "right">
}

export interface SlideProps
  extends WithTransitionProps<MotionProps>,
    SlideOptions,
    ThemeProps<"Slide"> {}

/**
 * `Slide` is a component that shows or hides an element from the corners of the page.
 *
 * @see Docs https://yamada-ui.com/components/transitions/slide
 */
export const Slide = motionForwardRef<SlideProps, "div">((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Slide", props)
  let {
    unmountOnExit,
    isOpen,
    placement: _placement,
    transition,
    transitionEnd,
    delay,
    duration = { enter: 0.4, exit: 0.3 },
    className,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)

  const animate = isOpen || unmountOnExit ? "enter" : "exit"

  const placement = useValue(_placement)

  const custom = { placement, transition, transitionEnd, delay, duration }

  isOpen = unmountOnExit ? isOpen && unmountOnExit : true

  const { position } = getSlideProps(placement)

  const css: CSSUIObject = {
    ...style,
    ...__css,
    ...position,
  }

  return (
    <AnimatePresence custom={custom}>
      {isOpen ? (
        <motion.div
          ref={ref}
          className={cx("ui-slide", className)}
          custom={custom}
          {...slideProps}
          animate={animate}
          __css={css}
          {...rest}
        />
      ) : null}
    </AnimatePresence>
  )
})

Slide.displayName = "Slide"
Slide.__ui__ = "Slide"
