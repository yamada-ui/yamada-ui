import { forwardRef } from "@yamada-ui/core"
import { Radar as RadarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type RadarProps = LucideIconProps

/**
 * `Radar` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Radar = forwardRef<RadarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={RadarIcon} {...props} />
))
