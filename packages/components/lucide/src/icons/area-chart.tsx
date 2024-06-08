import { forwardRef } from "@yamada-ui/core"
import { AreaChart as AreaChartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AreaChartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AreaChart = forwardRef<AreaChartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AreaChartIcon} {...props} />
))
