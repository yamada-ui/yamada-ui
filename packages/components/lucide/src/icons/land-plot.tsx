import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { LandPlot as LucideLandPlotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LandPlotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LandPlotIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLandPlotIcon} {...props} />
))

/**
 * @deprecated Use `LandPlotIcon` instead.
 */
export const LandPlot = LandPlotIcon
