import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import {
  Legend as ReChartsLegend,
  BarChart as ReChartsBarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import { ChartTooltip } from "./chart-tooltip"
import { Legend } from "./legend"
import { useBarChart } from "./use-bar-chart"
import type { UseBarChartOptios } from "./use-bar-chart"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import { useChartAxis } from "./use-chart-axis"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import type { UseChartTooltipProps } from "./use-chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"

type BarChartOptions = {
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
}

export type BarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"BarChart"> &
  UseBarChartOptios &
  BarChartOptions &
  UseChartProps &
  UseChartAxisOptions &
  UseChartTooltipProps &
  UseChartLegendProps

export const BarChart = forwardRef<BarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("BarChart", props)
  const {
    className,
    series,
    dataKey,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    type = "default",
    withTooltip = true,
    withLegend = false,
    containerProps,
    unit,

    valueFormatter,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    data,

    ...rest
  } = omitThemeProps(mergedProps)

  const { getContainerProps } = useChart({ containerProps })
  const { getXAxisProps, getYAxisProps } = useChartAxis({
    dataKey,
    type,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    unit,
    valueFormatter,
    styles,
  })
  const { getBarChartProps, getBarProps, barVars, setHighlightedArea } =
    useBarChart({
      type,
      series,
      data,
      styles,
    })

  const { getTooltipProps } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
    valueFormatter,
  })
  const { getLegendProps } = useChartLegend({ legendProps })

  const bars = series.map((item, index) => {
    return <Bar key={index} {...getBarProps({ item, index })} />
  })

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-bar-chart", className)}
        var={barVars}
        __css={{ ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer {...getContainerProps({})}>
          <ReChartsBarChart {...getBarChartProps({})}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis {...getXAxisProps()} />
            <YAxis {...getYAxisProps()} />

            {withLegend ? (
              <ReChartsLegend
                content={({ payload }) => (
                  <Legend
                    className="ui-area-chart__legend"
                    payload={payload}
                    onHighlight={setHighlightedArea}
                  />
                )}
                {...getLegendProps()}
              />
            ) : null}

            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip
                    label={label}
                    payload={payload}
                    valueFormatter={valueFormatter}
                  />
                )}
                {...getTooltipProps({ className: "ui-area-chart__tooltip" })}
              />
            ) : null}
            {bars}
          </ReChartsBarChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
