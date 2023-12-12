import type {
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  ColorModeToken,
  CSS,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  omitThemeProps,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import { useFormControlProps } from "@yamada-ui/form-control"
import { cx } from "@yamada-ui/utils"

type InputOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The native HTML `size` attribute to be passed to the `input`
   */
  htmlSize?: number
}

export type InputProps = Omit<
  HTMLUIProps<"input">,
  "disabled" | "required" | "readOnly" | "size"
> &
  ThemeProps<"Input"> &
  InputOptions &
  FormControlOptions

export const Input = forwardRef<InputProps, "input">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("Input", props)
  let { className, htmlSize, ...rest } = omitThemeProps(mergedProps)

  rest = useFormControlProps(rest)

  const css: CSSUIObject = { ...styles.field }

  return (
    <ui.input
      ref={ref}
      className={cx("ui-input", className)}
      size={htmlSize}
      __css={css}
      {...rest}
    />
  )
})
