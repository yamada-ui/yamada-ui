import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinPlus as LucideMapPinPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMapPinPlusIcon} {...props} />,
)

/**
 * @deprecated Use `MapPinPlusIcon` instead.
 */
export const MapPinPlus = MapPinPlusIcon
