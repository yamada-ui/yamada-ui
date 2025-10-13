import type { LineChart, ResponsiveContainerProps } from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict } from "../../utils"
import type { Layout } from "./chart.types"
import { useCallback } from "react"

export interface UseLineChartProps extends HTMLProps {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  layout?: Layout
  /**
   * If any two categorical charts have the same syncId,
   * these two charts can sync the position tooltip, and the startIndex, endIndex of Brush.
   */
  syncId?: number | string
  /**
   * Props passed down to 'LineChart' component.
   */
  LineChartProps?: Partial<typeof LineChart>
  /**
   * Props passed down to 'ResponsiveContainer' component.
   */
  responsiveContainerProps?: ResponsiveContainerProps
}

export const useLineChart = ({
  data,
  layout = "horizontal",
  syncId,
  LineChartProps,
  responsiveContainerProps,
  ...rest
}: UseLineChartProps) => {
  const getContainerProps: PropGetter = useCallback(
    (props) => ({
      ...rest,
      ...props,
    }),
    [rest],
  )

  const getResponsiveContainerProps: PropGetter<
    undefined,
    Partial<ResponsiveContainerProps>,
    Omit<ResponsiveContainerProps, "children">
  > = useCallback(
    (props) => ({
      ...responsiveContainerProps,
      ...props,
    }),
    [responsiveContainerProps],
  )

  const getLineChartProps: PropGetter<Partial<typeof LineChart>> = useCallback(
    (props) => ({
      data,
      layout,
      syncId,
      ...LineChartProps,
      ...props,
    }),
    [LineChartProps, data, layout, syncId],
  )

  return {
    layout,
    getContainerProps,
    getLineChartProps,
    getResponsiveContainerProps,
  }
}

export type UseLineChartReturn = ReturnType<typeof useLineChart>
