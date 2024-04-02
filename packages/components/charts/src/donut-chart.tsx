import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useMultiComponentStyle,
} from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import {
  Cell,
  Pie,
  PieChart as RechartsDonutChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { ChartTooltip } from "./chart-tooltip"
import type { TooltipDataSourceType } from "./chart.types"
import type { UseChartProps } from "./use-chart"
import { ChartProvider, useChart } from "./use-chart"
import {
  useChartTooltip,
  type UseChartTooltipOptions,
} from "./use-chart-tooltip"
import type { UseDonutChartOptions } from "./use-donut-chart"
import { useDonutChart } from "./use-donut-chart"

type DonutChartOptions = {
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
  /**
   * Determines which data is displayed in the tooltip.
   *
   * @default 'all'
   */
  tooltipDataSource?: TooltipDataSourceType
  /**
   * A function to format values inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
}

export type DonutChartProps = HTMLUIProps<"div"> &
  ThemeProps<"DonutChart"> &
  DonutChartOptions &
  UseDonutChartOptions &
  UseChartTooltipOptions &
  UseChartProps

/**
 * `DonutChart` is a component for drawing donut charts to compare multiple sets of data.
 *
 * @see Docs https://yamada-ui.com/components/feedback/donut-chart
 */
export const DonutChart = forwardRef<DonutChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("DonutChart", props)
  const {
    className,
    data,
    donutProps,
    chartProps,
    cellProps,
    containerProps,
    withTooltip = true,
    tooltipProps,
    tooltipAnimationDuration,
    tooltipDataSource = "all",
    valueFormatter,
    unit,
    innerRadius,
    outerRadius,
    paddingAngle,
    startAngle,
    endAngle,
    withLabel,
    withLabelsLine,
    strokeWidth,
    ...rest
  } = omitThemeProps(mergedProps)

  const { donutVars, getDonutProps, getDonutChartProps, getCellProps } =
    useDonutChart({
      data,
      donutProps,
      chartProps,
      cellProps,
      innerRadius,
      outerRadius,
      paddingAngle,
      startAngle,
      endAngle,
      strokeWidth,
      withLabel,
      withLabelsLine,
      styles,
    })
  const { getContainerProps } = useChart({ containerProps })
  const {
    tooltipProps: computedTooltipProps,
    getTooltipProps,
    tooltipVars,
  } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
    styles,
  })

  const cells = useMemo(
    () =>
      data.map(({ name }, index) => (
        <Cell
          key={`donut-cell-${name}`}
          {...getCellProps({ index, className: "ui-donut-chart__cell" })}
        />
      )),
    [data, getCellProps],
  )

  return (
    <ChartProvider value={{ styles }}>
      <ui.div
        ref={ref}
        className={cx("ui-donut-chart", className)}
        var={[...donutVars, ...tooltipVars]}
        __css={{ maxW: "full", ...styles.container }}
        {...rest}
      >
        <ResponsiveContainer
          {...getContainerProps({ className: "ui-donut-chart__container" })}
        >
          <RechartsDonutChart
            {...getDonutChartProps({ className: "ui-donut-chart__chart" })}
          >
            <Pie {...getDonutProps({ className: "ui-donut-chart__donut" })}>
              {cells}
            </Pie>

            {withTooltip ? (
              <Tooltip
                content={({ label, payload }) => (
                  <ChartTooltip
                    className="ui-donut-chart__tooltip"
                    label={label}
                    payload={tooltipDataSource === "segment" ? payload : data}
                    valueFormatter={valueFormatter}
                    unit={unit}
                    {...computedTooltipProps}
                  />
                )}
                {...getTooltipProps()}
              />
            ) : null}
          </RechartsDonutChart>
        </ResponsiveContainer>
      </ui.div>
    </ChartProvider>
  )
})
