"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { MarkStyle } from "./mark.style"
import { createComponent } from "../../core"
import { markStyle } from "./mark.style"

export interface MarkProps
  extends HTMLStyledProps<"mark">,
    ThemeProps<MarkStyle> {}

const {
  PropsContext: MarkPropsContext,
  usePropsContext: useMarkPropsContext,
  withContext,
} = createComponent<MarkProps, MarkStyle>("mark", markStyle)

export { MarkPropsContext, useMarkPropsContext }

/**
 * `Mark` is a component that emphasizes a specific part of the text.
 *
 * @see https://yamada-ui.com/components/mark
 */
export const Mark = withContext<"mark", MarkProps>("mark")()
