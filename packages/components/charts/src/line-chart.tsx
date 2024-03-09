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
  Legend as ReChartsLegend,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  Line,
} from "recharts"
import { Legend } from "./legend"
import { ChartTooltip } from "./tooltip"
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
import { useChartTooltip, type UseChartTooltipProps } from "./use-chart-tooltip"
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
  UseChartTooltipProps &
  UseChartLegendProps &
  UseLineChartOptions

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
    unit,
    valueFormatter,
    referenceLineProps,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    withLegend = false,
    withTooltip = true,
    series,
    data,
    lineChartProps,
    activeDotProps,
    dotProps,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    getLineProps,
    getLineChartProps,
    getCSSvariables,
    setHighlightedArea,
  } = useLineChart({
    layoutType,
    series,
    referenceLineProps,
    data,
    lineChartProps,
    activeDotProps,
    dotProps,
    withDots,
    withActiveDots,
    curveType,
    strokeWidth,
    connectNulls,
    fillOpacity,
    styles,
  })
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
  const { getTooltipProps } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
  })
  const { getLegendProps } = useChartLegend({ legendProps })

  const lines = useMemo(
    () =>
      series.map((_, index) => (
        <Line key={`line-${index}`} {...getLineProps({ index })} />
      )),
    [getLineProps, series],
  )

  const referenceLinesItems = useMemo(
    () =>
      referenceLineProps?.map((_, index) => (
        <ReferenceLine
          key={`referenceLine-${index}`}
          {...getReferenceLineProps({ index })}
        />
      )),
    [getReferenceLineProps, referenceLineProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-line-chart", className)}
        var={getCSSvariables}
        __css={{ ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer {...getContainerProps()}>
          <ReChartsLineChart {...getLineChartProps()}>
            {referenceLinesItems}

            <CartesianGrid {...getGridProps()} />
            <XAxis {...getXAxisProps()} />
            <YAxis {...getYAxisProps()} />

            {withLegend ? (
              <ReChartsLegend
                content={({ payload }) => (
                  <Legend payload={payload} onHighlight={setHighlightedArea} />
                )}
                {...getLegendProps()}
              />
            ) : null}

            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip label={label} payload={payload} />
                )}
                {...getTooltipProps({}, ref)}
              />
            ) : null}

            {lines}
          </ReChartsLineChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
