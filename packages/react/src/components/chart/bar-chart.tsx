"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { BarChartStyle } from "./bar-chart.style"
import type { CartesianChartProps, ChartBarProps } from "./cartesian-chart"
import { useMemo } from "react"
import { BarChart as OriginalBarChart } from "recharts"
import { createComponent } from "../../core"
import { barChartStyle } from "./bar-chart.style"
import { CartesianChart, ChartBar } from "./cartesian-chart"

export interface BarChartProps<Y extends Dict = Dict>
  extends
    Omit<CartesianChartProps<Y>, "components" | "render">,
    ThemeProps<BarChartStyle> {
  /***
   * If provided, generate bars based on series.
   */
  series?: ChartBarProps<Y>[]
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
  <Y extends Dict>({ children, series = [], ...rest }: BarChartProps<Y>) => {
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
        render={(props) => <OriginalBarChart {...props} />}
        {...rest}
      >
        {children}
      </CartesianChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: BarChartProps<Y>): ReactElement
}>
