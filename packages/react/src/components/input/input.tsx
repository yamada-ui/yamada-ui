import type { FC, HTMLUIProps, ThemeProps } from "../../core"
import type { FieldProps } from "../field"
import type { InputStyle } from "./input.style"
import type { UseInputBorderProps } from "./use-input-border"
import { createComponent } from "../../core"
import { useFieldProps } from "../field"
import { inputStyle } from "./input.style"
import { useInputBorder } from "./use-input-border"

export interface InputProps
  extends Omit<HTMLUIProps<"input">, "size">,
    ThemeProps<InputStyle>,
    UseInputBorderProps,
    FieldProps {
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
      props: {
        errorBorderColor,
        focusBorderColor,
        htmlSize,
        vars: varsProp,
        ...rest
      },
      ariaProps,
      dataProps,
      eventProps,
    } = useFieldProps(props)
    const vars = useInputBorder(varsProp, {
      errorBorderColor,
      focusBorderColor,
    })

    return {
      size: htmlSize,
      vars,
      ...ariaProps,
      ...dataProps,
      ...eventProps,
      ...rest,
    }
  },
)
