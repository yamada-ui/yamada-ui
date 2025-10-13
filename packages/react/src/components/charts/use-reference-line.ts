import type { ReferenceLineProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { useCallback } from "react"
import { useSystem, useTheme } from "../../core"
import { referenceLineProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseReferenceLineProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<
      ReferenceLineProps,
      "color" | "fill" | "fillOpacity" | "stroke" | "strokeWidth"
    >
  > {
  css?: CSSObject | CSSObject[]
}

export const useReferenceLine = ({ css, ...rest }: UseReferenceLineProps) => {
  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, className] = getComponentProps<
    Dict,
    keyof ReferenceLineProps
  >(
    system,
    [rest, referenceLineProperties],
    css,
  )(theme)

  const getReferenceLineProps: PropGetter<
    undefined,
    Partial<ReferenceLineProps>,
    Omit<ReferenceLineProps, "ref">
  > = useCallback(
    (props) => ({
      className,
      color: "",
      fill: "",
      fillOpacity: "",
      stroke: "",
      strokeWidth: "",
      ...reChartsProps,
      ...props,
    }),
    [className, reChartsProps],
  )

  return { getReferenceLineProps }
}

export type UseReferenceLineReturn = ReturnType<typeof useReferenceLine>
