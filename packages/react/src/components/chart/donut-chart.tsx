"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartTooltipProps } from "./chart"
import type { DonutChartStyle } from "./donut-chart.style"
import type { ChartDonutProps, PolarChartProps } from "./polar-chart"
import { useCallback, useMemo } from "react"
import { PieChart as OriginalPieChart } from "recharts"
import { createComponent } from "../../core"
import { donutChartStyle } from "./donut-chart.style"
import { ChartDonut, PolarChart } from "./polar-chart"

export interface DonutChartProps<Y extends Dict = Dict>
  extends
    Omit<PolarChartProps<Y>, "components" | "nameKey" | "render">,
    ThemeProps<DonutChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartDonutProps<Y>[]
}

const {
  PropsContext: DonutChartPropsContext,
  usePropsContext: useDonutChartPropsContext,
  withContext,
} = createComponent<DonutChartProps, DonutChartStyle>(
  "donut-chart",
  donutChartStyle,
)

export { DonutChartPropsContext, useDonutChartPropsContext }

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/donut-chart
 */
export const DonutChart = withContext<"div", DonutChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    tooltipProps,
    ...rest
  }: DonutChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartDonut,
          fallback: series.map((props, index) => (
            <ChartDonut key={index} {...props} />
          )),
        },
      ],
      [series],
    )
    const labelFormatter = useCallback<
      NonNullable<ChartTooltipProps["labelFormatter"]>
    >(() => null, [])

    return (
      <PolarChart
        components={components}
        render={(props) => <OriginalPieChart {...props} />}
        tooltipProps={{ labelFormatter, ...tooltipProps }}
        {...rest}
      >
        {children}
      </PolarChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: DonutChartProps<Y>): ReactElement
}>
