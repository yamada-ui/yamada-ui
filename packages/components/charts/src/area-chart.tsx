import type {
  CSSUIObject,
  CSSUIProps,
  HTMLUIProps,
  ThemeProps,
} from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { cx } from "@yamada-ui/utils"
import { Fragment } from "react"
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
} from "recharts"
import type {
  ReferenceLineProps,
  DotProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  CartesianGridProps,
  TooltipProps,
  ResponsiveContainerProps,
} from "recharts"
import { AreaGradient } from "./area-gradient"
import { AreaSplit } from "./area-split"
import type { AxisType } from "./use-area-chart"
import { AreaChartProvider, useAreaChart } from "./use-area-chart"
import { ChartProvider, useChart } from "./use-chart"

export type LayoutType = "horizontal" | "vertical"

export type ChartSeries = {
  name: string
  color: CSSUIProps["color"]
  label?: string
}

export type AreaChartSeries = ChartSeries & {
  strokeDasharray?: string | number
}

export type AreaChartType = "default" | "stacked" | "percent" | "split"

export type AreaChartCurveType =
  | "bump"
  | "linear"
  | "natural"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"

type AreaChartOptions = {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * An array of objects with `name` and `color` keys. Determines which data should be consumed from the `data` array.
   */
  series: AreaChartSeries[]
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
   *  Determines whether the chart area should be represented with a gradient instead of the solid color.
   */
  withGradient?: boolean
  /**
   *  Type of the curve.
   *
   * @default `monotone`
   */
  curveType?: AreaChartCurveType
  /**
   *  Determines whether dots should be displayed.
   *
   * @default true
   */
  withDots?: boolean
  /**
   *  Determines whether activeDots should be displayed.
   *
   * @default true
   */
  withActiveDots?: boolean
  /**
   *  Stroke width for the chart areas.
   *
   * @default 2
   */
  strokeWidth?: number
  /**
   *  Controls fill opacity of all areas.
   *
   * @default 0.2
   */
  fillOpacity?: number
  /**
   *  A tuple of colors used when `type="split"` is set, ignored in all other cases.
   *
   * @default ["red.400", "green.400"]
   */
  splitColors?: [string, string]
  /**
   *  Offset for the split gradient. By default, value is inferred from `data` and `series` if possible. Must be generated from the data array with `getSplitOffset` function.
   */
  splitOffset?: number
  /**
   *  Determines whether points with `null` values should be connected.
   *
   * @default true
   */
  connectNulls?: boolean
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
  tickLine?: string
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
   * Reference lines that should be displayed on the chart.
   */
  referenceLines?: ReferenceLineProps[]
  /**
   * Dash array for the grid lines and cursor. The first number is the length of the solid line section and the second number is the length of the interval.
   *
   * @default '5 5'
   */
  strokeDasharray?: string | number
  /**
   * Unit displayed next to each tick in y-axis.
   */
  unit?: string
  /**
   * A function to format values on Y axis and inside the tooltip
   */
  valueFormatter?: (value: number) => string
  /**
   *  Props passed down to recharts `AreaChart` component.
   */
  areaChartProps?: React.ComponentPropsWithoutRef<typeof ReChartsAreaChart>
  /**
   *  Props passed down to recharts `ResponsiveContainer` component.
   */
  containerProps?: ResponsiveContainerProps
  /**
   *  Props passed down to all dots. Ignored if `withDots={false}` is set.
   */
  dotProps?: Omit<DotProps, "ref">
  /**
   *  Props passed down to all active dots. Ignored if `withDots={false}` is set.
   */
  activeDotProps?: Omit<DotProps, "ref">
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
  legendProps?: Omit<LegendProps, "ref">
  /**
   *  Props passed down to recharts 'Tooltip' component.
   */
  tooltipProps?: Omit<TooltipProps<any, any>, "ref">
  /**
   *  Props passed down to recharts 'CartesianGrid' component.
   */
  gridProps?: CSSUIObject & CartesianGridProps
}

//!rechartのやつがあるなら、それを&で合わせればよいのでは
//AxisLineのプロパティも作っていいかも
export type AreaChartProps = HTMLUIProps<"div"> &
  ThemeProps<"AreaChart"> &
  AreaChartOptions

export const AreaChart = forwardRef<AreaChartProps, "svg">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("AreaChart", props)
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
    series,
    type = "default",
    withTooltip = true,
    withLegend = false,
    referenceLines,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const {} = useChart(computedProps)
  const {
    getAreaChartProps,
    getReferenceLineProps,
    getGridProps,
    getContainerProps,
    getXAxisProps,
    getYAxisProps,
    getLegendProps,
    getTooltipProps,
    getAreaSplitProps,
    getAreaProps,
    getAreaGradientProps,
    getCSSvariables,
  } = useAreaChart({
    type,
    series,
    referenceLines,
    ...computedProps,
  })

  const areas = series.map((item, index) => {
    const { id, stroke, ...rest } = getAreaProps(item, index, {}, ref)

    return (
      <Fragment key={`area-${item.name}`}>
        <defs>
          <AreaGradient {...getAreaGradientProps({ id, color: stroke })} />
        </defs>
        <Area id={id} stroke={stroke} {...rest} />
      </Fragment>
    )
  })

  const referenceLinesItems = referenceLines?.map((line, index) => (
    <ReferenceLine
      key={`referenceLine-${index}`}
      {...getReferenceLineProps(index, line, ref)}
    />
  ))

  //todo varにmapでcolorを登録していく
  return (
    <ui.div
      className={cx("ui-area-chart", className)}
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
      }}
      __css={{ ...styles.container }}
    >
      <ChartProvider value={{ styles }}>
        <AreaChartProvider value={{}}>
          <ResponsiveContainer {...getContainerProps({}, ref)}>
            <ReChartsAreaChart {...getAreaChartProps({}, ref)}>
              {referenceLinesItems}
              <CartesianGrid {...getGridProps({}, ref)} />
              <XAxis {...getXAxisProps()} />
              <YAxis {...getYAxisProps()} />
              {withLegend ? <Legend {...getLegendProps({}, ref)} /> : null}
              {withTooltip ? <Tooltip {...getTooltipProps({}, ref)} /> : null}
              {type === "split" && (
                <defs>
                  <AreaSplit {...getAreaSplitProps()} />
                </defs>
              )}
              {areas}
            </ReChartsAreaChart>
          </ResponsiveContainer>
        </AreaChartProvider>
      </ChartProvider>
    </ui.div>
  )
})
