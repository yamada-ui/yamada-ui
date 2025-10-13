"use client"

import type { HTMLStyledProps, ThemeProps } from "../../core"
import type { Merge } from "../../utils"
import type { GridProps } from "./grid"
import type { LineProps } from "./line"
import type { LineChartStyle } from "./line-chart.style"
import type { ReferenceLineProps } from "./reference-line"
import type { UseLineChartProps } from "./use-line-chart"
import type { XAxisProps } from "./x-axis"
import type { YAxisProps } from "./y-axis"
import { LineChart, ResponsiveContainer } from "recharts"
import { createComponent, styled } from "../../core"
import { isEmpty } from "../../utils"
import { Grid, GridComponentContext } from "./grid"
import { Legend } from "./legend"
import { LineComponentContext } from "./line"
import { lineChartStyle } from "./line-chart.style"
import { ReferenceLineComponentContext } from "./reference-line"
import { Tooltip } from "./tooltip"
import { useLineChart } from "./use-line-chart"
import { useSplitChildren } from "./utils"
import { XAxis, XAxisComponentContext } from "./x-axis"
import { YAxis, YAxisComponentContext } from "./y-axis"

//TODO: reference line
//TODO: legend
//TODO: tooltip
//TODO: dots default style
//TODO: axis label

export interface LineChartRootProps
  extends Merge<HTMLStyledProps, UseLineChartProps>,
    ThemeProps<LineChartStyle> {
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
   * Props passed down to 'Line' component.
   */
  lineProps?: LineProps
  /**
   * Props passed down to 'ReferenceLine' component.
   */
  referenceLineProps?: ReferenceLineProps
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
} = createComponent<LineChartRootProps, LineChartStyle>(
  "line-chart",
  lineChartStyle,
)

export { LineChartPropsContext, useLineChartPropsContext }

export const LineChartRoot = withContext<"div", LineChartRootProps>(
  ({
    children,
    withGrid = true,
    withLegend = false,
    withTooltip = true,
    withXAxis = true,
    withYAxis = true,
    gridProps = {},
    lineProps = {},
    referenceLineProps = {},
    xAxisProps = {},
    yAxisProps = {},
    ...props
  }) => {
    const {
      layout,
      getContainerProps,
      getLineChartProps,
      getResponsiveContainerProps,
    } = useLineChart(props)

    const [
      omittedChildren,
      customGrid,
      customXAxis,
      customYAxis,
      customTooltip,
      customLegend,
    ] = useSplitChildren(children, Grid, XAxis, YAxis, Tooltip, Legend)

    return (
      <ReferenceLineComponentContext value={referenceLineProps}>
        <LineComponentContext value={lineProps}>
          <YAxisComponentContext value={{ layout, ...yAxisProps }}>
            <XAxisComponentContext value={{ layout, ...xAxisProps }}>
              <GridComponentContext value={gridProps}>
                <styled.div {...getContainerProps()}>
                  <ResponsiveContainer {...getResponsiveContainerProps()}>
                    <LineChart {...getLineChartProps()}>
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
        </LineComponentContext>
      </ReferenceLineComponentContext>
    )
  },
)()
