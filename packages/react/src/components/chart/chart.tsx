"use client"

import type { PropsWithChildren, ReactElement, ReactNode } from "react"
import type {
  DefaultLegendContentProps,
  ResponsiveContainerProps,
  TooltipContentProps,
} from "recharts"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { ChartLineProps } from "./cartesian-chart"
import type { ChartStyle } from "./chart.style"
import type {
  UseChartLegendProps,
  UseChartLegendReturn,
  UseChartTooltipProps,
} from "./use-chart"
import { Fragment, isValidElement, useMemo } from "react"
import { Legend, ResponsiveContainer, Tooltip } from "recharts"
import { createSlotComponent, styled, varAttr } from "../../core"
import {
  createContext,
  isArray,
  isNumber,
  isObject,
  isString,
  useSplitChildren,
} from "../../utils"
import { chartStyle } from "./chart.style"
import {
  ChartContext,
  useChart,
  useChartLegend,
  useChartTooltip,
} from "./use-chart"

interface ComponentContext extends Pick<
  ChartProps,
  "legendProps" | "tooltipProps"
> {
  varMap: Dict<string>
}

export interface ChartProps<Y extends Dict = Dict>
  extends HTMLStyledProps, ThemeProps<ChartStyle> {
  components: {
    component: React.JSXElementConstructor<any>
    fallback: ReactNode
  }[]
  render: (props: PropsWithChildren) => ReactNode
  series?: ChartLineProps<Y>[]
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
   * Props for the legend component.
   */
  legendProps?: ChartLegendProps
  /**
   * Props for the responsive container component.
   */
  responsiveContainerProps?: ResponsiveContainerProps
  /**
   * Props for the tooltip component.
   */
  tooltipProps?: ChartTooltipProps
}

const {
  ComponentContext,
  PropsContext: ChartPropsContext,
  useComponentContext: useChartComponentContext,
  usePropsContext: useChartPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<ChartProps, ChartStyle, ComponentContext>(
  "chart",
  chartStyle,
)

export { ChartPropsContext, useChartComponentContext, useChartPropsContext }

export const Chart = withProvider(
  <Y extends Dict>({
    children,
    components: componentsProp,
    render,
    series = [],
    withLegend = false,
    withTooltip = true,
    legendProps,
    responsiveContainerProps,
    tooltipProps,
    ...rest
  }: ChartProps<Y>) => {
    const { highlightedDataKey, onHighlight } = useChart()
    const components = useMemo(
      () => [
        {
          component: ChartLegend,
          fallback: withLegend ? <ChartLegend /> : null,
        },
        {
          component: ChartTooltip,
          fallback: withTooltip ? <ChartTooltip /> : null,
        },
        ...componentsProp,
      ],
      [componentsProp, withLegend, withTooltip],
    )
    const [omittedChildren, ...customComponents] = useSplitChildren(
      children,
      ...components.map(({ component }) => component),
    )
    const varProps = useMemo(
      () =>
        series.reduce<Dict>(
          (acc, { color, dataKey }) => ({
            ...acc,
            [`--${dataKey.toString()}`]: varAttr(color, "colors"),
          }),
          {},
        ),
      [series],
    )
    const varMap = useMemo(
      () =>
        series.reduce<Dict>(
          (acc, { color, dataKey }) => ({
            ...acc,
            [dataKey.toString()]: color ? `{${dataKey.toString()}}` : undefined,
          }),
          {},
        ),
      [series],
    )
    const context = useMemo(
      () => ({
        highlightedDataKey,
        onHighlight,
      }),
      [highlightedDataKey, onHighlight],
    )
    const componentContext = useMemo(
      () => ({
        varMap,
        legendProps,
        tooltipProps,
      }),
      [varMap, legendProps, tooltipProps],
    )

    return (
      <ChartContext value={context}>
        <ComponentContext value={componentContext}>
          <styled.div {...varProps} {...rest}>
            <ResponsiveContainer {...responsiveContainerProps}>
              {render({
                children: (
                  <>
                    {components.map(({ fallback }, index) => (
                      <Fragment key={index}>
                        {customComponents[index] ?? fallback}
                      </Fragment>
                    ))}

                    {omittedChildren}
                  </>
                ),
              })}
            </ResponsiveContainer>
          </styled.div>
        </ComponentContext>
      </ChartContext>
    )
  },
  "root",
)() as GenericsComponent<{
  <Y extends Dict>(props: ChartProps<Y>): ReactElement
}>

interface ChartLegendContext extends Pick<
  UseChartLegendReturn,
  "getLegendItemProps"
> {}

const [ChartLegendContext, useChartLegendContext] =
  createContext<ChartLegendContext>({
    name: "ChartLegendContext",
  })

export interface ChartLegendProps extends Merge<
  HTMLStyledProps,
  UseChartLegendProps
> {
  /**
   * Props for the content component.
   */
  contentProps?: Omit<ChartLegendContentProps, "formatter" | "payload">
}

export const ChartLegend = withContext<"div", ChartLegendProps>((props) => {
  const { legendProps } = useChartComponentContext()
  const { contentProps, ...rest } = { ...legendProps, ...props }
  const {
    getLegendContentProps,
    getLegendItemProps,
    getLegendProps,
    getRootProps,
  } = useChartLegend({
    content: ({ formatter, payload }) => (
      <ChartLegendContent
        formatter={formatter}
        payload={payload}
        {...getLegendContentProps(contentProps)}
      />
    ),
    ...rest,
  })
  const context = useMemo(() => ({ getLegendItemProps }), [getLegendItemProps])

  return (
    <ChartLegendContext value={context}>
      <styled.div asChild {...getRootProps()}>
        <Legend {...getLegendProps()} />
      </styled.div>
    </ChartLegendContext>
  )
}, "legend")()

interface ChartLegendContentProps
  extends
    HTMLStyledProps,
    Pick<DefaultLegendContentProps, "formatter" | "payload"> {
  /**
   * If `true`, swatch is visible.
   */
  withSwatch?: boolean
}

const ChartLegendContent = withContext<"div", ChartLegendContentProps>(
  ({ formatter, payload, withSwatch = true, ...rest }) => {
    const { varMap } = useChartComponentContext()
    const { getLegendItemProps } = useChartLegendContext()

    return (
      <styled.div {...rest}>
        {payload?.map((data, index) => {
          const color =
            isString(data.dataKey) || isNumber(data.dataKey)
              ? varMap[data.dataKey]
              : undefined
          const value = formatter?.(data.value, data, index) ?? data.value

          return (
            <ChartLegendItem
              key={index}
              {...getLegendItemProps({
                dataKey:
                  isString(data.dataKey) || isNumber(data.dataKey)
                    ? data.dataKey
                    : undefined,
              })}
            >
              {withSwatch ? <ChartLegendSwatch bg={color} /> : null}
              <ChartLegendValue>{value}</ChartLegendValue>
            </ChartLegendItem>
          )
        })}
      </styled.div>
    )
  },
  "legendContent",
)()

interface ChartLegendItemProps extends HTMLStyledProps {}

const ChartLegendItem = withContext<"div", ChartLegendItemProps>(
  "div",
  "legendItem",
)()

interface ChartLegendSwatchProps extends HTMLStyledProps {}

const ChartLegendSwatch = withContext<"div", ChartLegendSwatchProps>(
  "div",
  "legendSwatch",
)()

interface ChartLegendValueProps extends HTMLStyledProps<"span"> {}

const ChartLegendValue = withContext<"span", ChartLegendValueProps>(
  "span",
  "legendValue",
)()

export interface ChartTooltipProps<
  Y extends (number | string)[] | number | string = number,
  M extends number | string = string,
> extends Omit<Merge<HTMLStyledProps, UseChartTooltipProps<Y, M>>, "cursor"> {
  /**
   * Props for the cursor component.
   */
  cursor?: boolean | ChartTooltipCursorProps | ReactElement
  /**
   * Props for the content component.
   */
  contentProps?: Omit<
    ChartTooltipContentProps,
    "formatter" | "label" | "labelFormatter" | "payload"
  >
}

export const ChartTooltip = <
  Y extends (number | string)[] | number | string,
  M extends number | string,
>(
  props: ChartTooltipProps<Y, M>,
) => {
  const { tooltipProps } = useChartComponentContext()
  const {
    cursor = true,
    contentProps,
    ...rest
  } = {
    ...tooltipProps,
    ...props,
  } as ChartTooltipProps<Y, M>
  const { getContentProps, getRootProps } = useChartTooltip({
    content: ({ formatter, label, labelFormatter, payload }) => (
      <ChartTooltipContent
        formatter={formatter}
        label={label}
        labelFormatter={labelFormatter}
        payload={payload}
        {...getContentProps(contentProps)}
      />
    ),
    cursor:
      isValidElement(cursor) || !cursor ? (
        cursor
      ) : (
        <ChartTooltipCursor {...(isObject(cursor) ? cursor : {})} />
      ),
    ...rest,
  })

  return <Tooltip {...getRootProps()} />
}

interface ChartTooltipCursorProps extends Omit<
  HTMLStyledProps<"path">,
  "height" | "points" | "width"
> {
  brushBottom?: number
  height?: number
  payload?: Dict[]
  payloadIndex?: number
  points?: { x: number; y: number }[]
  width?: number
}

const ChartTooltipCursor = withContext<"path", ChartTooltipCursorProps>(
  "path",
  "tooltipCursor",
)(
  undefined,
  ({
    bottom: _bottom,
    brushBottom: _brushBottom,
    height,
    left: _left,
    payload: _payload,
    payloadIndex: _payloadIndex,
    points = [],
    right: _right,
    stroke,
    top: _top,
    width,
    ...rest
  }) => {
    return {
      asChild: true,
      children: (
        <path
          d={`M${points[0]?.x},${points[0]?.y}L${points[1]?.x},${points[1]?.y}`}
          height={height}
          width={width}
        />
      ),
      stroke: stroke === "#ccc" ? undefined : stroke,
      ...rest,
    }
  },
)

interface ChartTooltipContentProps
  extends
    HTMLStyledProps,
    Pick<
      TooltipContentProps<any, any>,
      "formatter" | "label" | "labelFormatter" | "payload"
    > {
  /**
   * If `true`, swatch is visible.
   */
  withSwatch?: boolean
}

const ChartTooltipContent = withContext<"div", ChartTooltipContentProps>(
  ({
    formatter,
    label,
    labelFormatter,
    payload,
    withSwatch = true,
    ...rest
  }) => {
    const { varMap } = useChartComponentContext()

    return (
      <styled.div {...rest}>
        {label ? (
          <ChartTooltipLabel>
            {labelFormatter?.(label, payload) ?? label}
          </ChartTooltipLabel>
        ) : null}

        <ChartTooltipList>
          {payload.map((data, index) => {
            const color = varMap[data.dataKey.toString()]
            const result =
              formatter?.(data.value, data.name, data, index, payload) ??
              (isArray(data.value) ? data.value.join(", ") : data.value)
            const [value, name] = isArray(result) ? result : [result, data.name]

            return (
              <ChartTooltipItem key={index}>
                {withSwatch ? <ChartTooltipSwatch bg={color} /> : null}
                <ChartTooltipName>{name}</ChartTooltipName>
                <ChartTooltipValue>{value}</ChartTooltipValue>
              </ChartTooltipItem>
            )
          })}
        </ChartTooltipList>
      </styled.div>
    )
  },
  "tooltipContent",
)()

interface ChartTooltipLabel extends HTMLStyledProps<"p"> {}

const ChartTooltipLabel = withContext<"p", ChartTooltipLabel>(
  "p",
  "tooltipLabel",
)()

interface ChartTooltipList extends HTMLStyledProps {}

const ChartTooltipList = withContext<"div", ChartTooltipList>(
  "div",
  "tooltipList",
)()

interface ChartTooltipItem extends HTMLStyledProps {}

const ChartTooltipItem = withContext<"div", ChartTooltipItem>(
  "div",
  "tooltipItem",
)()

interface ChartTooltipSwatch extends HTMLStyledProps {}

const ChartTooltipSwatch = withContext<"div", ChartTooltipSwatch>(
  "div",
  "tooltipSwatch",
)()

interface ChartTooltipName extends HTMLStyledProps<"span"> {}

const ChartTooltipName = withContext<"span", ChartTooltipName>(
  "span",
  "tooltipName",
)()

interface ChartTooltipValue extends HTMLStyledProps<"span"> {}

const ChartTooltipValue = withContext<"span", ChartTooltipValue>(
  "span",
  "tooltipValue",
)()
