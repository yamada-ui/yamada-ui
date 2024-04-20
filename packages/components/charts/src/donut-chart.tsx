import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  Cell,
  Legend,
  Pie,
  PieChart as RechartsDonutChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { TooltipDataSourceType } from "./chart.types"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import {
  useChartTooltip,
  type UseChartTooltipOptions,
} from "./use-chart-tooltip"
import type { UseDonutChartOptions } from "./use-donut-chart"
import { useDonutChart } from "./use-donut-chart"

type DonutChartOptions = {
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
  /**
   * Determines which data is displayed in the tooltip.
   *
   * @default 'all'
   */
  tooltipDataSource?: TooltipDataSourceType
  /**
   * A function to format values inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
}

export type DonutChartProps = HTMLUIProps<"div"> &
  ThemeProps<"DonutChart"> &
  DonutChartOptions &
  UseDonutChartOptions &
  UseChartTooltipOptions &
  UseChartLegendProps &
  UseChartProps

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/donut-chart
 */
export const DonutChart = forwardRef<DonutChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DonutChart", props)
  const {
    className,
    data,
    donutProps,
    chartProps,
    cellProps,
    containerProps,
    withTooltip = true,
    withLegend = false,
    tooltipProps,
    tooltipAnimationDuration,
    tooltipDataSource = "all",
    valueFormatter,
    unit,
    innerRadius,
    outerRadius,
    paddingAngle,
    startAngle,
    endAngle,
    withLabels,
    withLabelsLine,
    strokeWidth,
    legendProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    donutVars,
    getDonutProps,
    getDonutChartProps,
    getCellProps,
    setHighlightedArea,
  } = useDonutChart({
    data,
    donutProps,
    chartProps,
    cellProps,
    innerRadius,
    outerRadius,
    paddingAngle,
    startAngle,
    endAngle,
    strokeWidth,
    withLabels,
    withLabelsLine,
    styles,
  })
  const { getContainerProps } = useChart({ containerProps })
  const { tooltipProps: computedTooltipProps, getTooltipProps } =
    useChartTooltip({
      tooltipProps,
      tooltipAnimationDuration,
      styles,
    })
  const { legendProps: computedLegendProps, getLegendProps } = useChartLegend({
    legendProps,
  })

  const cells = useMemo(
    () =>
      data.map(({ name }, index) => (
        <Cell
          key={`donut-cell-${name}`}
          {...getCellProps({ index, className: "ui-donut-chart__cell" })}
        />
      )),
    [data, getCellProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-donut-chart", className)}
        var={donutVars}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-donut-chart__container" })}
        >
          <RechartsDonutChart
            {...getDonutChartProps({ className: "ui-donut-chart__chart" })}
          >
            <Pie {...getDonutProps({ className: "ui-donut-chart__donut" })}>
              {cells}
            </Pie>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-area-chart__legend"
                    payload={payload}
                    onHighlight={setHighlightedArea}
                    {...computedLegendProps}
                  />
                )}
                {...getLegendProps()}
              />
            ) : null}

            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip
                    className="ui-donut-chart__tooltip"
                    label={label}
                    payload={tooltipDataSource === "segment" ? payload : data}
                    valueFormatter={valueFormatter}
                    unit={unit}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}
          </RechartsDonutChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
