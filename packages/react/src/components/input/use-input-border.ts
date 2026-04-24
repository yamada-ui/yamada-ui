import type { CSSProps, CSSVariableProps } from "../../core"
import { useMemo } from "react"
import { varAttr } from "../../core"

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

export const useInputBorder = ({
  errorBorderColor,
  focusBorderColor,
}: UseInputBorderProps = {}) => {
  return useMemo<CSSVariableProps>(
    () => ({
      "--error-border-color": varAttr(errorBorderColor, "colors"),
      "--focus-border-color": varAttr(focusBorderColor, "colors"),
    }),
    [errorBorderColor, focusBorderColor],
  )
}

export type UseInputBorderReturn = ReturnType<typeof useInputBorder>
