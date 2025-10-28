"use client"

import type { ReactElement } from "react"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { GridProps } from "./grid"
import type { LegendProps } from "./legend"
import type { LineProps } from "./line"
import type { LineChartStyle } from "./line-chart.style"
import type { ReferenceLineProps } from "./reference-line"
import type { TooltipRootProps } from "./tooltip"
import type { UseLineChartProps } from "./use-line-chart"
import type { XAxisProps } from "./x-axis"
import type { YAxisProps } from "./y-axis"
import { useMemo } from "react"
import { LineChart, ResponsiveContainer } from "recharts"
import { createComponent, styled, varAttr } from "../../core"
import { isEmpty } from "../../utils"
import { Grid, GridComponentContext } from "./grid"
import { Legend, LegendComponentContext } from "./legend"
import { Line, LineComponentContext } from "./line"
import { lineChartStyle } from "./line-chart.style"
import { ReferenceLineComponentContext } from "./reference-line"
import { Tooltip, TooltipComponentContext } from "./tooltip"
import { useLineChart } from "./use-line-chart"
import { useSplitChildren } from "./utils"
import { XAxis, XAxisComponentContext } from "./x-axis"
import { YAxis, YAxisComponentContext } from "./y-axis"

export interface LineChartRootProps<T extends Dict = Dict>
  extends Merge<HTMLStyledProps, UseLineChartProps<T>>,
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
   * Props passed down to 'Legend' component.
   */
  legendProps?: LegendProps
  /**
   * Props passed down to 'Line' component.
   */
  lineProps?: LineProps
  /**
   * Props passed down to 'ReferenceLine' component.
   */
  referenceLineProps?: ReferenceLineProps
  /**
   * Props passed down to 'Tooltip' component.
   */
  tooltipProps?: TooltipRootProps
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
  <T extends Dict>({
    children,
    withGrid = true,
    withLegend = false,
    withTooltip = true,
    withXAxis = true,
    withYAxis = true,
    gridProps = {},
    legendProps = {},
    lineProps = {},
    referenceLineProps = {},
    tooltipProps = {},
    xAxisProps = {},
    yAxisProps = {},
    ...props
  }: LineChartRootProps<T>) => {
    const {
      layout,
      lines,
      getLineChartProps,
      getResponsiveContainerProps,
      getRootProps,
    } = useLineChart(props as UseLineChartProps)

    const [
      omittedChildren,
      customGrid,
      customXAxis,
      customYAxis,
      customTooltip,
      customLegend,
      customLine,
    ] = useSplitChildren(children, Grid, XAxis, YAxis, Tooltip, Legend, Line)

    const vars = useMemo(
      () =>
        lines.reduce<Dict>(
          (acc, { dataKey, stroke }) => ({
            ...acc,
            [`--${dataKey}-line-stroke`]: varAttr(stroke, "colors"),
          }),
          {},
        ),
      [lines],
    )

    const colors = useMemo(
      () =>
        lines.map(({ dataKey, stroke }) => ({
          color: stroke ? `var(--${dataKey}-line-stroke)` : undefined,
          dataKey,
        })),
      [lines],
    )

    return (
      <LegendComponentContext value={{ colors, ...legendProps }}>
        <TooltipComponentContext value={{ colors, ...tooltipProps }}>
          <ReferenceLineComponentContext value={referenceLineProps}>
            <LineComponentContext value={lineProps}>
              <YAxisComponentContext value={{ layout, ...yAxisProps }}>
                <XAxisComponentContext value={{ layout, ...xAxisProps }}>
                  <GridComponentContext value={gridProps}>
                    <styled.div {...getRootProps({ ...vars })}>
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

                          {isEmpty(customLine)
                            ? lines.map((props, index) => (
                                <Line key={index} {...props} />
                              ))
                            : customLine}

                          {omittedChildren}
                        </LineChart>
                      </ResponsiveContainer>
                    </styled.div>
                  </GridComponentContext>
                </XAxisComponentContext>
              </YAxisComponentContext>
            </LineComponentContext>
          </ReferenceLineComponentContext>
        </TooltipComponentContext>
      </LegendComponentContext>
    )
  },
)() as GenericsComponent<{
  <T extends Dict = Dict>(props: LineChartRootProps<T>): ReactElement
}>
