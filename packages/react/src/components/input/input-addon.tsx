import type { HTMLUIProps, ThemeProps } from "../../core"
import type { InputProps } from "./input"
import type { InputAddonStyle } from "./input-addon.style"
import { createComponent, mergeVars } from "../../core"
import { inputAddonStyle } from "./input-addon.style"

export interface InputAddonProps
  extends HTMLUIProps,
    ThemeProps<InputAddonStyle>,
    Pick<InputProps, "errorBorderColor" | "focusBorderColor"> {}

export const {
  PropsContext: InputAddonPropsContext,
  usePropsContext: useInputAddonPropsContext,
  withContext,
} = createComponent<InputAddonProps, InputAddonStyle>(
  "input-addon",
  inputAddonStyle,
)

export const InputAddon = withContext("div")(
  undefined,
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
