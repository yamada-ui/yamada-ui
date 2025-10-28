import type { ResponsiveContainerProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { Layout, LineChartProps } from "./chart.types"
import type { LineProps } from "./line"
import { useCallback } from "react"

export interface UseLineChartProps<T extends Dict = Dict> extends HTMLProps {
  /**
   * Chart data.
   */
  data: T[]
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layout?: Layout
  /***
   * List of properties for lines drawn on the chart.
   */
  lines?: LineProps<Exclude<keyof T, "name">>[]
  /**
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * Props passed down to 'LineChart' component.
   */
  lineChartProps?: LineChartProps
  /**
   * Props passed down to 'ResponsiveContainer' component.
   */
  responsiveContainerProps?: ResponsiveContainerProps
}

export const useLineChart = ({
  data,
  layout = "horizontal",
  lines = [],
  syncId,
  lineChartProps,
  responsiveContainerProps,
  ...rest
}: UseLineChartProps) => {
  const getRootProps: PropGetter = useCallback(
    (props) => ({
      ...props,
      ...rest,
    }),
    [rest],
  )

  const getResponsiveContainerProps: PropGetter<
    undefined,
    Partial<ResponsiveContainerProps>,
    Omit<ResponsiveContainerProps, "children">
  > = useCallback(
    (props) => ({
      ...props,
      ...responsiveContainerProps,
    }),
    [responsiveContainerProps],
  )

  const getLineChartProps: PropGetter<LineChartProps> = useCallback(
    (props) => ({
      data,
      layout,
      syncId,
      ...props,
      ...lineChartProps,
    }),
    [lineChartProps, data, layout, syncId],
  )

  return {
    layout,
    lines,
    getLineChartProps,
    getResponsiveContainerProps,
    getRootProps,
  }
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
