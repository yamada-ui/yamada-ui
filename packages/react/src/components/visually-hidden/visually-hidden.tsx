"use client"

import type { HTMLStyledProps } from "../../core"
import type { VisuallyHiddenStyle } from "./visually-hidden.style"
import { createComponent } from "../../core"
import { visuallyHiddenStyle } from "./visually-hidden.style"

export interface VisuallyHiddenProps extends HTMLStyledProps<"span"> {}

const {
  PropsContext: VisuallyHiddenPropsContext,
  usePropsContext: useVisuallyHiddenPropsContext,
  withContext,
} = createComponent<VisuallyHiddenProps, VisuallyHiddenStyle>(
  "visually-hidden",
  visuallyHiddenStyle,
)

export { useVisuallyHiddenPropsContext, VisuallyHiddenPropsContext }

/**
 * `VisuallyHidden` is a common technique used in web accessibility to hide content from the visual client, but keep it readable for screen readers.
 *
 * @see https://yamada-ui.com/components/visually-hidden
 */
export const VisuallyHidden = withContext("span")()
