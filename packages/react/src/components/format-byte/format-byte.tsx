"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FormatByteStyle } from "./format-byte.style"
import { createComponent, styled } from "../../core"
import { formatByteStyle } from "./format-byte.style"
import { useFormatByte } from "./use-format-byte"

export interface FormatByteProps
  extends HTMLStyledProps,
    ThemeProps<FormatByteStyle> {
  /**
   * The byte size to format
   */
  value: number
  /**
   * The locale string to use for formatting.
   *
   * @default 'en-US'
   */
  locale?: string
  /**
   * The unit granularity to display
   */
  unit?: "bit" | "byte"
  /**
   * The unit display
   */
  unitDisplay?: "long" | "narrow" | "short"
}

const {
  PropsContext: FormatBytePropsContext,
  usePropsContext: useFormatBytePropsContext,
  withContext,
} = createComponent<FormatByteProps, FormatByteStyle>(
  "format-byte",
  formatByteStyle,
)

export { FormatBytePropsContext, useFormatBytePropsContext }

/**
 * `FormatByte` is used to format bytes to a human-readable format.
 *
 * @see https://yamada-ui.com/components/format-byte
 */
export const FormatByte = withContext(
  ({ locale, unit, unitDisplay, value, ...rest }) => {
    const text = useFormatByte(value, { locale, unit, unitDisplay })

    return <styled.span {...rest}>{text}</styled.span>
  },
)()
