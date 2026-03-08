"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartTooltipProps } from "./chart"
import type { PieChartStyle } from "./pie-chart.style"
import type { ChartPieProps, PolarChartProps } from "./polar-chart"
import { useCallback, useMemo } from "react"
import { PieChart as OriginalPieChart } from "recharts"
import { createComponent } from "../../core"
import { pieChartStyle } from "./pie-chart.style"
import { ChartPie, PolarChart } from "./polar-chart"

export interface PieChartProps<Y extends Dict = Dict>
  extends
    Omit<PolarChartProps<Y>, "components" | "nameKey" | "render">,
    ThemeProps<PieChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartPieProps<Y>[]
}

const {
  PropsContext: PieChartPropsContext,
  usePropsContext: usePieChartPropsContext,
  withContext,
} = createComponent<PieChartProps, PieChartStyle>("pie-chart", pieChartStyle)

export { PieChartPropsContext, usePieChartPropsContext }

/**
 * `PieChart` is a component for drawing pie charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/pie-chart
 */
export const PieChart = withContext<"div", PieChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    tooltipProps,
    ...rest
  }: PieChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartPie,
          fallback: series.map((props, index) => (
            <ChartPie key={index} {...props} />
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
  <Y extends Dict>(props: PieChartProps<Y>): ReactElement
}>
