import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Radar as LucideRadarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RadarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RadarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRadarIcon} {...props} />
))

/**
 * @deprecated Use `RadarIcon` instead.
 */
export const Radar = RadarIcon
