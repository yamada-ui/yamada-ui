"use client"

import type { LegendProps, TooltipProps } from "recharts"
import type {
  Direction,
  HTMLProps,
  PropGetter,
  RequiredPropGetter,
} from "../../core"
import type { Merge } from "../../utils"
import { useCallback, useState } from "react"
import { createContext, dataAttr, handlerAll, isUndefined } from "../../utils"

const PLACEMENT_MAP: {
  [key in Direction]: {
    align: LegendProps["align"]
    verticalAlign: LegendProps["verticalAlign"]
  }
} = {
  "center-end": { align: "right", verticalAlign: "middle" },
  "center-start": { align: "left", verticalAlign: "middle" },
  end: { align: "center", verticalAlign: "bottom" },
  "end-center": { align: "center", verticalAlign: "bottom" },
  "end-end": { align: "right", verticalAlign: "bottom" },
  "end-start": { align: "left", verticalAlign: "bottom" },
  start: { align: "center", verticalAlign: "top" },
  "start-center": { align: "center", verticalAlign: "top" },
  "start-end": { align: "right", verticalAlign: "top" },
  "start-start": { align: "left", verticalAlign: "top" },
}

interface ChartContext extends UseChartReturn {}

const [ChartContext, useChartContext] = createContext<ChartContext>({
  name: "ChartContext",
})

export { ChartContext, useChartContext }

export const useChart = () => {
  const [highlightedDataKey, setHighlightedDataKey] = useState<
    number | string | undefined
  >(undefined)

  const onHighlight = useCallback((dataKey?: number | string) => {
    setHighlightedDataKey(dataKey)
  }, [])

  return { highlightedDataKey, onHighlight }
}

export type UseChartReturn = ReturnType<typeof useChart>

export interface UseChartLegendProps extends Merge<
  HTMLProps,
  Pick<
    LegendProps,
    | "align"
    | "content"
    | "formatter"
    | "itemSorter"
    | "layout"
    | "onBBoxUpdate"
    | "onClick"
    | "onMouseEnter"
    | "onMouseLeave"
    | "payloadUniqBy"
    | "portal"
    | "verticalAlign"
  >
> {
  /**
   * The placement of the legend.
   *
   * @default 'start-end'
   */
  placement?: Direction
}

export const useChartLegend = ({
  placement = "start-end",

  align = PLACEMENT_MAP[placement].align,
  content,
  formatter,
  itemSorter,
  layout = placement.startsWith("center") ? "vertical" : "horizontal",
  payloadUniqBy,
  portal,
  verticalAlign = PLACEMENT_MAP[placement].verticalAlign,
  onBBoxUpdate,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: UseChartLegendProps = {}) => {
  const { highlightedDataKey, onHighlight } = useChartContext()

  const getRootProps: PropGetter = useCallback(
    (props) => ({ ...rest, ...props }),
    [rest],
  )

  const getLegendProps: PropGetter<LegendProps> = useCallback(
    (props) => ({
      align,
      content,
      formatter,
      itemSorter,
      layout,
      payloadUniqBy,
      portal,
      verticalAlign,
      onBBoxUpdate,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...props,
    }),
    [
      align,
      content,
      formatter,
      itemSorter,
      layout,
      onBBoxUpdate,
      onClick,
      onMouseEnter,
      onMouseLeave,
      payloadUniqBy,
      portal,
      verticalAlign,
    ],
  )

  const getLegendContentProps: PropGetter = useCallback(
    (props) => ({
      "data-align": align,
      "data-orientation": layout,
      "data-vertical-align": verticalAlign,
      ...props,
    }),
    [align, layout, verticalAlign],
  )

  const getLegendItemProps: RequiredPropGetter<
    "div",
    { dataKey?: number | string }
  > = useCallback(
    ({ dataKey, ...props }) => ({
      ...props,
      "data-active": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey === dataKey,
      ),
      "data-inactive": dataAttr(
        !isUndefined(highlightedDataKey) && highlightedDataKey !== dataKey,
      ),
      onMouseEnter: handlerAll(props.onMouseEnter, () => onHighlight(dataKey)),
      onMouseLeave: handlerAll(props.onMouseLeave, () => onHighlight()),
    }),
    [highlightedDataKey, onHighlight],
  )

  return {
    getLegendContentProps,
    getLegendItemProps,
    getLegendProps,
    getRootProps,
  }
}

export type UseChartLegendReturn = ReturnType<typeof useChartLegend>

export interface UseChartTooltipProps<
  Y extends (number | string)[] | number | string,
  M extends number | string,
> extends Merge<
  HTMLProps,
  Omit<
    TooltipProps<Y, M>,
    | "contentStyle"
    | "itemStyle"
    | "labelClassName"
    | "labelStyle"
    | "separator"
    | "wrapperClassName"
    | "wrapperStyle"
  >
> {}

export const useChartTooltip = <
  Y extends (number | string)[] | number | string,
  M extends number | string,
>({
  active,
  allowEscapeViewBox,
  animationDuration = 0,
  animationEasing,
  axisId,
  content,
  cursor,
  defaultIndex,
  filterNull,
  formatter,
  includeHidden,
  isAnimationActive = (animationDuration || 0) > 0,
  itemSorter,
  labelFormatter,
  offset,
  payloadUniqBy,
  portal,
  position,
  reverseDirection,
  shared,
  trigger,
  useTranslate3d,
  ...rest
}: UseChartTooltipProps<Y, M> = {}) => {
  const getRootProps: PropGetter<TooltipProps<Y, M>> = useCallback(
    (props) => ({
      active,
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      axisId,
      content,
      cursor,
      defaultIndex,
      filterNull,
      formatter,
      includeHidden,
      isAnimationActive,
      itemSorter,
      labelFormatter,
      offset,
      payloadUniqBy,
      portal,
      position,
      reverseDirection,
      shared,
      trigger,
      useTranslate3d,
      ...props,
    }),
    [
      active,
      allowEscapeViewBox,
      animationDuration,
      animationEasing,
      axisId,
      content,
      cursor,
      defaultIndex,
      filterNull,
      formatter,
      includeHidden,
      isAnimationActive,
      itemSorter,
      labelFormatter,
      offset,
      payloadUniqBy,
      portal,
      position,
      reverseDirection,
      shared,
      trigger,
      useTranslate3d,
    ],
  )

  const getContentProps: PropGetter = useCallback(
    (props) => ({
      ...rest,
      ...props,
    }),
    [rest],
  )

  return { getContentProps, getRootProps }
}

export type UseChartTooltipReturn<
  Y extends (number | string)[] | number | string,
  M extends number | string,
> = ReturnType<typeof useChartTooltip<Y, M>>
