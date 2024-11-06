import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinMinusInside as LucideMapPinMinusInsideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinMinusInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinMinusInsideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinMinusInsideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinMinusInsideIcon` instead.
 */
export const MapPinMinusInside = MapPinMinusInsideIcon
