import type { HTMLUIProps, ThemeProps } from "../../core"
import type { UseChartProps } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import type { UseLineChartOptions } from "./use-line-chart"
import { useMemo } from "react"
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart as ReChartsLineChart,
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
import { ChartProvider, useChart } from "./use-chart"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid } from "./use-chart-grid"
import { useChartLegend } from "./use-chart-legend"
import { useChartReferenceLine } from "./use-chart-reference-line"
import { useChartTooltip } from "./use-chart-tooltip"
import { useLineChart } from "./use-line-chart"

interface LineChartOptions {
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

export interface LineChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray" | "strokeWidth">,
    ThemeProps<"LineChart">,
    LineChartOptions,
    UseChartProps,
    UseChartAxisOptions,
    UseChartReferenceLineOptions,
    UseChartGridOptions,
    UseChartTooltipOptions,
    UseChartLegendProps,
    UseLineChartOptions {}

/**
 * `LineChart` is a component for drawing line charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/components/data-display/line-chart
 */
export const LineChart = forwardRef<LineChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("LineChart", props)
  const {
    type,
    className,
    connectNulls,
    curveType,
    data,
    dataKey,
    fillOpacity,
    gridAxis,
    labelFormatter,
    layoutType,
    series,
    strokeDasharray,
    strokeWidth,
    syncId,
    tickLine,
    tooltipAnimationDuration,
    unit,
    valueFormatter,
    withActiveDots,
    withDots,
    withLegend = false,
    withTooltip = true,
    withXAxis,
    withYAxis,
    xAxisLabel,
    xAxisTickFormatter,
    yAxisLabel,
    yAxisTickFormatter,
    chartProps,
    containerProps,
    gridProps,
    legendProps,
    lineProps,
    referenceLineProps,
    tooltipProps,
    xAxisLabelProps,
    xAxisProps,
    yAxisLabelProps,
    yAxisProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const { lineVars, setHighlightedArea, getLineChartProps, getLineProps } =
    useLineChart({
      connectNulls,
      curveType,
      data,
      fillOpacity,
      layoutType,
      series,
      strokeWidth,
      styles,
      syncId,
      withActiveDots,
      withDots,
      xAxisLabel,
      yAxisLabel,
      chartProps,
      lineProps,
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

  const lines = useMemo(
    () =>
      series.map(({ dataKey }, index) => (
        <Line
          key={`line-${dataKey}`}
          {...getLineProps({ className: "ui-line-chart__line", index })}
        />
      )),
    [getLineProps, series],
  )

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps?.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({
            className: "ui-line-chart__reference-line",
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
        className={cx("ui-line-chart", className)}
        __css={{ maxW: "full", vars: lineVars, ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-line-chart__container" })}
        >
          <ReChartsLineChart
            {...getLineChartProps({ className: "ui-line-chart__chart" })}
          >
            <CartesianGrid
              {...getGridProps({ className: "ui-line-chart__grid" })}
            />

            <XAxis {...getXAxisProps({ className: "ui-line-chart__x-axis" })}>
              <Label
                {...getXAxisLabelProps({
                  className: "ui-line-chart__x-axis-label",
                })}
              />
            </XAxis>

            <YAxis {...getYAxisProps({ className: "ui-line-chart__y-axis" })}>
              <Label
                {...getYAxisLabelProps({
                  className: "ui-line-chart__y-axis-label",
                })}
              />
            </YAxis>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-line-chart__legend"
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
                    className="ui-line-chart__tooltip"
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

            {lines}
            {referenceLinesItems}
          </ReChartsLineChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})

LineChart.displayName = "LineChart"
LineChart.__ui__ = "LineChart"
