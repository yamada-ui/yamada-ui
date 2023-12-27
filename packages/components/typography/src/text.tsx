import type { HTMLUIProps, ThemeProps, CSSUIProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useComponentStyle,
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

/**
 * `Text` is a component that represents a paragraph of text. By default, it renders a `p` element.
 *
 * @see Docs https://yamada-ui.com/components/typography/text
 */
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
