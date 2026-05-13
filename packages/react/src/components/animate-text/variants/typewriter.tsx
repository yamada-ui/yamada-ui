"use client"

import type { AnimateTextProps } from "../animate-text"
import { forwardRef, useEffect, useRef, useState } from "react"
import { styled } from "../../../core"
import { VisuallyHidden } from "../../visually-hidden"
import { splitText } from "../animate-text"

/**
 * `AnimateText.Typewriter` reveals the text one character at a time, like a typewriter.
 *
 * @see https://yamada-ui.com/docs/components/animate-text
 */
export const Typewriter = forwardRef<HTMLSpanElement, AnimateTextProps>(
  (props, ref) => {
    const {
      children,
      duration = 0.08,
      loop = false,
      repeatDelay = 2500,
      splitBy = "char",
      onAnimationComplete,
      ...rest
    } = props
    const items = splitText(children, splitBy)
    const [visible, setVisible] = useState(0)
    const onCompleteRef = useRef(onAnimationComplete)
    onCompleteRef.current = onAnimationComplete

    useEffect(() => {
      if (items.length === 0) return
      const charDelay = duration * 1000
      let cancelled = false
      let index = 0
      let timer: number | undefined

      const advance = () => {
        if (cancelled) return
        index++
        setVisible(index)
        if (index < items.length) {
          timer = window.setTimeout(advance, charDelay)
        } else {
          onCompleteRef.current?.()
          if (loop) {
            timer = window.setTimeout(() => {
              if (cancelled) return
              index = 0
              setVisible(0)
              timer = window.setTimeout(advance, charDelay)
            }, repeatDelay)
          }
        }
      }

      setVisible(0)
      timer = window.setTimeout(advance, charDelay)

      return () => {
        cancelled = true
        if (timer !== undefined) window.clearTimeout(timer)
      }
    }, [children, duration, loop, repeatDelay, splitBy, items.length])

    return (
      <styled.span ref={ref} {...rest}>
        <VisuallyHidden>{children}</VisuallyHidden>
        {items.slice(0, visible).map((c, i) => (
          <styled.span
            key={i}
            aria-hidden
            display="inline-block"
            whiteSpace="pre"
          >
            {c}
          </styled.span>
        ))}
      </styled.span>
    )
  },
)

Typewriter.displayName = "Typewriter"
