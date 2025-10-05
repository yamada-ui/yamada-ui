import type { CartesianGridProps } from "recharts"
import type { GridStyle } from "../grid"
import { CartesianGrid } from "recharts"
import { createComponent } from "../../core"
import { gridStyle } from "../grid"

interface GridProps extends CartesianGridProps {}

const {
  PropsContext: GridPropsContext,
  usePropsContext: useGridPropsContext,
  withContext,
} = createComponent<GridProps, GridStyle>("chart-grid", gridStyle)

export { GridPropsContext, useGridPropsContext }

export const Grid = withContext<"div", GridProps>(CartesianGrid)()
