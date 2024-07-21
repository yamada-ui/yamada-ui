import type { CSSUIObject, ThemeProps, Token } from "@yamada-ui/core"
import { forwardRef, omitThemeProps, useComponentStyle } from "@yamada-ui/core"
import type {
  WithTransitionProps,
  MotionTransitionVariants,
  MotionProps,
} from "@yamada-ui/motion"
import {
  AnimatePresence,
  transitionEnter,
  transitionExit,
  MOTION_TRANSITION_VARIANTS,
  Motion,
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

type SlideOptions = {
  /**
   * The placement of the slide.
   *
   * @default 'right'
   */
  placement?: Token<"top" | "left" | "bottom" | "right">
}

export type SlideProps = WithTransitionProps<MotionProps> &
  SlideOptions &
  ThemeProps<"Slide">

const variants: MotionTransitionVariants = {
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
}

export const slideProps = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants,
}

/**
 * `Slide` is a component that shows or hides an element from the corners of the page.
 *
 * @see Docs https://yamada-ui.com/components/transitions/slide
 */
export const Slide = forwardRef<SlideProps, "div", false>((props, ref) => {
  const [style, mergedProps] = useComponentStyle("Slide", props)
  const {
    unmountOnExit,
    placement: _placement,
    transition,
    transitionEnd,
    delay,
    duration,
    className,
    __css,
    ...rest
  } = omitThemeProps(mergedProps)

  const animate = rest.isOpen || unmountOnExit ? "enter" : "exit"

  const placement = useValue(_placement)

  const custom = { placement, transition, transitionEnd, delay, duration }

  const isOpen = unmountOnExit ? rest.isOpen && unmountOnExit : true

  const { position } = getSlideProps(placement)

  const css: CSSUIObject = {
    ...style,
    ...__css,
    ...position,
  }

  return (
    <AnimatePresence custom={custom}>
      {isOpen ? (
        <Motion
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
