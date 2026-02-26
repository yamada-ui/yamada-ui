"use client"

import type { ReactElement } from "react"

import type { PieLabelRenderProps, PieSectorShapeProps } from "recharts"
import type {
  CSSProps,
  GenericsComponent,
  HTMLStyledProps,
  ThemeProps,
} from "../../core"
import type { Dict, Merge } from "../../utils"
import type { ChartLabelListProps, ChartProps } from "./chart"
import type { PolarChartStyle } from "./polar-chart.style"
import type {
  UseChartLabelLineProps,
  UseChartLabelProps,
  UseChartPieProps,
  UseChartSectorProps,
} from "./use-polar-chart"
import { useCallback, useMemo } from "react"
import { Curve, Pie, Sector, Text } from "recharts"
import { createSlotComponent, styled, varAttr } from "../../core"
import { isNumber, isObject, runIfFn } from "../../utils"
import { Chart, ChartLabelList, useChartComponentContext } from "./chart"
import { polarChartStyle } from "./polar-chart.style"
import {
  useChartLabel,
  useChartLabelLine,
  useChartPie,
  useChartSector,
} from "./use-polar-chart"

interface ComponentContext extends Pick<
  PolarChartProps,
  "pieProps" | "sectorProps"
> {}

export interface PolarChartProps<Y extends Dict = Dict>
  extends Omit<ChartProps<Y>, "cx" | "cy">, ThemeProps<PolarChartStyle> {
  /**
   * The opacity of the inactive label line.
   */
  inactiveLabelLineOpacity?: CSSProps["opacity"]
  /**
   * The opacity of the inactive label.
   */
  inactiveLabelOpacity?: CSSProps["opacity"]
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
   * Props for the pie component.
   */
  pieProps?: Omit<ChartPieProps, "data" | "dataKey" | "nameKey">
  /**
   * Props for the sector component.
   */
  sectorProps?: ChartSectorProps
}

const {
  ComponentContext,
  PropsContext: PolarChartPropsContext,
  useComponentContext,
  usePropsContext: usePolarChartPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<PolarChartProps, PolarChartStyle, ComponentContext>(
  "polar-chart",
  polarChartStyle,
)

export { PolarChartPropsContext, usePolarChartPropsContext }

export const PolarChart = withProvider(
  <Y extends Dict>({
    components: componentsProp,
    pieProps,
    sectorProps,
    ...rest
  }: PolarChartProps<Y>) => {
    const components = useMemo(() => [...componentsProp], [componentsProp])
    const componentContext = useMemo(
      () => ({ pieProps, sectorProps }),
      [pieProps, sectorProps],
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
    inactiveLabelLineOpacity,
    inactiveLabelOpacity,
    inactiveSectorOpacity,
    labelColor,
    labelFill,
    labelLineStroke,
    labelLineStrokeWidth,
    sectorColor,
    sectorFill,
    sectorStroke,
    sectorStrokeWidth,
    ...rest
  }) => ({
    "--inactive-label-line-opacity": inactiveLabelLineOpacity,
    "--inactive-label-opacity": inactiveLabelOpacity,
    "--inactive-sector-opacity": inactiveSectorOpacity,
    "--label-color": varAttr(labelColor, "colors"),
    "--label-fill": varAttr(labelFill, "colors"),
    "--label-line-stroke": varAttr(labelLineStroke, "colors"),
    "--label-line-stroke-width": labelLineStrokeWidth,
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
  | ((props: PieLabelRenderProps) => Partial<ChartLabelProps>)
  | boolean
  | Partial<ChartLabelProps>

export type ChartLabelLine =
  | ((props: any) => ChartLabelLineProps)
  | boolean
  | ChartLabelLineProps

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
  labelLine?: ChartLabelLine
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
      <ChartLabel
        {...props}
        {...(labelProp !== true ? runIfFn(labelProp, props) : {})}
      />
    )

    return Component
  }, [labelProp])
  const labelLine = useMemo<UseChartPieProps["labelLine"]>(() => {
    if (!labelLineProp) return labelLineProp

    const Component = ({ key: _, ...rest }: any) => (
      <ChartLabelLine
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
      <Sector fill="red" {...getSectorProps()} />
    </styled.path>
  )
}, "sector")()

interface ChartLabelProps extends Merge<
  HTMLStyledProps<"text">,
  UseChartLabelProps
> {}

const ChartLabel = withContext<"text", ChartLabelProps>((props) => {
  const { getRootProps, getTextProps } = useChartLabel(props)

  return (
    <styled.text asChild {...getRootProps()}>
      <Text {...getTextProps()} />
    </styled.text>
  )
}, "label")()

interface ChartLabelLineProps extends Merge<
  HTMLStyledProps<"path">,
  UseChartLabelLineProps
> {}

const ChartLabelLine = withContext<"path", ChartLabelLineProps>((props) => {
  const { getCurveProps, getRootProps } = useChartLabelLine(props)

  return (
    <styled.path asChild {...getRootProps()}>
      <Curve {...getCurveProps()} />
    </styled.path>
  )
}, "labelLine")()
