"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { SeparatorStyle } from "./separator.style"
import { createComponent } from "../../core"
import { separatorStyle } from "./separator.style"

export interface SeparatorProps
  extends HTMLStyledProps<"hr">,
    ThemeProps<SeparatorStyle> {}

const {
  PropsContext: SeparatorPropsContext,
  usePropsContext: useSeparatorPropsContext,
  withContext,
} = createComponent<SeparatorProps, SeparatorStyle>("separator", separatorStyle)

export { SeparatorPropsContext, useSeparatorPropsContext }

/**
 * `Separator` is a component that represents a division between elements.
 *
 * @see https://yamada-ui.com/docs/components/separator
 */
export const Separator = withContext("hr")()
