import type {
  ColorModeToken,
  CSS,
  FC,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import type { FormControlOptions } from "../form-control"
import { omitThemeProps, ui, useComponentMultiStyle } from "../../core"
import { cx } from "../../utils"
import { useFormControlProps } from "../form-control"

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
export const Input: FC<InputProps> = (props) => {
  const [styles, mergedProps] = useComponentMultiStyle("Input", props)
  const computedProps = omitThemeProps(mergedProps)
  const { className, htmlSize, __css, ...rest } =
    useFormControlProps(computedProps)

  return (
    <ui.input
      className={cx("ui-input", className)}
      size={htmlSize}
      __css={{
        ...styles.field,
        ...__css,
      }}
      {...rest}
    />
  )
}

Input.__ui__ = "Input"
