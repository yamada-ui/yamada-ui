"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { CartesianChartProps, ChartLineProps } from "./cartesian-chart"
import type { LineChartStyle } from "./line-chart.style"
import { useMemo } from "react"
import { LineChart as OriginalLineChart } from "recharts"
import { createComponent } from "../../core"
import { CartesianChart, ChartLine } from "./cartesian-chart"
import { lineChartStyle } from "./line-chart.style"

export interface LineChartProps<Y extends Dict = Dict>
  extends
    Omit<CartesianChartProps<Y>, "components" | "render">,
    ThemeProps<LineChartStyle> {
  /**
   * If provided, generate lines based on series.
   */
  series?: ChartLineProps<Y>[]
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
  <Y extends Dict>({ children, series = [], ...rest }: LineChartProps<Y>) => {
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
        render={(props) => <OriginalLineChart {...props} />}
        {...rest}
      >
        {children}
      </CartesianChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: LineChartProps<Y>): ReactElement
}>
