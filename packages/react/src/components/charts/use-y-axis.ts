"use client"

import type { LabelProps, YAxisProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Layout } from "./chart.types"
import { useCallback, useMemo } from "react"
import { splitObject } from "../../utils"
import { yAxisProperties } from "./recharts-properties"

export interface UseYAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<YAxisProps, "color" | "fill" | "stroke">
  > {
  /**
   * A label to display below the Y axis.
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
   * Unit displayed next to each tick.
   */
  unit?: string
  /**
   * Props passed down to recharts 'Label' component.
   */
  labelProps?: LabelProps
}

export const useYAxis = ({
  dataKey = "name",
  label: _label,
  layout = "horizontal",
  orientation,
  tickFormatter,
  unit,
  labelProps: _labelProps,
  ...rest
}: UseYAxisProps) => {
  const [yAxisProps, styledYAxisProps] = splitObject<Dict, string>(
    rest,
    yAxisProperties,
  )

  const axisKey: Dict = useMemo(
    () =>
      layout === "horizontal"
        ? { type: "number" }
        : { type: "category", dataKey },
    [dataKey, layout],
  )

  const getYAxisProps: PropGetter<
    undefined,
    Partial<YAxisProps>,
    YAxisProps
  > = useCallback(
    (props) => ({
      allowDecimals: true,
      axisLine: false,
      orientation,
      stroke: "",
      tick: {
        fill: "currentColor",
        transform:
          orientation === "right" ? "translate(10, 0)" : "translate(-10, 0)",
      },
      tickFormatter,
      unit,
      ...axisKey,
      ...props,
      ...yAxisProps,
    }),
    [axisKey, orientation, tickFormatter, unit, yAxisProps],
  )

  return { getYAxisProps, styledYAxisProps }
}

export type useYAxisReturn = ReturnType<typeof useYAxis>
