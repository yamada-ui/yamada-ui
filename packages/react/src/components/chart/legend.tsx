import type { LegendProps as RechartsLegendProps } from "recharts"
import type { LegendStyle } from "./legend.style"
import { Legend as RechartsLegend } from "recharts"
import { createComponent } from "../../core"
import { legendStyle } from "./legend.style"

export interface LegendProps extends RechartsLegendProps {}

const {
  PropsContext: LegendPropsContext,
  usePropsContext: useLegendPropsContext,
  withContext,
} = createComponent<LegendProps, LegendStyle>("chart-legend", legendStyle)

export { LegendPropsContext, useLegendPropsContext }

export const Legend = withContext<"div", LegendProps>((props) => (
  <RechartsLegend {...props} />
))()
