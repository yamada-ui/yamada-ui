import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { PieChart } from "./pie-chart"

export const DonutChart: ComponentMultiStyle = mergeMultiStyle(PieChart)()
