import type { HTMLUIProps, ThemeProps } from "../../core"
import type { FormatByteStyle } from "./format-byte.style"
import { createComponent, ui } from "../../core"
import { formatByteStyle } from "./format-byte.style"
import { useFormatByte } from "./use-format-byte"

export interface FormatByteProps
  extends HTMLUIProps,
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

export const {
  PropsContext: FormatBytePropsContext,
  usePropsContext: useFormatBytePropsContext,
  withContext,
} = createComponent<FormatByteProps, FormatByteStyle>(
  "format-byte",
  formatByteStyle,
)

/**
 * `FormatByte` is used to format bytes to a human-readable format.
 *
 * @see Docs https://yamada-ui.com/components/other/format-byte
 */
export const FormatByte = withContext(
  ({ locale, unit, unitDisplay, value, ...rest }) => {
    const text = useFormatByte(value, { locale, unit, unitDisplay })

    return <ui.span {...rest}>{text}</ui.span>
  },
)()
