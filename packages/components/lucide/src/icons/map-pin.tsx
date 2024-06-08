import { forwardRef } from "@yamada-ui/core"
import { MapPin as MapPinIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinProps = LucideIconProps

/**
 * `MapPin` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPin = forwardRef<MapPinProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinIcon} {...props} />
))
