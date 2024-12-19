import type {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react"
import type * as Recharts from "recharts"
import type { CSSUIProps, HTMLUIProps } from "../../core"
import type { Dict, Merge } from "../../utils"

export type ChartLayoutType = "horizontal" | "vertical"
export type AreaChartType = "default" | "percent" | "split" | "stacked"
export type BarChartType = Exclude<AreaChartType, "split">
export type ChartAxisType = "none" | "x" | "xy" | "y"
export type ChartCurveType =
  | "bump"
  | "linear"
  | "monotone"
  | "natural"
  | "step"
  | "stepAfter"
  | "stepBefore"
export type TooltipDataSourceType = "all" | "segment"

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
      activeDot?: DotProps
      dimArea?: Partial<AreaProps>
      dimDot?: DotProps
      dot?: DotProps
    }
  > {}
export interface LineProps
  extends Merge<
    Merge<CSSUIProps, Recharts.LineProps>,
    {
      color: CSSUIProps["color"]
      activeDot?: DotProps
      dimDot?: DotProps
      dimLine?: Partial<LineProps>
      dot?: DotProps
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
      activeDot?: DotProps
      dimDot?: DotProps
      dimRadar?: Partial<RadarProps>
      dot?: DotProps
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
    Omit<Recharts.XAxisProps, "color" | "fill" | "stroke">
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
type ValueType = (number | string)[] | number | string
type NameType = number | string
type Payload<Y extends ValueType = ValueType, M extends NameType = NameType> = {
  [key: string]: any
} & Required<Recharts.TooltipProps<Y, M>>["payload"][number]
export type ChartTooltipProps<
  Y extends ValueType = ValueType,
  M extends NameType = NameType,
> = {
  payload?: Payload<Y, M>[]
} & Omit<Recharts.TooltipProps<Y, M>, "payload">
export type ChartTooltip<
  Y extends ValueType = ValueType,
  M extends NameType = NameType,
> = ((props: ChartTooltipProps<Y, M>) => ReactNode) | ReactElement
export interface ChartLabelProps
  extends Omit<React.SVGProps<SVGTextElement>, "fill" | "offset" | "viewBox">,
    LabelProps {}
export type ChartLabel = ((props: ChartLabelProps) => ReactNode) | ReactElement
