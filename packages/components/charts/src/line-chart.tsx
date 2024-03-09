import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
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
    w,
    width,
    minW,
    minWidth,
    maxW,
    maxWidth,
    h,
    height,
    minH,
    minHeight,
    maxH,
    maxHeight,
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
    ...computedProps
  } = omitThemeProps(mergedProps)

  const { getContainerProps } = useChart({ containerProps })
  const { getGridProps } = useChartGrid({
    gridProps,
    gridAxis,
    strokeDasharray,
    styles,
  })
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
  const { getTooltipProps } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
  })
  const { getLegendProps } = useChartLegend({ legendProps })
  const {
    getLineProps,
    getLineChartProps,
    getCSSvariables,
    setHighlightedArea,
  } = useLineChart({
    layoutType,
    series,
    referenceLineProps,
    styles,
    ...computedProps,
  })

  const lines = series.map((_, index) => (
    <Line key={`line-${index}`} {...getLineProps({ index }, ref)} />
  ))

  const referenceLinesItems = referenceLineProps?.map((_, index) => (
    <ReferenceLine
      key={`referenceLine-${index}`}
      {...getReferenceLineProps({ index }, ref)}
    />
  ))

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-line-chart", className)}
        var={getCSSvariables}
        {...{
          w,
          width,
          minW,
          minWidth,
          maxW,
          maxWidth,
          h,
          height,
          minH,
          minHeight,
          maxH,
          maxHeight,
        }}
        __css={{ ...styles.container }}
      >
        <ResponsiveContainer {...getContainerProps({}, ref)}>
          <ReChartsLineChart {...getLineChartProps({}, ref)}>
            {referenceLinesItems}
            <CartesianGrid {...getGridProps({}, ref)} />
            <XAxis {...getXAxisProps()} />
            <YAxis {...getYAxisProps()} />
            {withLegend ? (
              <ReChartsLegend
                content={({ payload }) => (
                  <Legend
                    ref={ref}
                    payload={payload}
                    onHighlight={setHighlightedArea}
                  />
                )}
                {...getLegendProps({}, ref)}
              />
            ) : null}
            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip ref={ref} label={label} payload={payload} />
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
