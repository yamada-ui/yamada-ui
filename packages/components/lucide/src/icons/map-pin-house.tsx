import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinHouse as LucideMapPinHouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinHouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinHouseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinHouseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinHouseIcon` instead.
 */
export const MapPinHouse = MapPinHouseIcon
