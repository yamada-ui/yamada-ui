import type { CSSProps } from "../../core"
import { useMemo } from "react"

export interface UseDropzoneBorderProps {
  /**
   * The border color when the input is invalid.
   */
  errorBorderColor?: CSSProps["borderColor"]
  /**
   * The border color when the input is focused.
   */
  focusBorderColor?: CSSProps["borderColor"]
}

export const useDropzoneBorder = ({
  errorBorderColor,
  focusBorderColor,
}: UseDropzoneBorderProps) => {
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

export type UseDropzoneBorderReturn = ReturnType<typeof useDropzoneBorder>
