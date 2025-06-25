"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { InputProps } from "./input"
import type { InputElementStyle } from "./input-element.style"
import { createComponent } from "../../core"
import { inputElementStyle } from "./input-element.style"
import { useInputBorder } from "./use-input-border"

export interface InputElementProps
  extends HTMLStyledProps,
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
  ({ errorBorderColor, focusBorderColor, ...rest }) => {
    const varProps = useInputBorder({ errorBorderColor, focusBorderColor })

    return { ...varProps, ...rest }
  },
)
