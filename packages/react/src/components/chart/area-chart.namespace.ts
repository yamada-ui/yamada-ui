import type { AreaChartProps as RootProps } from "./area-chart"
import type {
  ChartActiveDot as ActiveDot,
  ChartCartesianLabel as AreaLabel,
  ChartAreaProps as AreaProps,
  ChartDot as Dot,
  ChartGridProps as GridProps,
  ChartLabel as Label,
  ChartReferenceLineProps as ReferenceLineProps,
  ChartTickLine as TickLine,
  ChartXAxisProps as XAxisProps,
  ChartXAxisTick as XAxisTick,
  ChartYAxisProps as YAxisProps,
  ChartYAxisTick as YAxisTick,
} from "./cartesian-chart"
import type {
  ChartLabelListProps as LabelListProps,
  ChartLegendProps as LegendProps,
  ChartTooltipProps as TooltipProps,
} from "./chart"
import {
  AreaChartPropsContext as PropsContext,
  AreaChart as Root,
  useAreaChartPropsContext as usePropsContext,
} from "./area-chart"
import {
  ChartArea as Area,
  ChartGrid as Grid,
  ChartReferenceLine as ReferenceLine,
  ChartXAxis as XAxis,
  ChartYAxis as YAxis,
} from "./cartesian-chart"
import {
  gradients,
  ChartLabelList as LabelList,
  ChartLegend as Legend,
  mergeSeries,
  ChartTooltip as Tooltip,
} from "./chart"

export {
  Area,
  gradients,
  Grid,
  LabelList,
  Legend,
  mergeSeries,
  PropsContext,
  ReferenceLine,
  Root,
  Tooltip,
  usePropsContext,
  XAxis,
  YAxis,
}
export type {
  ActiveDot,
  AreaLabel,
  AreaProps,
  Dot,
  GridProps,
  Label,
  LabelListProps,
  LegendProps,
  ReferenceLineProps,
  RootProps,
  TickLine,
  TooltipProps,
  XAxisProps,
  XAxisTick,
  YAxisProps,
  YAxisTick,
}
