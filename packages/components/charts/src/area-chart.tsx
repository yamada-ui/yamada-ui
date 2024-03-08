import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { RefObject } from "react"
import { Fragment, useMemo } from "react"
import {
  CartesianGrid,
  Legend as ReChartsLegend,
  AreaChart as ReChartsAreaChart,
  Area,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { AreaGradient } from "./area-chart-gradient"
import { AreaSplit } from "./area-chart-split"
import { Legend } from "./legend"
import { ChartTooltip } from "./tooltip"
import type { UseAreaChartOptions } from "./use-area-chart"
import { useAreaChart } from "./use-area-chart"
import { ChartProvider } from "./use-chart"
import type { UseChartAxisOptions } from "./use-chart-axis"
import { useChartAxis } from "./use-chart-axis"
import type { UseChartContainerProps } from "./use-chart-container"
import { useChartContainer } from "./use-chart-container"
import type { UseChartGridOptions } from "./use-chart-grid"
import { useChartGrid } from "./use-chart-grid"
import type { UseChartLegendProps } from "./use-chart-legend"
import { useChartLegend } from "./use-chart-legend"
import type { UseChartReferenceLineOptions } from "./use-chart-reference-line"
import { useChartReferenceLine } from "./use-chart-reference-line"
import type { UseChartTooltipProps } from "./use-chart-tooltip"
import { useChartTooltip } from "./use-chart-tooltip"

type AreaChartOptions = {
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
  containerRef?: RefObject<HTMLDivElement>
}

export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions &
  UseAreaChartOptions &
  UseChartContainerProps &
  UseChartAxisOptions &
  UseChartReferenceLineOptions &
  UseChartGridOptions &
  UseChartTooltipProps &
  UseChartLegendProps

export const AreaChart = forwardRef<AreaChartProps, "svg">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
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
    referenceLineProps,
    containerProps,
    unit,
    gridProps,
    strokeDasharray,
    valueFormatter,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    containerRef,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    getAreaChartProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    getCSSvariables,
    setHighlightedArea,
  } = useAreaChart({
    layoutType,
    type,
    series,
    referenceLineProps,
    styles,
    ...rest,
  })
  // TODO: useChartに突っ込む
  const { getContainerProps } = useChartContainer({ containerProps })
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

  // TODO: メモ化による影響を調査する
  const areas = useMemo(
    () =>
      series.map(({ dataKey }, index) => {
        const { id, stroke, ...rest } = getAreaProps({ index })

        return (
          <Fragment key={`area-${dataKey}`}>
            <ui.defs>
              <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
            </ui.defs>

            <Area id={id} stroke={stroke} {...rest} />
          </Fragment>
        )
      }),
    [getAreaGradientProps, getAreaProps, series],
  )

  const referenceLinesItems = referenceLineProps?.map((_, index) => (
    <ReferenceLine
      key={`referenceLine-${index}`}
      {...getReferenceLineProps({ index })}
    />
  ))

  // TODO:
  const gridRef = null

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={containerRef}
        className={cx("ui-area-chart", className)}
        var={getCSSvariables}
        __css={{ ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer {...getContainerProps()}>
          <ReChartsAreaChart {...getAreaChartProps({}, ref)}>
            {referenceLinesItems}

            <CartesianGrid {...getGridProps({}, gridRef)} />
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
                {...getTooltipProps()}
              />
            ) : null}

            {type === "split" ? (
              <ui.defs>
                <AreaSplit {...getAreaSplitProps()} />
              </ui.defs>
            ) : null}
            {areas}
          </ReChartsAreaChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
