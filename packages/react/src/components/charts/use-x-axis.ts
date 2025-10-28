"use client"

import type { LabelProps, XAxisProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Layout } from "./chart.types"
import { useCallback, useMemo } from "react"
import { splitObject } from "../../utils"
import { xAxisProperties } from "./recharts-properties"

export interface UseXAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<XAxisProps, "color" | "fill" | "stroke">
  > {
  /**
   * A label to display below the X axis.
   */
  label?: string
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layout?: Layout
  /**
   * A function to format tick value.
   */
  tickFormatter?: (value: any) => string
  /**
   * Props passed down to recharts 'Label' component.
   */
  labelProps?: LabelProps
}

export const useXAxis = ({
  dataKey = "name",
  label: _label,
  layout = "horizontal",
  tickFormatter,
  labelProps: _labelProps,
  ...rest
}: UseXAxisProps) => {
  const [xAxisProps, styledXAxisProps] = splitObject<Dict, string>(
    rest,
    xAxisProperties,
  )

  const axisKey: Dict = useMemo(
    () =>
      layout === "horizontal"
        ? { type: "category", dataKey }
        : { type: "number" },
    [layout, dataKey],
  )

  const getXAxisProps: PropGetter<
    undefined,
    Partial<XAxisProps>,
    XAxisProps
  > = useCallback(
    (props) => ({
      axisLine: false,
      minTickGap: 5,
      stroke: "",
      tick: {
        fill: "currentColor",
        transform: "translate(0, 10)",
      },
      tickFormatter,
      ...axisKey,
      ...props,
      ...xAxisProps,
    }),
    [axisKey, tickFormatter, xAxisProps],
  )

  return { getXAxisProps, styledXAxisProps }
}

export type UseXAxisReturn = ReturnType<typeof useXAxis>
