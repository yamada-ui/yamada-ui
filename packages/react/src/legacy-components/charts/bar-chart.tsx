import type { HTMLUIProps, ThemeProps } from "../../core"
import type { UseBarChartOptions } from "./use-bar-chart"
import type { UseChartProps } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { useMemo } from "react"
import {
  CartesianGrid,
  Label,
  Legend,
  BarChart as ReChartsBarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "../../core"
import { cx } from "../../utils"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { useBarChart } from "./use-bar-chart"
import { ChartProvider, useChart } from "./use-chart"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid } from "./use-chart-grid"
import { useChartLegend } from "./use-chart-legend"
import { useChartReferenceLine } from "./use-chart-reference-line"
import { useChartTooltip } from "./use-chart-tooltip"

interface BarChartOptions {
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
}

export type BarChartProps = BarChartOptions &
  HTMLUIProps &
  ThemeProps<"BarChart"> &
  UseBarChartOptions &
  UseChartAxisOptions &
  UseChartGridOptions &
  UseChartLegendProps &
  UseChartProps &
  UseChartReferenceLineOptions &
  UseChartTooltipOptions

/**
 * `BarChart` is a component for drawing bar charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/bar-chart
 */
export const BarChart = forwardRef<BarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("BarChart", props)
  const {
    type = "default",
    className,
    cell,
    data,
    dataKey,
    fillOpacity,
    gridAxis,
    labelFormatter,
    layoutType,
    series,
    strokeDasharray,
    syncId,
    tickLine,
    tooltipAnimationDuration,
    unit,
    valueFormatter,
    withLegend = false,
    withTooltip = true,
    withXAxis,
    withYAxis,
    xAxisLabel,
    xAxisTickFormatter,
    yAxisLabel,
    yAxisTickFormatter,
    barProps,
    chartProps,
    containerProps,
    gridProps,
    legendProps,
    referenceLineProps = [],
    tooltipProps,
    xAxisLabelProps,
    xAxisProps,
    yAxisLabelProps,
    yAxisProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const { bars, barVars, setHighlightedArea, getBarChartProps } = useBarChart({
    type,
    cell,
    data,
    fillOpacity,
    layoutType,
    series,
    styles,
    syncId,
    xAxisLabel,
    yAxisLabel,
    barProps,
    chartProps,
    referenceLineProps,
  })
  const { getContainerProps } = useChart({ containerProps })
  const {
    getXAxisLabelProps,
    getXAxisProps,
    getYAxisLabelProps,
    getYAxisProps,
  } = useChartAxis({
    type,
    dataKey,
    gridAxis,
    layoutType,
    styles,
    tickLine,
    unit,
    withXAxis,
    withYAxis,
    xAxisLabel,
    xAxisTickFormatter,
    yAxisLabel,
    yAxisTickFormatter,
    xAxisLabelProps,
    xAxisProps,
    yAxisLabelProps,
    yAxisProps,
  })
  const { getReferenceLineProps } = useChartReferenceLine({
    styles,
    referenceLineProps,
  })
  const { getGridProps } = useChartGrid({
    gridAxis,
    strokeDasharray,
    styles,
    gridProps,
  })
  const { getTooltipProps, tooltipProps: computedTooltipProps } =
    useChartTooltip({
      styles,
      tooltipAnimationDuration,
      tooltipProps,
    })
  const { getLegendProps, legendProps: computedLegendProps } = useChartLegend({
    legendProps,
  })

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({
            className: "ui-bar-chart__reference-line",
            index,
          })}
        />
      )),
    [getReferenceLineProps, referenceLineProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-bar-chart", className)}
        __css={{ maxW: "full", vars: barVars, ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-bar-chart__container" })}
        >
          <ReChartsBarChart
            {...getBarChartProps({ className: "ui-bar-chart__chart" })}
          >
            <CartesianGrid
              {...getGridProps({ className: "ui-bar-chart__grid" })}
            />

            <XAxis {...getXAxisProps({ className: "ui-bar-chart__x-axis" })}>
              <Label
                {...getXAxisLabelProps({
                  className: "ui-bar-chart__x-axis-label",
                })}
              />
            </XAxis>

            <YAxis {...getYAxisProps({ className: "ui-bar-chart__y-axis" })}>
              <Label
                {...getYAxisLabelProps({
                  className: "ui-bar-chart__y-axis-label",
                })}
              />
            </YAxis>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-bar-chart__legend"
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
                    className="ui-bar-chart__tooltip"
                    label={label}
                    labelFormatter={labelFormatter}
                    payload={payload}
                    unit={unit}
                    valueFormatter={valueFormatter}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}

            {bars}
            {referenceLinesItems}
          </ReChartsBarChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})

BarChart.displayName = "BarChart"
BarChart.__ui__ = "BarChart"
