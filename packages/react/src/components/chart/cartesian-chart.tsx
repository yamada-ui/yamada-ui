"use client"

import type { ReactElement, ReactNode } from "react"
import type {
  ActiveDotProps,
  DotProps,
  LabelListProps,
  LabelProps,
  RenderableText,
} from "recharts"
import type {
  DataKey,
  DotItemDotProps,
  XAxisTickContentProps,
  YAxisTickContentProps,
} from "recharts/types/util/types"
import type {
  CSSObject,
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { Dict, Merge } from "../../utils"
import type { CartesianChartStyle } from "./cartesian-chart.style"
import type { ChartProps } from "./chart"
import type {
  UseChartGridProps,
  UseChartLabelListProps,
  UseChartLineProps,
  UseChartReferenceLineProps,
  UseChartXAxisProps,
  UseChartYAxisProps,
} from "./use-cartesian-chart"
import { cloneElement, isValidElement, useMemo } from "react"
import {
  CartesianGrid,
  LabelList,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"
import {
  createShouldForwardProp,
  createSlotComponent,
  getCSS,
  styled,
  useSystem,
  useTheme,
} from "../../core"
import { cx, isFunction, isObject, splitObject } from "../../utils"
import { cartesianChartStyle } from "./cartesian-chart.style"
import { Chart, useChartComponentContext } from "./chart"
import {
  useChartGrid,
  useChartLabelList,
  useChartLine,
  useChartReferenceLine,
  useChartXAxis,
  useChartYAxis,
} from "./use-cartesian-chart"

const shouldForwardProp = createShouldForwardProp()

interface ComponentContext extends Pick<
  CartesianChartProps,
  "gridProps" | "lineProps" | "referenceLineProps" | "xAxisProps" | "yAxisProps"
> {}

export interface CartesianChartProps<Y extends Dict = Dict>
  extends ChartProps<Y>, ThemeProps<CartesianChartStyle> {
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
  useSlotComponentProps,
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

export type ChartLabel =
  | ((props: any) => ReactElement | RenderableText)
  | boolean
  | (Merge<
      HTMLStyledProps<"text">,
      Pick<
        LabelProps,
        | "angle"
        | "content"
        | "formatter"
        | "index"
        | "labelRef"
        | "offset"
        | "parentViewBox"
        | "position"
        | "textBreakAll"
        | "value"
        | "viewBox"
        | "zIndex"
      >
    > & { dataKey?: DataKey<any> })
  | number
  | ReactElement
  | string

export type ChartTickLine = boolean | HTMLStyledProps<"line">

export type ChartXAxisTick =
  | ((props: XAxisTickContentProps) => ReactNode)
  | boolean
  | HTMLStyledProps<"text">
  | ReactElement

export interface ChartXAxisProps extends Merge<
  HTMLStyledProps<"svg">,
  Omit<UseChartXAxisProps, "label" | "tick" | "tickLine">
> {
  /**
   * The label to use for the axis.
   *
   * @default false
   */
  label?: ChartLabel
  /**
   * The tick to use for the axis.
   *
   * @default true
   */
  tick?: ChartXAxisTick
  /**
   * The tick line to use for the axis.
   *
   * @default true
   */
  tickLine?: ChartTickLine
}

export const ChartXAxis = withContext<"svg", ChartXAxisProps>((props) => {
  const { xAxisProps } = useComponentContext()
  const {
    label: labelProp = false,
    tick: tickProp = true,
    tickLine: tickLineProp = false,
    ...rest
  } = { ...xAxisProps, ...props }
  const system = useSystem()
  const { theme } = useTheme()
  const tickProps = useSlotComponentProps({}, "xAxisTick")
  const labelProps = useSlotComponentProps({}, "xAxisLabel")
  const tickLineProps = useSlotComponentProps({}, "xAxisTickLine")
  const tick = useMemo<UseChartXAxisProps["tick"]>(() => {
    if (!tickProp) return tickProp

    const css = getCSS(system, theme)
    const className = cx(tickProps.className, css(tickProps.css))

    if (isFunction(tickProp)) {
      return (props) =>
        tickProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(tickProp)) {
      return cloneElement<any>(tickProp, { className })
    } else if (isObject(tickProp)) {
      const [omittedProps, styleProps] = splitObject<
        HTMLProps<"text">,
        CSSObject
      >(tickProp, shouldForwardProp)

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [system, theme, tickProp, tickProps.className, tickProps.css])
  const tickLine = useMemo<UseChartXAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    const css = getCSS(system, theme)
    const className = cx(tickLineProps.className, css(tickLineProps.css))

    if (isObject(tickLineProp)) {
      const [omittedProps, styleProps] = splitObject<
        HTMLProps<"line">,
        CSSObject
      >(tickLineProp, shouldForwardProp)

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [system, theme, tickLineProp, tickLineProps.className, tickLineProps.css])
  const label = useMemo<UseChartXAxisProps["label"]>(() => {
    if (!labelProp) return labelProp

    const css = getCSS(system, theme)
    const className = cx(labelProps.className, css(labelProps.css))

    if (isFunction(labelProp)) {
      return (props) =>
        labelProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(labelProp)) {
      return cloneElement<any>(labelProp, { className })
    } else if (isObject(labelProp)) {
      const [omittedProps, styleProps] = splitObject<LabelProps, CSSObject>(
        labelProp,
        shouldForwardProp,
      )

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className, children: labelProp }
    }
  }, [system, theme, labelProp, labelProps.className, labelProps.css])
  const { getRootProps, getXAxisProps } = useChartXAxis({
    label,
    tick,
    tickLine,
    ...rest,
  })

  return (
    <styled.svg asChild {...getRootProps()}>
      <XAxis {...getXAxisProps()} />
    </styled.svg>
  )
}, "xAxis")()

export type ChartYAxisTick =
  | ((props: YAxisTickContentProps) => ReactNode)
  | boolean
  | HTMLStyledProps<"text">
  | ReactElement

export interface ChartYAxisProps extends Merge<
  HTMLStyledProps<"svg">,
  Omit<UseChartYAxisProps, "label" | "tick" | "tickLine">
> {
  /**
   * The label to use for the axis.
   *
   * @default false
   */
  label?: ChartLabel
  /**
   * The tick to use for the axis.
   *
   * @default true
   */
  tick?: ChartYAxisTick
  /**
   * The tick line to use for the axis.
   *
   * @default true
   */
  tickLine?: ChartTickLine
}

export const ChartYAxis = withContext<"svg", ChartYAxisProps>((props) => {
  const { yAxisProps } = useComponentContext()
  const {
    label: labelProp = false,
    tick: tickProp = true,
    tickLine: tickLineProp = false,
    ...rest
  } = { ...yAxisProps, ...props }
  const system = useSystem()
  const { theme } = useTheme()
  const tickProps = useSlotComponentProps({}, "yAxisTick")
  const labelProps = useSlotComponentProps({}, "yAxisLabel")
  const tickLineProps = useSlotComponentProps({}, "yAxisTickLine")
  const tick = useMemo<UseChartYAxisProps["tick"]>(() => {
    if (!tickProp) return tickProp

    const css = getCSS(system, theme)
    const className = cx(tickProps.className, css(tickProps.css))

    if (isFunction(tickProp)) {
      return (props) =>
        tickProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(tickProp)) {
      return cloneElement<any>(tickProp, { className })
    } else if (isObject(tickProp)) {
      const [omittedProps, styleProps] = splitObject<
        HTMLProps<"text">,
        CSSObject
      >(tickProp, shouldForwardProp)

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [system, theme, tickProp, tickProps.className, tickProps.css])
  const tickLine = useMemo<UseChartXAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    const css = getCSS(system, theme)
    const className = cx(tickLineProps.className, css(tickLineProps.css))

    if (isObject(tickLineProp)) {
      const [omittedProps, styleProps] = splitObject<
        HTMLProps<"line">,
        CSSObject
      >(tickLineProp, shouldForwardProp)

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [system, theme, tickLineProp, tickLineProps.className, tickLineProps.css])
  const label = useMemo<UseChartYAxisProps["label"]>(() => {
    if (!labelProp) return labelProp

    const css = getCSS(system, theme)
    const className = cx(labelProps.className, css(labelProps.css))

    if (isFunction(labelProp)) {
      return (props) =>
        labelProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(labelProp)) {
      return cloneElement<any>(labelProp, { className })
    } else if (isObject(labelProp)) {
      const [omittedProps, styleProps] = splitObject<LabelProps, CSSObject>(
        labelProp,
        shouldForwardProp,
      )

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className, children: labelProp }
    }
  }, [system, theme, labelProp, labelProps.className, labelProps.css])
  const { getRootProps, getYAxisProps } = useChartYAxis({
    label,
    tick,
    tickLine,
    ...rest,
  })

  return (
    <styled.svg asChild {...getRootProps()}>
      <YAxis {...getYAxisProps()} />
    </styled.svg>
  )
}, "yAxis")()

export interface ChartGridProps extends Merge<
  HTMLStyledProps<"line">,
  UseChartGridProps
> {}

export const ChartGrid = withContext<"line", ChartGridProps>((props) => {
  const { gridProps } = useComponentContext()
  const { getGridProps, getRootProps } = useChartGrid({
    ...gridProps,
    ...props,
  })

  return (
    <styled.line asChild {...getRootProps()}>
      <CartesianGrid {...getGridProps()} />
    </styled.line>
  )
}, "grid")()

export type ChartDot =
  | ((props: DotItemDotProps) => ReactNode)
  | boolean
  | Merge<Partial<DotProps>, HTMLStyledProps<"circle">>
  | ReactElement

export type ChartActiveDot =
  | ((props: ActiveDotProps) => ReactNode)
  | boolean
  | Merge<Partial<ActiveDotProps>, HTMLStyledProps<"circle">>
  | ReactElement

export interface ChartLineProps<Y extends Dict = Dict> extends Merge<
  HTMLStyledProps<"line">,
  Omit<UseChartLineProps, "activeDot" | "dataKey" | "dot" | "label">
> {
  /**
   * The active dot to use for the line.
   *
   * @default true
   */
  activeDot?: ChartActiveDot
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: keyof Y
  /**
   * The dot to use for the line.
   *
   * @default true
   */
  dot?: ChartDot
  /**
   * The label list to use for the line.
   *
   * @default false
   */
  label?:
    | ((props: LabelProps) => ReactElement | RenderableText)
    | boolean
    | ChartLabelListProps
    | ReactElement
}

export const ChartLine = withContext<"line", ChartLineProps>((props) => {
  const { lineProps } = useComponentContext()
  const {
    activeDot: activeDotProp = true,
    children,
    dataKey,
    dot: dotProp = false,
    label: labelProp = false,
    ...rest
  } = { ...lineProps, ...props }
  const system = useSystem()
  const { theme } = useTheme()
  const { varMap } = useChartComponentContext()
  const color = varMap[dataKey.toString()]
  const dotProps = useSlotComponentProps({}, "dot")
  const activeDotProps = useSlotComponentProps({}, "activeDot")
  const labelProps = useSlotComponentProps({}, "labelList")
  const dot = useMemo<UseChartLineProps["dot"]>(() => {
    if (!dotProp) return dotProp

    const css = getCSS(system, theme)
    const className = cx(
      dotProps.className,
      css(dotProps.css),
      css({ fill: color, stroke: color }),
    )

    if (isFunction(dotProp)) {
      return (props) =>
        dotProp({
          ...props,
          className: cx(className, props.className),
        })
    } else if (isValidElement(dotProp)) {
      return cloneElement<any>(dotProp, {
        className,
      })
    } else if (isObject(dotProp)) {
      const [omittedProps, styleProps] = splitObject<DotProps, CSSObject>(
        dotProp,
        shouldForwardProp,
      )

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [dotProp, system, theme, dotProps.className, dotProps.css, color])
  const activeDot = useMemo<UseChartLineProps["activeDot"]>(() => {
    if (!activeDotProp) return activeDotProp

    const css = getCSS(system, theme)
    const className = cx(
      activeDotProps.className,
      css(activeDotProps.css),
      css({ fill: color, stroke: color }),
    )

    if (isFunction(activeDotProp)) {
      return (props) =>
        activeDotProp({
          ...props,
          className: cx(className, props.className),
        })
    } else if (isValidElement(activeDotProp)) {
      return cloneElement<any>(activeDotProp, {
        className,
      })
    } else if (isObject(activeDotProp)) {
      const [omittedProps, styleProps] = splitObject<ActiveDotProps, CSSObject>(
        activeDotProp,
        shouldForwardProp,
      )

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [
    activeDotProp,
    system,
    theme,
    activeDotProps.className,
    activeDotProps.css,
    color,
  ])
  const label = useMemo<UseChartLineProps["label"]>(() => {
    if (!labelProp) return labelProp

    const css = getCSS(system, theme)
    const className = cx(labelProps.className, css(labelProps.css))

    if (isFunction(labelProp)) {
      return (props) =>
        labelProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(labelProp)) {
      return cloneElement<any>(labelProp, { className })
    } else if (isObject(labelProp)) {
      const [omittedProps, styleProps] = splitObject<LabelListProps, CSSObject>(
        labelProp,
        shouldForwardProp,
      )

      return {
        ...omittedProps,
        className: cx(className, omittedProps.className, css(styleProps)),
      }
    } else {
      return { className }
    }
  }, [system, theme, labelProp, labelProps.className, labelProps.css])
  const { getLineProps, getRootProps } = useChartLine({
    activeDot,
    dataKey,
    dot,
    label,
    stroke: color,
    ...rest,
  })

  return (
    <styled.line asChild {...getRootProps()}>
      <Line {...getLineProps()}>{children}</Line>
    </styled.line>
  )
}, "line")() as GenericsComponent<{
  <Y extends Dict>(props: ChartLineProps<Y>): ReactElement
}>

export interface ChartLabelListProps extends Merge<
  HTMLStyledProps<"text">,
  UseChartLabelListProps
> {}

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

export interface ChartReferenceLineProps extends Omit<
  Merge<HTMLStyledProps<"line">, UseChartReferenceLineProps>,
  "label"
> {
  /**
   * The label to use for the reference line.
   *
   * @default false
   */
  label?: ChartLabel
}

export const ChartReferenceLine = withContext<"line", ChartReferenceLineProps>(
  (props) => {
    const { referenceLineProps } = useComponentContext()
    const { label: labelProp = false, ...rest } = {
      ...referenceLineProps,
      ...props,
    }
    const system = useSystem()
    const { theme } = useTheme()
    const labelProps = useSlotComponentProps({}, "referenceLineLabel")
    const label = useMemo<UseChartReferenceLineProps["label"]>(() => {
      if (!labelProp) return labelProp

      const css = getCSS(system, theme)
      const className = cx(labelProps.className, css(labelProps.css))

      if (isFunction(labelProp)) {
        return (props) =>
          labelProp({ ...props, className: cx(className, props.className) })
      } else if (isValidElement(labelProp)) {
        return cloneElement<any>(labelProp, { className })
      } else if (isObject(labelProp)) {
        const [omittedProps, styleProps] = splitObject<LabelProps, CSSObject>(
          labelProp,
          shouldForwardProp,
        )

        return {
          ...omittedProps,
          className: cx(className, omittedProps.className, css(styleProps)),
        }
      } else {
        return { className, children: labelProp }
      }
    }, [system, theme, labelProp, labelProps.className, labelProps.css])
    const { getReferenceLineProps, getRootProps } = useChartReferenceLine({
      label,
      ...rest,
    })

    return (
      <styled.line asChild {...getRootProps()}>
        <ReferenceLine {...getReferenceLineProps()} />
      </styled.line>
    )
  },
  "referenceLine",
)()
