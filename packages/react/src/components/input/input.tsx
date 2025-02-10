import type { CSSProps, FC, HTMLUIProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { InputStyle } from "./input.style"
import { createComponent, mergeVars } from "../../core"
import { useFieldProps } from "../field"
import { inputStyle } from "./input.style"

export interface InputProps
  extends Omit<HTMLUIProps<"input">, "size">,
    ThemeProps<InputStyle>,
    FieldProps {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: CSSProps["borderColor"]
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: CSSProps["borderColor"]
  /**
   * The native HTML `size` attribute to be passed to the `input`.
   */
  htmlSize?: number
}

export const {
  PropsContext: InputPropsContext,
  usePropsContext: useInputPropsContext,
  withContext,
} = createComponent<InputProps, InputStyle>("input", inputStyle)

/**
 * `Input` is a component used to obtain text input from the user.
 *
 * @see Docs https://yamada-ui.com/components/forms/input
 */
export const Input: FC<InputProps> = withContext("input")(
  undefined,
  (props) => {
    const {
      props: { errorBorderColor, focusBorderColor, htmlSize, vars, ...rest },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)

    return {
      size: htmlSize,
      vars: mergeVars(
        vars,
        errorBorderColor
          ? {
              name: "errorBorderColor",
              token: "colors",
              value: errorBorderColor,
            }
          : undefined,
        focusBorderColor
          ? {
              name: "focusBorderColor",
              token: "colors",
              value: focusBorderColor,
            }
          : undefined,
      ),
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      ...rest,
    }
  },
)
