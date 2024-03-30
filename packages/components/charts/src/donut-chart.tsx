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
   * If `true`, legend is visible.
   *
   * @default false
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
    containerProps,
    withTooltip = true,
    tooltipProps,
    tooltipAnimationDuration,
    valueFormatter,
    unit,
    ...rest
  } = omitThemeProps(mergedProps)

  const { donutVars, getDonutProps, getDonutChartProps, getCellProps } =
    useDonutChart({
      data,
      donutProps,
      chartProps,
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
                content={({ label }) => (
                  <ChartTooltip
                    className="ui-donut-chart__tooltip"
                    label={label}
                    payload={data}
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
