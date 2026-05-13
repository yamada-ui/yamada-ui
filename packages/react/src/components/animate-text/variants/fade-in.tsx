"use client"

import type { AnimateTextProps } from "../animate-text"
import { forwardRef } from "react"
import { styled } from "../../../core"
import { VisuallyHidden } from "../../visually-hidden"
import { useAnimateText } from "../use-animate-text"

const fadeInKeyframes = {
  from: { opacity: 0 },
  to: { opacity: 1 },
}

/**
 * `AnimateText.FadeIn` reveals each character of the text by fading in with a stagger delay.
 *
 * @see https://yamada-ui.com/docs/components/animate-text
 */
export const FadeIn = forwardRef<HTMLSpanElement, AnimateTextProps>(
  (props, ref) => {
    const {
      children,
      delayStep = 0.05,
      duration = 0.5,
      loop,
      repeatDelay,
      splitBy = "char",
      onAnimationComplete,
      ...rest
    } = props
    const { items, iteration } = useAnimateText({
      children,
      delayStep,
      duration,
      loop,
      repeatDelay,
      splitBy,
      onAnimationComplete,
    })
    return (
      <styled.span key={iteration} ref={ref} {...rest}>
        <VisuallyHidden>{children}</VisuallyHidden>
        {items.map((c, i) => (
          <styled.span
            key={i}
            aria-hidden
            animationDelay={`${i * delayStep}s`}
            animationDuration={`${duration}s`}
            animationFillMode="both"
            animationTimingFunction="ease-out"
            display="inline-block"
            whiteSpace="pre"
            _keyframes={fadeInKeyframes}
          >
            {c}
          </styled.span>
        ))}
      </styled.span>
    )
  },
)

FadeIn.displayName = "FadeIn"
