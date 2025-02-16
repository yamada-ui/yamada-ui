import type { CSSProps } from "../../core"
import { mergeVars } from "../../core"

export interface UseInputBorderProps {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: CSSProps["borderColor"]
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: CSSProps["borderColor"]
}

export const useInputBorder = (
  varsProp: CSSProps["vars"],
  { errorBorderColor, focusBorderColor }: UseInputBorderProps,
) => {
  return mergeVars(
    varsProp,
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
  )
}

export type UseInputBorderReturn = ReturnType<typeof useInputBorder>
