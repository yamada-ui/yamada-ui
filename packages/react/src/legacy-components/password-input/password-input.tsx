import type { ReactElement } from "react"
import type {
  ColorModeToken,
  CSS,
  CSSUIObject,
  HTMLUIProps,
  ThemeProps,
} from "../../core"
import type { UsePasswordInputProps } from "./use-password-input"
import { ui } from "../../core"
import { forwardRef, omitThemeProps, useComponentMultiStyle } from "../../core"
import { cx } from "../../utils"
import { EyeIcon, EyeOffIcon } from "../icon"
import {
  PasswordInputProvider,
  usePasswordInputContext,
} from "./password-input-context"
import { PasswordInputIcon } from "./password-input-icon"
import { usePasswordInput } from "./use-password-input"

interface PasswordInputOptions {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: ColorModeToken<CSS.Property.BorderColor, "colors">
  /**
   * The icons to be used for the visibility toggle.
   */
  visibilityIcon?: { off: ReactElement; on: ReactElement }
  /**
   * The props for the container element.
   */
  containerProps?: HTMLUIProps
  /**
   * The props for the icon element.
   */
  iconProps?: HTMLUIProps
  /**
   * The props for the input element.
   */
  inputProps?: HTMLUIProps<"input">
}

export interface PasswordInputProps
  extends HTMLUIProps<"input">,
    ThemeProps<"PasswordInput">,
    UsePasswordInputProps,
    PasswordInputOptions {}

/**
 * `PasswordInput` is a component that allows users to input passwords with a visibility toggle.
 *
 * @see https://yamada-ui.com/components/forms/password-input
 */
export const PasswordInput = forwardRef<PasswordInputProps, "div">(
  (props, ref) => {
    const [styles, mergedProps] = useComponentMultiStyle("PasswordInput", props)
    const {
      className,
      h,
      height = h,
      minH,
      minHeight = minH,
      visibilityIcon = { off: <EyeOffIcon />, on: <EyeIcon /> },
      containerProps,
      iconProps,
      inputProps,
      ...rest
    } = omitThemeProps(mergedProps)
    const { visible, getContainerProps, getIconProps, getInputProps } =
      usePasswordInput(rest)

    const css: CSSUIObject = { ...styles.container }

    return (
      <PasswordInputProvider value={{ styles }}>
        <ui.div
          className={cx("ui-password-input", className)}
          __css={css}
          {...getContainerProps(containerProps)}
        >
          <PasswordInputField
            height={height}
            minHeight={minHeight}
            {...getInputProps(inputProps, ref)}
          />

          <PasswordInputIcon {...getIconProps(iconProps)}>
            {visible ? visibilityIcon.off : visibilityIcon.on}
          </PasswordInputIcon>
        </ui.div>
      </PasswordInputProvider>
    )
  },
)

PasswordInput.displayName = "PasswordInput"
PasswordInput.__ui__ = "PasswordInput"

interface PasswordInputFieldProps extends HTMLUIProps<"input"> {}

const PasswordInputField = forwardRef<PasswordInputFieldProps, "input">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePasswordInputContext()

    const css: CSSUIObject = { ...styles.field }

    return (
      <ui.input
        ref={ref}
        className={cx("ui-password-input__field", className)}
        __css={css}
        {...rest}
      />
    )
  },
)

PasswordInputField.displayName = "PasswordInputField"
PasswordInputField.__ui__ = "PasswordInputField"
