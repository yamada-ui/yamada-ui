import type { CSSUIObject, HTMLUIProps, ThemeProps } from "../../core"
import { forwardRef, omitThemeProps, ui, useComponentStyle } from "../../core"
import { cx } from "../../utils"
import { useFormatByte } from "./use-format-byte"

interface FormatByteOptions {
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

export interface FormatByteProps
  extends HTMLUIProps,
    ThemeProps<"FormatByte">,
    FormatByteOptions {}

/**
 * `FormatByte` is used to format bytes to a human-readable format.
 *
 * @see Docs https://yamada-ui.com/components/other/format-byte
 */
export const FormatByte = forwardRef<FormatByteProps, "span">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("FormatByte", props)
  const { className, locale, unit, unitDisplay, value, ...rest } =
    omitThemeProps(mergedProps)

  const text = useFormatByte(value, { locale, unit, unitDisplay })

  const css: CSSUIObject = { ...styles }

  return (
    <ui.span
      ref={ref}
      className={cx("ui-format-byte", className)}
      __css={css}
      {...rest}
    >
      {text}
    </ui.span>
  )
})

FormatByte.displayName = "FormatByte"
FormatByte.__ui__ = "FormatByte"
