"use client"

import type { GridStyle } from "../grid"
import type { UseGridProps } from "./use-grid"
import { CartesianGrid } from "recharts"
import { createComponent } from "../../core"
import { gridStyle } from "../grid"
import { useGrid } from "./use-grid"

export interface GridProps extends UseGridProps {}

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

export const Grid = withContext<"div", GridProps>(CartesianGrid)((props) => {
  const customProps = useGridComponentContext()
  const { getGridProps } = useGrid({ ...customProps, ...props })

  return getGridProps()
})
