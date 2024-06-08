import { forwardRef } from "@yamada-ui/core"
import { LandPlot as LandPlotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LandPlotProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LandPlot = forwardRef<LandPlotProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LandPlotIcon} {...props} />
))
