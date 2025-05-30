import type { CSSProps } from "../../core"
import { useMemo } from "react"

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
}: UseInputBorderProps) => {
  return useMemo(
    () => ({
      "--error-border-color": errorBorderColor
        ? `colors.${errorBorderColor}`
        : undefined,
      "--focus-border-color": focusBorderColor
        ? `colors.${focusBorderColor}`
        : undefined,
    }),
    [errorBorderColor, focusBorderColor],
  )
}

export type UseInputBorderReturn = ReturnType<typeof useInputBorder>
