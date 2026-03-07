"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { AreaChartStyle } from "./area-chart.style"
import type { CartesianChartProps, ChartAreaProps } from "./cartesian-chart"
import { useMemo } from "react"
import { AreaChart as OriginalAreaChart } from "recharts"
import { createComponent } from "../../core"
import { areaChartStyle } from "./area-chart.style"
import { CartesianChart, ChartArea } from "./cartesian-chart"

export interface AreaChartProps<Y extends Dict = Dict>
  extends
    Omit<CartesianChartProps<Y>, "components" | "render">,
    ThemeProps<AreaChartStyle> {
  /***
   * If provided, generate areas based on series.
   */
  series?: ChartAreaProps<Y>[]
}

const {
  PropsContext: AreaChartPropsContext,
  usePropsContext: useAreaChartPropsContext,
  withContext,
} = createComponent<AreaChartProps, AreaChartStyle>(
  "area-chart",
  areaChartStyle,
)

export { AreaChartPropsContext, useAreaChartPropsContext }

/**
 * `AreaChart` is a component for drawing area charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/area-chart
 */
export const AreaChart = withContext<"div", AreaChartProps>(
  <Y extends Dict>({ children, series = [], ...rest }: AreaChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartArea,
          fallback: series.map((props, index) => (
            <ChartArea key={index} {...props} />
          )),
        },
      ],
      [series],
    )

    return (
      <CartesianChart
        components={components}
        render={(props) => <OriginalAreaChart {...props} />}
        {...rest}
      >
        {children}
      </CartesianChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: AreaChartProps<Y>): ReactElement
}>
