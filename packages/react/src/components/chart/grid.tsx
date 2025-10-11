"use client"

import type { GridStyle } from "../grid"
import type { UseGridProps } from "./use-grid"
import { CartesianGrid } from "recharts"
import { createComponent } from "../../core"
import { gridStyle } from "../grid"
import { useGrid } from "./use-grid"

interface GridProps extends UseGridProps {}

const {
  PropsContext: GridPropsContext,
  usePropsContext: useGridPropsContext,
  withContext,
} = createComponent<GridProps, GridStyle>("chart-grid", gridStyle)

export { GridPropsContext, useGridPropsContext }

export const Grid = withContext<"div", GridProps>(CartesianGrid)((props) => {
  const { getGridProps } = useGrid(props)

  return getGridProps()
})
