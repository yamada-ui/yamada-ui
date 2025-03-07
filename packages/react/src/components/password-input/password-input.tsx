import type { ReactElement } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { UseInputBorderProps } from "../input"
import type { PasswordInputStyle } from "./password-input.style"
import type { UsePasswordInputProps } from "./use-password-input"
import { cloneElement } from "react"
import { createSlotComponent, ui } from "../../core"
import { getValidChildren } from "../../utils"
import { useFieldProps } from "../field"
import { EyeIcon, EyeOffIcon } from "../icon"
import { useInputBorder } from "../input"
import { passwordInputStyle } from "./password-input.style"
import { usePasswordInput } from "./use-password-input"

export interface PasswordInputProps
  extends HTMLUIProps<"input">,
    ThemeProps<PasswordInputStyle>,
    UsePasswordInputProps,
    UseInputBorderProps {
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
 * @see Docs https://yamada-ui.com/components/password-input
 */
export const PasswordInput = withProvider<"div", PasswordInputProps>(
  (props) => {
    const {
      props: {
        ref,
        className,
        css,
        errorBorderColor,
        focusBorderColor,
        h,
        height = h,
        minH,
        minHeight = minH,
        vars: varsProp,
        visibilityIcon = { off: <EyeOffIcon />, on: <EyeIcon /> },
        containerProps,
        iconProps,
        inputProps,
        ...rest
      },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)
    const { visible, getIconProps, getInputProps } = usePasswordInput(rest)
    const vars = useInputBorder(varsProp, {
      errorBorderColor,
      focusBorderColor,
    })

    const fieldProps = {
      ...ariaProps,
      ...dataProps,
      ...eventProps,
    }

    return (
      <ui.div
        className={className}
        css={css}
        {...fieldProps}
        {...containerProps}
      >
        <PasswordInputField
          height={height}
          minHeight={minHeight}
          vars={vars}
          {...getInputProps({ ref, ...fieldProps, ...inputProps })}
        />

        <PasswordInputIcon {...getIconProps({ ...fieldProps, ...iconProps })}>
          {visible ? visibilityIcon.off : visibilityIcon.on}
        </PasswordInputIcon>
      </ui.div>
    )
  },
  "root",
)()

interface PasswordInputFieldProps extends HTMLUIProps<"input"> {}

const PasswordInputField = withContext<"input", PasswordInputFieldProps>(
  "input",
  "field",
)()

interface PasswordInputIconProps extends HTMLUIProps {}

const PasswordInputIcon = withContext<"div", PasswordInputIconProps>(
  ({ children, ...rest }) => {
    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        style: {
          color: "currentColor",
          maxHeight: "1em",
          maxWidth: "1em",
        },
        "aria-hidden": true,
        focusable: false,
      }),
    )

    return (
      <ui.button type="button" {...rest}>
        {cloneChildren}
      </ui.button>
    )
  },
  "icon",
)()
