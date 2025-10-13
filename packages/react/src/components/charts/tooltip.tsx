import type { TooltipProps as RechartsTooltipProps } from "recharts"
import type { ThemeProps } from "../../core"
import type { TooltipStyle } from "./tooltip.style"
import { Tooltip as RechartsTooltip } from "recharts"
import { createComponent } from "../../core"
import { tooltipStyle } from "./tooltip.style"

export interface TooltipProps
  extends RechartsTooltipProps<any, any>,
    ThemeProps<TooltipStyle> {}

const { withContext } = createComponent<TooltipProps, TooltipStyle>(
  "chart-tooltip",
  tooltipStyle,
)

export const Tooltip = withContext<"div", TooltipProps>(RechartsTooltip)()
