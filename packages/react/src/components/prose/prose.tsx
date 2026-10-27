"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { ProseStyle } from "./prose.style"
import { createComponent } from "../../core"
import { proseStyle } from "./prose.style"

export interface ProseProps
  extends HTMLStyledProps<"div">, ThemeProps<ProseStyle> {}

const {
  PropsContext: ProsePropsContext,
  usePropsContext: useProsePropsContext,
  withContext,
} = createComponent<ProseProps, ProseStyle>("prose", proseStyle)

export { ProsePropsContext, useProsePropsContext }

/**
 * `Prose` is a component that styles HTML content. By default, it renders a `div` element.
 *
 * @see https://yamada-ui.com/docs/components/prose
 */
export const Prose = withContext("div")()
