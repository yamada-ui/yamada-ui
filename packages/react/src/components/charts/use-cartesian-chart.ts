"use client"

import type {
  LabelListProps,
  LabelProps,
  LineProps,
  ReferenceLineProps,
  XAxisProps,
  YAxisProps,
} from "recharts"
import type { HTMLProps, PropGetter } from "../../core"
import type { Merge } from "../../utils"
import { isValidElement, useCallback } from "react"
import { dataAttr, isFunction, isObject, isUndefined } from "../../utils"
import { useChartContext } from "./use-chart"

export interface UseChartXAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Pick<
      XAxisProps,
      | "allowDataOverflow"
      | "allowDecimals"
      | "allowDuplicatedCategory"
      | "angle"
      | "AxisComp"
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
  AxisComp,
  axisLine = false,
  children,
  dataKey,
  domain,
  height,
  hide,
  includeHidden,
  interval,
  label,
  minTickGap = 8,
  mirror,
  orientation,
  padding,
  range,
  reversed,
  scale,
  tick,
  tickCount,
  tickFormatter,
  tickLine = false,
  tickMargin = 8,
  ticks,
  tickSize,
  unit,
  xAxisId,
  ...rest
}: UseChartXAxisProps = {}) => {
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
      AxisComp,
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
      AxisComp,
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

export interface UseChartYAxisProps
  extends Merge<
    HTMLProps<"svg">,
    Pick<
      YAxisProps,
      | "allowDataOverflow"
      | "allowDecimals"
      | "allowDuplicatedCategory"
      | "angle"
      | "AxisComp"
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
  AxisComp,
  axisLine = false,
  children,
  dataKey,
  domain,
  hide,
  includeHidden,
  interval,
  label,
  minTickGap,
  mirror,
  orientation: orientationProp,
  padding,
  range,
  reversed,
  scale,
  tick,
  tickCount,
  tickFormatter,
  tickLine = false,
  tickMargin,
  ticks,
  tickSize,
  unit,
  width,
  yAxisId,
  ...rest
}: UseChartYAxisProps = {}) => {
  const getRootProps: PropGetter<"svg"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getYAxisProps: PropGetter<YAxisProps> = useCallback(
    ({ orientation = orientationProp, ...props } = {}) => ({
      type,
      name,
      allowDataOverflow,
      allowDecimals,
      allowDuplicatedCategory,
      angle,
      AxisComp,
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
      tick:
        !isValidElement(tick) && isObject(tick) && !isFunction(tick)
          ? {
              transform:
                orientation === "right"
                  ? "translate(10, 0)"
                  : "translate(-10, 0)",
              ...tick,
            }
          : tick,
      tickCount,
      tickFormatter,
      tickLine,
      tickMargin,
      ticks,
      tickSize,
      unit,
      width,
      yAxisId,
      ...props,
    }),
    [
      AxisComp,
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
      orientationProp,
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

export interface UseChartLineProps
  extends Merge<
    HTMLProps<"line">,
    Pick<
      LineProps,
      | "activeDot"
      | "animateNewValues"
      | "animationBegin"
      | "animationDuration"
      | "animationEasing"
      | "baseLine"
      | "connectNulls"
      | "data"
      | "dataKey"
      | "dot"
      | "hide"
      | "isAnimationActive"
      | "label"
      | "layout"
      | "legendType"
      | "name"
      | "onAnimationEnd"
      | "onAnimationStart"
      | "path"
      | "tooltipType"
      | "type"
      | "unit"
      | "xAxisId"
      | "yAxisId"
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
  baseLine,
  children,
  connectNulls,
  data,
  dataKey: dataKeyProp,
  dot,
  hide,
  isAnimationActive = false,
  label,
  layout = "horizontal",
  legendType,
  path,
  tooltipType,
  unit,
  xAxisId,
  yAxisId,
  onAnimationEnd,
  onAnimationStart,
  ...rest
}: UseChartLineProps = {}) => {
  const { highlightedDataKey } = useChartContext()

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
      baseLine,
      children,
      connectNulls,
      data,
      dataKey,
      dot,
      hide,
      isAnimationActive,
      label,
      layout,
      legendType,
      path,
      stroke: "",
      strokeWidth: "",
      tooltipType,
      unit,
      xAxisId,
      yAxisId,
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
      baseLine,
      children,
      connectNulls,
      data,
      dataKeyProp,
      dot,
      hide,
      highlightedDataKey,
      isAnimationActive,
      label,
      layout,
      legendType,
      name,
      onAnimationEnd,
      onAnimationStart,
      path,
      tooltipType,
      type,
      unit,
      xAxisId,
      yAxisId,
    ],
  )

  return { getLineProps, getRootProps }
}

export type UseChartLineReturn = ReturnType<typeof useChartLine>

export interface UseChartReferenceLineProps
  extends Merge<
    HTMLProps<"line">,
    Pick<
      ReferenceLineProps,
      | "clipPathId"
      | "ifOverflow"
      | "label"
      | "position"
      | "segment"
      | "shape"
      | "viewBox"
      | "x"
      | "xAxis"
      | "xAxisId"
      | "y"
      | "yAxis"
      | "yAxisId"
    >
  > {}

export const useChartReferenceLine = ({
  children,
  clipPathId,
  ifOverflow,
  label,
  position,
  segment,
  shape,
  viewBox,
  x,
  xAxis,
  xAxisId,
  y,
  yAxis,
  yAxisId,
  ...rest
}: UseChartReferenceLineProps = {}) => {
  const getRootProps: PropGetter<"line"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getReferenceLineProps: PropGetter<Omit<ReferenceLineProps, "ref">> =
    useCallback(
      (props) => ({
        children,
        clipPathId,
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
        xAxis,
        xAxisId,
        y,
        yAxis,
        yAxisId,
        ...props,
      }),
      [
        children,
        clipPathId,
        ifOverflow,
        label,
        position,
        segment,
        shape,
        viewBox,
        x,
        xAxis,
        xAxisId,
        y,
        yAxis,
        yAxisId,
      ],
    )

  return { getReferenceLineProps, getRootProps }
}

export type UseChartReferenceLineReturn = ReturnType<
  typeof useChartReferenceLine
>

export interface UseChartLabelListProps
  extends Merge<
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
    ],
  )

  return { getLabelListProps, getRootProps }
}

export type UseChartLabelListReturn = ReturnType<typeof useChartLabelList>

export interface UseChartLabelProps
  extends Merge<
    HTMLProps<"text">,
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
    >
  > {}

export const useChartLabel = ({
  angle,
  children,
  content,
  formatter,
  index,
  labelRef,
  offset = 8,
  parentViewBox,
  position = "insideBottomLeft",
  textBreakAll,
  value,
  viewBox,
  ...rest
}: UseChartLabelProps = {}) => {
  const getRootProps: PropGetter<"text"> = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getLabelProps: PropGetter<LabelProps> = useCallback(
    (props) => ({
      angle,
      children,
      content,
      fill: "",
      formatter,
      index,
      labelRef,
      offset,
      parentViewBox,
      position,
      textBreakAll,
      value,
      viewBox,
      ...props,
    }),
    [
      angle,
      children,
      content,
      formatter,
      index,
      labelRef,
      offset,
      parentViewBox,
      position,
      textBreakAll,
      value,
      viewBox,
    ],
  )

  return { getLabelProps, getRootProps }
}

export type UseChartLabelReturn = ReturnType<typeof useChartLabel>

export interface UseChartXAxisLabelProps extends UseChartLabelProps {}

export const useChartXAxisLabel = (props: UseChartLabelProps = {}) => {
  return useChartLabel({ offset: 0, position: "insideBottom", ...props })
}

export type UseChartXAxisLabelReturn = ReturnType<typeof useChartXAxisLabel>

export interface UseChartYAxisLabelProps extends UseChartLabelProps {}

export const useChartYAxisLabel = (props: UseChartLabelProps = {}) => {
  return useChartLabel({
    angle: -90,
    offset: 4,
    position: "insideLeft",
    ...props,
  })
}

export type UseChartYAxisLabelReturn = ReturnType<typeof useChartYAxisLabel>

export interface UseChartReferenceLineLabelProps extends UseChartLabelProps {}

export const useChartReferenceLineLabel = (props: UseChartLabelProps = {}) => {
  return useChartLabel({ position: "insideBottomLeft", ...props })
}

export type UseChartReferenceLineLabelReturn = ReturnType<
  typeof useChartReferenceLineLabel
>
