import type { XAxisProps as RechartsXAxisProps } from "recharts"
import type { XAxisStyle } from "./x-axis.style"
import { XAxis as RechartsXAxis } from "recharts"
import { createComponent } from "../../core"
import { xAxisStyle } from "./x-axis.style"

interface XAxisProps extends RechartsXAxisProps {}

const { withContext } = createComponent<XAxisProps, XAxisStyle>(
  "chart-x-axis",
  xAxisStyle,
)

export const XAxis = withContext<"div", XAxisProps>(RechartsXAxis)()
