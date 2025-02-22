import type { HTMLUIProps } from "../../core"
import type { LineChartStyle } from "./line-chart.style"
import type { UseChartProps } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import type { UseChartGridOptions } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import type {
  UseChartReferenceLineOptions} from "./use-chart-reference-line";
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import type { UseLineChartProps, UseLineChartReturn } from "./use-line-chart"
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
import { createSlotComponent, ui } from "../../core"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import { lineChartStyle } from "./line-chart.style"
import { useChart } from "./use-chart"
import { useChartAxis } from "./use-chart-axis"
import { useChartGrid } from "./use-chart-grid"
import { useChartLegend } from "./use-chart-legend"
import {
  useChartReferenceLine
} from "./use-chart-reference-line"
import { useChartTooltip } from "./use-chart-tooltip"
import { useLineChart } from "./use-line-chart"

export interface LineChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray" | "strokeWidth">,
    UseLineChartProps,
    UseChartProps,
    UseChartAxisOptions,
    UseChartLegendProps,
    UseChartTooltipOptions,
    UseChartReferenceLineOptions,
    UseChartGridOptions {
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

interface LineChartContext
  extends Pick<UseLineChartReturn, "getLineChartProps"> {}

export const {
  PropsContext: LineChartPropsContext,
  usePropsContext: useLineChartPropsContext,
  useStyleContext,
  withContext,
  withProvider,
} = createSlotComponent<LineChartProps, LineChartStyle, LineChartContext>(
  "line-chart",
  lineChartStyle,
)

/**
 * `LineChart` is a component for drawing line charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/line-chart
 */
export const LineChart = withProvider<"div", LineChartProps>(
  ({
    labelFormatter,
    series,
    unit,
    valueFormatter,
    withLegend,
    withTooltip = true,
    referenceLineProps,
    ...rest
  }) => {
    const styles = useStyleContext()

    const { getContainerProps } = useChart(rest)
    const { lineVars, setHighlightedArea, getLineChartProps, getLineProps } =
      useLineChart({
        series,
        referenceLineProps,
        ...rest,
      })
    const { getGridProps } = useChartGrid({
      styles,
      ...rest,
    })
    const { getTooltipProps, tooltipProps: computedTooltipProps } =
      useChartTooltip({
        styles,
        ...rest,
      })
    const { getLegendProps, legendProps: computedLegendProps } = useChartLegend(
      {
        ...rest,
      },
    )
    const { getReferenceLineProps } = useChartReferenceLine({
      styles,
      referenceLineProps,
    })
    const {
      getXAxisLabelProps,
      getXAxisProps,
      getYAxisLabelProps,
      getYAxisProps,
    } = useChartAxis({
      styles,
      ...rest,
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
      <ui.div vars={lineVars} {...rest}>
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
                    styles={styles}
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
                    styles={styles}
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
    )
  },
  "root",
)()
