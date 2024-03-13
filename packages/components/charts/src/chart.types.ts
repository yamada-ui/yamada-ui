import type { As, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react"
import type {
  AreaChart as ReChartsAreaChart,
  AreaProps as ReChartsAreaProps,
  BarChart as ReChartsBarChart,
  BarProps as ReChartsBarProps,
  LineChart as ReChartsLineChart,
  LineProps as ReChartsLineProps,
  ReferenceLineProps,
  DotProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  CartesianGridProps,
  TooltipProps,
  ResponsiveContainerProps,
  CellProps,
} from "recharts"

export type ChartPropGetter<
  Y extends As = "div",
  M = undefined,
  D = undefined,
> = (props?: Merge<HTMLUIProps<Y>, M>, ref?: React.Ref<any>) => D

export type RequiredChartPropGetter<
  Y extends As = "div",
  M = undefined,
  D = undefined,
> = (props: Merge<HTMLUIProps<Y>, M>, ref?: React.Ref<any>) => D

export type ChartTooltipType =
  | ReactElement
  | ((
      props: TooltipProps<
        number | string | Array<number | string>,
        number | string
      >,
    ) => ReactNode)
export type LayoutType = "horizontal" | "vertical"
export type AreaChartType = "default" | "stacked" | "percent" | "split"
export type AxisType = "x" | "y" | "xy" | "none"
export type CurveType =
  | "bump"
  | "linear"
  | "natural"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"
export type AreaChartSeries = Merge<
  Merge<CSSUIProps, ReChartsAreaProps>,
  {
    color: CSSUIProps["color"]
    activeDot?: DotUIProps
    dot?: DotUIProps
  }
>
export type BarChartSeries = Merge<
  Merge<CSSUIProps, ReChartsBarProps>,
  { color: CSSUIProps["color"] }
>
export type LineChartSeries = Merge<
  Merge<CSSUIProps, ReChartsLineProps>,
  { color: CSSUIProps["color"] }
>
export type AreaChartUIProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof ReChartsAreaChart>
>
export type BarChartUIProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof ReChartsBarChart>
>
export type LineChartUIProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof ReChartsLineChart>
>
export type ReferenceLineUIProps = Merge<CSSUIProps, ReferenceLineProps>
export type ContainerUIProps = Merge<
  CSSUIProps,
  Omit<ResponsiveContainerProps, "children">
>
export type DotUIProps = Merge<Omit<DotProps, "ref">, CSSUIProps>
export type XAxisUIProps = Merge<
  Merge<CSSUIProps, XAxisProps>,
  {
    color?: CSSUIProps["color"]
    stroke?: CSSUIProps["color"]
    fill?: CSSUIProps["color"]
  }
>
export type YAxisUIProps = Merge<
  Merge<CSSUIProps, YAxisProps>,
  { color?: CSSUIProps["color"] }
>
export type LegendUIProps = Merge<CSSUIProps, Omit<LegendProps, "ref">>
export type TooltipUIProps = Merge<
  CSSUIProps,
  Omit<TooltipProps<any, any>, "ref">
>
export type GridUIProps = Merge<CSSUIProps, CartesianGridProps>

export const areaChartProperties: (keyof ComponentPropsWithoutRef<
  typeof ReChartsAreaChart
>)[] = [
  "layout",
  "syncId",
  "syncMethod",
  "width",
  "height",
  "data",
  "margin",
  "stackOffset",
  "onClick",
  "onMouseEnter",
  "onMouseMove",
  "onMouseLeave",
]
export const barChartProperties: (keyof ComponentPropsWithoutRef<
  typeof ReChartsBarChart
>)[] = [
  "layout",
  "syncId",
  "syncMethod",
  "width",
  "height",
  "data",
  "margin",
  "stackOffset",
  "onClick",
  "onMouseEnter",
  "onMouseMove",
  "onMouseLeave",
]
export const lineChartProperties: (keyof ComponentPropsWithoutRef<
  typeof ReChartsLineChart
>)[] = [
  "layout",
  "syncId",
  "syncMethod",
  "width",
  "height",
  "data",
  "margin",
  "onClick",
  "onMouseEnter",
  "onMouseMove",
  "onMouseLeave",
]
export const referenceLineProperties: (keyof ReferenceLineProps)[] = [
  "xAxisId",
  "yAxisId",
  "x",
  "y",
  "ifOverflow",
  "viewBox",
  "xAxis",
  "yAxis",
  "label",
  "isFront",
  "strokeWidth",
  "segment",
]
export const containerProperties: (keyof Omit<
  ResponsiveContainerProps,
  "children"
>)[] = [
  "aspect",
  "width",
  "height",
  "minWidth",
  "minHeight",
  "debounce",
  "onResize",
]
export const gridProperties: (keyof CartesianGridProps)[] = [
  "x",
  "y",
  "width",
  "height",
  "horizontal",
  "vertical",
  "horizontalPoints",
  "horizontalCoordinatesGenerator",
  "verticalPoints",
  "verticalCoordinatesGenerator",
  "fill",
  "fillOpacity",
  "strokeDasharray",
]
export const xAxisProperties: (keyof XAxisProps)[] = [
  "hide",
  "dataKey",
  "xAxisId",
  "width",
  "height",
  "orientation",
  "type",
  "allowDecimals",
  "allowDataOverflow",
  "allowDuplicatedCategory",
  "angle",
  "tickCount",
  "domain",
  "includeHidden",
  "interval",
  "padding",
  "minTickGap",
  "axisLine",
  "tickLine",
  "tickSize",
  "tickFormatter",
  "ticks",
  "tick",
  "mirror",
  "reversed",
  "label",
  "scale",
  "unit",
  "name",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
  "tickMargin",
]
export const yAxisProperties: (keyof YAxisProps)[] = [
  "hide",
  "dataKey",
  "yAxisId",
  "width",
  "height",
  "orientation",
  "type",
  "tickCount",
  "domain",
  "includeHidden",
  "interval",
  "padding",
  "minTickGap",
  "allowDecimals",
  "allowDataOverflow",
  "allowDuplicatedCategory",
  "axisLine",
  "tickLine",
  "tickSize",
  "tickFormatter",
  "ticks",
  "tick",
  "mirror",
  "reversed",
  "label",
  "scale",
  "unit",
  "name",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
  "tickMargin",
]
export const legendProperties: (keyof Omit<LegendProps, "ref">)[] = [
  "width",
  "height",
  "layout",
  "align",
  "verticalAlign",
  "iconSize",
  "iconType",
  "payload",
  "chartWidth",
  "chartHeight",
  "margin",
  "content",
  "formatter",
  "wrapperStyle",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
]
export const tooltipProperties: (keyof TooltipProps<any, any>)[] = [
  "offset",
  "filterNull",
  "itemStyle",
  "wrapperStyle",
  "contentStyle",
  "labelStyle",
  "cursor",
  "viewBox",
  "allowEscapeViewBox",
  "active",
  "position",
  "coordinate",
  "payload",
  "label",
  "content",
  "formatter",
  "labelFormatter",
  "itemSorter",
  "isAnimationActive",
  "animationDuration",
  "animationEasing",
]
export const areaProperties: (keyof Omit<ReChartsAreaProps, "ref">)[] = [
  "type",
  "dataKey",
  "xAxisId",
  "yAxisId",
  "legendType",
  "dot",
  "activeDot",
  "label",
  "stroke",
  "strokeWidth",
  "layout",
  "baseLine",
  "points",
  "stackId",
  "connectNulls",
  "unit",
  "name",
  "isAnimationActive",
  "animationBegin",
  "animationDuration",
  "animationEasing",
  "id",
  "onAnimationStart",
  "onAnimationEnd",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
]
export const barProperties: (keyof Omit<ReChartsBarProps, "ref">)[] = [
  "type",
  "dataKey",
  "xAxisId",
  "yAxisId",
  "legendType",
  "label",
  "stroke",
  "strokeWidth",
  "layout",
  "points",
  "stackId",
  "unit",
  "name",
  "isAnimationActive",
  "animationBegin",
  "animationDuration",
  "animationEasing",
  "id",
  "onAnimationStart",
  "onAnimationEnd",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
]
export const lineProperties: (keyof Omit<ReChartsLineProps, "ref">)[] = [
  "type",
  "dataKey",
  "xAxisId",
  "yAxisId",
  "legendType",
  "dot",
  "activeDot",
  "label",
  "hide",
  "points",
  "stroke",
  "strokeWidth",
  "layout",
  "connectNulls",
  "unit",
  "name",
  "isAnimationActive",
  "animationBegin",
  "animationDuration",
  "animationEasing",
  "id",
  "onAnimationStart",
  "onAnimationEnd",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
  "strokeDasharray",
]
export const dotProperties: (keyof Omit<DotProps, "ref">)[] = [
  "cx",
  "cy",
  "r",
  "onClick",
  "onMouseDown",
  "onMouseUp",
  "onMouseMove",
  "onMouseOver",
  "onMouseOut",
  "onMouseEnter",
  "onMouseLeave",
]

export const cellProperties: (keyof CellProps)[] = ["fill", "stroke"]
