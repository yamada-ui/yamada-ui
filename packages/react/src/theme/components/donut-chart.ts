import type { ComponentMultiStyle } from "../../core"
import { mergeMultiStyle } from "../../core"
import { PieChart } from "./pie-chart"

export const DonutChart: ComponentMultiStyle<"DonutChart"> = mergeMultiStyle(
  PieChart,
  {
    baseStyle: {
      label: {},
    },
  },
)()
