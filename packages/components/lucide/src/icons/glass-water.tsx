import { forwardRef } from "@yamada-ui/core"
import { GlassWater as GlassWaterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GlassWaterProps = LucideIconProps

/**
 * `GlassWater` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GlassWater = forwardRef<GlassWaterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GlassWaterIcon} {...props} />
))
