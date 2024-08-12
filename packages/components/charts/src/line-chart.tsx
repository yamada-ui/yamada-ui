import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  LineChart as ReChartsLineChart,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  Line,
  Label,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import { useChartAxis } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import { useChartGrid } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import { useChartReferenceLine } from "./use-chart-reference-line"
import {
  useChartTooltip,
  type UseChartTooltipOptions,
} from "./use-chart-tooltip"
import { useLineChart } from "./use-line-chart"
import type { UseLineChartOptions } from "./use-line-chart"

type LineChartOptions = {
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

export type LineChartProps = HTMLUIProps<"div"> &
  ThemeProps<"LineChart"> &
  LineChartOptions &
  UseChartProps &
  UseChartAxisOptions &
  UseChartReferenceLineOptions &
  UseChartGridOptions &
  UseChartTooltipOptions &
  UseChartLegendProps &
  UseLineChartOptions

/**
 * `LineChart` is a component for drawing line charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/line-chart
 */
export const LineChart = forwardRef<LineChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("LineChart", props)
  const {
    className,
    containerProps,
    gridProps,
    gridAxis,
    strokeDasharray,
    dataKey,
    type,
    layoutType,
    tickLine,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    xAxisLabel,
    yAxisLabel,
    xAxisLabelProps,
    yAxisLabelProps,
    unit,
    yAxisTickFormatter,
    xAxisTickFormatter,
    valueFormatter,
    labelFormatter,
    referenceLineProps,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    withLegend = false,
    withTooltip = true,
    series,
    data,
    chartProps,
    lineProps,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    syncId,
    ...rest
  } = omitThemeProps(mergedProps)

  const { getLineProps, getLineChartProps, lineVars, setHighlightedArea } =
    useLineChart({
      layoutType,
      series,
      referenceLineProps,
      data,
      chartProps,
      lineProps,
      withDots,
      withActiveDots,
      curveType,
      strokeWidth,
      connectNulls,
      fillOpacity,
      syncId,
      xAxisLabel,
      yAxisLabel,
      styles,
    })
  const { getContainerProps } = useChart({ containerProps })
  const {
    getXAxisProps,
    getYAxisProps,
    getXAxisLabelProps,
    getYAxisLabelProps,
  } = useChartAxis({
    dataKey,
    type,
    layoutType,
    tickLine,
    gridAxis,
    withXAxis,
    withYAxis,
    xAxisProps,
    yAxisProps,
    xAxisLabel,
    yAxisLabel,
    xAxisLabelProps,
    yAxisLabelProps,
    unit,
    yAxisTickFormatter,
    xAxisTickFormatter,
    styles,
  })
  const { getReferenceLineProps } = useChartReferenceLine({
    referenceLineProps,
    styles,
  })
  const { getGridProps } = useChartGrid({
    gridProps,
    gridAxis,
    strokeDasharray,
    styles,
  })
  const { tooltipProps: computedTooltipProps, getTooltipProps } =
    useChartTooltip({
      tooltipProps,
      tooltipAnimationDuration,
      styles,
    })
  const { legendProps: computedLegendProps, getLegendProps } = useChartLegend({
    legendProps,
  })

  const lines = useMemo(
    () =>
      series.map(({ dataKey }, index) => (
        <Line
          key={`line-${dataKey}`}
          {...getLineProps({ index, className: "ui-line-chart__line" })}
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
            index,
            className: "ui-line-chart__reference-line",
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
        var={lineVars}
        __css={{ ...styles.container }}
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
                    payload={payload}
                    valueFormatter={valueFormatter}
                    labelFormatter={labelFormatter}
                    unit={unit}
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
