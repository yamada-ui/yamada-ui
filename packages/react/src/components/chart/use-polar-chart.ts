"use client"

import type {
  CurveProps,
  PieLabelRenderProps,
  PieProps,
  PieSectorDataItem,
  RenderableText,
  SectorProps,
  TextProps,
} from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import { useCallback } from "react"
import { dataAttr, isUndefined } from "../../utils"
import { useChartContext } from "./use-chart"

export interface UseChartPieProps extends Merge<
  HTMLProps<"svg">,
  Pick<
    PieProps,
    | "activeShape"
    | "animationBegin"
    | "animationDuration"
    | "animationEasing"
    | "cornerRadius"
    | "cx"
    | "cy"
    | "data"
    | "dataKey"
    | "endAngle"
    | "hide"
    | "inactiveShape"
    | "innerRadius"
    | "isAnimationActive"
    | "label"
    | "labelLine"
    | "legendType"
    | "maxRadius"
    | "minAngle"
    | "nameKey"
    | "onAnimationEnd"
    | "onAnimationStart"
    | "onClick"
    | "onMouseDown"
    | "onMouseEnter"
    | "onMouseLeave"
    | "onMouseMove"
    | "onMouseOut"
    | "onMouseOver"
    | "onMouseUp"
    | "outerRadius"
    | "paddingAngle"
    | "rootTabIndex"
    | "shape"
    | "startAngle"
    | "tooltipType"
    | "zIndex"
  >
> {}

export const useChartPie = ({
  activeShape,
  animationBegin,
  animationDuration,
  animationEasing,
  cornerRadius,
  cx,
  cy,
  data,
  dataKey: dataKeyProp,
  endAngle = -270,
  hide,
  inactiveShape,
  innerRadius,
  isAnimationActive = false,
  label,
  labelLine = false,
  legendType,
  maxRadius,
  minAngle,
  nameKey,
  outerRadius,
  paddingAngle,
  rootTabIndex,
  shape,
  startAngle = 90,
  tooltipType,
  zIndex,
  onAnimationEnd,
  onAnimationStart,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  ...rest
}: UseChartPieProps = {}) => {
  const getRootProps: PropGetter<"svg"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getPieProps: PropGetter<PieProps> = useCallback(
    ({ dataKey = dataKeyProp, ...props } = {}) => ({
      activeShape,
      animationBegin,
      animationDuration,
      animationEasing,
      cornerRadius,
      cx,
      cy,
      data,
      dataKey,
      endAngle,
      fill: "",
      hide,
      inactiveShape,
      innerRadius,
      isAnimationActive,
      label,
      labelLine,
      legendType,
      maxRadius,
      minAngle,
      nameKey,
      outerRadius,
      paddingAngle,
      rootTabIndex,
      shape,
      startAngle,
      stroke: "",
      tooltipType,
      zIndex,
      onAnimationEnd,
      onAnimationStart,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      ...props,
    }),
    [
      activeShape,
      animationBegin,
      animationDuration,
      animationEasing,
      cornerRadius,
      cx,
      cy,
      data,
      dataKeyProp,
      endAngle,
      hide,
      inactiveShape,
      innerRadius,
      isAnimationActive,
      label,
      labelLine,
      legendType,
      maxRadius,
      minAngle,
      nameKey,
      onAnimationEnd,
      onAnimationStart,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      outerRadius,
      paddingAngle,
      rootTabIndex,
      shape,
      startAngle,
      tooltipType,
      zIndex,
    ],
  )

  return { getPieProps, getRootProps }
}

export type UseChartPieReturn = ReturnType<typeof useChartPie>

export interface UseChartSectorProps extends Merge<
  HTMLProps<"path">,
  Pick<
    SectorProps,
    | "cornerIsExternal"
    | "cornerRadius"
    | "cx"
    | "cy"
    | "endAngle"
    | "forceCornerRadius"
    | "innerRadius"
    | "outerRadius"
    | "startAngle"
  >
> {}

export const useChartSector = ({
  name: nameProp,
  cornerIsExternal,
  cornerRadius,
  cx,
  cy,
  endAngle,
  forceCornerRadius,
  innerRadius,
  outerRadius,
  startAngle,
  ...rest
}: UseChartSectorProps = {}) => {
  const { highlightedDataKey } = useChartContext()

  const getRootProps: PropGetter<"path"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getSectorProps: PropGetter<SectorProps> = useCallback(
    ({ name = nameProp, ...props } = {}) => ({
      name,
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === name,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== name,
      ),
      cornerIsExternal,
      cornerRadius,
      cx,
      cy,
      endAngle,
      forceCornerRadius,
      innerRadius,
      outerRadius,
      startAngle,
      ...props,
    }),
    [
      cornerIsExternal,
      cornerRadius,
      cx,
      cy,
      endAngle,
      forceCornerRadius,
      highlightedDataKey,
      innerRadius,
      nameProp,
      outerRadius,
      startAngle,
    ],
  )

  return { getRootProps, getSectorProps }
}

export type UseChartSectorReturn = ReturnType<typeof useChartSector>

export interface UseChartLabelProps extends Merge<
  HTMLProps<"text">,
  Pick<
    PieLabelRenderProps,
    | "cornerRadius"
    | "cx"
    | "cy"
    | "dataKey"
    | "endAngle"
    | "index"
    | "innerRadius"
    | "maxRadius"
    | "midAngle"
    | "middleRadius"
    | "name"
    | "outerRadius"
    | "paddingAngle"
    | "payload"
    | "percent"
    | "startAngle"
    | "textAnchor"
    | "tooltipPayload"
    | "tooltipPosition"
    | "value"
    | "x"
    | "y"
  >
> {
  /**
   * Offset for the label.
   *
   * @default 24
   */
  offset?: number
  /**
   * Formatter for the label.
   */
  formatter?: (value: number, percent: number) => RenderableText
}

export const useChartLabel = ({
  name: nameProp,
  cornerRadius,
  cx,
  cy,
  dataKey,
  endAngle,
  formatter,
  index,
  innerRadius,
  maxRadius,
  midAngle = 0,
  middleRadius = 0,
  offset: offsetProp = 24,
  outerRadius,
  paddingAngle,
  payload,
  percent = 0,
  startAngle,
  textAnchor: _textAnchor,
  tooltipPayload,
  tooltipPosition,
  value,
  x: _x,
  y: _y,
  ...rest
}: UseChartLabelProps) => {
  const { highlightedDataKey } = useChartContext()
  const offset = (outerRadius - innerRadius) * 0.5 + offsetProp
  const radian = Math.PI / 180
  const x = cx + (middleRadius + offset) * Math.cos(-midAngle * radian)
  const y = cy + (middleRadius + offset) * Math.sin(-midAngle * radian)

  const getRootProps: PropGetter<"text"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getTextProps: PropGetter<TextProps> = useCallback(
    ({ name = nameProp, ...props } = {}) => ({
      name,
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === name,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== name,
      ),
      alignmentBaseline: "middle",
      children: formatter?.(value, percent) ?? value,
      cornerRadius,
      cx,
      cy,
      dataKey,
      endAngle,
      index,
      innerRadius,
      maxRadius,
      midAngle,
      middleRadius,
      outerRadius,
      paddingAngle,
      payload,
      percent,
      startAngle,
      textAnchor: x > cx ? "start" : x < cx ? "end" : "middle",
      tooltipPayload,
      tooltipPosition,
      value,
      x,
      y,
      ...props,
    }),
    [
      cornerRadius,
      cx,
      cy,
      dataKey,
      endAngle,
      formatter,
      highlightedDataKey,
      index,
      innerRadius,
      maxRadius,
      midAngle,
      middleRadius,
      nameProp,
      outerRadius,
      paddingAngle,
      payload,
      percent,
      startAngle,
      tooltipPayload,
      tooltipPosition,
      value,
      x,
      y,
    ],
  )

  return { getRootProps, getTextProps }
}

export type UseChartLabelReturn = ReturnType<typeof useChartLabel>

export interface UseChartLabelLineProps
  extends
    Merge<
      Omit<HTMLProps<"path">, "points">,
      Pick<
        PieSectorDataItem,
        | "cornerRadius"
        | "dataKey"
        | "endAngle"
        | "innerRadius"
        | "maxRadius"
        | "midAngle"
        | "middleRadius"
        | "name"
        | "outerRadius"
        | "paddingAngle"
        | "payload"
        | "percent"
        | "startAngle"
        | "tooltipPayload"
        | "tooltipPosition"
        | "value"
      >
    >,
    Pick<CurveProps, "points"> {
  index?: number
}

export const useChartLabelLine = ({
  name: nameProp,
  cornerRadius,
  dataKey,
  endAngle,
  index,
  innerRadius,
  maxRadius,
  midAngle,
  middleRadius,
  outerRadius,
  paddingAngle,
  payload,
  percent,
  points,
  startAngle,
  tooltipPayload,
  tooltipPosition,
  value,
  ...rest
}: UseChartLabelLineProps) => {
  const { highlightedDataKey } = useChartContext()

  const getRootProps: PropGetter<"path"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getCurveProps: PropGetter<CurveProps> = useCallback(
    ({ name = nameProp, ...props } = {}) => ({
      name,
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === name,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== name,
      ),
      cornerRadius,
      dataKey,
      endAngle,
      index,
      innerRadius,
      maxRadius,
      midAngle,
      middleRadius,
      outerRadius,
      paddingAngle,
      payload,
      percent,
      points,
      startAngle,
      tooltipPayload,
      tooltipPosition,
      value,
      ...props,
    }),
    [
      highlightedDataKey,
      nameProp,
      cornerRadius,
      dataKey,
      endAngle,
      index,
      innerRadius,
      maxRadius,
      midAngle,
      middleRadius,
      outerRadius,
      paddingAngle,
      payload,
      percent,
      points,
      startAngle,
      tooltipPayload,
      tooltipPosition,
      value,
    ],
  )

  return { getCurveProps, getRootProps }
}

export type UseChartLabelLineReturn = ReturnType<typeof useChartLabelLine>
