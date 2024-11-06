import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinCheckInside as LucideMapPinCheckInsideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinCheckInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinCheckInsideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinCheckInsideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinCheckInsideIcon` instead.
 */
export const MapPinCheckInside = MapPinCheckInsideIcon
