"use client"

import type { LineProps } from "recharts"
import type { HTMLStyledProps } from "../../core"
import type { Dict } from "../../utils"
import type { LineChartStyle } from "./line-chart.style"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { useSplitChildren } from "../../utils"
import { Grid } from "./grid"
import { Legend } from "./legend"
import { lineChartStyle } from "./line-chart.style"
import { Tooltip } from "./tooltip"
import { XAxis } from "./x-axis"
import { YAxis } from "./y-axis"

export interface LineChartRootProps extends HTMLStyledProps {
  /**
   * Chart data.
   */
  data: Dict[]
  /**
   * If `true`, grid is visible.
   *
   * @default true
   */
  withGrid?: boolean
  /**
   * If `true`, legend is visible.
   *
   * @default false
   */
  withLegend?: boolean
  /**
   * If `true`, tooltip is visible.
   *
   * @default true
   */
  withTooltip?: boolean
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
}

// TODO: それぞれを単体のコンポーネントとして用意して、ProviderをLineChart.Rootで囲むようにする。

const {
  PropsContext: LineChartPropsContext,
  usePropsContext: useLineChartPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<LineChartRootProps, LineChartStyle>(
  "line-chart",
  lineChartStyle,
)

export { LineChartPropsContext, useLineChartPropsContext }

export const LineChartRoot = withProvider<"div", LineChartRootProps>(
  ({
    children,
    data,
    withGrid = true,
    withLegend = false,
    withTooltip = true,
    withXAxis = true,
    withYAxis = true,
    ...props
  }) => {
    const [
      omittedChildren,
      customGrid,
      customXAxis,
      customYAxis,
      customTooltip,
      customLegend,
    ] = useSplitChildren(children, Grid, XAxis, YAxis, Tooltip, Legend)

    return (
      <styled.div {...props}>
        <ResponsiveContainer>
          <LineChart data={data}>
            {customGrid ?? (withGrid ? <Grid strokeDasharray="3 3" /> : null)}
            {customXAxis ?? (withXAxis ? <XAxis dataKey="name" /> : null)}
            {customYAxis ?? (withYAxis ? <YAxis /> : null)}
            {customTooltip ?? (withTooltip ? <Tooltip /> : null)}
            {customLegend ?? (withLegend ? <Legend /> : null)}

            {omittedChildren}
          </LineChart>
        </ResponsiveContainer>
      </styled.div>
    )
  },
  "root",
)()

export interface LineChartLineProps extends LineProps {}

export const LineChartLine = withContext<"svg", LineChartLineProps>(
  (props) => <Line {...props} />,
  "line",
)()
