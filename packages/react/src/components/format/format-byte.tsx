"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { FormatByteStyle } from "./format-byte.style"
import type { FormatBytesOptions } from "./use-format-byte"
import { createComponent, styled } from "../../core"
import { formatByteStyle } from "./format-byte.style"
import { useFormatByte } from "./use-format-byte"

export interface FormatByteProps
  extends HTMLStyledProps<"span">,
    ThemeProps<FormatByteStyle>,
    FormatBytesOptions {
  /**
   * The byte size to format
   */
  value: number
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
 * `Format` is used to format dates, numbers, and bytes according to a specific locale.
 *
 * @see https://yamada-ui.com/docs/components/format
 */
export const FormatByte = withContext(
  ({ locale, unit, unitDisplay, value, ...rest }) => {
    const text = useFormatByte(value, { locale, unit, unitDisplay })

    return <styled.span {...rest}>{text}</styled.span>
  },
)()
