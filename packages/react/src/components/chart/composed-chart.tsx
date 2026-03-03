"use client"

import type { ReactElement } from "react"
import type { CSSProps, GenericsComponent, ThemeProps } from "../../core"
import type { Dict } from "../../utils"
import type {
  CartesianChartProps,
  ChartAreaProps,
  ChartBarProps,
  ChartLineProps,
} from "./cartesian-chart"
import type { GradientStrategy } from "./chart"
import type { ComposedChartStyle } from "./composed-chart.style"
import type { LineChartStyle } from "./line-chart.style"
import { useMemo } from "react"
import { ComposedChart as OriginalComposedChart } from "recharts"
import { createComponent } from "../../core"
import {
  CartesianChart,
  ChartArea,
  ChartBar,
  ChartLine,
} from "./cartesian-chart"
import { gradients } from "./chart"
import { composedChartStyle } from "./composed-chart.style"

export type ComposedType = "area" | "bar" | "line"

export type ComposedProps<Y extends Dict = Dict> =
  | readonly ["area", ChartAreaProps<Y>]
  | readonly ["bar", ChartBarProps<Y>]
  | readonly ["line", ChartLineProps<Y>]

function isLine<Y extends Dict>(
  props: ComposedProps<Y>,
): props is ["line", ChartLineProps<Y>] {
  return props[0] === "line"
}

function isArea<Y extends Dict>(
  props: ComposedProps<Y>,
): props is ["area", ChartAreaProps<Y>] {
  return props[0] === "area"
}

function isBar<Y extends Dict>(
  props: ComposedProps<Y>,
): props is ["bar", ChartBarProps<Y>] {
  return props[0] === "bar"
}

export function mergeSeries<Y extends Dict = Dict>(
  series: ComposedProps<Y>[],
  color: CSSProps["color"] = "mono",
  strategy: GradientStrategy = "invert",
): ComposedProps<Y>[] {
  const colors = gradients(series.length, color, strategy)

  return series.map(
    ([type, props], index) =>
      [type, { ...props, color: colors[index] }] as ComposedProps<Y>,
  )
}

export interface ComposedChartProps<Y extends Dict = Dict>
  extends
    Omit<CartesianChartProps<Y>, "components" | "render">,
    ThemeProps<LineChartStyle> {
  /**
   * If provided, generate lines based on series.
   */
  series?: ComposedProps<Y>[]
}

const {
  PropsContext: ComposedChartPropsContext,
  usePropsContext: useComposedChartPropsContext,
  withContext,
} = createComponent<ComposedChartProps, ComposedChartStyle>(
  "composed-chart",
  composedChartStyle,
)

export { ComposedChartPropsContext, useComposedChartPropsContext }

/**
 * `ComposedChart` is a component for drawing composed charts to compare multiple sets of data.
 *
 * @see https://yamada-ui.com/docs/components/composed-chart
 */
export const ComposedChart = withContext<"div", ComposedChartProps>(
  <Y extends Dict>({
    children,
    series = [],
    barProps,
    ...rest
  }: ComposedChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartLine,
          fallback: series
            .filter(isLine)
            .map(([, props], index) => <ChartLine key={index} {...props} />),
        },
        {
          component: ChartArea,
          fallback: series
            .filter(isArea)
            .map(([, props], index) => <ChartArea key={index} {...props} />),
        },
        {
          component: ChartBar,
          fallback: series
            .filter(isBar)
            .map(([, props], index) => <ChartBar key={index} {...props} />),
        },
      ],
      [series],
    )

    return (
      <CartesianChart
        components={components}
        render={(props) => <OriginalComposedChart {...props} />}
        barProps={{ barSize: 40, ...barProps }}
        {...rest}
      >
        {children}
      </CartesianChart>
    )
  },
)() as GenericsComponent<{
  <Y extends Dict>(props: ComposedChartProps<Y>): ReactElement
}>
