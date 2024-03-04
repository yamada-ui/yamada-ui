import {
  getCSS,
  type CSSUIObject,
  type CSSUIProps,
  useTheme,
} from "@yamada-ui/core"
import type { Dict } from "@yamada-ui/utils"
import { createContext, cx, omitObject, splitObject } from "@yamada-ui/utils"
import { useCallback, useId } from "react"
import type { CellProps } from "recharts"
import { cellProperties, type RequiredChartPropGetter } from "./chart.types"
import type { PieChartCell, PieChartProps } from "./pie-chart"

type PieChartContext = {}

export const [PieChartProvider, usePieChartContext] =
  createContext<PieChartContext>({
    name: "PieChartContext",
    errorMessage: `usePieChartContext returned is 'undefined'. Seems you forgot to wrap the components in "<PieChart />"`,
  })

export type UsePieChartProps = PieChartProps & {
  styles: Dict<CSSUIObject>
}

export const usePieChart = (arg: UsePieChartProps) => {
  const uuid = useId()
  const { theme } = useTheme()

  const getCellProps: RequiredChartPropGetter<
    "div",
    { item: PieChartCell; index: number },
    Omit<CellProps, "ref">
  > = useCallback(
    ({ item, index, className, ...rest }, ref = null) => {
      const id = `${uuid}-${item.color}`
      const color = `var(--ui-cell--${index})`
      const [cellRechartsProps, cellUIProps] = splitObject(
        item,
        cellProperties as [],
      )

      const cellStyleClassName = getCSS(arg.styles.cell)(theme)
      const cellClassName = getCSS(cellUIProps)(theme)

      return {
        ref,
        className: cx(className, cellStyleClassName, cellClassName),
        id,
        stroke: color,
        dataKey: item.name,
        ...(rest as Omit<CellProps, "dataKey">),
        ...omitObject(cellRechartsProps, []),
      }
    },
    [arg.styles.cell, theme, uuid],
  )

  const getCSSVariables = useCallback(() => {
    const cellColors: CSSUIProps["var"] = arg.data.map((item, index) => ({
      name: `cell-${index}`,
      token: "colors",
      value: item.color ?? "gray",
    }))

    return [...cellColors]
  }, [arg.data])

  return { getCellProps, getCSSVariables }
}

export type UsePieChartReturn = ReturnType<typeof usePieChart>
