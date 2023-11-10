import {
  ui,
  forwardRef,
  omitThemeProps,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
  useComponentStyle,
  ColorModeToken,
  CSS,
} from "@yamada-ui/core"
import {
  useFormControlProps,
  FormControlOptions,
} from "@yamada-ui/form-control"
import { cx, omitObject } from "@yamada-ui/utils"

type TextareaOptions = {
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
}

export type TextareaProps = Omit<
  HTMLUIProps<"textarea">,
  "disabled" | "required" | "readOnly"
> &
  ThemeProps<"Textarea"> &
  TextareaOptions &
  FormControlOptions

export const Textarea = forwardRef<TextareaProps, "textarea">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("Textarea", props)
  let {
    className,
    rows,
    resize = "none",
    ...rest
  } = omitThemeProps(mergedProps)

  rest = useFormControlProps(rest)

  const css: CSSUIObject = rows
    ? omitObject(styles, ["h", "minH", "height", "minHeight"])
    : styles

  return (
    <ui.textarea
      ref={ref}
      className={cx("ui-textarea", className)}
      resize={resize}
      __css={css}
      {...rest}
    />
  )
})
