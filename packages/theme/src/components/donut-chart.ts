import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { PieChart } from "./pie-chart"

export const DonutChart: ComponentMultiStyle<"DonutChart"> =
  mergeMultiStyle(PieChart)()
