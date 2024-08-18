import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
  type HTMLUIProps,
  type ThemeProps,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  ResponsiveContainer,
  RadialBarChart as RechartsRadialChart,
  Legend,
  Tooltip,
  RadialBar,
  LabelList,
} from "recharts"
import { ChartLegend } from "./chart-legend"
import { ChartTooltip } from "./chart-tooltip"
import type { TooltipDataSourceType } from "./chart.types"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import {
  useChartLabelList,
  type UseChartLabelListOptions,
} from "./use-chart-label-list"
import { useChartLegend, type UseChartLegendProps } from "./use-chart-legend"
import {
  useChartTooltip,
  type UseChartTooltipOptions,
} from "./use-chart-tooltip"
import { useRadialChart, type UseRadialChartOptions } from "./use-radial-chart"

type RadialChartOptions = {
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
}

export type RadialChartProps = HTMLUIProps<"div"> &
  ThemeProps<"radialChart"> &
  RadialChartOptions &
  UseRadialChartOptions &
  UseChartTooltipOptions &
  UseChartLegendProps &
  UseChartLabelListOptions &
  UseChartProps

/**
 * `RadialChart` is a component for drawing radial charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/radial-chart
 */
export const RadialChart = forwardRef<RadialChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("RadialChart", props)
  const {
    className,
    data,
    dataKey,
    chartProps,
    radialBarProps,
    containerProps,
    withTooltip = true,
    withLegend = false,
    tooltipProps,
    tooltipAnimationDuration,
    tooltipDataSource = "all",
    valueFormatter,
    legendProps,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fillOpacity,
    labelListProps = [],
    ...rest
  } = omitThemeProps(mergedProps)

  const { getRadialChartProps, getRadialBarProps, radialVars } = useRadialChart(
    {
      data,
      dataKey,
      styles,
      chartProps,
      radialBarProps,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fillOpacity,
    },
  )
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
  const { getLabelLineProps } = useChartLabelList({ labelListProps, styles })

  const labelLists = useMemo(
    () =>
      labelListProps.map((_, index) => (
        <LabelList
          key={`labelList-${index}`}
          {...getLabelLineProps({
            index,
            className: "ui-radial-chart__label-list",
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
        var={radialVars}
        __css={{ maxW: "full", ...styles.container }}
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
                    className="ui-pie-chart__legend"
                    payload={payload}
                    // onHighlight={setHighlightedArea}
                    onHighlight={() => {}}
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
                    className="ui-pie-chart__tooltip"
                    label={label}
                    payload={tooltipDataSource === "segment" ? payload : data}
                    valueFormatter={valueFormatter}
                    // unit={unit}
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