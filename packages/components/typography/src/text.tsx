import {
  ui,
  forwardRef,
  HTMLUIProps,
  omitThemeProps,
  ThemeProps,
  useComponentStyle,
  CSSUIProps,
} from "@yamada-ui/core"
import { cx, filterUndefined } from "@yamada-ui/utils"

type TextOptions = {
  /**
   * The CSS `text-align` property.
   */
  align?: CSSUIProps["textAlign"]
  /**
   * The CSS `text-decoration` property.
   */
  decoration?: CSSUIProps["textDecoration"]
  /**
   * The CSS `text-transform` property.
   */
  casing?: CSSUIProps["textTransform"]
}

export type TextProps = HTMLUIProps<"p"> & ThemeProps<"Text"> & TextOptions

export const Text = forwardRef<TextProps, "p">((props, ref) => {
  const [css, mergedProps] = useComponentStyle("Text", props)
  const {
    className,
    align: textAlign,
    decoration: textDecoration,
    casing: textTransform,
    ...rest
  } = omitThemeProps(mergedProps)

  const textProps = filterUndefined({
    textAlign,
    textDecoration,
    textTransform,
  })

  return (
    <ui.p
      ref={ref}
      className={cx("ui-text", className)}
      __css={css}
      {...textProps}
      {...rest}
    />
  )
})
