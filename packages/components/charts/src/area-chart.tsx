import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useComponentMultiStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { Fragment, useMemo } from "react"
import {
  CartesianGrid,
  Legend,
  AreaChart as ReChartsAreaChart,
  Area,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts"
import { AreaGradient } from "./area-chart-gradient"
import { AreaSplit } from "./area-chart-split"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { UseAreaChartOptions } from "./use-area-chart"
import { useAreaChart } from "./use-area-chart"
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
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"

interface AreaChartOptions {
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

export interface AreaChartProps
  extends Omit<HTMLUIProps, "strokeWidth" | "fillOpacity" | "strokeDasharray">,
    ThemeProps<"AreaChart">,
    AreaChartOptions,
    UseAreaChartOptions,
    UseChartProps,
    UseChartAxisOptions,
    UseChartReferenceLineOptions,
    UseChartGridOptions,
    UseChartTooltipOptions,
    UseChartLegendProps {}

/**
 * `AreaChart` is a component for drawing area charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/area-chart
 */
export const AreaChart = forwardRef<AreaChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("AreaChart", props)
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
    xAxisLabel,
    yAxisLabel,
    xAxisLabelProps,
    yAxisLabelProps,
    type = "default",
    withTooltip = true,
    withLegend = false,
    referenceLineProps = [],
    containerProps,
    unit,
    gridProps,
    strokeDasharray,
    yAxisTickFormatter,
    xAxisTickFormatter,
    valueFormatter,
    labelFormatter,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    data,
    chartProps,
    areaProps,
    withGradient,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    splitColors,
    splitOffset,
    syncId,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    getAreaChartProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    areaVars,
    setHighlightedArea,
  } = useAreaChart({
    layoutType,
    type,
    series,
    referenceLineProps,
    data,
    chartProps,
    areaProps,
    withGradient,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    splitColors,
    splitOffset,
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

  const areas = useMemo(
    () =>
      series.map(({ dataKey }, index) => {
        const { id, stroke, ...rest } = getAreaProps({
          index,
          className: "ui-area-chart__area",
        })

        return (
          <Fragment key={`area-${dataKey}`}>
            <defs>
              <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
            </defs>

            <Area id={id} stroke={stroke} {...rest} />
          </Fragment>
        )
      }),
    [getAreaGradientProps, getAreaProps, series],
  )

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({
            index,
            className: "ui-area-chart__reference-line",
          })}
        />
      )),
    [getReferenceLineProps, referenceLineProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-area-chart", className)}
        __css={{ maxW: "full", vars: areaVars, ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-area-chart__container" })}
        >
          <ReChartsAreaChart
            {...getAreaChartProps({ className: "ui-area-chart__chart" })}
          >
            <CartesianGrid
              {...getGridProps({ className: "ui-area-chart__grid" })}
            />

            <XAxis {...getXAxisProps({ className: "ui-area-chart__x-axis" })}>
              <Label
                {...getXAxisLabelProps({
                  className: "ui-area-chart__x-axis-label",
                })}
              />
            </XAxis>

            <YAxis {...getYAxisProps({ className: "ui-area-chart__y-axis" })}>
              <Label
                {...getYAxisLabelProps({
                  className: "ui-area-chart__y-axis-label",
                })}
              />
            </YAxis>

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
                    className="ui-area-chart__tooltip"
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

            {type === "split" ? (
              <defs>
                <AreaSplit {...getAreaSplitProps()} />
              </defs>
            ) : null}

            {areas}
            {referenceLinesItems}
          </ReChartsAreaChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})

AreaChart.displayName = "AreaChart"
AreaChart.__ui__ = "AreaChart"
