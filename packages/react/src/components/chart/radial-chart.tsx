"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type { ChartTooltipProps } from "./chart"
import type { ChartRadialProps, PolarChartProps } from "./polar-chart"
import type { RadialChartStyle } from "./radial-chart.style"
import { useCallback, useMemo } from "react"
import { RadialBarChart } from "recharts"
import { createComponent } from "../../core"
import { ChartRadial, PolarChart } from "./polar-chart"
import { radialChartStyle } from "./radial-chart.style"

export interface RadialChartProps<Y extends Dict = Dict>
  extends
    Omit<PolarChartProps<Y>, "components" | "nameKey" | "render">,
    ThemeProps<RadialChartStyle> {
  /***
   * If provided, generate lines based on series.
   */
  series?: ChartRadialProps<Y>[]
}

const {
  PropsContext: RadialChartPropsContext,
  usePropsContext: useRadialChartPropsContext,
  withContext,
} = createComponent<RadialChartProps, RadialChartStyle>(
  "radial-chart",
  radialChartStyle,
)

export { RadialChartPropsContext, useRadialChartPropsContext }

/**
 * `RadialChart` is a component for drawing radial charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/radial-chart
 */
export const RadialChart = withContext<"div", RadialChartProps>(
  <Y extends Dict>({
    children,
    endAngle = -270,
    innerRadius = "20%",
    outerRadius = "90%",
    series = [],
    startAngle = 90,
    gridProps,
    tooltipProps,
    ...rest
  }: RadialChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartRadial,
          fallback: series.map((props, index) => (
            <ChartRadial key={index} {...props} />
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
        endAngle={endAngle}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        render={(props) => <RadialBarChart {...props} />}
        startAngle={startAngle}
        gridProps={{ type: "circle", ...gridProps }}
        tooltipProps={{ labelFormatter, ...tooltipProps }}
        {...rest}
      >
        {children}
      </PolarChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: RadialChartProps<Y>): ReactElement
}>
