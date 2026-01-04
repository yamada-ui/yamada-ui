"use client"

import type { ReactElement } from "react"
import type { CartesianGridProps, DotProps } from "recharts"
import type { ActiveDotProps } from "recharts/types/util/types"
import type { GenericsComponent, HTMLStyledProps, ThemeProps } from "../../core"
import type { Dict, Merge } from "../../utils"
import type { CartesianChartStyle } from "./cartesian-chart.style"
import type { ChartProps } from "./chart"
import type {
  UseChartLabelListProps,
  UseChartLineProps,
  UseChartReferenceLineLabelProps,
  UseChartReferenceLineProps,
  UseChartXAxisLabelProps,
  UseChartXAxisProps,
  UseChartYAxisLabelProps,
  UseChartYAxisProps,
} from "./use-cartesian-chart"
import { Fragment, useMemo } from "react"
import {
  CartesianGrid,
  Label,
  LabelList,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"
import { createSlotComponent, styled } from "../../core"
import { isFunction, isNumber, isString } from "../../utils"
import { cartesianChartStyle } from "./cartesian-chart.style"
import { Chart, useChartComponentContext } from "./chart"
import {
  useChartLabelList,
  useChartLine,
  useChartReferenceLine,
  useChartReferenceLineLabel,
  useChartXAxis,
  useChartXAxisLabel,
  useChartYAxis,
  useChartYAxisLabel,
} from "./use-cartesian-chart"

interface ComponentContext
  extends Pick<
    CartesianChartProps,
    | "gridProps"
    | "lineProps"
    | "referenceLineProps"
    | "xAxisProps"
    | "yAxisProps"
  > {}

export interface CartesianChartProps<Y extends Dict = Dict>
  extends ChartProps<Y>,
    ThemeProps<CartesianChartStyle> {
  /**
   * If `true`, grid is visible.
   *
   * @default true
   */
  withGrid?: boolean
  /**
   * If `true`, X axis is visible.
   *
   * @default true
   */
  withXAxis?: boolean
  /**
   * If `true`, Y axis is visible.
   *
   * @default false
   */
  withYAxis?: boolean
  /**
   * Props for the grid component.
   */
  gridProps?: ChartGridProps
  /**
   * Props for the line component.
   */
  lineProps?: Omit<ChartLineProps, "dataKey">
  /**
   * Props for the reference line component.
   */
  referenceLineProps?: ChartReferenceLineProps
  /**
   * Props for the x axis component.
   */
  xAxisProps?: ChartXAxisProps
  /**
   * Props for the y axis component.
   */
  yAxisProps?: ChartYAxisProps
}

const {
  ComponentContext,
  PropsContext: CartesianChartPropsContext,
  useComponentContext,
  usePropsContext: useCartesianChartPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<
  CartesianChartProps,
  CartesianChartStyle,
  ComponentContext
>("cartesian-chart", cartesianChartStyle)

export { CartesianChartPropsContext, useCartesianChartPropsContext }

export const CartesianChart = withProvider(
  <Y extends Dict>({
    components: componentsProp,
    withGrid = true,
    withXAxis = true,
    withYAxis = false,
    gridProps,
    lineProps,
    referenceLineProps,
    xAxisProps,
    yAxisProps,
    ...rest
  }: CartesianChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartGrid,
          fallback: withGrid ? <ChartGrid /> : null,
        },
        {
          component: ChartXAxis,
          fallback: <ChartXAxis hide={!withXAxis} />,
        },
        {
          component: ChartYAxis,
          fallback: <ChartYAxis hide={!withYAxis} />,
        },
        ...componentsProp,
      ],
      [componentsProp, withGrid, withXAxis, withYAxis],
    )
    const componentContext = useMemo(
      () => ({
        gridProps,
        lineProps,
        referenceLineProps,
        xAxisProps,
        yAxisProps,
      }),
      [gridProps, lineProps, referenceLineProps, xAxisProps, yAxisProps],
    )

    return (
      <ComponentContext value={componentContext}>
        <Chart components={components} {...rest} />
      </ComponentContext>
    )
  },
  "root",
)() as GenericsComponent<{
  <Y extends Dict>(props: CartesianChartProps<Y>): ReactElement
}>

export interface ChartXAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseChartXAxisProps> {
  /**
   * Props for the label component or function that returns a React element.
   */
  label?: ChartXAxisLabelProps | number | string
}

export const ChartXAxis = withContext<"svg", ChartXAxisProps>((props) => {
  const { xAxisProps } = useComponentContext()
  const { label, ...rest } = { ...xAxisProps, ...props }
  const { getRootProps, getXAxisProps } = useChartXAxis(rest)

  return (
    <styled.svg asChild {...getRootProps()}>
      <XAxis {...getXAxisProps({ height: label ? 52 : undefined })}>
        {label ? (
          isNumber(label) || isString(label) ? (
            <ChartXAxisLabel>{label}</ChartXAxisLabel>
          ) : (
            <ChartXAxisLabel {...label} />
          )
        ) : null}
      </XAxis>
    </styled.svg>
  )
}, "xAxis")()

interface ChartXAxisLabelProps
  extends Merge<HTMLStyledProps<"text">, UseChartXAxisLabelProps> {}

const ChartXAxisLabel = withContext<"text", ChartXAxisLabelProps>((props) => {
  const { getLabelProps, getRootProps } = useChartXAxisLabel(props)

  return (
    <styled.text asChild {...getRootProps()}>
      <Label {...getLabelProps()} />
    </styled.text>
  )
}, "xAxisLabel")()

export interface ChartYAxisProps
  extends Merge<HTMLStyledProps<"svg">, UseChartYAxisProps> {
  /**
   * Props for the label component or function that returns a React element.
   */
  label?: ChartXAxisLabelProps | number | string
}

export const ChartYAxis = withContext<"svg", ChartYAxisProps>((props) => {
  const { yAxisProps } = useComponentContext()
  const { label, ...rest } = { ...yAxisProps, ...props }
  const { getRootProps, getYAxisProps } = useChartYAxis(rest)

  return (
    <styled.svg asChild {...getRootProps()}>
      <YAxis {...getYAxisProps({ width: label ? 64 : undefined })}>
        {label ? (
          isNumber(label) || isString(label) ? (
            <ChartYAxisLabel>{label}</ChartYAxisLabel>
          ) : (
            <ChartYAxisLabel {...label} />
          )
        ) : null}
      </YAxis>
    </styled.svg>
  )
}, "yAxis")()

interface ChartYAxisLabelProps
  extends Merge<HTMLStyledProps<"text">, UseChartYAxisLabelProps> {}

const ChartYAxisLabel = withContext<"text", ChartYAxisLabelProps>((props) => {
  const { getLabelProps, getRootProps } = useChartYAxisLabel(props)

  return (
    <styled.text asChild {...getRootProps()}>
      <Label {...getLabelProps()} />
    </styled.text>
  )
}, "yAxisLabel")()

export interface ChartGridProps
  extends Merge<HTMLStyledProps<"line">, CartesianGridProps> {}

export const ChartGrid = withContext<"line", ChartGridProps>(
  CartesianGrid,
  "grid",
  {
    shouldForwardProp: false,
    shouldStyleProps: true,
  },
)(undefined, (props) => {
  const { gridProps } = useComponentContext()

  return { stroke: "", vertical: false, ...gridProps, ...props }
})

export interface ChartLineProps<Y extends Dict = Dict>
  extends Merge<
    HTMLStyledProps<"line">,
    Omit<UseChartLineProps, "activeDot" | "dataKey" | "dot">
  > {
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: keyof Y
  /**
   * If a function is provided, it renders an custom active dot component. If props are provided, they are passed to the component. If `true`, active dot is visible.
   *
   * @default true
   */
  activeDot?:
    | ((props: ActiveDotProps) => ReactElement)
    | boolean
    | ChartActiveDotProps
  /**
   * If a function is provided, it renders an custom dot component. If props are provided, they are passed to the component. If `true`, dot is visible.
   *
   * @default true
   */
  dot?: ((props: DotProps) => ReactElement) | boolean | ChartDotProps
  /**
   * If props are provided, they are passed to the component. If `true`, label list is visible.
   *
   * @default false
   */
  labelList?: boolean | ChartLabelListProps
}

export const ChartLine = withContext<"line", ChartLineProps>((props) => {
  const { lineProps } = useComponentContext()
  const {
    activeDot: activeDotProp,
    children,
    dataKey,
    dot: dotProp = false,
    labelList = false,
    ...rest
  } = { ...lineProps, ...props }
  const { varMap } = useChartComponentContext()
  const color = varMap[dataKey.toString()]
  const { getLineProps, getRootProps } = useChartLine({
    dataKey,
    stroke: color,
    ...rest,
  })
  const dot = useMemo(() => {
    if (dotProp === false) return false

    if (isFunction(dotProp)) return dotProp

    const Component = ({ key, cx, cy }: DotProps) => {
      if (!isNumber(cx) || !isNumber(cy)) return <Fragment key={key} />

      return (
        <ChartDot
          key={key}
          cx={cx.toString()}
          cy={cy.toString()}
          fill={color}
          stroke={color}
          {...(dotProp === true ? {} : dotProp)}
        />
      )
    }

    return Component
  }, [color, dotProp])
  const activeDot = useMemo(() => {
    if (activeDotProp === false) return false

    if (isFunction(activeDotProp)) return activeDotProp

    const Component = ({ key, cx, cy }: ActiveDotProps) => {
      if (!isNumber(cx) || !isNumber(cy)) return <Fragment key={key} />

      return (
        <ChartActiveDot
          key={key}
          cx={cx.toString()}
          cy={cy.toString()}
          fill={color}
          stroke={color}
          {...(activeDotProp === true ? {} : activeDotProp)}
        />
      )
    }

    return Component
  }, [activeDotProp, color])

  return (
    <styled.line asChild {...getRootProps()}>
      <Line {...getLineProps({ activeDot, dot })}>
        {children ??
          (labelList ? (
            <ChartLabelList {...(labelList === true ? {} : labelList)} />
          ) : null)}
      </Line>
    </styled.line>
  )
}, "line")() as GenericsComponent<{
  <Y extends Dict>(props: ChartLineProps<Y>): ReactElement
}>

export interface ChartLabelListProps
  extends Merge<HTMLStyledProps<"text">, UseChartLabelListProps> {}

export const ChartLabelList = withContext<"text", ChartLabelListProps>(
  (props) => {
    const { getLabelListProps, getRootProps } = useChartLabelList(props)

    return (
      <styled.text asChild {...getRootProps()}>
        <LabelList {...getLabelListProps()} />
      </styled.text>
    )
  },
  "labelList",
)()

interface ChartDotProps extends HTMLStyledProps<"circle"> {}

const ChartDot = withContext<"circle", ChartDotProps>("circle", "dot")()

interface ChartActiveDotProps extends HTMLStyledProps<"circle"> {}

const ChartActiveDot = withContext<"circle", ChartActiveDotProps>(
  "circle",
  "activeDot",
)()

export interface ChartReferenceLineProps
  extends Omit<
    Merge<HTMLStyledProps<"line">, UseChartReferenceLineProps>,
    "label"
  > {
  /**
   * Props for the label component or function that returns a React element.
   */
  label?: ChartReferenceLineLabelProps | number | string
}

export const ChartReferenceLine = withContext<"line", ChartReferenceLineProps>(
  (props) => {
    const { referenceLineProps } = useComponentContext()
    const { label, ...rest } = { ...referenceLineProps, ...props }
    const { getReferenceLineProps, getRootProps } = useChartReferenceLine(rest)

    return (
      <styled.line asChild {...getRootProps()}>
        <ReferenceLine {...getReferenceLineProps()}>
          {label ? (
            isNumber(label) || isString(label) ? (
              <ChartReferenceLineLabel>{label}</ChartReferenceLineLabel>
            ) : (
              <ChartReferenceLineLabel {...label} />
            )
          ) : null}
        </ReferenceLine>
      </styled.line>
    )
  },
  "referenceLine",
)()

interface ChartReferenceLineLabelProps
  extends Merge<HTMLStyledProps<"text">, UseChartReferenceLineLabelProps> {}

const ChartReferenceLineLabel = withContext<
  "text",
  ChartReferenceLineLabelProps
>((props) => {
  const { getLabelProps, getRootProps } = useChartReferenceLineLabel(props)

  return (
    <styled.text asChild {...getRootProps()}>
      <Label {...getLabelProps()} />
    </styled.text>
  )
}, "referenceLineLabel")()
