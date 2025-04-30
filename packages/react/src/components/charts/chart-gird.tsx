import type { HTMLStyledProps } from "../../core"
import type { Merge } from "../../utils"
import type { ChartGridStyle } from "./chart-grid.style"
import type { UseChartGridOptions } from "./use-chart-grid"
import { CartesianGrid } from "recharts"
import { createComponent } from "../../core"
import { chartGridStyle } from "./chart-grid.style"
import { useChartGrid } from "./use-chart-grid"

export interface ChartGridProps
  extends Merge<HTMLStyledProps, UseChartGridOptions> {}

export const { withContext } = createComponent<ChartGridProps, ChartGridStyle>(
  "chart-grid",
  chartGridStyle,
)

// TODO: HTMLStyledPropsの他のプロパティを潰しているのでどうにかする
export const ChartGrid = withContext<"div", ChartGridProps>(
  ({ className, css, gridAxis, strokeDasharray, gridProps }) => {
    const { getGridProps } = useChartGrid({
      css,
      gridAxis,
      strokeDasharray,
      gridProps,
    })
    return <CartesianGrid {...getGridProps({ className })} />
  },
  { name: "CartesianGrid", displayName: "CartesianGrid" },
)()
