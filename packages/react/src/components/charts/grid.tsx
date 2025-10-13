"use client"

import type { HTMLStyledProps } from "../../core"
import type { Merge } from "../../utils"
import type { GridStyle } from "../grid"
import type { UseGridProps } from "./use-grid"
import { CartesianGrid } from "recharts"
import { createComponent } from "../../core"
import { gridStyle } from "../grid"
import { useGrid } from "./use-grid"

export interface GridProps
  extends Merge<HTMLStyledProps<"svg">, UseGridProps> {}

const {
  ComponentContext: GridComponentContext,
  PropsContext: GridPropsContext,
  useComponentContext: useGridComponentContext,
  usePropsContext: useGridPropsContext,
  withContext,
} = createComponent<GridProps, GridStyle, GridProps>("chart-grid", gridStyle)

export {
  GridComponentContext,
  GridPropsContext,
  useGridComponentContext,
  useGridPropsContext,
}

export const Grid = withContext<"svg", GridProps>(CartesianGrid)((props) => {
  const customProps = useGridComponentContext()
  const { getGridProps } = useGrid({ ...customProps, ...props })

  return getGridProps()
})
