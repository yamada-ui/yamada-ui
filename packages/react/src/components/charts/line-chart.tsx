"use client"

import type { LineProps } from "recharts"
import type { HTMLStyledProps } from "../../core"
import type { Dict } from "../../utils"
import type { GridProps } from "./grid"
import type { LineChartStyle } from "./line-chart.style"
import type { XAxisProps } from "./x-axis"
import type { YAxisProps } from "./y-axis"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import { createSlotComponent, styled } from "../../core"
import { isEmpty } from "../../utils"
import { Grid, GridComponentContext } from "./grid"
import { Legend } from "./legend"
import { lineChartStyle } from "./line-chart.style"
import { Tooltip } from "./tooltip"
import { useSplitChildren } from "./utils"
import { XAxis, XAxisComponentContext } from "./x-axis"
import { YAxis, YAxisComponentContext } from "./y-axis"

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
  /**
   * Props passed down to 'Grid' component.
   */
  gridProps?: GridProps
  /**
   * Props passed down to 'XAxis' component.
   */
  xAxisProps?: XAxisProps
  /**
   * Props passed down to 'YAxis' component.
   */
  yAxisProps?: YAxisProps
}

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
    gridProps = {},
    xAxisProps = {},
    yAxisProps = {},
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
      <YAxisComponentContext value={yAxisProps}>
        <XAxisComponentContext value={xAxisProps}>
          <GridComponentContext value={gridProps}>
            <styled.div {...props}>
              <ResponsiveContainer>
                <LineChart data={data}>
                  {isEmpty(customGrid) ? (
                    withGrid ? (
                      <Grid />
                    ) : null
                  ) : (
                    customGrid
                  )}
                  {isEmpty(customXAxis) ? (
                    <XAxis hide={!withXAxis} />
                  ) : (
                    customXAxis
                  )}
                  {isEmpty(customYAxis) ? (
                    <YAxis hide={!withYAxis} />
                  ) : (
                    customYAxis
                  )}
                  {isEmpty(customTooltip) ? (
                    withTooltip ? (
                      <Tooltip />
                    ) : null
                  ) : (
                    customTooltip
                  )}
                  {isEmpty(customLegend) ? (
                    withLegend ? (
                      <Legend />
                    ) : null
                  ) : (
                    customLegend
                  )}

                  {omittedChildren}
                </LineChart>
              </ResponsiveContainer>
            </styled.div>
          </GridComponentContext>
        </XAxisComponentContext>
      </YAxisComponentContext>
    )
  },
  "root",
)()

export interface LineChartLineProps extends LineProps {}

export const LineChartLine = withContext<"svg", LineChartLineProps>(
  (props) => <Line {...props} />,
  "line",
)()
