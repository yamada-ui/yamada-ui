"use client"

import type { ReactElement } from "react"
import type { CartesianChartProps as OriginalCartesianChartProps } from "recharts/types/util/types"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { BarChartStyle } from "./bar-chart.style"
import type { CartesianChartProps, ChartBarProps } from "./cartesian-chart"
import type { UseBarChartProps } from "./use-bar-chart"
import { useMemo } from "react"
import { BarChart as OriginalBarChart } from "recharts"
import { createComponent } from "../../core"
import { barChartStyle } from "./bar-chart.style"
import { CartesianChart, ChartBar } from "./cartesian-chart"
import { useBarChart } from "./use-bar-chart"

export interface BarChartProps<Y extends Dict = Dict>
  extends
    Omit<
      CartesianChartProps<Y>,
      | "areaFillOpacity"
      | "areaProps"
      | "components"
      | "lineProps"
      | "render"
      | "series"
    >,
    UseBarChartProps<Y>,
    ThemeProps<BarChartStyle> {
  /***
   * If provided, generate bars based on series.
   */
  series?: ChartBarProps<Y>[]
  /**
   * Props for the bar chart component.
   */
  chartProps?: Omit<OriginalCartesianChartProps, "data">
}

const {
  PropsContext: BarChartPropsContext,
  usePropsContext: useBarChartPropsContext,
  withContext,
} = createComponent<BarChartProps, BarChartStyle>("bar-chart", barChartStyle)

export { BarChartPropsContext, useBarChartPropsContext }

/**
 * `BarChart` is a component for drawing bar charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/bar-chart
 */
export const BarChart = withContext<"div", BarChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    chartProps,
    ...rest
  }: BarChartProps<Y>) => {
    const { getChartProps, getRootProps } = useBarChart(rest)
    const components = useMemo(
      () => [
        {
          component: ChartBar,
          fallback: series.map((props, index) => (
            <ChartBar key={index} {...props} />
          )),
        },
      ],
      [series],
    )

    return (
      <CartesianChart
        components={components}
        render={(props) => (
          <OriginalBarChart {...getChartProps({ ...props, ...chartProps })} />
        )}
        series={series}
        {...getRootProps()}
      >
        {children}
      </CartesianChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: BarChartProps<Y>): ReactElement
}>
