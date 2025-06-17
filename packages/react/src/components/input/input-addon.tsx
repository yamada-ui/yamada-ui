import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { InputProps } from "./input"
import type { InputAddonStyle } from "./input-addon.style"
import { createComponent } from "../../core"
import { inputAddonStyle } from "./input-addon.style"
import { useInputBorder } from "./use-input-border"

export interface InputAddonProps
  extends HTMLStyledProps,
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
  ({ errorBorderColor, focusBorderColor, ...rest }) => {
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })

    return { ...varProps, ...rest }
  },
)
