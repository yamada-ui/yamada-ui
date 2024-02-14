import { StyleSheet } from "@emotion/sheet"
import { useTheme, css } from "@yamada-ui/core"
import { useToken, useValue } from "@yamada-ui/react"
import type { PropGetter } from "@yamada-ui/utils"
import { createContext, createdDom, cx, splitObject } from "@yamada-ui/utils"
import { useCallback, useId, useState } from "react"
import type { AreaChartProps } from "./area-chart"

type AreaChartContext = {}

export const [AreaChartProvider, useAreaChartContext] =
  createContext<AreaChartContext>({
    name: "AreaChartContext",
    errorMessage: `useAreaChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<AreaChart />"`,
  })

export type AxisType = "x" | "y" | "xy" | "none"

export type UseAreaChartProps = Pick<
  AreaChartProps,
  | "height"
  | "data"
  | "series"
  | "gridProps"
  | "strokeDasharray"
  | "gridAxis"
  | "tickLine"
  | "withGradient"
  | "type"
>

export const useAreaChart = ({
  height,
  data,
  series,
  gridProps = {},
  strokeDasharray,
  gridAxis,
  tickLine,
  withGradient,
  type,
}: UseAreaChartProps) => {
  const baseId = useId()
  const splitId = `${baseId}-split`
  const withXTickLine =
    gridAxis !== "none" && (tickLine === "x" || tickLine === "xy")
  const withYTickLine =
    gridAxis !== "none" && (tickLine === "y" || tickLine === "xy")
  const _withGradient =
    typeof withGradient === "boolean" ? withGradient : type === "default"
  const stacked = type === "stacked" || type === "percent"

  //todo: legendでホバーした奴をハイライトするやつ
  const [highlightedArea, setHighlightedArea] = useState<string | null>(null)
  const shouldHighlight = highlightedArea !== null

  const getSplitOffset = ({ dataKey }: { dataKey: string }) => {
    const dataMax = Math.max(...data.map((item) => item[dataKey]))
    const dataMin = Math.min(...data.map((item) => item[dataKey]))

    if (dataMax <= 0) return 0
    if (dataMin >= 0) return 1

    return dataMax / (dataMax - dataMin)
  }

  const getDefaultSplitOffset = () => {
    if (series.length === 1) {
      const dataKey = series[0].name
      return getSplitOffset({ dataKey })
    }

    return 0.5
  }

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      const h = useToken("sizes", useValue(height))
      return {
        width: "100%",
        ...props,
        ref,
        height: h,
      }
    },
    [height],
  )

  const [gridRechartProps, gridUIProps] = splitObject(gridProps, [
    "x",
    "y",
    "width",
    "height",
    "horizontal",
    "vertical",
    "horizontalPoints",
    "horizontalCoordinatesGenerator",
    "verticalPoints",
    "verticalCoordinatesGenerator",
    "fill",
    "fillOpacity",
    "strokeDasharray",
  ])
  const styleSheet = createdDom()
    ? new StyleSheet({ key: "css", container: document.head })
    : undefined
  const { theme } = useTheme()
  //!styleが取れない
  const style = css({ ...gridUIProps })(theme)
  //!class名が取れない
  let gridClassName: string = ""
  //    const gridClassName = styleSheet?.insert(style)
  // if (style) {
  //    const before = new Set(document.styleSheets[0].rules)
  //    const gridClassName = styleSheet?.insert(style)
  //    const after = new Set(document.styleSheets[0].rules)
  //    const newRules = [...after].filter((rule) => !before.has(rule))
  //    gridClassName = newRules.map((rule) => rule.selectorText.substring(1))
  // }

  //参考　resizable config.ts carousel
  const getGridProps: PropGetter = useCallback(
    (props = {}, ref = null) => {
      return {
        strokeDasharray: strokeDasharray,
        vertical: gridAxis === "y" || gridAxis === "xy",
        horizontal: gridAxis === "x" || gridAxis === "xy",
        ...props,
        ref,
        ...gridRechartProps,
        className: cx(props.className, gridClassName),
      }
    },
    [strokeDasharray, gridAxis, gridRechartProps, gridClassName],
  )

  function valueToPercent(value: number) {
    return `${(value * 100).toFixed(0)}%`
  }

  return {
    baseId,
    splitId,
    withXTickLine,
    withYTickLine,
    _withGradient,
    stacked,
    shouldHighlight,
    highlightedArea,
    getDefaultSplitOffset,
    getGridProps,
    getContainerProps,
    valueToPercent,
  }
}

export type UseAreaChartReturn = ReturnType<typeof useAreaChart>
