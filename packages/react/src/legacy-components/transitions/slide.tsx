import type { Variants } from "motion/react"
import type {
  MotionProps,
  MotionTransitionVariants,
  WithTransitionProps,
} from "../../components/motion"
import type { CSSUIObject, FC, ThemeProps, Token } from "../../core"
import { AnimatePresence } from "motion/react"
import {
  motion,
  MOTION_TRANSITION_VARIANTS,
  transitionEnter,
  transitionExit,
} from "../../components/motion"
import { omitThemeProps, useComponentStyle } from "../../core"
import { useValue } from "../../hooks/use-value"
import { cx } from "../../utils"

export const getSlideProps = (
  placement: "bottom" | "left" | "right" | "top" = "right",
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

const variants: Variants = {
  enter: ({
    delay,
    duration,
    enter,
    placement,
    transition,
    transitionEnd,
  } = {}) => ({
    ...getSlideProps(placement).enter,
    transition: transitionEnter(transition?.enter)(delay, duration),
    transitionEnd: transitionEnd?.enter,
    ...enter,
  }),
  exit: ({
    delay,
    duration,
    exit,
    placement,
    transition,
    transitionEnd,
  } = {}) => ({
    ...getSlideProps(placement).exit,
    transition: transitionExit(transition?.exit)(delay, duration),
    transitionEnd: transitionEnd?.exit,
    ...exit,
  }),
} satisfies MotionTransitionVariants

export const slideProps = {
  animate: "enter",
  exit: "exit",
  initial: "exit",
  variants,
}

interface SlideOptions {
  /**
   * The placement of the slide.
   *
   * @default 'right'
   */
  placement?: Token<"bottom" | "left" | "right" | "top">
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
export const Slide: FC<SlideProps> = (props) => {
  const [style, mergedProps] = useComponentStyle("Slide", props)
  const {
    className,
    delay,
    duration = { enter: 0.4, exit: 0.3 },
    open,
    placement: _placement,
    transition,
    transitionEnd,
    unmountOnExit,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)
  const animate = open || unmountOnExit ? "enter" : "exit"
  const placement = useValue(_placement)
  const custom = { delay, duration, placement, transition, transitionEnd }
  const { position } = getSlideProps(placement)
  const resolvedOpen = unmountOnExit ? open && unmountOnExit : true
  const css: CSSUIObject = {
    ...style,
    ...__css,
    ...position,
  }

  return (
    <AnimatePresence custom={custom}>
      {resolvedOpen ? (
        <motion.div
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
}

Slide.__ui__ = "Slide"
