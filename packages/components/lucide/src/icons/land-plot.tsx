import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LandPlot as LandPlotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LandPlot` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LandPlot = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LandPlotIcon} {...props} />
))
