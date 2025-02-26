import type { HTMLUIProps, ThemeProps } from "../../core"
import type { InputProps } from "./input"
import type { InputElementStyle } from "./input-element.style"
import { createComponent, mergeVars } from "../../core"
import { inputElementStyle } from "./input-element.style"

export interface InputElementProps
  extends HTMLUIProps,
    ThemeProps<InputElementStyle>,
    Pick<InputProps, "errorBorderColor" | "focusBorderColor"> {}

export const {
  component,
  PropsContext: InputElementPropsContext,
  usePropsContext: useInputElementPropsContext,
  withContext,
} = createComponent<InputElementProps, InputElementStyle>(
  "input-element",
  inputElementStyle,
)

export const InputElement = withContext("div")(
  { "data-input-element": "" },
  ({ errorBorderColor, focusBorderColor, vars, ...rest }) => ({
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
    ...rest,
  }),
)
