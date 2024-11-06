import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinCheck as LucideMapPinCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinCheckIcon` instead.
 */
export const MapPinCheck = MapPinCheckIcon
