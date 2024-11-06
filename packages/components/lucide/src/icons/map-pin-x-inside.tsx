import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinXInside as LucideMapPinXInsideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinXInsideIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinXInsideIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinXInsideIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinXInsideIcon` instead.
 */
export const MapPinXInside = MapPinXInsideIcon
