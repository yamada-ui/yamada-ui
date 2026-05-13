"use client"

import type { HTMLStyledProps } from "../../core"

export interface AnimateTextProps extends Omit<
  HTMLStyledProps<"span">,
  "children"
> {
  children: string
  /**
   * The stagger delay between each element, in seconds.
   */
  delayStep?: number
  /**
   * The duration of the animation per element, in seconds.
   */
  duration?: number
  /**
   * If `true`, the animation will repeat infinitely.
   *
   * @default false
   */
  loop?: boolean
  /**
   * The delay in milliseconds between each loop iteration.
   *
   * @default 2500
   */
  repeatDelay?: number
  /**
   * The unit by which to split the text.
   *
   * @default "char"
   */
  splitBy?: "char" | "word"
  /**
   * Callback fired when the animation completes.
   */
  onAnimationComplete?: () => void
}

export const splitText = (
  text: string,
  splitBy: "char" | "word" = "char",
): string[] => {
  if (splitBy === "word") return text.split(/(\s+)/).filter(Boolean)
  return Array.from(text)
}
