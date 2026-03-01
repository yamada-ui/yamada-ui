"use client"

import type { ReactElement, ReactNode } from "react"

import type {
  ActiveDotProps,
  BaseTickContentProps,
  DataKey,
  DotProps,
  LabelListProps,
  LabelProps,
  PieLabelRenderProps,
  PieSectorShapeProps,
  SectorProps,
} from "recharts"
import type {
  CSSObject,
  CSSProps,
  GenericsComponent,
  HTMLProps,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { Dict, Merge } from "../../utils"
import type {
  ChartActiveDot,
  ChartDot,
  ChartLabel,
  ChartLabelListProps,
  ChartLabelList as ChartLabelListType,
  ChartProps,
  ChartTickLine,
} from "./chart"
import type { PolarChartStyle } from "./polar-chart.style"
import type {
  UseAngleAxisProps,
  UseChartPieLabelLineProps,
  UseChartPieLabelProps,
  UseChartPieProps,
  UseChartRadarProps,
  UseChartRadialProps,
  UseChartSectorProps,
  UsePolarGridProps,
  UseRadiusAxisProps,
} from "./use-polar-chart"
import {
  cloneElement,
  isValidElement,
  useCallback,
  useId,
  useMemo,
} from "react"
import {
  Curve,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadialBar,
  Sector,
  Text,
} from "recharts"
import {
  createShouldForwardProp,
  createSlotComponent,
  getCSS,
  styled,
  useSystem,
  useTheme,
  varAttr,
} from "../../core"
import {
  assignRef,
  cx,
  isFunction,
  isNumber,
  isObject,
  runIfFn,
  splitObject,
} from "../../utils"
import { Chart, ChartLabelList, useChartComponentContext } from "./chart"
import { polarChartStyle } from "./polar-chart.style"
import {
  useAngleAxis,
  useChartPie,
  useChartPieLabel,
  useChartPieLabelLine,
  useChartRadar,
  useChartRadial,
  useChartSector,
  usePolarGrid,
  useRadiusAxis,
} from "./use-polar-chart"

const shouldForwardProp = createShouldForwardProp()

interface ComponentContext extends Pick<
  PolarChartProps,
  | "angleAxisProps"
  | "gridProps"
  | "nameKey"
  | "pieProps"
  | "radarProps"
  | "radialProps"
  | "radiusAxisProps"
  | "sectorProps"
> {}

export interface PolarChartProps<Y extends Dict = Dict>
  extends Omit<ChartProps<Y>, "cx" | "cy">, ThemeProps<PolarChartStyle> {
  /**
   * The fill of the active dot.
   */
  activeDotFill?: CSSProps["fill"]
  /**
   * The radius of the active dot.
   */
  activeDotRadius?: CSSProps["r"]
  /**
   * The stroke of the active dot.
   */
  activeDotStroke?: CSSProps["stroke"]
  /**
   * The width of the active dot stroke.
   */
  activeDotStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The stroke of the angle axis line.
   */
  angleAxisLineStroke?: CSSProps["stroke"]
  /**
   * The width of the angle axis line stroke.
   */
  angleAxisLineStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The color of the angle axis text.
   */
  angleAxisTextColor?: CSSProps["color"]
  /**
   * The fill of the angle axis text.
   */
  angleAxisTextFill?: CSSProps["fill"]
  /**
   * The fill of the dot.
   */
  dotFill?: CSSProps["fill"]
  /**
   * The radius of the dot.
   */
  dotRadius?: CSSProps["r"]
  /**
   * The stroke of the dot.
   */
  dotStroke?: CSSProps["stroke"]
  /**
   * The width of the dot stroke.
   */
  dotStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The stroke of the grid.
   */
  gridStroke?: CSSProps["stroke"]
  /**
   * The opacity of the inactive label line.
   */
  inactiveLabelLineOpacity?: CSSProps["opacity"]
  /**
   * The opacity of the inactive label.
   */
  inactiveLabelOpacity?: CSSProps["opacity"]
  /**
   * The opacity of the inactive radar.
   */
  inactiveRadarOpacity?: CSSProps["opacity"]
  /**
   * The opacity of the inactive sector.
   */
  inactiveSectorOpacity?: CSSProps["opacity"]
  /**
   * The color of the label.
   */
  labelColor?: CSSProps["color"]
  /**
   * The fill of the label.
   */
  labelFill?: CSSProps["fill"]
  /**
   * The stroke of the label line.
   */
  labelLineStroke?: CSSProps["stroke"]
  /**
   * The width of the label line stroke.
   */
  labelLineStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The key to use for the angle axis.
   */
  nameKey?: keyof Y
  /**
   * The color of the radar.
   */
  radarColor?: CSSProps["color"]
  /**
   * The fill opacity of the radar.
   */
  radarFillOpacity?: CSSProps["fillOpacity"]
  /**
   * The stroke of the radar.
   */
  radarStroke?: CSSProps["stroke"]
  /**
   * The width of the radar stroke.
   */
  radarStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The color of the radial background.
   */
  radialBackgroundColor?: CSSProps["color"]
  /**
   * The fill of the radial background.
   */
  radialBackgroundFill?: CSSProps["fill"]
  /**
   * The stroke of the radial background.
   */
  radialBackgroundStroke?: CSSProps["stroke"]
  /**
   * The width of the radial background stroke.
   */
  radialBackgroundStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The stroke of the radius axis line.
   */
  radiusAxisLineStroke?: CSSProps["stroke"]
  /**
   * The width of the radius axis line stroke.
   */
  radiusAxisLineStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * The color of the radius axis text.
   */
  radiusAxisTextColor?: CSSProps["color"]
  /**
   * The fill of the radius axis text.
   */
  radiusAxisTextFill?: CSSProps["fill"]
  /**
   * The color of the sector.
   */
  sectorColor?: CSSProps["color"]
  /**
   * The fill of the sector.
   */
  sectorFill?: CSSProps["fill"]
  /**
   * The stroke of the sector.
   */
  sectorStroke?: CSSProps["stroke"]
  /**
   * The width of the sector stroke.
   */
  sectorStrokeWidth?: CSSProps["strokeWidth"]
  /**
   * If `true`, angle axis is visible.
   *
   * @default true
   */
  withAngleAxis?: boolean
  /**
   * If `true`, grid is visible.
   *
   * @default true
   */
  withGrid?: boolean
  /**
   * If `true`, radius axis is visible.
   *
   * @default false
   */
  withRadiusAxis?: boolean
  /**
   * Props for the angle axis component.
   */
  angleAxisProps?: UseAngleAxisProps
  /**
   * Props for the donut component.
   */
  donutProps?: Omit<ChartPieProps, "data" | "dataKey" | "nameKey">
  /**
   * Props for the grid component.
   */
  gridProps?: ChartPolarGridProps
  /**
   * Props for the pie component.
   */
  pieProps?: Omit<ChartPieProps, "data" | "dataKey" | "nameKey">
  /**
   * Props for the radar component.
   */
  radarProps?: Omit<ChartRadarProps, "data" | "dataKey">
  /**
   * Props for the radial component.
   */
  radialProps?: Omit<ChartRadialProps, "dataKey" | "nameKey">
  /**
   * Props for the radius axis component.
   */
  radiusAxisProps?: UseRadiusAxisProps
  /**
   * Props for the sector component.
   */
  sectorProps?: ChartSectorProps
}

const {
  component,
  ComponentContext,
  PropsContext: PolarChartPropsContext,
  useComponentContext,
  usePropsContext: usePolarChartPropsContext,
  withContext,
  withProvider,
  useSlotComponentProps,
} = createSlotComponent<PolarChartProps, PolarChartStyle, ComponentContext>(
  "polar-chart",
  polarChartStyle,
)

export { PolarChartPropsContext, usePolarChartPropsContext }

export const PolarChart = withProvider(
  <Y extends Dict>({
    components: componentsProp,
    nameKey,
    withAngleAxis = false,
    withGrid = false,
    withRadiusAxis = false,
    angleAxisProps,
    donutProps,
    gridProps,
    pieProps = donutProps,
    radarProps,
    radialProps,
    radiusAxisProps,
    sectorProps,
    ...rest
  }: PolarChartProps<Y>) => {
    const components = useMemo(
      () => [
        {
          component: ChartPolarGrid,
          fallback: withGrid ? <ChartPolarGrid /> : null,
        },
        {
          component: ChartAngleAxis,
          fallback: withAngleAxis ? <ChartAngleAxis /> : null,
        },
        {
          component: ChartRadiusAxis,
          fallback: withRadiusAxis ? <ChartRadiusAxis /> : null,
        },
        ...componentsProp,
      ],
      [componentsProp, withGrid, withAngleAxis, withRadiusAxis],
    )
    const componentContext = useMemo(
      () => ({
        nameKey: nameKey as string | undefined,
        angleAxisProps,
        gridProps,
        pieProps,
        radarProps,
        radialProps,
        radiusAxisProps,
        sectorProps,
      }),
      [
        pieProps,
        radarProps,
        sectorProps,
        angleAxisProps,
        radiusAxisProps,
        gridProps,
        nameKey,
        radialProps,
      ],
    )

    return (
      <ComponentContext value={componentContext}>
        <Chart components={components} {...rest} />
      </ComponentContext>
    )
  },
  "root",
)(
  undefined,
  ({
    activeDotFill,
    activeDotRadius,
    activeDotStroke,
    activeDotStrokeWidth,
    angleAxisLineStroke,
    angleAxisLineStrokeWidth,
    angleAxisTextColor,
    angleAxisTextFill,
    dotFill,
    dotRadius,
    dotStroke,
    dotStrokeWidth,
    gridStroke,
    inactiveLabelLineOpacity,
    inactiveLabelOpacity,
    inactiveRadarOpacity,
    inactiveSectorOpacity,
    labelColor,
    labelFill,
    labelLineStroke,
    labelLineStrokeWidth,
    radarColor,
    radarFillOpacity,
    radarStroke,
    radarStrokeWidth,
    radialBackgroundColor,
    radialBackgroundFill,
    radialBackgroundStroke,
    radialBackgroundStrokeWidth,
    radiusAxisLineStroke,
    radiusAxisLineStrokeWidth,
    radiusAxisTextColor,
    radiusAxisTextFill,
    sectorColor,
    sectorFill,
    sectorStroke,
    sectorStrokeWidth,
    ...rest
  }) => ({
    "--active-dot-fill": varAttr(activeDotFill, "colors"),
    "--active-dot-r": activeDotRadius,
    "--active-dot-stroke": varAttr(activeDotStroke, "colors"),
    "--active-dot-stroke-width": activeDotStrokeWidth,
    "--angle-axis-line-stroke": varAttr(angleAxisLineStroke, "colors"),
    "--angle-axis-line-stroke-width": angleAxisLineStrokeWidth,
    "--angle-axis-text-color": varAttr(angleAxisTextColor, "colors"),
    "--angle-axis-text-fill": varAttr(angleAxisTextFill, "colors"),
    "--dot-fill": varAttr(dotFill, "colors"),
    "--dot-r": dotRadius,
    "--dot-stroke": varAttr(dotStroke, "colors"),
    "--dot-stroke-width": dotStrokeWidth,
    "--grid-stroke": varAttr(gridStroke, "colors"),
    "--inactive-label-line-opacity": inactiveLabelLineOpacity,
    "--inactive-label-opacity": inactiveLabelOpacity,
    "--inactive-radar-opacity": inactiveRadarOpacity,
    "--inactive-sector-opacity": inactiveSectorOpacity,
    "--label-color": varAttr(labelColor, "colors"),
    "--label-fill": varAttr(labelFill, "colors"),
    "--label-line-stroke": varAttr(labelLineStroke, "colors"),
    "--label-line-stroke-width": labelLineStrokeWidth,
    "--radar-color": varAttr(radarColor, "colors"),
    "--radar-fill-opacity": radarFillOpacity,
    "--radar-stroke": varAttr(radarStroke, "colors"),
    "--radar-stroke-width": radarStrokeWidth,
    "--radial-background-color": varAttr(radialBackgroundColor, "colors"),
    "--radial-background-fill": varAttr(radialBackgroundFill, "colors"),
    "--radial-background-stroke": varAttr(radialBackgroundStroke, "colors"),
    "--radial-background-stroke-width": radialBackgroundStrokeWidth,
    "--radius-axis-line-stroke": varAttr(radiusAxisLineStroke, "colors"),
    "--radius-axis-line-stroke-width": radiusAxisLineStrokeWidth,
    "--radius-axis-text-color": varAttr(radiusAxisTextColor, "colors"),
    "--radius-axis-text-fill": varAttr(radiusAxisTextFill, "colors"),
    "--sector-color": varAttr(sectorColor, "colors"),
    "--sector-fill": varAttr(sectorFill, "colors"),
    "--sector-stroke": varAttr(sectorStroke, "colors"),
    "--sector-stroke-width": sectorStrokeWidth,
    ...rest,
  }),
) as GenericsComponent<{
  <Y extends Dict>(props: PolarChartProps<Y>): ReactElement
}>

export type ChartPieLabel =
  | ((props: PieLabelRenderProps) => Partial<ChartPieLabelProps>)
  | boolean
  | Partial<ChartPieLabelProps>

export type ChartPieLabelLine =
  | ((props: any) => ChartPieLabelLineProps)
  | boolean
  | ChartPieLabelLineProps

export type ChartPieLabelList = boolean | ChartLabelListProps

export interface ChartPieProps<Y extends Dict = Dict> extends Merge<
  HTMLStyledProps<"svg">,
  Omit<UseChartPieProps, "data" | "dataKey" | "label" | "labelLine" | "nameKey">
> {
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: Exclude<keyof Y, "fill">
  /**
   * The key of the name of the data.
   */
  nameKey: Exclude<keyof Y, "fill">
  /**
   * The active index of the sector.
   */
  activeIndex?: number
  /**
   * The data to use for the pie.
   */
  data?: Y[]
  /**
   * The label to use for the pie.
   */
  label?: ChartPieLabel
  /**
   * The label line to use for the pie.
   *
   * @default false
   */
  labelLine?: ChartPieLabelLine
  /**
   * If `true`, the label list is visible.
   *
   * @default false
   */
  labelList?: ChartPieLabelList
  /**
   * Props for the sector component.
   */
  sectorProps?:
    | ((props: PieSectorShapeProps, index: number) => ChartSectorProps)
    | ChartSectorProps
}

export const ChartPie = withContext<"svg", ChartPieProps>((props) => {
  const { pieProps } = useComponentContext()
  const {
    activeIndex,
    children,
    dataKey,
    label: labelProp,
    labelLine: labelLineProp = false,
    labelList = false,
    nameKey,
    sectorProps,
    ...rest
  } = { ...pieProps, ...props }
  const { varMap } = useChartComponentContext()
  const shape = useCallback(
    (props: any, index: number) => {
      if (isNumber(activeIndex)) props.isActive = index === activeIndex

      const color = varMap[`${dataKey.toString()}-${props.name}`]

      return (
        <ChartSector
          color={color}
          {...props}
          {...runIfFn(sectorProps, props, index)}
        />
      )
    },
    [activeIndex, dataKey, sectorProps, varMap],
  )
  const label = useMemo<UseChartPieProps["label"]>(() => {
    if (!labelProp) return labelProp

    const Component = (props: any) => (
      <ChartPieLabel
        {...props}
        {...(labelProp !== true ? runIfFn(labelProp, props) : {})}
      />
    )

    return Component
  }, [labelProp])
  const labelLine = useMemo<UseChartPieProps["labelLine"]>(() => {
    if (!labelLineProp) return labelLineProp

    const Component = ({ key: _, ...rest }: any) => (
      <ChartPieLabelLine
        {...rest}
        {...(labelLineProp !== true ? runIfFn(labelLineProp, rest) : {})}
      />
    )

    return Component
  }, [labelLineProp])
  const { getPieProps, getRootProps } = useChartPie({
    dataKey,
    label,
    labelLine,
    nameKey,
    shape,
    ...rest,
  })

  return (
    <styled.svg asChild {...getRootProps()}>
      <Pie {...getPieProps()}>
        {children}

        {labelList ? (
          <ChartLabelList
            dataKey={nameKey}
            {...(isObject(labelList) ? labelList : {})}
          />
        ) : null}
      </Pie>
    </styled.svg>
  )
}, "pie")() as GenericsComponent<{
  <Y extends Dict>(props: ChartPieProps<Y>): ReactElement
}>

interface ChartSectorProps extends Merge<
  HTMLStyledProps<"path">,
  UseChartSectorProps
> {}

const ChartSector = withContext<"path", ChartSectorProps>((props) => {
  const { sectorProps } = useComponentContext()
  const { getRootProps, getSectorProps } = useChartSector({
    ...sectorProps,
    ...props,
  })

  return (
    <styled.path asChild {...getRootProps()}>
      <Sector {...getSectorProps()} />
    </styled.path>
  )
}, "sector")()

interface ChartPieLabelProps extends Merge<
  HTMLStyledProps<"text">,
  UseChartPieLabelProps
> {}

const ChartPieLabel = withContext<"text", ChartPieLabelProps>((props) => {
  const { getRootProps, getTextProps } = useChartPieLabel(props)

  return (
    <styled.text asChild {...getRootProps()}>
      <Text {...getTextProps()} />
    </styled.text>
  )
}, "label")()

interface ChartPieLabelLineProps extends Merge<
  HTMLStyledProps<"path">,
  UseChartPieLabelLineProps
> {}

const ChartPieLabelLine = withContext<"path", ChartPieLabelLineProps>(
  (props) => {
    const { getCurveProps, getRootProps } = useChartPieLabelLine(props)

    return (
      <styled.path asChild {...getRootProps()}>
        <Curve {...getCurveProps()} />
      </styled.path>
    )
  },
  "labelLine",
)()

export interface ChartDonutProps<
  Y extends Dict = Dict,
> extends ChartPieProps<Y> {}

export const ChartDonut = component<"svg", ChartDonutProps>(ChartPie, "donut")(
  undefined,
  (props) => {
    const { pieProps } = useComponentContext()

    return { ...pieProps, ...props }
  },
  ({ label, ...rest }) => ({ innerRadius: !label ? "70%" : "50%", ...rest }),
) as GenericsComponent<{
  <Y extends Dict>(props: ChartDonutProps<Y>): ReactElement
}>

export interface ChartRadarProps<Y extends Dict = Dict> extends Merge<
  HTMLStyledProps<"path">,
  Omit<UseChartRadarProps, "activeDot" | "dataKey" | "dot" | "label">
> {
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: keyof Y
  /**
   * The active dot to use for the line.
   *
   * @default true
   */
  activeDot?: ChartActiveDot
  /**
   * The dot to use for the line.
   *
   * @default false
   */
  dot?: ChartDot
  /**
   * The label to use for the line.
   *
   * @default false
   */
  label?: ChartLabelListType
}

export const ChartRadar = withContext<"path", ChartRadarProps>((props) => {
  const { radarProps } = useComponentContext()
  const {
    activeDot: activeDotProp = true,
    children,
    dataKey,
    dot: dotProp = false,
    label: labelProp = false,
    ...rest
  } = { ...radarProps, ...props }
  const id = useId()
  const system = useSystem()
  const { theme } = useTheme()
  const { varMap } = useChartComponentContext()
  const color = varMap[dataKey.toString()] ?? rest.stroke ?? rest.color
  const dotProps = useSlotComponentProps({}, "dot")
  const activeDotProps = useSlotComponentProps({}, "activeDot")
  const labelProps = useSlotComponentProps({}, "labelList")
  const dot = useMemo<UseChartRadarProps["dot"]>(() => {
    if (!dotProp) return dotProp

    const css = getCSS(system, theme)
    const className = cx(
      dotProps.className,
      css(dotProps.css),
      css({ fill: color, stroke: color }),
    )

    if (isFunction(dotProp)) {
      return (props) =>
        dotProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(dotProp)) {
      return cloneElement<any>(dotProp, { className })
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
  const activeDot = useMemo<UseChartRadarProps["activeDot"]>(() => {
    if (!activeDotProp) return activeDotProp

    const css = getCSS(system, theme)
    const className = cx(
      activeDotProps.className,
      css(activeDotProps.css),
      css({ fill: color, stroke: color }),
    )

    if (isFunction(activeDotProp)) {
      return (props) =>
        activeDotProp({ ...props, className: cx(className, props.className) })
    } else if (isValidElement(activeDotProp)) {
      return cloneElement<any>(activeDotProp, { className })
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
  const label = useMemo<UseChartRadarProps["label"]>(() => {
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
  const { getRadarProps, getRootProps } = useChartRadar({
    activeDot,
    dataKey,
    dot,
    fill: color ? `url(#${id})` : "",
    label,
    stroke: color,
    ...rest,
  })

  return (
    <>
      <styled.path asChild {...getRootProps()}>
        <Radar {...getRadarProps()}>{children}</Radar>
      </styled.path>

      <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
        <styled.stop stopColor={color} stopOpacity={0.4} />
      </linearGradient>
    </>
  )
}, "radar")() as GenericsComponent<{
  <Y extends Dict>(props: ChartRadarProps<Y>): ReactElement
}>

export type ChartPolarAxisTick =
  | ((props: BaseTickContentProps) => ReactNode)
  | boolean
  | HTMLStyledProps<"text">
  | ReactElement

export type ChartAxisLine = boolean | HTMLStyledProps<"line">

export interface ChartAngleAxisProps<Y extends Dict = Dict> extends Merge<
  HTMLStyledProps<"text">,
  Omit<
    UseAngleAxisProps,
    "axisLine" | "dataKey" | "label" | "tick" | "tickLine"
  >
> {
  /**
   * The tick line to use for the axis.
   *
   * @default false
   */
  axisLine?: ChartAxisLine
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey?: keyof Y
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
  tick?: ChartPolarAxisTick
  /**
   * The tick line to use for the axis.
   *
   * @default false
   */
  tickLine?: ChartTickLine
}

export const ChartAngleAxis = withContext<"text", ChartAngleAxisProps>(
  (props) => {
    const { nameKey, angleAxisProps } = useComponentContext()
    const {
      axisLine: axisLineProp = false,
      children,
      label: labelProp = false,
      tick: tickProp = true,
      tickLine: tickLineProp = false,
      ...rest
    } = { ...angleAxisProps, ...props }
    const system = useSystem()
    const { theme } = useTheme()
    const tickProps = useSlotComponentProps({}, "angleAxisTick")
    const labelProps = useSlotComponentProps({}, "angleAxisLabel")
    const tickLineProps = useSlotComponentProps({}, "angleAxisTickLine")
    const axisLineProps = useSlotComponentProps({}, "angleAxisLine")
    const tick = useMemo<UseAngleAxisProps["tick"]>(() => {
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
    const tickLine = useMemo<UseAngleAxisProps["tickLine"]>(() => {
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
    }, [
      system,
      theme,
      tickLineProp,
      tickLineProps.className,
      tickLineProps.css,
    ])
    const axisLine = useMemo<UseAngleAxisProps["axisLine"]>(() => {
      if (!axisLineProp) return axisLineProp

      const css = getCSS(system, theme)
      const className = cx(axisLineProps.className, css(axisLineProps.css))

      if (isObject(axisLineProp)) {
        const [omittedProps, styleProps] = splitObject<
          HTMLProps<"line">,
          CSSObject
        >(axisLineProp, shouldForwardProp)

        return {
          ...omittedProps,
          className: cx(className, omittedProps.className, css(styleProps)),
        }
      } else {
        return { className }
      }
    }, [
      system,
      theme,
      axisLineProp,
      axisLineProps.className,
      axisLineProps.css,
    ])
    const label = useMemo<UseAngleAxisProps["label"]>(() => {
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
    const { getAngleAxisProps, getRootProps } = useAngleAxis({
      axisLine,
      dataKey: nameKey,
      label,
      tick,
      tickLine,
      ...rest,
    })

    return (
      <styled.text asChild {...getRootProps()}>
        <PolarAngleAxis {...getAngleAxisProps()}>{children}</PolarAngleAxis>
      </styled.text>
    )
  },
  "angleAxis",
)() as GenericsComponent<{
  <Y extends Dict>(props: ChartAngleAxisProps<Y>): ReactElement
}>

export interface ChartRadiusAxisProps<Y extends Dict = Dict> extends Merge<
  HTMLStyledProps<"text">,
  Omit<
    UseRadiusAxisProps,
    "axisLine" | "dataKey" | "label" | "tick" | "tickLine"
  >
> {
  /**
   * The tick line to use for the axis.
   *
   * @default false
   */
  axisLine?: ChartAxisLine
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey?: keyof Y
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
  tick?: ChartPolarAxisTick
  /**
   * The tick line to use for the axis.
   *
   * @default false
   */
  tickLine?: ChartTickLine
}

export const ChartRadiusAxis = withContext<"text", ChartRadiusAxisProps>(
  (props) => {
    const { radiusAxisProps } = useComponentContext()
    const {
      axisLine: axisLineProp = false,
      children,
      label: labelProp = false,
      tick: tickProp = true,
      tickLine: tickLineProp = false,
      ...rest
    } = { ...radiusAxisProps, ...props }
    const system = useSystem()
    const { theme } = useTheme()
    const tickProps = useSlotComponentProps({}, "radiusAxisTick")
    const labelProps = useSlotComponentProps({}, "radiusAxisLabel")
    const tickLineProps = useSlotComponentProps({}, "radiusAxisTickLine")
    const axisLineProps = useSlotComponentProps({}, "radiusAxisLine")
    const tick = useMemo<UseRadiusAxisProps["tick"]>(() => {
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
    const tickLine = useMemo<UseRadiusAxisProps["tickLine"]>(() => {
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
    }, [
      system,
      theme,
      tickLineProp,
      tickLineProps.className,
      tickLineProps.css,
    ])
    const axisLine = useMemo<UseRadiusAxisProps["axisLine"]>(() => {
      if (!axisLineProp) return axisLineProp

      const css = getCSS(system, theme)
      const className = cx(axisLineProps.className, css(axisLineProps.css))

      if (isObject(axisLineProp)) {
        const [omittedProps, styleProps] = splitObject<
          HTMLProps<"line">,
          CSSObject
        >(axisLineProp, shouldForwardProp)

        return {
          ...omittedProps,
          className: cx(className, omittedProps.className, css(styleProps)),
        }
      } else {
        return { className }
      }
    }, [
      system,
      theme,
      axisLineProp,
      axisLineProps.className,
      axisLineProps.css,
    ])
    const label = useMemo<UseRadiusAxisProps["label"]>(() => {
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
    const { getRadiusAxisProps, getRootProps } = useRadiusAxis({
      axisLine,
      label,
      tick,
      tickLine,
      ...rest,
    })

    return (
      <styled.text asChild {...getRootProps()}>
        <PolarRadiusAxis {...getRadiusAxisProps()}>{children}</PolarRadiusAxis>
      </styled.text>
    )
  },
  "radiusAxis",
)() as GenericsComponent<{
  <Y extends Dict>(props: ChartRadiusAxisProps<Y>): ReactElement
}>

export interface ChartPolarGridProps extends Merge<
  HTMLStyledProps<"line">,
  UsePolarGridProps
> {}

export const ChartPolarGrid = withContext<"line", ChartPolarGridProps>(
  (props) => {
    const { gridProps } = useComponentContext()
    const { getPolarGridProps, getRootProps } = usePolarGrid({
      ...gridProps,
      ...props,
    })

    return (
      <styled.line asChild {...getRootProps()}>
        <PolarGrid {...getPolarGridProps()} />
      </styled.line>
    )
  },
  "grid",
)()

export type ChartRadialBackground =
  | ((props: SectorProps) => null | ReactElement | undefined)
  | boolean
  | HTMLStyledProps<"svg">
  | ReactElement

export interface ChartRadialProps<Y extends Dict = Dict> extends Merge<
  Omit<HTMLStyledProps<"svg">, "background">,
  Omit<UseChartRadialProps<Y>, "background" | "dataKey" | "label">
> {
  /**
   * The key of a group of data which should be unique in an chart.
   */
  dataKey: keyof Y
  /**
   * The background to use for the radial chart.
   */
  background?: ChartRadialBackground
  /**
   * The label to use for the radial.
   *
   * @default false
   */
  label?: ChartLabelListType
  /**
   * If `true`, the label list is visible.
   *
   * @default false
   */
  labelList?: ChartPieLabelList
  /**
   * Props for the sector component.
   */
  sectorProps?:
    | ((props: PieSectorShapeProps) => ChartSectorProps)
    | ChartSectorProps
}

export const ChartRadial = withContext<"svg", ChartRadialProps>(
  <Y extends Dict>(props: ChartRadialProps<Y>) => {
    const { radialProps } = useComponentContext()
    const {
      background: backgroundProp = true,
      children,
      dataKey,
      label: labelProp = false,
      labelList = false,
      nameKey,
      sectorProps,
      ...rest
    } = { ...radialProps, ...props }
    const system = useSystem()
    const { theme } = useTheme()
    const { nameKeyRef, varMap } = useChartComponentContext()
    const labelProps = useSlotComponentProps({}, "labelList")
    const backgroundProps = useSlotComponentProps({}, "radialBackground")
    const shape = useCallback(
      (props: any) => {
        const color =
          varMap[`${dataKey.toString()}-${props.name}`] ??
          rest.fill ??
          rest.color

        return (
          <ChartSector
            color={color}
            {...props}
            {...runIfFn(sectorProps, props)}
          />
        )
      },
      [dataKey, rest.fill, rest.color, sectorProps, varMap],
    )
    const label = useMemo<UseChartRadialProps<Y>["label"]>(() => {
      if (!labelProp) return labelProp

      const css = getCSS(system, theme)
      const className = cx(labelProps.className, css(labelProps.css))

      if (isFunction(labelProp)) {
        return (props) =>
          labelProp({ ...props, className: cx(className, props.className) })
      } else if (isValidElement(labelProp)) {
        return cloneElement<any>(labelProp, { className })
      } else if (isObject(labelProp)) {
        const [omittedProps, styleProps] = splitObject<
          LabelListProps,
          CSSObject
        >(labelProp, shouldForwardProp)

        return {
          ...omittedProps,
          className: cx(className, omittedProps.className, css(styleProps)),
        }
      } else {
        return { className }
      }
    }, [system, theme, labelProp, labelProps.className, labelProps.css])
    const background = useMemo<UseChartRadialProps<Y>["background"]>(() => {
      if (!backgroundProp) return backgroundProp

      const css = getCSS(system, theme)
      const className = cx(backgroundProps.className, css(backgroundProps.css))

      if (isFunction(backgroundProp)) {
        return (props) =>
          backgroundProp({
            ...props,
            className: cx(className, props.className),
          })
      } else if (isValidElement(backgroundProp)) {
        return cloneElement<any>(backgroundProp, { className })
      } else if (isObject(backgroundProp)) {
        const [omittedProps, styleProps] = splitObject<
          HTMLProps<"svg">,
          CSSObject
        >(backgroundProp, shouldForwardProp)
        return {
          ...omittedProps,
          className: cx(className, omittedProps.className, css(styleProps)),
        }
      } else {
        return { className }
      }
    }, [
      system,
      theme,
      backgroundProp,
      backgroundProps.className,
      backgroundProps.css,
    ])
    const { getRadialProps, getRootProps } = useChartRadial({
      background,
      dataKey: dataKey as DataKey<any>,
      label,
      nameKey,
      shape,
      ...rest,
    })

    assignRef(nameKeyRef, nameKey)

    return (
      <styled.svg asChild {...getRootProps()}>
        <RadialBar {...getRadialProps()}>
          {children}

          {labelList ? (
            <ChartLabelList
              dataKey={nameKey as DataKey<any>}
              offset={4}
              position="insideStart"
              {...(isObject(labelList) ? labelList : {})}
            />
          ) : null}
        </RadialBar>
      </styled.svg>
    )
  },
  "radial",
)() as GenericsComponent<{
  <Y extends Dict>(props: ChartRadialProps<Y>): ReactElement
}>
