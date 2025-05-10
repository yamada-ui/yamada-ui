import type { ReactNode } from "react"
import type { HTMLStyledProps, ThemeProps, WithoutThemeProps } from "../../core"
import type { InputProps } from "../input"
import type { PasswordInputStyle } from "./password-input.style"
import type { UsePasswordInputProps } from "./use-password-input"
import { createSlotComponent } from "../../core"
import { useGroupItemProps } from "../group"
import { EyeIcon, EyeOffIcon } from "../icon"
import { Input, InputGroup, useInputPropsContext } from "../input"
import { passwordInputStyle } from "./password-input.style"
import { usePasswordInput } from "./use-password-input"

export interface PasswordInputProps
  extends WithoutThemeProps<InputProps, PasswordInputStyle>,
    ThemeProps<PasswordInputStyle>,
    UsePasswordInputProps {
  /**
   * The icons to be used for the visibility toggle.
   */
  visibilityIcon?: { off: ReactNode; on: ReactNode }
  /**
   * The props for the button element.
   */
  buttonProps?: PasswordInputButtonProps
  /**
   * The props for the end element.
   */
  elementProps?: InputGroup.ElementProps
  /**
   * The props for the root element.
   */
  rootProps?: InputGroup.RootProps
}

export const {
  PropsContext: PasswordInputPropsContext,
  usePropsContext: usePasswordInputPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<PasswordInputProps, PasswordInputStyle>(
  "password-input",
  passwordInputStyle,
)

/**
 * `PasswordInput` is a component that allows users to input passwords with a visibility toggle.
 *
 * @see https://yamada-ui.com/components/password-input
 */
export const PasswordInput = withProvider<"input", PasswordInputProps>(
  ({
    className,
    css,
    colorScheme,
    visibilityIcon = { off: <EyeOffIcon />, on: <EyeIcon /> },
    buttonProps,
    elementProps,
    rootProps,
    ...props
  }) => {
    const [groupItemProps, rest] = useGroupItemProps(props)
    const { visible, getButtonProps, getInputProps } = usePasswordInput(rest)

    return (
      <InputGroup.Root
        className={className}
        css={css}
        colorScheme={colorScheme}
        {...groupItemProps}
        {...rootProps}
      >
        <PasswordInputField {...getInputProps()} />

        <InputGroup.Element clickable {...elementProps}>
          <PasswordInputButton {...getButtonProps(buttonProps)}>
            {visible ? visibilityIcon.off : visibilityIcon.on}
          </PasswordInputButton>
        </InputGroup.Element>
      </InputGroup.Root>
    )
  },
  "root",
)(() => {
  return useInputPropsContext()
})

interface PasswordInputFieldProps extends InputProps {}

const PasswordInputField = withContext<"input", PasswordInputFieldProps>(
  Input,
  "field",
)({ "data-group-propagate": "" })

interface PasswordInputButtonProps extends HTMLStyledProps<"button"> {}

const PasswordInputButton = withContext<"button", PasswordInputButtonProps>(
  "button",
  "button",
)()
