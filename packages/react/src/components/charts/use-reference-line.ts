import type { LabelProps, ReferenceLineProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Label } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useSystem, useTheme } from "../../core"
import { isObject } from "../../utils"
import { labelProperties, referenceLineProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseReferenceLineProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<
      ReferenceLineProps,
      "color" | "fill" | "fillOpacity" | "label" | "stroke" | "strokeWidth"
    >
  > {
  css?: CSSObject | CSSObject[]
  label?: Label
}

export const useReferenceLine = ({
  css,
  label: labelProp = {},
  ...rest
}: UseReferenceLineProps) => {
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

  const label: Label = useMemo(() => {
    if (!isObject(labelProp)) {
      return labelProp
    }

    const [reChartsProps, className] = getComponentProps<
      Dict,
      keyof LabelProps
    >(system, [labelProp, labelProperties])(theme)

    return {
      className,
      color: "",
      fill: "",
      stroke: "",
      strokeWidth: "",
      ...reChartsProps,
    }
  }, [labelProp, system, theme])

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
      label,
      stroke: "",
      strokeWidth: "",
      ...props,
      ...reChartsProps,
    }),
    [className, label, reChartsProps],
  )

  return { getReferenceLineProps }
}

export type UseReferenceLineReturn = ReturnType<typeof useReferenceLine>
