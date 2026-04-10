"use client"

import type {
  AreaProps,
  BarProps,
  CartesianGridProps,
  LineProps,
  ReferenceLineProps,
  XAxisProps,
  YAxisProps,
} from "recharts"
import type { CartesianChartProps } from "recharts/types/util/types"
import type { HTMLProps, PropGetter, SimpleDirection } from "../../core"
import type { Dict, Merge } from "../../utils"
import { isValidElement, useCallback, useMemo } from "react"
import { dataAttr, isFunction, isObject, isUndefined } from "../../utils"
import { useChartContext } from "./use-chart"

export interface UseCartesianChartProps<Y extends Dict>
  extends
    HTMLProps,
    Pick<
      CartesianChartProps,
      | "accessibilityLayer"
      | "compact"
      | "layout"
      | "responsive"
      | "syncId"
      | "syncMethod"
    > {
  /**
   * Chart data.
   */
  data?: Y[]
}

export const useCartesianChart = <Y extends Dict>({
  accessibilityLayer = true,
  compact,
  data,
  layout = "horizontal",
  responsive,
  syncId,
  syncMethod,
  ...rest
}: UseCartesianChartProps<Y>) => {
  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...props, ...rest }),
    [rest],
  )

  const getChartProps: PropGetter<CartesianChartProps> = useCallback(
    (props) => ({
      accessibilityLayer,
      compact,
      data,
      layout,
      margin: { left: 16, right: 16 },
      responsive,
      syncId,
      syncMethod,
      ...props,
    }),
    [accessibilityLayer, compact, data, layout, responsive, syncId, syncMethod],
  )

  return {
    getChartProps,
    getRootProps,
  }
}

export type UseCartesianChartReturn<Y extends Dict> = ReturnType<
  typeof useCartesianChart<Y>
>

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
    | "niceTicks"
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
  niceTicks,
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
      fill: "",
      stroke: "",
      ...(isObject(tickLineProp) ? tickLineProp : {}),
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
      niceTicks,
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
      niceTicks,
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
    | "niceTicks"
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
> {
  /**
   * The orientation of axis.
   *
   * @defaultValue "start"
   */
  orientation?: SimpleDirection
}

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
  niceTicks,
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

    return { fill: "", ...(isObject(tickProp) ? tickProp : {}) }
  }, [tickProp])
  const tickLine = useMemo<UseChartYAxisProps["tickLine"]>(() => {
    if (!tickLineProp) return tickLineProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(tickLineProp) ? tickLineProp : {}),
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
        orientation === "end" ? "translate(10, 0)" : "translate(-10, 0)",
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
      niceTicks,
      orientation:
        orientation === "end"
          ? "right"
          : orientation === "start"
            ? "left"
            : undefined,
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
      niceTicks,
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
    | "stroke"
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
  activeDot: activeDotProp,
  animateNewValues,
  animationBegin,
  animationDuration,
  animationEasing,
  children,
  connectNulls,
  data,
  dataKey: dataKeyProp,
  dot: dotProp,
  hide,
  isAnimationActive = false,
  label: labelProp = false,
  legendType,
  shape,
  stroke = "",
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
  const dot = useMemo<UseChartLineProps["dot"]>(() => {
    if (!dotProp) return dotProp
    if (isFunction(dotProp) || isValidElement(dotProp)) return dotProp

    return { fill: "", stroke: "", ...(isObject(dotProp) ? dotProp : {}) }
  }, [dotProp])
  const activeDot = useMemo<UseChartLineProps["activeDot"]>(() => {
    if (!activeDotProp) return activeDotProp
    if (isFunction(activeDotProp) || isValidElement(activeDotProp))
      return activeDotProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(activeDotProp) ? activeDotProp : {}),
    }
  }, [activeDotProp])

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
      stroke,
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
      stroke,
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

export interface UseChartAreaProps extends Merge<
  HTMLProps<"line">,
  Pick<
    AreaProps<any, any>,
    | "activeDot"
    | "animationBegin"
    | "animationDuration"
    | "animationEasing"
    | "baseLine"
    | "baseValue"
    | "connectNulls"
    | "data"
    | "dataKey"
    | "dot"
    | "hide"
    | "isAnimationActive"
    | "isRange"
    | "label"
    | "legendType"
    | "name"
    | "onAnimationEnd"
    | "onAnimationStart"
    | "stackId"
    | "stroke"
    | "tooltipType"
    | "type"
    | "unit"
    | "xAxisId"
    | "yAxisId"
    | "zIndex"
  >
> {}

export const useChartArea = ({
  type = "monotone",
  name,
  activeDot: activeDotProp,
  animationBegin,
  animationDuration,
  animationEasing,
  baseLine,
  baseValue,
  children,
  connectNulls,
  data,
  dataKey: dataKeyProp,
  dot: dotProp,
  hide,
  isAnimationActive = false,
  label: labelProp = false,
  legendType,
  stackId,
  stroke = "",
  tooltipType,
  unit,
  xAxisId,
  yAxisId,
  zIndex,
  onAnimationEnd,
  onAnimationStart,
  ...rest
}: UseChartAreaProps) => {
  const { highlightedDataKey } = useChartContext()
  const label = useMemo<UseChartAreaProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      offset: 12,
      position: "top",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])
  const dot = useMemo<UseChartAreaProps["dot"]>(() => {
    if (!dotProp) return dotProp
    if (isFunction(dotProp) || isValidElement(dotProp)) return dotProp

    return { fill: "", stroke: "", ...(isObject(dotProp) ? dotProp : {}) }
  }, [dotProp])
  const activeDot = useMemo<UseChartAreaProps["activeDot"]>(() => {
    if (!activeDotProp) return activeDotProp
    if (isFunction(activeDotProp) || isValidElement(activeDotProp))
      return activeDotProp

    return {
      fill: "",
      stroke: "",
      ...(isObject(activeDotProp) ? activeDotProp : {}),
    }
  }, [activeDotProp])

  const getRootProps: PropGetter<"line"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getAreaProps: PropGetter<
    Partial<AreaProps<any, any>>,
    undefined,
    AreaProps<any, any>
  > = useCallback(
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
      animationBegin,
      animationDuration,
      animationEasing,
      baseLine,
      baseValue,
      children,
      connectNulls,
      data,
      dataKey,
      dot,
      fill: "",
      fillOpacity: "",
      hide,
      isAnimationActive,
      label,
      legendType,
      stackId,
      stroke,
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
      animationBegin,
      animationDuration,
      animationEasing,
      baseLine,
      baseValue,
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
      stackId,
      stroke,
      tooltipType,
      type,
      unit,
      xAxisId,
      yAxisId,
      zIndex,
    ],
  )

  return { getAreaProps, getRootProps }
}

export type UseChartAreaReturn = ReturnType<typeof useChartArea>

export interface UseChartBarProps extends Merge<
  HTMLProps<"path">,
  Pick<
    BarProps,
    | "activeBar"
    | "animationBegin"
    | "animationDuration"
    | "animationEasing"
    | "background"
    | "barSize"
    | "dangerouslySetInnerHTML"
    | "dataKey"
    | "fill"
    | "hide"
    | "index"
    | "isAnimationActive"
    | "label"
    | "legendType"
    | "maxBarSize"
    | "minPointSize"
    | "name"
    | "onAnimationEnd"
    | "onAnimationStart"
    | "radius"
    | "shape"
    | "stackId"
    | "tooltipType"
    | "unit"
    | "xAxisId"
    | "yAxisId"
    | "zIndex"
  >
> {}

export const useChartBar = ({
  name,
  activeBar,
  animationBegin,
  animationDuration,
  animationEasing,
  background,
  barSize,
  children,
  dangerouslySetInnerHTML,
  dataKey: dataKeyProp,
  fill,
  hide,
  index,
  isAnimationActive = false,
  label: labelProp = false,
  legendType,
  maxBarSize,
  minPointSize,
  radius = 4,
  shape,
  tooltipType,
  unit,
  xAxisId,
  yAxisId,
  zIndex,
  onAnimationEnd,
  onAnimationStart,
  ...rest
}: UseChartBarProps = {}) => {
  const { highlightedDataKey } = useChartContext()

  const label = useMemo<UseChartBarProps["label"]>(() => {
    if (!labelProp) return labelProp
    if (isFunction(labelProp) || isValidElement(labelProp)) return labelProp

    return {
      fill: "",
      offset: 12,
      position: "top",
      ...(isObject(labelProp) ? labelProp : {}),
    }
  }, [labelProp])

  const getRootProps: PropGetter<"path"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getBarProps: PropGetter<BarProps> = useCallback(
    ({ dataKey = dataKeyProp, ...props } = {}) => ({
      name,
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === dataKey,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== dataKey,
      ),
      activeBar,
      animationBegin,
      animationDuration,
      animationEasing,
      background,
      barSize,
      children,
      dangerouslySetInnerHTML,
      dataKey,
      fill,
      hide,
      index,
      isAnimationActive,
      label,
      legendType,
      maxBarSize,
      minPointSize,
      radius,
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
      activeBar,
      animationBegin,
      animationDuration,
      animationEasing,
      background,
      barSize,
      children,
      dangerouslySetInnerHTML,
      dataKeyProp,
      fill,
      hide,
      highlightedDataKey,
      index,
      isAnimationActive,
      label,
      legendType,
      maxBarSize,
      minPointSize,
      name,
      onAnimationEnd,
      onAnimationStart,
      radius,
      shape,
      tooltipType,
      unit,
      xAxisId,
      yAxisId,
      zIndex,
    ],
  )

  return { getBarProps, getRootProps }
}

export type UseChartBarReturn = ReturnType<typeof useChartBar>

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
