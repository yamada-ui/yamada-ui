"use client"

import type {
  CurveProps,
  PieLabelRenderProps,
  PieProps,
  PieSectorDataItem,
  PolarAngleAxisProps,
  PolarGridProps,
  PolarRadiusAxisProps,
  RadarProps,
  RadialBarProps,
  RenderableText,
  SectorProps,
  TextProps,
} from "recharts"
import type { TickItem } from "recharts/types/util/types"
import type { HTMLProps, PropGetter } from "../../core"
import type { Dict, Merge } from "../../utils"
import { isValidElement, useCallback, useMemo } from "react"
import { dataAttr, isFunction, isObject, isUndefined } from "../../utils"
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
  innerRadius = "0%",
  isAnimationActive = false,
  label,
  labelLine = false,
  legendType,
  maxRadius,
  minAngle,
  nameKey,
  outerRadius = !label ? "100%" : undefined,
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

export interface UseChartPieLabelProps extends Merge<
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

export const useChartPieLabel = ({
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
}: UseChartPieLabelProps) => {
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

export type UseChartPieLabelReturn = ReturnType<typeof useChartPieLabel>

export interface UseChartPieLabelLineProps
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

export const useChartPieLabelLine = ({
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
}: UseChartPieLabelLineProps) => {
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

export type UseChartPieLabelLineReturn = ReturnType<typeof useChartPieLabelLine>

export interface UseChartRadarProps extends Merge<
  HTMLProps<"path">,
  Pick<
    RadarProps,
    | "activeDot"
    | "angleAxisId"
    | "animationBegin"
    | "animationDuration"
    | "animationEasing"
    | "baseLinePoints"
    | "connectNulls"
    | "dataKey"
    | "dot"
    | "hide"
    | "isAnimationActive"
    | "isRange"
    | "label"
    | "legendType"
    | "onAnimationEnd"
    | "onAnimationStart"
    | "onMouseEnter"
    | "onMouseLeave"
    | "points"
    | "radiusAxisId"
    | "shape"
    | "stroke"
    | "tooltipType"
    | "zIndex"
  >
> {}

export const useChartRadar = ({
  activeDot: activeDotProp,
  angleAxisId,
  animationBegin,
  animationDuration,
  animationEasing,
  baseLinePoints,
  connectNulls,
  dataKey: dataKeyProp,
  dot: dotProp,
  hide,
  isAnimationActive = false,
  isRange,
  label: labelProp,
  legendType,
  points,
  radiusAxisId,
  shape,
  stroke,
  tooltipType,
  zIndex,
  onAnimationEnd,
  onAnimationStart,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: UseChartRadarProps) => {
  const { highlightedDataKey } = useChartContext()
  const label = useMemo<UseChartRadarProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      offset: 12,
      position: "top",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])
  const dot = useMemo<UseChartRadarProps["dot"]>(() => {
    if (!dotProp) return dotProp
    if (isFunction(dotProp) || isValidElement(dotProp)) return dotProp

    return { fill: "", stroke: "", ...(isObject(dotProp) ? dotProp : {}) }
  }, [dotProp])
  const activeDot = useMemo<UseChartRadarProps["activeDot"]>(() => {
    if (!activeDotProp) return activeDotProp
    if (isFunction(activeDotProp) || isValidElement(activeDotProp))
      return activeDotProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(activeDotProp) ? activeDotProp : {}),
    }
  }, [activeDotProp])

  const getRootProps: PropGetter<"path"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getRadarProps: PropGetter<RadarProps> = useCallback(
    ({ dataKey = dataKeyProp, ...props } = {}) => ({
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === dataKey,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== dataKey,
      ),
      activeDot,
      angleAxisId,
      animationBegin,
      animationDuration,
      animationEasing,
      baseLinePoints,
      connectNulls,
      dataKey,
      dot,
      hide,
      isAnimationActive,
      isRange,
      label,
      legendType,
      points,
      radiusAxisId,
      shape,
      stroke,
      tooltipType,
      zIndex,
      onAnimationEnd,
      onAnimationStart,
      onMouseEnter,
      onMouseLeave,
      ...props,
    }),
    [
      dataKeyProp,
      highlightedDataKey,
      activeDot,
      angleAxisId,
      animationBegin,
      animationDuration,
      animationEasing,
      baseLinePoints,
      connectNulls,
      dot,
      hide,
      isAnimationActive,
      isRange,
      label,
      legendType,
      points,
      radiusAxisId,
      stroke,
      shape,
      tooltipType,
      zIndex,
      onAnimationEnd,
      onAnimationStart,
      onMouseEnter,
      onMouseLeave,
    ],
  )

  return { getRadarProps, getRootProps }
}

export type UseChartRadarReturn = ReturnType<typeof useChartRadar>

export interface UseAngleAxisProps extends Merge<
  HTMLProps<"text">,
  Pick<
    PolarAngleAxisProps,
    | "allowDataOverflow"
    | "allowDecimals"
    | "allowDuplicatedCategory"
    | "angle"
    | "angleAxisId"
    | "axisLine"
    | "axisLineType"
    | "cx"
    | "cy"
    | "dataKey"
    | "domain"
    | "hide"
    | "includeHidden"
    | "label"
    | "name"
    | "onClick"
    | "onMouseDown"
    | "onMouseEnter"
    | "onMouseLeave"
    | "onMouseMove"
    | "onMouseOut"
    | "onMouseOver"
    | "onMouseUp"
    | "orientation"
    | "radius"
    | "range"
    | "reversed"
    | "scale"
    | "tick"
    | "tickCount"
    | "tickFormatter"
    | "tickLine"
    | "ticks"
    | "tickSize"
    | "type"
    | "unit"
    | "zIndex"
  >
> {}

export const useAngleAxis = ({
  type,
  name,
  allowDataOverflow,
  allowDecimals,
  allowDuplicatedCategory,
  angle,
  angleAxisId,
  axisLine: axisLineProp,
  axisLineType,
  cx,
  cy,
  dataKey,
  domain,
  hide,
  includeHidden,
  label: labelProp,
  orientation,
  radius,
  range,
  reversed,
  scale,
  tick: tickProp,
  tickCount,
  tickFormatter,
  tickLine: tickLineProp,
  ticks,
  tickSize,
  unit,
  zIndex,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  ...rest
}: UseAngleAxisProps) => {
  const tick = useMemo<UseAngleAxisProps["tick"]>(() => {
    if (!tickProp) return tickProp
    if (isFunction(tickProp) || isValidElement(tickProp)) return tickProp

    return { fill: "", ...(isObject(tickProp) ? tickProp : {}) }
  }, [tickProp])
  const tickLine = useMemo<UseAngleAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(tickLineProp) ? tickLineProp : {}),
    }
  }, [tickLineProp])
  const axisLine = useMemo<UseAngleAxisProps["axisLine"]>(() => {
    if (!axisLineProp) return axisLineProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(axisLineProp) ? axisLineProp : {}),
    }
  }, [axisLineProp])
  const label = useMemo<UseAngleAxisProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])

  const getRootProps: PropGetter<"text"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getAngleAxisProps: PropGetter<PolarAngleAxisProps> = useCallback(
    (props) => ({
      type,
      name,
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      angleAxisId,
      axisLine,
      axisLineType,
      cx,
      cy,
      dataKey,
      domain,
      hide,
      includeHidden,
      label,
      orientation,
      radius,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      ticks,
      tickSize,
      unit,
      zIndex,
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
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      angleAxisId,
      axisLine,
      axisLineType,
      cx,
      cy,
      dataKey,
      domain,
      hide,
      includeHidden,
      label,
      name,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
      orientation,
      radius,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      ticks,
      tickSize,
      type,
      unit,
      zIndex,
    ],
  )

  return { getAngleAxisProps, getRootProps }
}

export type UseAngleAxisReturn = ReturnType<typeof useAngleAxis>

export interface UseRadiusAxisProps extends Merge<
  HTMLProps<"text">,
  Pick<
    PolarRadiusAxisProps,
    | "allowDataOverflow"
    | "allowDecimals"
    | "allowDuplicatedCategory"
    | "angle"
    | "axisLine"
    | "dataKey"
    | "domain"
    | "hide"
    | "includeHidden"
    | "label"
    | "name"
    | "onClick"
    | "onMouseDown"
    | "onMouseEnter"
    | "onMouseLeave"
    | "onMouseMove"
    | "onMouseOut"
    | "onMouseOver"
    | "onMouseUp"
    | "orientation"
    | "radius"
    | "radiusAxisId"
    | "range"
    | "reversed"
    | "scale"
    | "tick"
    | "tickCount"
    | "tickFormatter"
    | "tickLine"
    | "type"
    | "unit"
    | "zIndex"
  >
> {
  /**
   * The ticks to use for the axis.
   */
  ticks?: number[]
}

export const useRadiusAxis = ({
  type,
  name,
  allowDataOverflow,
  allowDecimals,
  allowDuplicatedCategory,
  angle = 90,
  axisLine: axisLineProp = true,
  dataKey,
  domain,
  hide,
  includeHidden,
  label: labelProp,
  orientation,
  radius,
  radiusAxisId,
  range,
  reversed,
  scale,
  tick: tickProp,
  tickCount,
  tickFormatter,
  tickLine: tickLineProp,
  ticks,
  unit,
  zIndex,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  ...rest
}: UseRadiusAxisProps) => {
  const tick = useMemo<UseRadiusAxisProps["tick"]>(() => {
    if (!tickProp) return tickProp
    if (isFunction(tickProp) || isValidElement(tickProp)) return tickProp

    return {
      fill: "",
      ...(isObject(tickProp) ? tickProp : {}),
    }
  }, [tickProp])
  const tickLine = useMemo<UseRadiusAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(tickLineProp) ? tickLineProp : {}),
    }
  }, [tickLineProp])
  const axisLine = useMemo<UseRadiusAxisProps["axisLine"]>(() => {
    if (!axisLineProp) return axisLineProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(axisLineProp) ? axisLineProp : {}),
    }
  }, [axisLineProp])
  const label = useMemo<UseRadiusAxisProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])

  const getRootProps: PropGetter<"text"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getRadiusAxisProps: PropGetter<PolarRadiusAxisProps> = useCallback(
    (props) => ({
      type,
      name,
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      axisLine,
      dataKey,
      domain,
      hide,
      includeHidden,
      label,
      orientation,
      radius,
      radiusAxisId,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      ticks: ticks as unknown as TickItem[],
      unit,
      zIndex,
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
      type,
      name,
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      axisLine,
      dataKey,
      domain,
      hide,
      includeHidden,
      label,
      orientation,
      radius,
      radiusAxisId,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      ticks,
      unit,
      zIndex,
      onClick,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOut,
      onMouseOver,
      onMouseUp,
    ],
  )

  return { getRadiusAxisProps, getRootProps }
}

export type UseRadiusAxisReturn = ReturnType<typeof useRadiusAxis>

export interface UsePolarGridProps extends Merge<
  HTMLProps<"line">,
  Pick<
    PolarGridProps,
    | "angleAxisId"
    | "cx"
    | "cy"
    | "gridType"
    | "innerRadius"
    | "outerRadius"
    | "polarAngles"
    | "polarRadius"
    | "radialLines"
    | "radiusAxisId"
    | "zIndex"
  >
> {}

export const usePolarGrid = ({
  angleAxisId,
  cx,
  cy,
  gridType,
  innerRadius,
  outerRadius,
  polarAngles,
  polarRadius,
  radialLines,
  radiusAxisId,
  zIndex,
  ...rest
}: UsePolarGridProps) => {
  const getRootProps: PropGetter<"line"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getPolarGridProps: PropGetter<PolarGridProps> = useCallback(
    (props) => ({
      angleAxisId,
      cx,
      cy,
      gridType,
      innerRadius,
      outerRadius,
      polarAngles,
      polarRadius,
      radialLines,
      radiusAxisId,
      zIndex,
      ...props,
    }),
    [
      angleAxisId,
      cx,
      cy,
      gridType,
      innerRadius,
      outerRadius,
      polarAngles,
      polarRadius,
      radialLines,
      radiusAxisId,
      zIndex,
    ],
  )

  return { getPolarGridProps, getRootProps }
}

export type UsePolarGridReturn = ReturnType<typeof usePolarGrid>

export interface UseChartRadialProps<Y extends Dict = Dict> extends Merge<
  HTMLProps<"svg">,
  Pick<
    RadialBarProps,
    | "activeShape"
    | "angleAxisId"
    | "animationBegin"
    | "animationDuration"
    | "animationEasing"
    | "background"
    | "barSize"
    | "cornerIsExternal"
    | "cornerRadius"
    | "dataKey"
    | "forceCornerRadius"
    | "hide"
    | "isAnimationActive"
    | "label"
    | "legendType"
    | "maxBarSize"
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
    | "radius"
    | "radiusAxisId"
    | "shape"
    | "stackId"
    | "tooltipType"
    | "zIndex"
  >
> {
  /**
   * The key to use for the name.
   */
  nameKey: keyof Y
}

export const useChartRadial = <Y extends Dict>({
  activeShape,
  angleAxisId,
  animationBegin,
  animationDuration,
  animationEasing,
  background: backgroundProp,
  barSize,
  cornerIsExternal,
  stackId,
  cornerRadius = !stackId ? 4 : undefined,
  dataKey,
  forceCornerRadius,
  hide,
  isAnimationActive = false,
  label,
  legendType,
  maxBarSize,
  nameKey,
  radius,
  radiusAxisId,
  shape: shapeProp,
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
}: UseChartRadialProps<Y>) => {
  const shape = useMemo<UseChartRadialProps<Y>["shape"]>(() => {
    if (isFunction(shapeProp)) {
      return (props: any) => {
        props.className = props.className?.replace(/\s*\bundefined\b/g, "")

        const name = props.payload?.[nameKey]

        return shapeProp({ name, ...props })
      }
    } else {
      return shapeProp
    }
  }, [nameKey, shapeProp])
  const background = useMemo<UseChartRadialProps<Y>["background"]>(() => {
    if (!backgroundProp) return backgroundProp
    if (isFunction(backgroundProp) || isValidElement(backgroundProp))
      return backgroundProp

    return {
      fill: "",
      ...(backgroundProp !== true ? backgroundProp : {}),
    }
  }, [backgroundProp])

  const getRootProps: PropGetter<"svg"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getRadialProps: PropGetter<
    Partial<RadialBarProps>,
    undefined,
    RadialBarProps
  > = useCallback(
    (props) => ({
      activeShape,
      angleAxisId,
      animationBegin,
      animationDuration,
      animationEasing,
      background,
      barSize,
      cornerIsExternal,
      cornerRadius,
      dataKey,
      forceCornerRadius,
      hide,
      isAnimationActive,
      label,
      legendType,
      maxBarSize,
      radius,
      radiusAxisId,
      shape,
      stackId,
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
      angleAxisId,
      animationBegin,
      animationDuration,
      animationEasing,
      background,
      barSize,
      cornerIsExternal,
      cornerRadius,
      dataKey,
      forceCornerRadius,
      hide,
      isAnimationActive,
      label,
      legendType,
      maxBarSize,
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
      radius,
      radiusAxisId,
      shape,
      stackId,
      tooltipType,
      zIndex,
    ],
  )

  return { getRadialProps, getRootProps }
}

export type UseChartRadialReturn = ReturnType<typeof useChartRadial>
