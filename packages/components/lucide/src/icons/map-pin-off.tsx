import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinOff as LucideMapPinOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMapPinOffIcon} {...props} />,
)

/**
 * @deprecated Use `MapPinOffIcon` instead.
 */
export const MapPinOff = MapPinOffIcon
