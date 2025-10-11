import type { YAxisProps as RechartsYAxisProps } from "recharts"
import type { YAxisStyle } from "./y-axis.style"
import { YAxis as RechartsYAxis } from "recharts"
import { createComponent } from "../../core"
import { yAxisStyle } from "./y-axis.style"

export interface YAxisProps extends RechartsYAxisProps {}

const { withContext } = createComponent<YAxisProps, YAxisStyle>(
  "chart-y-axis",
  yAxisStyle,
)

export const YAxis = withContext<"div", YAxisProps>(RechartsYAxis)()
