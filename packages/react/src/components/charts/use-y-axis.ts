"use client"

import type { LabelProps, YAxisProps } from "recharts"
import type { CSSObject, HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { Layout } from "./chart.types"
import { useCallback, useMemo } from "react"
import { useSystem, useTheme } from "../../core"
import { cx } from "../../utils"
import { yAxisProperties } from "./recharts-properties"
import { getComponentProps } from "./utils"

export interface UseYAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Omit<YAxisProps, "color" | "fill" | "stroke">
  > {
  css?: CSSObject | CSSObject[]
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
  css,
  dataKey = "name",
  label: _label,
  layout = "horizontal",
  orientation,
  tickFormatter,
  unit,
  labelProps: _labelProps,
  ...rest
}: UseYAxisProps) => {
  const { theme } = useTheme()
  const system = useSystem()
  const [reChartsProps, propClassName] = getComponentProps<
    Dict,
    keyof YAxisProps
  >(
    system,
    [rest, yAxisProperties],
    css,
  )(theme)

  const axisKey = useMemo(
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
    ({ className, ...props } = {}) => ({
      className: cx(className, propClassName),
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
      ...reChartsProps,
    }),
    [axisKey, orientation, propClassName, reChartsProps, tickFormatter, unit],
  )

  return { getYAxisProps }
}

export type useYAxisReturn = ReturnType<typeof useYAxis>
