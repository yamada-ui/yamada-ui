"use client"

import type { ReactElement } from "react"
import type { CartesianChartProps as OriginalCartesianChartProps } from "recharts/types/util/types"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { CartesianChartProps, ChartLineProps } from "./cartesian-chart"
import type { LineChartStyle } from "./line-chart.style"
import type { UseLineChartProps } from "./use-line-chart"
import { useMemo } from "react"
import { LineChart as OriginalLineChart } from "recharts"
import { createComponent } from "../../core"
import { CartesianChart, ChartLine } from "./cartesian-chart"
import { lineChartStyle } from "./line-chart.style"
import { useLineChart } from "./use-line-chart"

export interface LineChartProps<Y extends Dict = Dict>
  extends
    Omit<CartesianChartProps<Y>, "components" | "render" | "series">,
    UseLineChartProps<Y>,
    ThemeProps<LineChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartLineProps<Y>[]
  /**
   * Props for the line chart component.
   */
  chartProps?: OriginalCartesianChartProps
}

const {
  PropsContext: LineChartPropsContext,
  usePropsContext: useLineChartPropsContext,
  withContext,
} = createComponent<LineChartProps, LineChartStyle>(
  "line-chart",
  lineChartStyle,
)

export { LineChartPropsContext, useLineChartPropsContext }

/**
 * `LineChart` is a component for drawing line charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/line-chart
 */
export const LineChart = withContext<"div", LineChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    chartProps,
    ...rest
  }: LineChartProps<Y>) => {
    const { getChartProps, getRootProps } = useLineChart(rest)
    const components = useMemo(
      () => [
        {
          component: ChartLine,
          fallback: series.map((props, index) => (
            <ChartLine key={index} {...props} />
          )),
        },
      ],
      [series],
    )

    return (
      <CartesianChart
        components={components}
        render={(props) => (
          <OriginalLineChart {...getChartProps({ ...props, ...chartProps })} />
        )}
        series={series}
        {...getRootProps()}
      >
        {children}
      </CartesianChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: LineChartProps<Y>): ReactElement
}>
