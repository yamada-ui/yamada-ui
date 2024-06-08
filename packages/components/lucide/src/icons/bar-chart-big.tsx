import { forwardRef } from "@yamada-ui/core"
import { BarChartBig as BarChartBigIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BarChartBigProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BarChartBig = forwardRef<BarChartBigProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BarChartBigIcon} {...props} />
))
