import type { As, CSSUIProps, HTMLUIProps } from "@yamada-ui/core"
import type { Merge } from "@yamada-ui/utils"
import type {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
  SVGProps,
} from "react"
import type * as Recharts from "recharts"

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

export type AreaChartProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof Recharts.AreaChart>
>
export type BarChartProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof Recharts.BarChart>
>
export type LineChartProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof Recharts.LineChart>
>
export type PieChartProps = Merge<
  CSSUIProps,
  ComponentPropsWithoutRef<typeof Recharts.PieChart>
>
export type ReferenceLineProps = Merge<CSSUIProps, Recharts.ReferenceLineProps>
export type ResponsiveContainerProps = Merge<
  CSSUIProps,
  Omit<Recharts.ResponsiveContainerProps, "children">
>
export type AreaProps = Merge<
  Merge<CSSUIProps, Recharts.AreaProps>,
  {
    color: CSSUIProps["color"]
    activeDot?: DotProps
    dot?: DotProps
    dimArea?: AreaProps
  }
>
export type LineProps = Merge<
  Merge<CSSUIProps, Recharts.LineProps>,
  {
    color: CSSUIProps["color"]
    activeDot?: DotProps
    dot?: DotProps
    dimLine?: LineProps
  }
>
export type BarProps = Merge<
  Merge<CSSUIProps, Recharts.BarProps>,
  {
    color: CSSUIProps["color"]
    activeBar?: Merge<CSSUIProps, SVGProps<SVGPathElement>>
    background?: Merge<CSSUIProps, SVGProps<SVGPathElement>>
    dimBar?: BarProps
  }
>
export type DotProps = Merge<Omit<Recharts.DotProps, "ref">, CSSUIProps>
export type XAxisProps = Merge<
  Merge<CSSUIProps, Recharts.XAxisProps>,
  {
    color?: CSSUIProps["color"]
    stroke?: CSSUIProps["color"]
    fill?: CSSUIProps["color"]
  }
>
export type YAxisProps = Merge<
  Merge<CSSUIProps, Recharts.YAxisProps>,
  { color?: CSSUIProps["color"] }
>
export type LegendProps = Merge<CSSUIProps, Omit<Recharts.LegendProps, "ref">>
export type TooltipProps = Merge<
  Merge<CSSUIProps, Omit<Recharts.TooltipProps<any, any>, "ref">>,
  { cursor?: CSSUIProps }
>
export type GridProps = Merge<CSSUIProps, Recharts.CartesianGridProps>

export type ChartTooltip =
  | ReactElement
  | ((
      props: Recharts.TooltipProps<
        number | string | Array<number | string>,
        number | string
      >,
    ) => ReactNode)
