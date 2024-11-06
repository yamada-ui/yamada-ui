import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinMinus as LucideMapPinMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMapPinMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MapPinMinusIcon` instead.
 */
export const MapPinMinus = MapPinMinusIcon
