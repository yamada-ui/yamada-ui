import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { useFormControlProps } from "@yamada-ui/form-control"
import { cx } from "@yamada-ui/utils"

interface InputOptions {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The native HTML `size` attribute to be passed to the `input`.
   */
  htmlSize?: number
}

export interface InputProps
  extends Omit<
      HTMLUIProps<"input">,
      "disabled" | "readOnly" | "required" | "size"
    >,
    ThemeProps<"Input">,
    InputOptions,
    FormControlOptions {}

/**
 * `Input` is a component used to obtain text input from the user.
 *
 * @see Docs https://yamada-ui.com/components/forms/input
 */
export const Input = forwardRef<InputProps, "input">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("Input", props)
  const computedProps = omitThemeProps(mergedProps)
  const { className, htmlSize, __css, ...rest } =
    useFormControlProps(computedProps)

  const css: CSSUIObject = { ...styles.field, ...__css }

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

Input.displayName = "Input"
Input.__ui__ = "Input"
