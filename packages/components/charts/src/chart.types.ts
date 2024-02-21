import type { CSSUIProps } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type {
  AreaChart as ReChartsAreaChart,
  AreaProps as ReChartsAreaProps,
  ReferenceLineProps,
  DotProps,
  XAxisProps,
  YAxisProps,
  LegendProps,
  CartesianGridProps,
  TooltipProps,
  ResponsiveContainerProps,
} from "recharts"

export type LayoutType = "horizontal" | "vertical"
export type AreaChartType = "default" | "stacked" | "percent" | "split"
export type AxisType = "x" | "y" | "xy" | "none"
export type AreaChartCurveType =
  | "bump"
  | "linear"
  | "natural"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"
export type AreaChartSeries = Merge<
  Merge<CSSUIProps, ReChartsAreaProps>,
  { color: CSSUIProps["color"] }
>
export type ReferenceUILineProps = Merge<CSSUIProps, ReferenceLineProps>
export type AreaChartUIProps = Merge<
  CSSUIProps,
  React.ComponentPropsWithoutRef<typeof ReChartsAreaChart>
>
export type ContainerUIProps = Merge<
  CSSUIProps,
  Omit<ResponsiveContainerProps, "children">
>
export type DotUIProps = Merge<CSSUIProps, Omit<DotProps, "ref">>
export type XAxisUIProps = Merge<CSSUIProps, XAxisProps>
export type YAxisUIProps = Merge<CSSUIProps, YAxisProps>
export type LegendUIProps = Merge<CSSUIProps, Omit<LegendProps, "ref">>
export type TooltipUIProps = Merge<
  CSSUIProps,
  Omit<TooltipProps<any, any>, "ref">
>
export type GridUIProps = Merge<CSSUIProps, CartesianGridProps>
