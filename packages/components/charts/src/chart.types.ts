import type { CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { Dict, Merge } from "@yamada-ui/utils"
import type {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react"
import type * as Recharts from "recharts"

export type ChartLayoutType = "horizontal" | "vertical"
export type AreaChartType = "default" | "stacked" | "percent" | "split"
export type BarChartType = Exclude<AreaChartType, "split">
export type ChartAxisType = "x" | "y" | "xy" | "none"
export type ChartCurveType =
  | "bump"
  | "linear"
  | "natural"
  | "monotone"
  | "step"
  | "stepBefore"
  | "stepAfter"
export type TooltipDataSourceType = "segment" | "all"

export interface AreaChartProps
  extends Merge<
    CSSUIProps,
    ComponentPropsWithoutRef<typeof Recharts.AreaChart>
  > {}
export interface BarChartProps
  extends Merge<
    CSSUIProps,
    ComponentPropsWithoutRef<typeof Recharts.BarChart>
  > {}
export interface LineChartProps
  extends Merge<
    CSSUIProps,
    ComponentPropsWithoutRef<typeof Recharts.LineChart>
  > {}
export interface RadarChartProps
  extends Merge<
    CSSUIProps,
    ComponentPropsWithoutRef<typeof Recharts.RadarChart>
  > {}
export interface PieChartProps
  extends Merge<
    CSSUIProps,
    ComponentPropsWithoutRef<typeof Recharts.PieChart>
  > {}
export interface RadialChartProps
  extends Merge<
    CSSUIProps,
    ComponentPropsWithoutRef<typeof Recharts.RadialBarChart>
  > {}
export interface ReferenceLineProps
  extends Merge<CSSUIProps, Recharts.ReferenceLineProps> {}
export interface ResponsiveContainerProps
  extends Merge<
    CSSUIProps,
    Omit<Recharts.ResponsiveContainerProps, "children">
  > {}
export interface AreaProps
  extends Merge<
    Merge<CSSUIProps, Recharts.AreaProps>,
    {
      color: CSSUIProps["color"]
      dot?: DotProps
      activeDot?: DotProps
      dimDot?: DotProps
      dimArea?: Partial<AreaProps>
    }
  > {}
export interface LineProps
  extends Merge<
    Merge<CSSUIProps, Recharts.LineProps>,
    {
      color: CSSUIProps["color"]
      activeDot?: DotProps
      dot?: DotProps
      dimDot?: DotProps
      dimLine?: Partial<LineProps>
    }
  > {}
export interface BarProps
  extends Merge<
    Merge<CSSUIProps, Recharts.BarProps>,
    {
      color: CSSUIProps["color"]
      activeBar?: Merge<SVGProps<SVGPathElement>, CSSUIProps>
      background?: Merge<SVGProps<SVGPathElement>, CSSUIProps>
      dimBar?: Partial<BarProps>
    }
  > {}
export interface RadarProps
  extends Merge<
    Merge<CSSUIProps, Recharts.RadarProps>,
    {
      color: CSSUIProps["color"]
      dot?: DotProps
      activeDot?: DotProps
      dimDot?: DotProps
      dimRadar?: Partial<RadarProps>
    }
  > {}
export interface PieProps
  extends Merge<
    Merge<Recharts.PieProps, CSSUIProps>,
    {
      activeShape?: Partial<PieProps>
      inactiveShape?: Partial<PieProps>
      label?: HTMLUIProps<"text">
      labelLine?: HTMLUIProps<"path">
    }
  > {}
export interface CellProps extends CSSUIProps {
  name: string
  value: number
  dimCell?: Partial<CellProps>
}
export interface RadialBarProps
  extends Merge<
    Merge<Recharts.RadialBarProps, CSSUIProps>,
    {
      background?: Partial<RadialBarProps>
      dimRadialBar?: CSSUIProps
    }
  > {}
export interface DotProps
  extends Merge<Omit<Recharts.DotProps, "ref">, CSSUIProps> {}
export interface XAxisProps
  extends Merge<
    CSSUIProps,
    Omit<Recharts.XAxisProps, "color" | "stroke" | "fill">
  > {}
export interface YAxisProps
  extends Merge<CSSUIProps, Omit<Recharts.YAxisProps, "color">> {}
export interface LegendProps
  extends Merge<CSSUIProps, Omit<Recharts.LegendProps, "ref">> {}
export interface TooltipProps
  extends Merge<
    Merge<CSSUIProps, Omit<Recharts.TooltipProps<any, any>, "ref">>,
    { cursor?: CSSUIProps }
  > {}
export interface GridProps
  extends Merge<CSSUIProps, Recharts.CartesianGridProps> {}
export interface PolarGridProps
  extends Merge<CSSUIProps, Recharts.PolarGridProps> {}
export interface PolarAngleAxisProps
  extends Merge<Recharts.PolarAngleAxisProps, CSSUIProps> {}
export interface PolarRadiusAxisProps
  extends Merge<CSSUIProps, Recharts.PolarRadiusAxisProps> {}
export interface LabelProps
  extends Merge<CSSUIProps, Omit<Recharts.LabelProps, "fill">> {}
export interface LabelListProps
  extends Merge<Recharts.LabelListProps<Dict>, Omit<CSSUIProps, "position">> {}
export type ChartTooltipProps = Recharts.TooltipProps<
  number | string | (number | string)[],
  number | string
>
export type ChartTooltip =
  | ReactElement
  | ((props: ChartTooltipProps) => ReactNode)
export interface ChartLabelProps
  extends Omit<React.SVGProps<SVGTextElement>, "viewBox" | "fill" | "offset">,
    LabelProps {}
export type ChartLabel = ReactElement | ((props: ChartLabelProps) => ReactNode)
