import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import {
  Legend as ReChartsLegend,
  BarChart as ReChartsBarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts"
import type { XAxisProps, YAxisProps } from "recharts"
import { ChartTooltip } from "./chart-tooltip"
import type {
  AreaChartType,
  AxisType,
  BarChartSeries,
  BarChartUIProps,
  ContainerUIProps,
  LayoutType,
  LegendUIProps,
  TooltipUIProps,
} from "./chart.types"
import { Legend } from "./legend"
import { BarChartProvider, useBarChart } from "./use-bar-chart"
import { ChartProvider } from "./use-chart"
import { useChartLegend } from "./use-chart-legend"
import { useChartTooltip } from "./use-chart-tooltip"

type BarChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: BarChartSeries[]
  /**
   *  The key of a group of data which should be unique in an area chart.
   */
  dataKey: string
  /**
   *  Controls how chart areas are positioned relative to each other
   *
   * @default `default`
   */
  type?: AreaChartType
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 1
   */
  fillOpacity?: number
  /**
   *  A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default '["red.400", "green.400"]'
   */
  splitColors?: [string, string]
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   *  Props passed down to recharts `AreaChart` component.
   */
  barChartProps?: BarChartUIProps
  /**
   *  Props passed down to recharts `ResponsiveContainer` component.
   */
  containerProps?: ContainerUIProps
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * If `true`, X axis is visible.
   *
   * @default true
   */
  withXAxis?: boolean
  /**
   * If `true`, Y axis is visible.
   *
   * @default true
   */
  withYAxis?: boolean
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
   * Specifies the duration of animation, the unit of this option is ms.
   *
   * @default 0
   */
  tooltipAnimationDuration?: number
  /**
   * The option is the configuration of tick lines.
   *
   * @default 'y'
   */
  tickLine?: AxisType
  /**
   * Specifies which lines should be displayed in the grid.
   *
   * @default 'x'
   */
  gridAxis?: AxisType
  /**
   * Chart orientation.
   *
   * @default 'horizontal'
   */
  orientation?: LayoutType
  /**
   *  Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
  /**
   *  Props passed down to recharts 'XAxis' component.
   */
  xAxisProps?: XAxisProps
  /**
   *  Props passed down to recharts 'YAxis' component.
   */
  yAxisProps?: YAxisProps
  /**
   *  Props passed down to recharts 'Legend' component.
   */
  legendProps?: LegendUIProps
  /**
   *  Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: TooltipUIProps
}

export type BarChartProps = HTMLUIProps<"div"> &
  ThemeProps<"BarChart"> &
  BarChartOptions

export const BarChart = forwardRef<BarChartProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("BarChart", props)
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
    data,
    withTooltip = true,
    series,
    type = "default",
    withLegend = false,
    tooltipProps,
    tooltipAnimationDuration,
    legendProps,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {
    getBarProps,
    getBarChartProps,
    getContainerProps,
    getXAxisProps,
    getYAxisProps,
    getCSSvariables,
    setHighlightedArea,
  } = useBarChart({
    data,
    type,
    series,
    styles,
    ...computedProps,
  })

  const { getTooltipProps } = useChartTooltip({
    tooltipProps,
    tooltipAnimationDuration,
  })
  const { getLegendProps } = useChartLegend({ legendProps })

  const bars = series.map((item, index) => {
    return <Bar key={index} {...getBarProps({ item, index }, ref)} />
  })

  return (
    <ChartProvider value={{ styles }}>
      <BarChartProvider value={{}}>
        <ui.div
          ref={ref}
          className={cx("ui-bar-chart", className)}
          var={getCSSvariables()}
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
            data,
          }}
          __css={{ ...styles.container }}
        >
          <ResponsiveContainer {...getContainerProps({}, ref)}>
            <ReChartsBarChart {...getBarChartProps({}, ref)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis {...getXAxisProps()} />
              <YAxis {...getYAxisProps()} />

              {withLegend ? (
                <ReChartsLegend
                  content={({ payload }) => (
                    <Legend
                      payload={payload}
                      onHighlight={setHighlightedArea}
                    />
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
              {bars}
            </ReChartsBarChart>
          </ResponsiveContainer>
        </ui.div>
      </BarChartProvider>
    </ChartProvider>
  )
})
