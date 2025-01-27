import type { HTMLUIProps, ThemeProps } from "../../core"
import type { TooltipDataSourceType } from "./chart.types"
import type { UseChartProps } from "./use-chart"
import type { UseChartLabelListOptions } from "./use-chart-label-list"
import type { UseChartLegendProps } from "./use-chart-legend"
import type { UseChartTooltipOptions } from "./use-chart-tooltip"
import type { UsePolarGridOptions } from "./use-polar-grid"
import type { UseRadialChartOptions } from "./use-radial-chart"
import { useMemo } from "react"
import {
  LabelList,
  Legend,
  PolarGrid,
  RadialBar,
  RadialBarChart as RechartsRadialChart,
  ResponsiveContainer,
  Tooltip,
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
import { useChartLabelList } from "./use-chart-label-list"
import { useChartLegend } from "./use-chart-legend"
import { useChartTooltip } from "./use-chart-tooltip"
import { usePolarGrid } from "./use-polar-grid"
import { useRadialChart } from "./use-radial-chart"

interface RadialChartOptions {
  /**
   * Determines which data is displayed in the tooltip.
   *
   * @default 'all'
   */
  tooltipDataSource?: TooltipDataSourceType
  /**
   * Unit displayed next to each value in tooltip.
   */
  unit?: string
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * Determines whether polarGrid should be displayed.
   *
   * @default false
   */
  withPolarGrid?: boolean
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
}

export interface RadialChartProps
  extends Omit<HTMLUIProps, "fillOpacity" | "strokeDasharray">,
    ThemeProps<"radialChart">,
    RadialChartOptions,
    UseRadialChartOptions,
    UseChartTooltipOptions,
    UseChartLegendProps,
    UseChartLabelListOptions,
    UsePolarGridOptions,
    UseChartProps {}

/**
 * `RadialChart` is a component for drawing radial charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/data-display/radial-chart
 */
export const RadialChart = forwardRef<RadialChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("RadialChart", props)
  const {
    className,
    data,
    dataKey,
    endAngle,
    fillOpacity,
    innerRadius,
    outerRadius,
    startAngle,
    strokeDasharray,
    tooltipAnimationDuration,
    tooltipDataSource = "all",
    unit,
    valueFormatter,
    withLegend = false,
    withPolarGrid = false,
    withTooltip = true,
    chartProps,
    containerProps,
    labelListProps = [],
    legendProps,
    polarGridProps,
    radialBarProps,
    tooltipProps,
    ...rest
  } = omitThemeProps(mergedProps)

  const {
    radialVars,
    setHighlightedArea,
    getRadialBarProps,
    getRadialChartProps,
  } = useRadialChart({
    data,
    dataKey,
    endAngle,
    fillOpacity,
    innerRadius,
    outerRadius,
    startAngle,
    styles,
    chartProps,
    radialBarProps,
  })
  const { getContainerProps } = useChart({ containerProps })
  const { getTooltipProps, tooltipProps: computedTooltipProps } =
    useChartTooltip({
      styles,
      tooltipAnimationDuration,
      tooltipProps,
    })
  const { getLegendProps, legendProps: computedLegendProps } = useChartLegend({
    legendProps,
  })
  const { getLabelLineProps } = useChartLabelList({ styles, labelListProps })
  const { getPolarGridProps } = usePolarGrid({
    strokeDasharray,
    styles,
    polarGridProps,
  })

  const radialChart = tooltipDataSource === "segment"

  const labelLists = useMemo(
    () =>
      labelListProps.map((_, index) => (
        <LabelList
          key={`labelList-${index}`}
          {...getLabelLineProps({
            className: "ui-radial-chart__label-list",
            index,
          })}
        />
      )),
    [getLabelLineProps, labelListProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-radial-chart", className)}
        __css={{ maxW: "full", vars: radialVars, ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-radial-chart__container" })}
        >
          <RechartsRadialChart
            {...getRadialChartProps({
              className: "ui-radial-chart__chart",
            })}
          >
            {withPolarGrid ? (
              <PolarGrid
                {...getPolarGridProps({
                  className: "ui-radial-chart__polar-grid",
                })}
              />
            ) : null}

            <RadialBar
              {...getRadialBarProps({
                className: "ui-radial-chart__radial-bar",
              })}
            >
              {labelLists}
            </RadialBar>

            {withLegend ? (
              <Legend
                content={({ payload }) => (
                  <ChartLegend
                    className="ui-radial-chart__legend"
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
                content={({ payload }) => (
                  <ChartTooltip
                    className="ui-radial-chart__tooltip"
                    payload={radialChart ? payload : data}
                    radialChart={radialChart}
                    unit={unit}
                    valueFormatter={valueFormatter}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}
          </RechartsRadialChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})

RadialChart.displayName = "RadialChart"
RadialChart.__ui__ = "RadialChart"
