"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ScrollAreaStyle } from "./scroll-area.style"
import type { UseScrollAreaProps } from "./use-scroll-area"
import { createComponent, styled } from "../../core"
import { scrollAreaStyle } from "./scroll-area.style"
import { useScrollArea } from "./use-scroll-area"

export interface ScrollAreaProps
  extends HTMLStyledProps,
    ThemeProps<ScrollAreaStyle>,
    UseScrollAreaProps {}

export const {
  PropsContext: ScrollAreaPropsContext,
  usePropsContext: useScrollAreaPropsContext,
  withContext,
} = createComponent<ScrollAreaProps, ScrollAreaStyle>(
  "scroll-area",
  scrollAreaStyle,
)

/**
 * `ScrollArea` is a component that displays a customized scrollbar.
 *
 * @see https://yamada-ui.com/components/scroll-area
 */
export const ScrollArea = withContext(({ children, ...rest }) => {
  const { getRootProps } = useScrollArea(rest)

  return <styled.div {...getRootProps()}>{children}</styled.div>
})()
