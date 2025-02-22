import type {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react"
import type * as Recharts from "recharts"
import type { CSSProps, HTMLUIProps } from "../../core"
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
    CSSProps,
    ComponentPropsWithoutRef<typeof Recharts.AreaChart>
  > {}
export interface BarChartProps
  extends Merge<CSSProps, ComponentPropsWithoutRef<typeof Recharts.BarChart>> {}
export interface LineChartProps
  extends Merge<
    CSSProps,
    ComponentPropsWithoutRef<typeof Recharts.LineChart>
  > {}
export interface RadarChartProps
  extends Merge<
    CSSProps,
    ComponentPropsWithoutRef<typeof Recharts.RadarChart>
  > {}
export interface PieChartProps
  extends Merge<CSSProps, ComponentPropsWithoutRef<typeof Recharts.PieChart>> {}
export interface RadialChartProps
  extends Merge<
    CSSProps,
    ComponentPropsWithoutRef<typeof Recharts.RadialBarChart>
  > {}
export interface ReferenceLineProps
  extends Merge<CSSProps, Recharts.ReferenceLineProps> {}
export interface ResponsiveContainerProps
  extends Merge<CSSProps, Partial<Recharts.ResponsiveContainerProps>> {}
export interface AreaProps
  extends Merge<
    Merge<CSSProps, Recharts.AreaProps>,
    {
      color: CSSProps["color"]
      activeDot?: DotProps
      dimArea?: Partial<AreaProps>
      dimDot?: DotProps
      dot?: DotProps
    }
  > {}
export interface LineProps
  extends Merge<
    Merge<CSSProps, Recharts.LineProps>,
    {
      color: CSSProps["color"]
      activeDot?: DotProps
      dimDot?: DotProps
      dimLine?: Partial<LineProps>
      dot?: DotProps
    }
  > {}
export interface BarProps
  extends Merge<
    Merge<CSSProps, Recharts.BarProps>,
    {
      color: CSSProps["color"]
      activeBar?: Merge<SVGProps<SVGPathElement>, CSSProps>
      background?: Merge<SVGProps<SVGPathElement>, CSSProps>
      dimBar?: Partial<BarProps>
    }
  > {}
export interface RadarProps
  extends Merge<
    Merge<CSSProps, Recharts.RadarProps>,
    {
      color: CSSProps["color"]
      activeDot?: DotProps
      dimDot?: DotProps
      dimRadar?: Partial<RadarProps>
      dot?: DotProps
    }
  > {}
export interface PieProps
  extends Merge<
    Merge<Recharts.PieProps, CSSProps>,
    {
      activeShape?: Partial<PieProps>
      inactiveShape?: Partial<PieProps>
      label?: HTMLUIProps<"text">
      labelLine?: HTMLUIProps<"path">
    }
  > {}
export interface CellProps extends CSSProps {
  name: string
  value: number
  dimCell?: Partial<CellProps>
}
export interface RadialBarProps
  extends Merge<
    Merge<Recharts.RadialBarProps, CSSProps>,
    {
      background?: Partial<RadialBarProps>
      dimRadialBar?: CSSProps
    }
  > {}
export interface DotProps
  extends Merge<Omit<Recharts.DotProps, "ref">, CSSProps> {}
export interface XAxisProps
  extends Merge<
    CSSProps,
    Omit<Recharts.XAxisProps, "color" | "fill" | "stroke">
  > {}
export interface YAxisProps
  extends Merge<CSSProps, Omit<Recharts.YAxisProps, "color">> {}
export interface LegendProps
  extends Merge<CSSProps, Omit<Recharts.LegendProps, "ref">> {}
export interface TooltipProps
  extends Merge<
    Merge<CSSProps, Omit<Recharts.TooltipProps<any, any>, "ref">>,
    { cursor?: CSSProps }
  > {}
export interface GridProps
  extends Merge<CSSProps, Recharts.CartesianGridProps> {}
export interface PolarGridProps
  extends Merge<CSSProps, Recharts.PolarGridProps> {}
export interface PolarAngleAxisProps
  extends Merge<Recharts.PolarAngleAxisProps, CSSProps> {}
export interface PolarRadiusAxisProps
  extends Merge<CSSProps, Recharts.PolarRadiusAxisProps> {}
export interface LabelProps
  extends Merge<CSSProps, Omit<Recharts.LabelProps, "fill">> {}
export interface LabelListProps
  extends Merge<Recharts.LabelListProps<Dict>, Omit<CSSProps, "position">> {}
type ValueType = (number | string)[] | number | string
type NameType = number | string
type Payload<
  Y extends ValueType = ValueType,
  M extends NameType = NameType,
> = Required<Recharts.TooltipProps<Y, M>>["payload"][number] & {
  [key: string]: any
}
export type ChartTooltipProps<
  Y extends ValueType = ValueType,
  M extends NameType = NameType,
> = Omit<Recharts.TooltipProps<Y, M>, "payload"> & {
  payload?: Payload<Y, M>[]
}
export type ChartTooltip<
  Y extends ValueType = ValueType,
  M extends NameType = NameType,
> = ((props: ChartTooltipProps<Y, M>) => ReactNode) | ReactElement
export interface ChartLabelProps
  extends Omit<React.SVGProps<SVGTextElement>, "fill" | "offset" | "viewBox">,
    LabelProps {}
export type ChartLabel = ((props: ChartLabelProps) => ReactNode) | ReactElement
