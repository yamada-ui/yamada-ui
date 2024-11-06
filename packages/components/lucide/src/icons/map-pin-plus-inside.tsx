import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinPlusInside as LucideMapPinPlusInsideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinPlusInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinPlusInsideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinPlusInsideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinPlusInsideIcon` instead.
 */
export const MapPinPlusInside = MapPinPlusInsideIcon
