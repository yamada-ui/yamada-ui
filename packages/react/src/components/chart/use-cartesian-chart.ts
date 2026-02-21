"use client"

import type {
  CartesianGridProps,
  LabelListProps,
  LineProps,
  ReferenceLineProps,
  XAxisProps,
  YAxisProps,
} from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import { isValidElement, useCallback, useMemo } from "react"
import { dataAttr, isFunction, isObject, isUndefined } from "../../utils"
import { useChartContext } from "./use-chart"

export interface UseChartXAxisProps extends Merge<
  HTMLProps<"svg">,
  Pick<
    XAxisProps,
    | "allowDataOverflow"
    | "allowDecimals"
    | "allowDuplicatedCategory"
    | "angle"
    | "axisLine"
    | "dataKey"
    | "domain"
    | "height"
    | "hide"
    | "includeHidden"
    | "interval"
    | "label"
    | "minTickGap"
    | "mirror"
    | "name"
    | "orientation"
    | "padding"
    | "range"
    | "reversed"
    | "scale"
    | "tick"
    | "tickCount"
    | "tickFormatter"
    | "tickLine"
    | "tickMargin"
    | "ticks"
    | "tickSize"
    | "type"
    | "unit"
    | "xAxisId"
  >
> {}

export const useChartXAxis = ({
  type,
  name,
  allowDataOverflow,
  allowDecimals,
  allowDuplicatedCategory,
  angle,
  axisLine = false,
  children,
  dataKey,
  domain,
  height,
  hide,
  includeHidden,
  interval,
  label: labelProp = false,
  minTickGap = 8,
  mirror,
  orientation,
  padding,
  range,
  reversed,
  scale,
  tick: tickProp = true,
  tickCount,
  tickFormatter,
  tickLine: tickLineProp = false,
  tickMargin = 8,
  ticks,
  tickSize,
  unit,
  xAxisId,
  ...rest
}: UseChartXAxisProps = {}) => {
  const tick = useMemo<UseChartXAxisProps["tick"]>(() => {
    if (!tickProp) return tickProp
    if (isFunction(tickProp) || isValidElement(tickProp)) return tickProp

    return { ...(isObject(tickProp) ? tickProp : {}), fill: "" }
  }, [tickProp])
  const tickLine = useMemo<UseChartXAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    return {
      ...(isObject(tickLineProp) ? tickLineProp : {}),
      fill: "",
      stroke: "",
    }
  }, [tickLineProp])
  const label = useMemo<UseChartXAxisProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      offset: 0,
      position: "insideBottom",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])

  const getRootProps: PropGetter<"svg"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getXAxisProps: PropGetter<XAxisProps> = useCallback(
    (props) => ({
      type,
      name,
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      axisLine,
      children,
      dataKey,
      domain,
      height: height ?? (label ? 52 : undefined),
      hide,
      includeHidden,
      interval,
      label,
      minTickGap,
      mirror,
      orientation,
      padding,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      tickMargin,
      ticks,
      tickSize,
      unit,
      xAxisId,
      ...props,
    }),
    [
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      axisLine,
      children,
      dataKey,
      domain,
      height,
      hide,
      includeHidden,
      interval,
      label,
      minTickGap,
      mirror,
      name,
      orientation,
      padding,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      tickMargin,
      tickSize,
      ticks,
      type,
      unit,
      xAxisId,
    ],
  )

  return { getRootProps, getXAxisProps }
}

export type UseChartXAxisReturn = ReturnType<typeof useChartXAxis>

export interface UseChartYAxisProps extends Merge<
  HTMLProps<"svg">,
  Pick<
    YAxisProps,
    | "allowDataOverflow"
    | "allowDecimals"
    | "allowDuplicatedCategory"
    | "angle"
    | "axisLine"
    | "dataKey"
    | "domain"
    | "hide"
    | "includeHidden"
    | "interval"
    | "label"
    | "minTickGap"
    | "mirror"
    | "name"
    | "orientation"
    | "padding"
    | "range"
    | "reversed"
    | "scale"
    | "tick"
    | "tickCount"
    | "tickFormatter"
    | "tickLine"
    | "tickMargin"
    | "ticks"
    | "tickSize"
    | "type"
    | "unit"
    | "width"
    | "yAxisId"
  >
> {}

export const useChartYAxis = ({
  type,
  name,
  allowDataOverflow,
  allowDecimals = true,
  allowDuplicatedCategory,
  angle,
  axisLine = false,
  children,
  dataKey,
  domain,
  hide,
  includeHidden,
  interval,
  label: labelProp = false,
  minTickGap,
  mirror,
  orientation,
  padding,
  range,
  reversed,
  scale,
  tick: tickProp = true,
  tickCount,
  tickFormatter,
  tickLine: tickLineProp = false,
  tickMargin,
  ticks,
  tickSize,
  unit,
  width,
  yAxisId,
  ...rest
}: UseChartYAxisProps = {}) => {
  const tick = useMemo<UseChartYAxisProps["tick"]>(() => {
    if (!tickProp) return tickProp
    if (isFunction(tickProp) || isValidElement(tickProp)) return tickProp

    return { ...(isObject(tickProp) ? tickProp : {}), fill: "" }
  }, [tickProp])
  const tickLine = useMemo<UseChartYAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    return {
      ...(isObject(tickLineProp) ? tickLineProp : {}),
      fill: "",
      stroke: "",
    }
  }, [tickLineProp])
  const label = useMemo<UseChartYAxisProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      angle: -90,
      fill: "",
      offset: 4,
      position: "insideLeft",
      transform:
        orientation === "right" ? "translate(10, 0)" : "translate(-10, 0)",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp, orientation])

  const getRootProps: PropGetter<"svg"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getYAxisProps: PropGetter<YAxisProps> = useCallback(
    (props = {}) => ({
      type,
      name,
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      axisLine,
      children,
      dataKey,
      domain,
      hide,
      includeHidden,
      interval,
      label,
      minTickGap,
      mirror,
      orientation,
      padding,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      tickMargin,
      ticks,
      tickSize,
      unit,
      width: width ?? (label ? 64 : undefined),
      yAxisId,
      ...props,
    }),
    [
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      axisLine,
      children,
      dataKey,
      domain,
      hide,
      includeHidden,
      interval,
      label,
      minTickGap,
      mirror,
      name,
      orientation,
      padding,
      range,
      reversed,
      scale,
      tick,
      tickCount,
      tickFormatter,
      tickLine,
      tickMargin,
      tickSize,
      ticks,
      type,
      unit,
      width,
      yAxisId,
    ],
  )

  return { getRootProps, getYAxisProps }
}

export type UseChartYAxisReturn = ReturnType<typeof useChartYAxis>

export interface UseChartLineProps extends Merge<
  HTMLProps<"line">,
  Pick<
    LineProps,
    | "activeDot"
    | "animateNewValues"
    | "animationBegin"
    | "animationDuration"
    | "animationEasing"
    | "connectNulls"
    | "data"
    | "dataKey"
    | "dot"
    | "hide"
    | "isAnimationActive"
    | "label"
    | "legendType"
    | "name"
    | "onAnimationEnd"
    | "onAnimationStart"
    | "shape"
    | "tooltipType"
    | "type"
    | "unit"
    | "xAxisId"
    | "yAxisId"
    | "zIndex"
  >
> {}

export const useChartLine = ({
  type = "monotone",
  name,
  activeDot,
  animateNewValues,
  animationBegin,
  animationDuration,
  animationEasing,
  children,
  connectNulls,
  data,
  dataKey: dataKeyProp,
  dot,
  hide,
  isAnimationActive = false,
  label: labelProp = false,
  legendType,
  shape,
  tooltipType,
  unit,
  xAxisId,
  yAxisId,
  zIndex,
  onAnimationEnd,
  onAnimationStart,
  ...rest
}: UseChartLineProps = {}) => {
  const { highlightedDataKey } = useChartContext()

  const label = useMemo<UseChartLineProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      offset: 12,
      position: "top",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])

  const getRootProps: PropGetter<"line"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getLineProps: PropGetter<LineProps> = useCallback(
    ({ dataKey = dataKeyProp, ...props } = {}) => ({
      type,
      name,
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === dataKey,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== dataKey,
      ),
      activeDot,
      animateNewValues,
      animationBegin,
      animationDuration,
      animationEasing,
      children,
      connectNulls,
      data,
      dataKey,
      dot,
      hide,
      isAnimationActive,
      label,
      legendType,
      shape,
      stroke: "",
      strokeWidth: "",
      tooltipType,
      unit,
      xAxisId,
      yAxisId,
      zIndex,
      onAnimationEnd,
      onAnimationStart,
      ...props,
    }),
    [
      activeDot,
      animateNewValues,
      animationBegin,
      animationDuration,
      animationEasing,
      children,
      connectNulls,
      data,
      dataKeyProp,
      dot,
      hide,
      highlightedDataKey,
      isAnimationActive,
      label,
      legendType,
      name,
      onAnimationEnd,
      onAnimationStart,
      shape,
      tooltipType,
      type,
      unit,
      xAxisId,
      yAxisId,
      zIndex,
    ],
  )

  return { getLineProps, getRootProps }
}

export type UseChartLineReturn = ReturnType<typeof useChartLine>

export interface UseChartReferenceLineProps extends Merge<
  HTMLProps<"line">,
  Pick<
    ReferenceLineProps,
    | "ifOverflow"
    | "label"
    | "position"
    | "segment"
    | "shape"
    | "x"
    | "xAxisId"
    | "y"
    | "yAxisId"
    | "zIndex"
  >
> {}

export const useChartReferenceLine = ({
  children,
  ifOverflow,
  label: labelProp = false,
  position,
  segment,
  shape,
  viewBox,
  x,
  xAxisId,
  y,
  yAxisId,
  zIndex,
  ...rest
}: UseChartReferenceLineProps = {}) => {
  const label = useMemo<UseChartReferenceLineProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      offset: 8,
      position: "insideBottomLeft",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])

  const getRootProps: PropGetter<"line"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getReferenceLineProps: PropGetter<Omit<ReferenceLineProps, "ref">> =
    useCallback(
      (props) => ({
        children,
        fill: "",
        fillOpacity: "",
        ifOverflow,
        label,
        position,
        segment,
        shape,
        stroke: "",
        strokeWidth: "",
        viewBox,
        x,
        xAxisId,
        y,
        yAxisId,
        zIndex,
        ...props,
      }),
      [
        children,
        ifOverflow,
        label,
        position,
        segment,
        shape,
        viewBox,
        x,
        xAxisId,
        y,
        yAxisId,
        zIndex,
      ],
    )

  return { getReferenceLineProps, getRootProps }
}

export type UseChartReferenceLineReturn = ReturnType<
  typeof useChartReferenceLine
>

export interface UseChartLabelListProps extends Merge<
  HTMLProps<"text">,
  Pick<
    LabelListProps,
    | "angle"
    | "clockWise"
    | "content"
    | "dataKey"
    | "formatter"
    | "offset"
    | "position"
    | "textBreakAll"
    | "valueAccessor"
    | "zIndex"
  >
> {}

export const useChartLabelList = ({
  angle,
  clockWise,
  content,
  dataKey,
  formatter,
  offset = 12,
  position = "top",
  textBreakAll,
  valueAccessor,
  zIndex,
  ...rest
}: UseChartLabelListProps = {}) => {
  const getRootProps: PropGetter<"text"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getLabelListProps: PropGetter<LabelListProps> = useCallback(
    (props) => ({
      angle,
      clockWise,
      content,
      dataKey,
      fill: "",
      formatter,
      offset,
      position,
      textBreakAll,
      valueAccessor,
      zIndex,
      ...props,
    }),
    [
      angle,
      clockWise,
      content,
      dataKey,
      formatter,
      offset,
      position,
      textBreakAll,
      valueAccessor,
      zIndex,
    ],
  )

  return { getLabelListProps, getRootProps }
}

export type UseChartLabelListReturn = ReturnType<typeof useChartLabelList>

export interface UseChartGridProps extends Merge<
  HTMLProps<"line">,
  Pick<
    CartesianGridProps,
    | "horizontal"
    | "horizontalCoordinatesGenerator"
    | "horizontalFill"
    | "horizontalPoints"
    | "horizontalValues"
    | "syncWithTicks"
    | "vertical"
    | "verticalCoordinatesGenerator"
    | "verticalFill"
    | "verticalPoints"
    | "verticalValues"
    | "x"
    | "xAxisId"
    | "y"
    | "yAxisId"
    | "zIndex"
  >
> {}

export const useChartGrid = ({
  horizontal,
  horizontalCoordinatesGenerator,
  horizontalFill,
  horizontalPoints,
  horizontalValues,
  syncWithTicks,
  vertical = false,
  verticalCoordinatesGenerator,
  verticalFill,
  verticalPoints,
  verticalValues,
  x,
  xAxisId,
  y,
  yAxisId,
  zIndex,
  ...rest
}: UseChartGridProps = {}) => {
  const getRootProps: PropGetter<"line"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getGridProps: PropGetter<CartesianGridProps> = useCallback(
    (props) => ({
      horizontal,
      horizontalCoordinatesGenerator,
      horizontalFill,
      horizontalPoints,
      horizontalValues,
      stroke: "",
      syncWithTicks,
      vertical,
      verticalCoordinatesGenerator,
      verticalFill,
      verticalPoints,
      verticalValues,
      x,
      xAxisId,
      y,
      yAxisId,
      zIndex,
      ...props,
    }),
    [
      horizontal,
      horizontalCoordinatesGenerator,
      horizontalFill,
      horizontalPoints,
      horizontalValues,
      syncWithTicks,
      vertical,
      verticalCoordinatesGenerator,
      verticalFill,
      verticalPoints,
      verticalValues,
      x,
      xAxisId,
      y,
      yAxisId,
      zIndex,
    ],
  )

  return { getGridProps, getRootProps }
}

export type UseChartGridReturn = ReturnType<typeof useChartGrid>
